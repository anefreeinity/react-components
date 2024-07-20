import { useState } from "react";
import Input from "./input";
import { InputProperty, InputType } from "./input-property";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function InputHandler() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const emailProperty = new InputProperty();
  const passwordProperty = new InputProperty();

  emailProperty.InputType = InputType.Email;
  emailProperty.Icon = faEnvelope;
  passwordProperty.InputType = InputType.Password;

  return (
    <div className="w-full">
      <div className="pb-12">
        <Input
          id="email-input"
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
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
          onChange={(e) => setPasswordValue(e.target.value)}
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
}
