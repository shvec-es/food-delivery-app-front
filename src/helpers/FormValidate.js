import React from "react";

export const validate = ({ name, value, setErrors, errors }) => {
  switch (name) {
    case "name":
      setErrors({
        ...errors,
        name: value.length > 3 ? "" : "This field must be more then 3 symbols",
      });
      break;
    case "email":
      setErrors({
        ...errors,
        email: /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/.test(value)
          ? ""
          : "Email is not valid.",
      });
      break;
    case "phone":
      setErrors({
        ...errors,
        phone: /^\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/.test(value)
          ? ""
          : "Enter phone number in correct format: (000) 000-00-00",
      });
      break;
    case "adress":
      setErrors({
        ...errors,
        adress:
          value.length > 3 ? "" : "This field must be more then 3 symbols",
      });
      break;
    default:
      return "";
  }
};
