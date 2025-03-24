import React, { useEffect, useRef, useState } from 'react'
import { useDialong } from './useDialong';
import { useFetchDataPromise } from './useFetchDataPromise';
import { useNavigate } from 'react-router-dom';
import { Form, get, useForm } from 'react-hook-form';


export const useReservationForm = () => {

  const {
    handleSubmit: handleSubmitHook,
    register,
    control,
    formState: { errors },
    watch
  } = useForm({ mode: "onBlur" });

  const [isVerified, setIsVerified] = useState(false);
  const captcha = useRef(null);
  const { getFechData } = useFetchDataPromise();
  const [dataBranch, setDataBranch] = useState({ loading: false, code: '', message: '', data: {} })
  const citySelected = watch('cities')

  const {
    isOpen,
    dialongContent,
    handleOpenDialog,
    handleCloseDialog,
    setDialongContent,
  } = useDialong()

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    console.log("DATA ", data)

    const {
      agency,
      cities,
      date,
      idNumber,
      services,
      time,
    } = data
    
    console.log("sadas", data)
    if (!isVerified) {
      handleOpenDialog()
      setDialongContent({ title: 'reCAPTCHA', message: 'Por favor, verifique que no sea un robot' })
      return
    }

    const additionalData = {

      "identificationNumber": idNumber,
      "idCiudad": cities,
      "idFecha": date,
      "idHora": time,
      "idAgencia": agency,
      "idServicio": services,
      "identificacion": idNumber,
    };
    console.log("aditional", additionalData)
    try {
      const response = await getFechData({
        endPoint: "registerAppointment",
        method: "POST",
        additionalData,
      });

      if (response.code !== "COD_OK") {
        console.error("Error al realizar la reserva:", response.message);
        handleOpenDialog()
        setDialongContent({ title: "Error", message: "Al relaizar la reserva" })
        return
      }

      navigate("/reporte-cita", {
        state: {

        }
      })


      if (captcha.current) {
        captcha.current.reset();
      }
    } catch (error) {
      console.error("Error al enviar la reserva al servidor:", error);
    }
  };

  const onChange = () => {
    if (captcha.current.getValue()) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }

  };

  const handleGetBranch = async () => {
    setDataBranch({ loading: true, code: '', message: '', data: {} })
    const getBranch = await getFechData({
      endPoint: "getSucursales",
      method: "POST",
      additionalData: {
        idCiudad: citySelected,
      },
    });
    const { code, data, message } = getBranch
    setDataBranch({ loading: false, code, message, data })
    if (getBranch.code !== "COD_OK") return


  }



  console.log("city", citySelected)
  useEffect(() => {
    if (!citySelected) return
    handleGetBranch()

  }, [citySelected]);


  return {
    handleSubmit,
    isVerified,
    isOpen,
    setIsVerified,
    dialongContent,
    captcha,
    onChange,
    handleCloseDialog,
    handleSubmitHook,
    register,
    control,
    errors,
    dataBranch

  }
}




