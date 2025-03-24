import React from "react";
import PropTypes from "prop-types";
import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  
} from "@mui/material";
import { Controller } from "react-hook-form";

const SelectWrapper = ({
  nameselec,
  label,
  name,
  data=[],
  control,
  errors,
}) => {
  return (
    <Controller
      rules={{
        required: true,
      }}
      name={name}
      control={control}
      render={({ field }) => (
      //  <FormControl sx={{ m: 1, minWidth: 120 }} error={errors[name]}>
        <>
          <InputLabel>{label}</InputLabel>
          <Select
            label={nameselec}
            fullWidth
            {...field}
            value={field.value || ""}
          >
            {data.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          
          {errors[name] && errors[name].type === "required" && (
            <FormHelperText sx={{ color: "red" }}>Este Campo es requerido</FormHelperText>
          )}
        </>
        // </FormControl>
      )}
    />
  );
};

SelectWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  nameselec: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default SelectWrapper;
