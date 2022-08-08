import { useState } from "react";

const useValidate = (validate) => {
  const [inputVal, setInputVal] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(inputVal);
  const inputHasError = !isValid && isTouched;

  const onChange = (e) => setInputVal(e.target.value);

  const onBlur = () => setIsTouched(true);

  const reset = () => {
    setInputVal("");
    setIsTouched(false);
  };

  return {
    value: inputVal,
    isValid,
    inputHasError,
    onChange,
    onBlur,
    reset,
  };
};

export default useValidate;
