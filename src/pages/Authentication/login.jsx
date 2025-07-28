import { EmailIcon, LockIcon } from "../../assets/icons";
import Forms from "./forms";

export default function Login() {
  const textFiledAttributes = [
    {
      icon: <EmailIcon />,
      label: "Email",
      name: "email",
      type: "email",
      variant: "filled",
      errorMessage: "Email is required.",
      isPassword: false,
    },
    {
      icon: <LockIcon />,
      label: "Password",
      name: "password",
      type: "password",
      variant: "filled",
      errorMessage: "Password is required.",
      isPassword: true,
    },
  ];

  const loginAttributes = [
    {
      head: "Login",
      footerText: "Doesn't have an account?",
      footerLink: "Sign Up",
      inputAttributes: textFiledAttributes,
    },
  ];

  return (
    <div className="flex flex-row justify-center bg-[#F3F1F2] ">
      <img src="images/back_img.png" className="" />
      <Forms formAttributes={loginAttributes} />
    </div>
  );
}
