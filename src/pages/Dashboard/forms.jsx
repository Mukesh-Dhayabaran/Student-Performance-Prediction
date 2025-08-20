import { Button, Checkbox, Input, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Forms({ predict, setPredict }) {
  const initialStateErrors = {
    grade: { required: false },
    examPercent1: { required: false },
    examPercent2: { required: false },
    studyHours: { required: false },
    failures: { required: false },
    absentees: { required: false },
  };
  
  const [errors, setErrors] = useState({
    grade: { required: false },
    examPercent1: { required: false },
    examPercent2: { required: false },
    studyHours: { required: false },
    failures: { required: false },
    absentees: { required: false },
  });

  const [inputs, setInputs] = useState({
    grade: "",
    examPercent1: "",
    examPercent2: "",
    studyHours: "",
    failures: "",
    absentees: "",
  });

  var hasError = false;

  const handleSubmit = () => {
    // e.preventDefault();
    let errors = initialStateErrors;
    if (inputs.grade === "") {
      errors.grade.required = true;
      hasError = true;
    }
    setErrors({ ...errors }); 
    if (inputs.examPercent1 === "") {
      errors.examPercent1.required = true;
      hasError = true;
    }
    setErrors({ ...errors }); 
    if (inputs.examPercent2 === "") {
      errors.examPercent2.required = true;
      hasError = true;
    }
    setErrors({ ...errors }); 
    if (inputs.studyHours === "") {
      errors.studyHours.required = true;
      hasError = true;
    }
    setErrors({ ...errors }); 
    if (inputs.failures === "") {
      errors.failures.required = true;
      hasError = true;
    }
    setErrors({ ...errors }); 
    if (inputs.absentees === "") {
      errors.absentees.required = true;
      hasError = true;
    }
    setErrors({ ...errors }); 
  };

  const textFieldAttributes = [
    {
      label: "Grade",
      name: "grade",
      type: "number",
      variant: "outlined",
      // errorMessage: "Enter grade.",
    },
    {
      label: "Previous Exam Percent 1",
      name: "examPercent1",
      type: "number",
      variant: "outlined",
      // errorMessage: "Enter previous exam percent 1.",
    },
    {
      label: "Previous Exam Percent 2",
      name: "examPercent2",
      type: "number",
      variant: "outlined",
      // errorMessage: "Enter previous exam percent 2.",
    },
    {
      label: "Weekly Study Hours",
      name: "studyHours",
      type: "number",
      variant: "outlined",
      // errorMessage: "Enter Study Hours.",
    },
    {
      label: "Failures",
      name: "failures",
      type: "number",
      variant: "outlined",
    },
    {
      label: "Absentees",
      name: "absentees",
      type: "number",
      variant: "outlined",
    },
  ];
  
  const checkBoxAttributes = [
    "Sports",
    "Internet Facility",
    "Extra Class",
    "Family Support",
  ];

  const textFieldStyles = {
    width: "100%",
    maxWidth: "450px",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-violet-900)",
      borderWidth: "2px",
    },
    "& label.Mui-focused": {
      color: "var(--color-violet-900)",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "1.2rem", // Input text
    },
    "& .MuiInputLabel-root": {
      fontSize: "1.2rem",
    },
    "& .MuiOutlinedInput-root": {
      minHeight: "60px",
      fontSize: "1.3rem",
      padding: "8px",
    },
  };

  return (
    <form className=" mx-auto p-8">
      <div className="flex flex-col gap-14 p-14 bg-white shadow-md rounded-lg">
        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
          {textFieldAttributes.map((field, index) => (
            <TextField
              key={index}
              required
              error={errors[field.name].required}
              label={field.label}
              type="number"
              name={field.name}
              variant="outlined"
              helperText={
                errors[field.name].required ? "This field is required." : null
              }
              onChange={(e) =>
                setInputs({ ...inputs, [field.name]: e.target.value })
              }
              sx={textFieldStyles}
            />
          ))}
          {/* {console.log("inputs", inputs)} */}
        </div>

        <div className="flex gap-56 items-center justify-center">
          {checkBoxAttributes.map((attribute, index) => (
            <span key={index} className="text-[1.2rem]">
              {attribute}{" "}
              <Checkbox
                sx={{
                  // color: "var(--color-violet-900)",
                  "&.Mui-checked": {
                    color: "var(--color-violet-900)",
                  },
                }}
                checked={inputs[attribute] || false}
                onChange={(e) =>{
                  setInputs({ ...inputs, [attribute]: e.target.checked })
                }}
                />
            </span>
          ))}
        </div>

        <Button
          sx={{
            backgroundColor: "var(--color-violet-900)",
            fontSize: "20px",
            padding: "17px 185px",
            textAlign: "center",
            color: "#fff",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "var(--color-violet-500)",
            },
          }}
          onClick={() =>{
            handleSubmit()
            if (!hasError) {
             setPredict(!predict)}
            }}
        >
          Predict
        </Button>
      </div>
    </form>
  );
}
