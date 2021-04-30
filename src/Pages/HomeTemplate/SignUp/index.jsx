import React from "react";
import FormSignUp from "Components/FormSignUp";

function SignUp(props) {
  console.log(props)
  return <FormSignUp history={props.history} />;
}

export default SignUp;
