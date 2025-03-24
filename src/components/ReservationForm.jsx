import React from "react";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Backdrop,
} from "@mui/material";
import { useFetchData } from "../hooks/useFetchData";
import ReCAPTCHA from "react-google-recaptcha";
import SelectWrapper from "./Select";
import moment from "moment/moment";
import { useReservationForm } from "../hooks/useReservationForm";
import { helpSelect } from "../helpers/helpSelect";

function ReservationForm() {
  const {
    fetchData: { loading, code, message, data },
  } = useFetchData({ endPoint: "getParameters" });
console.log("======dataasas=======>", data);
  const {
    handleSubmit: submit,
    isOpen,
    dialongContent,
    captcha,
    onChange,
    handleCloseDialog,
    handleSubmitHook,
    register,
    control,
    errors,
    dataBranch,
  } = useReservationForm();

  const { title, message: messageDialog } = dialongContent;
  console.log(dataBranch);

  const formatData = (data) => {
    if (!data) return [];
    return data.map((date) => ({
      id: date.id,
      name: moment(date.name).format("YY/MM/DD"),
    }));
  };

  const hardcodedDates = [
    { id: 1, name: "2025-03-25" },
    { id: 2, name: "2025-03-26" },
    { id: 3, name: "2025-03-27" },
  ];
  
  const hardcodedTimes = [
    { id: 1, name: "08:00 AM" },
    { id: 2, name: "09:00 AM" },
    { id: 3, name: "10:00 AM" },
    { id: 4, name: "11:00 AM" },
    { id: 5, name: "02:00 PM" },
    { id: 6, name: "03:00 PM" },
  ];
  const { renderOption } = helpSelect();
  const { renderAngency } = helpSelect();
  return (
    <>
      {!loading ? (
        code === "COD_OK" ? (
          <Box
            id="form-soli"
            component="form"
            onSubmit={handleSubmitHook((data) => submit(data))}
            noValidate
            sx={{ mt: 1 }}
          >
            <Backdrop open={dataBranch.loading} />
            <Typography
              fontSize={40}
              fontWeight={"bold"}
              color="primary"
              textAlign="center"
              marginBottom={"10px"}
            >
              Reserva tu turno en nuestras agencias.
            </Typography>
            <Typography variant="h6" fontWeight="bolder" marginBottom={"10px"}>
              ¿Cómo te podemos ayudar?
            </Typography>

            <SelectWrapper
              control={control}
              nameselec="Seleccioné el servicio"
              label="Seleccioné el servicio "
              name="services"
              data={data.services}
              errors={errors}
            />

            <Typography variant="h6" fontWeight="bolder" marginBottom={"10px"}>
              ¿En qué agencia deseas agendar tu turno?
            </Typography>
            <SelectWrapper
              control={control}
              nameselec="Ciudad"
              label="Ciudad"
              name="cities"
              data={renderOption["cityRender"](data.cities)}
              errors={errors}
            />

            {dataBranch.code === "COD_OK" && (
              <SelectWrapper
                control={control}
                nameselec="Sucursal"
                label="Sucursal"
                name="agency"
                data={renderAngency["agencyRender"](data.agency)}
                errors={errors}
              />
            )}
            <Typography variant="h6" fontWeight="bolder" marginBottom={"10px"}>
              Elige el día y la hora de tu reserva
            </Typography>
            <SelectWrapper
              control={control}
              nameselec="Fecha de reserva"
              label="Fecha de reserva"
              name="date"
              data={hardcodedDates}
              errors={errors}
            />
            <SelectWrapper
              control={control}
              nameselec="Hora"
              label="Hora"
              name="time"
              data={hardcodedTimes}
              errors={errors}
            />
            <Typography variant="h6" fontWeight="bolder" marginBottom={"10px"}>
              Ingresa tu número de identificación para confirmar tu reserva
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="idNumber"
              label="Número de identificación"
              name="idNumber"
              autoComplete="off"
              onInput={(event) => {
                const { target } = event;
                const valueInput = target.value;

                const valueRegex = valueInput.replace(/\D/g, "");
                target.value = valueRegex;
              }}
              {...register("idNumber", { required: true })}
              helperText={errors?.idNumber && "Este campo es requerido"}
              error={Boolean(errors?.idNumber)}
              inputProps={{ maxLength: 13, minLength: 10 }}
              type="tel"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <ReCAPTCHA
                ref={captcha}
                sitekey="6Lena7cpAAAAAIsS_5Cx6eWCBn8zEKGsAi5gT22g"
                onChange={onChange}
              />
            </Box>
            <Box margin="auto" width="50%">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                form="form-soli"
              >
                Solicitar
              </Button>
            </Box>

            <Dialog open={isOpen} onClose={handleCloseDialog}>
              <DialogTitle>{title}</DialogTitle>
              <DialogContent>{messageDialog}</DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        ) : (
          <Alert severity="error">{message}</Alert>
        )
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
export default ReservationForm;
