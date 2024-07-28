import React, { useState, useEffect } from "react";
import { ActionFunction, Form, useActionData } from "react-router-dom";
import Input from "../input-component/input/input";
import Button from "../button-component/button/button";

interface IActionData {
  error: string;
}

const FormHandler: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [emailInValid, setEmailInValid] = useState<boolean>(false);
  const [passwordInValid, setPasswordInValid] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const actionData = (useActionData() as IActionData) || undefined;

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  useEffect(() => {
    setIsFormValid(
      validateEmail(emailValue) && validatePassword(passwordValue)
    );
  }, [emailValue, passwordValue]);

  useEffect(() => {
    if (actionData && actionData.error) {
      setApiError(actionData.error);
    }
  }, [actionData]);

  return (
    <Form method="post" className="w-full">
      <div className="pb-12">
        <Input
          id="email-input"
          name="email"
          type="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          validationPattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          validationMessage="Please enter a valid email address."
          label="Email Address"
          isRequired={true}
          hasError={emailInValid}
          setError={setEmailInValid}
        />
      </div>

      <div>
        <Input
          id="password-input"
          name="password"
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          validationPattern={
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          }
          validationMessage="Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character."
          label="Password"
          isRequired={true}
          hasError={passwordInValid}
          setError={setPasswordInValid}
        />
      </div>
      {apiError && <div className="text-red-500 mt-4">{apiError}</div>}
      <div className="mt-16">
        <Button type="submit" disabled={!isFormValid}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData.entries());
  const error: string = "Invalid Credentials";

  // Simulate an API call
  try {
    // Assuming the API request is made here
    // const response = await apiCall(updates);
    // if (response.error) {
    //   throw new Error(response.error);
    // }

    // Simulate a successful response
    console.log(updates);
    return { error: error };
  } catch (error: any) {
    return { error: error.message || "Something went wrong!" };
  }
};

export default FormHandler;
