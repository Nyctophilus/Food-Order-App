import useValidate from "../../../hooks/useValidate";
import classes from "./Checkout.module.css";

const IsNotEmpty = (val) => val.trim() !== "";

const isFiveDigits = (val) =>
  val.trim().length === 5 && !isNaN(val);

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    inputHasError: nameHasError,
    onChange: onNameChange,
    onBlur: onNameBlur,
    reset: resetName,
  } = useValidate(IsNotEmpty);

  const {
    value: enteredStreet,
    isValid: streetIsValid,
    inputHasError: streetHasError,
    onChange: onStreetChange,
    onBlur: onStreetBlur,
    reset: resetStreet,
  } = useValidate(IsNotEmpty);

  const {
    value: enteredPostalCode,
    isValid: postalCodeIsValid,
    inputHasError: postalCodeHasError,
    onChange: onPostalCodeChange,
    onBlur: onPostalCodeBlur,
    reset: resetPostalCode,
  } = useValidate(isFiveDigits);

  const {
    value: enteredCity,
    isValid: cityIsValid,
    inputHasError: cityHasError,
    onChange: onCityChange,
    onBlur: onCityBlur,
    reset: resetCity,
  } = useValidate(IsNotEmpty);

  let formIsValid = false;
  if (
    nameIsValid &&
    postalCodeIsValid &&
    streetIsValid &&
    cityIsValid
  )
    formIsValid = true;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    props.submitDataToServer({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });

    resetName();
    resetPostalCode();
    resetStreet();
    resetCity();
  };
  return (
    <form
      className={classes.form}
      onSubmit={confirmHandler}
    >
      <div
        className={
          nameHasError
            ? `${classes.control} ${classes.invalid}`
            : classes.control
        }
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={onNameChange}
          onBlur={onNameBlur}
        />
        {nameHasError && (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              marginTop: 0,
            }}
          >
            please enter a name!
          </p>
        )}
      </div>
      <div
        className={
          streetHasError
            ? `${classes.control} ${classes.invalid}`
            : classes.control
        }
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={onStreetChange}
          onBlur={onStreetBlur}
        />
        {streetHasError && (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              marginTop: 0,
            }}
          >
            please enter a valid street!
          </p>
        )}
      </div>
      <div
        className={
          postalCodeHasError
            ? `${classes.control} ${classes.invalid}`
            : classes.control
        }
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostalCode}
          onChange={onPostalCodeChange}
          onBlur={onPostalCodeBlur}
        />
        {postalCodeHasError && (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              marginTop: 0,
            }}
          >
            please enter a valid PostalCode!(5 charctar
            long)
          </p>
        )}
      </div>
      <div
        className={
          cityHasError
            ? `${classes.control} ${classes.invalid}`
            : classes.control
        }
      >
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={onCityChange}
          onBlur={onCityBlur}
        />
        {cityHasError && (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              marginTop: 0,
            }}
          >
            please enter a City!
          </p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button
          className={classes.submit}
          disabled={!formIsValid}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
