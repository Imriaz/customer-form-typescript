import React from "react";
import { FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, TextField } from "@material-ui/core";
import { formDataType, ErrorType } from "../Homepage";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
};

const useStyles = makeStyles({
  form: {
    display: "grid",
    gridTemplateColumns: "0.5fr 0.5fr",
    // gridTemplateColumns: "auto auto auto",
    // gap: "50px",
    // backgroundColor: "#4BFC7E",
    // padding: "20px 100px",
    // width: "50%",
    margin: "0px 10px",
  },
  formGroup: {
    gap: "5px",
    display: "grid",
    gridTemplateColumns: "auto auto",

    padding: "5px",
    // borderRadius: "50px",
    width: "150px",
  },
  inputField: {
    // gap: "5px",
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    // padding: "10px",
    // backgroundColor: "white",
    // borderRadius: "50px",
    // width: "450px",
  },
  formHeading: {
    textAlign: "left",
    marginLeft: "150px",
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
});

const CustomerIdentityAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();

  // ============================== Methods =========================

  /** 
       This Method for get all change on the Input Field
      */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    props.setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    props.setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <label>Customer code: </label>
          <div className={classes.inputField}>
            <TextField
              name="customerCode"
              // value={props.data.customerCode}
              onChange={handleChange}
              helperText={props.errors.customerCode}
              error={Boolean(props.errors.customerCode)}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Online Customer ID: </label>
          <div className={classes.inputField}>
            <TextField
              name="onlineCustomerID"
              // value={props.data.onlineCustomerID}
              onChange={handleChange}
              helperText={props.errors.onlineCustomerID}
              error={Boolean(props.errors.onlineCustomerID)}
            />
          </div>
        </div>

        {/* <div className={classes.formGroup}>
          <div className={classes.inputField}>
            <RadioGroup
              name="customerType"
              // value={customerType}
              onChange={handleChange}
            >
              <FormControlLabel
                value="personal"
                control={<Radio />}
                label="personal"
              />
              <FormControlLabel
                value="Corporation"
                control={<Radio />}
                label="Corporation"
              />
            </RadioGroup> */}
            {/* <fieldset>
    <label> <input type="radio" name="personal" required value="personal"> personal </label>
    <label> <input type="radio" name="Corporation" required value="Corporation"> Corporation </label>
  </fieldset> */}
          {/* </div>
        </div> */}
      </form>
    </React.Fragment>
  );
};

export default CustomerIdentityAdd;
