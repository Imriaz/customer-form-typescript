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
    border: "1px solid black",
    // display: "grid",
    // gridTemplateColumns: "auto auto",
    // gap: "50px",
    // backgroundColor: "#4BFC7E",
    // padding: "20px 100px",
    margin: "0px 10px",
  },
  formGroup: {
    gap: "20px",
    display: "grid",
    gridTemplateColumns: "auto auto",

    padding: "10px",
    // borderRadius: "50px",
    width: "400px",
  },
  inputField: {
    // gap: "5px",
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    // padding: "10px",
    border: "1px solid black",
    borderRadius: "50px",
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

const BlackInformationAdd: React.FC<DemoFormProps> = (props) => {
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
          <label>black information </label>
          <div className={classes.inputField}>
            <TextField
              name="blackInformation"
              // value={props.data.blackInformation}
              onChange={handleChange}
              helperText={props.errors.blackInformation}
              error={Boolean(props.errors.blackInformation)}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>black information note </label>
          <div className={classes.inputField}>
            <TextField
              name="blackInformationNote"
              // value={props.data.blackInformationNote}
              onChange={handleChange}
              helperText={props.errors.blackInformationNote}
              error={Boolean(props.errors.blackInformationNote)}
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default BlackInformationAdd;
