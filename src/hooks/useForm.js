import { useState } from 'react'

export const useForm = (initialValues = {}) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormValues({ ...formValues, [name]: value });
    console.log("Estado actual del formulario: ", formValues);
  }
  

  const handleResetFormt = () => setFormValues({})

  return {
    formValues,
    handleChange,
    handleResetFormt,
  }
}
