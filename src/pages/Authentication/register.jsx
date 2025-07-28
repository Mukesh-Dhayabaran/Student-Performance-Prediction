import { PersonIcon, EmailIcon, LockIcon } from "../../assets/icons";
import Forms from "./forms";

export default function Register() {
  const textFiledAttributes = [
    {
      icon: <PersonIcon />,
      label: "Username",
      name: "name",
      type: "name",
      variant: "filled",
      errorMessage: "Username is required.",
      isPassword: false,
    },
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

  const registerAttributes = [
    {
      head: "Sign Up",
      footerText: "Already have an account?",
      footerLink: "Login",
      inputAttributes: textFiledAttributes,
    },
  ];

  return (
    <div className="flex flex-row justify-center bg-[#F3F1F2] h-screen">
      <img src="images/back_img.png" className="" />
      <Forms formAttributes={registerAttributes} />
    </div>
  );
}
