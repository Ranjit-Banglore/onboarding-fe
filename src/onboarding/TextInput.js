import { TextField, Typography } from "@material-ui/core";
import { useField } from "formik";
import React from "react";

const TextInput = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div className={"input-wrapper"}>
      <TextField
        {...field}
        {...props}
        label={props.label && <label htmlFor={props.name}>{props.label}</label>}
        variant="outlined"
        fullWidth
        id={props.name}
      ></TextField>
      {meta.error && meta.touched && (
        <Typography color="secondary" variant="subtitle1">
          {meta.error}
        </Typography>
      )}
    </div>
  );
};

export default TextInput;
