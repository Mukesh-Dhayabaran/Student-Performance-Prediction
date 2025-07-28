import { useState } from "react";
import {
  TextField,
  Divider,
  CircularProgress,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginAPI, RegisterAPI } from "./services/api";
import { storeUserData } from "./services/storage";
import { isAuthenticated } from "./services/auth";
import { VisibilityIcon, VisibilityOffIcon } from "../../assets/icons";
import { GoogleSignIn } from "../../assets/google";

export default function Forms({ formAttributes }) {
  const navigate = useNavigate();

  const location = useLocation();

  const initialStateErrors = {
    name: { required: false },
    email: { required: false },
    password: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState({
    name: { required: false },
    email: { required: false },
    password: { required: false },
    custom_error: null,
  });

  const [load, setLoad] = useState(false);

  const handleSubmit = (e) => {
    console.log(location.pathname);
    e.preventDefault();
    let hasError = false;
    let errors = initialStateErrors;
    if (inputs.name === "" && location.pathname === "/register") {
      errors.name.required = true;
      hasError = true;
    }
    if (inputs.email === "") {
      errors.email.required = true;
      hasError = true;
    }
    if (inputs.password === "") {
      errors.password.required = true;
      hasError = true;
    }

    if (hasError === true) setLoad(false);

    if (!hasError) {
      // setLoad(false);
      if (location.pathname === "/register") {
        RegisterAPI(inputs)
          .then((res) => {
            storeUserData(res.data.idToken);
          })
          .catch((err) => {
            if (err.response.data.error.message === "EMAIL_EXISTS") {
              setErrors({ ...errors, custom_error: "User Already Exists" });
            }
            if (err.response.data.error.message.includes("WEAK_PASSWORD")) {
              setErrors({
                ...errors,
                custom_error: "Password should atleast be 6 characters!",
              });
            }
          })
          .finally(() => {
            setLoad(false);
          });
      }
      if (location.pathname === "/login") {
        LoginAPI(inputs)
          .then((res) => {
            storeUserData(res.data.idToken);
          })
          .catch((err) => {
            if (err.response.data.error.message.includes("INVALID")) {
              setErrors({
                ...errors,
                custom_error: "Invalid username or password!",
              });
              return;
            }
          })
          .finally(() => {
            setLoad(false);
          });
      }
    }
    // console.log(errors.custom_error);

    setErrors(errors);
  };

  // const handleGoogleSignIn = () => {
  //   signInWithPopup(auth, provider).then((result) => {
  //     storeUserData(result.user.accessToken);
  //     navigate("/dashboard");
  //   });
  // };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  if (isAuthenticated()) {
    navigate("/dashboard");
  }

  const textFieldStyles = {
    width: "100%",
    maxWidth: "450px",
    "& .MuiFilledInput-root.Mui-focused:after": {
      borderBottomColor: "var(--color-violet-900)",
      borderBottomWidth: "2px",
    },
    "& label.Mui-focused": {
      color: "var(--color-violet-900)",
    },
    "& .MuiFilledInput-input": {
      fontSize: "1.1rem", // Input text
    },
    "& .MuiInputLabel-root": {
      fontSize: "1.1rem", // Label text
    },
  };

  const [visibility, setVisibility] = useState(false);

  const passwordAttribute = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={() => setVisibility(!visibility)}>
          {visibility ? (
            <VisibilityOffIcon
              sx={{
                outline: "none",
                "&:focus": {
                  outline: "none",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            />
          ) : (
            <VisibilityIcon />
          )}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <>
      <div className=" w-full max-w-[750px]  flex flex-col gap-10 justify-center items-center h-screen">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-[4em] leading-[1.1] text-violet-900">
            {formAttributes[0].head}
          </h1>
          <Divider
            sx={{
              borderBottomWidth: "5px",
              borderColor: " var(--color-violet-900)",
              borderRadius: "5px",
            }}
            className="w-20"
          />
        </div>

        <form className="flex flex-col gap-8 items-center">
          {formAttributes[0].inputAttributes.map((field, index) => (
            <TextField
              key={index}
              error={errors[field.name].required}
              label={
                <span className="flex items-center gap-5 ">
                  {field.icon}
                  {field.label}
                </span>
              }
              name={field.name}
              type={
                field.isPassword
                  ? visibility
                    ? "text"
                    : "password"
                  : field.type
              }
              variant="filled"
              helperText={
                errors[field.name].required ? [field.errorMessage] : null
              }
              InputProps={field.isPassword ? passwordAttribute : {}}
              onChange={(e) => handleInput(e)}
              sx={textFieldStyles} //,color:'black'
            />
          ))}

          {errors.custom_error ? (
            <p className="text-lg text-red-500">{errors.custom_error}</p>
          ) : null}

          {!load ? (
            <input
              type="submit"
              name="submit"
              value={formAttributes[0].head}
              className="bg-violet-900 text-[20px]  py-5 px-6 lg:px-48 text-center  text-white cursor-pointer hover:bg-violet-500"
              onClick={(e) => {
                setLoad(true);
                handleSubmit(e);
              }}
            />
          ) : (
            <span
              className={`flex justify-center items-center w-full py-3.5 px-6 ${
                location.pathname === "/register" ? "lg:px-52" : "lg:px-49"
              }  bg-white/10 border border-white/30 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}
            >
              <CircularProgress sx={{ color: " var(--color-violet-900)" }} />
            </span>
          )}
        </form>

        <div className="flex flex-col gap-3 items-center">
          <p className="text-xl text-black">
            {formAttributes[0].footerText}
            <a
              href={
                formAttributes[0].footerLink === "Login"
                  ? "/login"
                  : "/register"
              }
              className="text-violet-900 inline cursor-pointer text-xl"
              // onClick={() => {
              //   navigate("/login");
              // }}
            >
              {" "}
              {formAttributes[0].footerLink}
            </a>
          </p>

          <p className="text-xl  text-black">Or</p>
            
            <GoogleSignIn/>

        </div>
      </div>
    </>
  );
}
