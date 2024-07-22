import { useState, ChangeEvent } from "react";
import Input from "./input/input";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { InputProperty, InputType } from "./input/input-property";

const InputHandler: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const emailProperty = new InputProperty();
  const passwordProperty = new InputProperty();

  emailProperty.InputType = InputType.Email;
  emailProperty.Icon = faEnvelope;
  passwordProperty.InputType = InputType.Password;

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="pb-12">
        <Input
          id="email-input"
          type="email"
          value={emailValue}
          onChange={handleEmailChange}
          validationPattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          validationMessage="Please enter a valid email address."
          label="Email Address"
          isRequired={true}
          property={emailProperty}
        />
      </div>

      <div>
        <Input
          id="password-input"
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          validationPattern={
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          }
          validationMessage="Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character."
          label="Password"
          isRequired={true}
          property={passwordProperty}
        />
      </div>
    </div>
  );
};

export default InputHandler;
