import React from "react";
import { makeStyles, TextareaAutosize, TextField } from "@material-ui/core";
import { formDataType, ErrorType } from "../Homepage";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
};

const useStyles = makeStyles({
  form: {
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr",
    // gap: "50px",
    backgroundColor: "#4BFC7E",
    // padding: "20px 100px",
    // width: "50%",
    margin: "0px 10px",
  },
  formGroup: {
    gap: "20px",
    display: "grid",
    gridTemplateColumns: "0.5fr 2fr",
    padding: "10px",
    borderRadius: "50px",
    // width: "200px",
  },
  inputField: {
    // gap: "5px",
    // display: "grid",
    // gridTemplateColumns: "0.5fr 2fr",
    // padding: "10px",
    backgroundColor: "white",
    borderRadius: "50px",
    width: "240px",
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

const EmailInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
      <form className={classes.form} id="EmailInfoAdd">
        <div className={classes.formGroup}>
          <label>Email 1</label>
          <div className={classes.inputField}>
            <TextField
              name="email1"
              value={props.data.email1}
              required={true}
              helperText={props.errors.email1}
              error={Boolean(props.errors.email1)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.value.match(emailRegex)) {
                  handleChange(event);
                }
              }}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Email 2</label>
          <div className={classes.inputField}>
            <TextField
              name="email2"
              // value={props.data.email2}
              helperText={props.errors.email2}
              error={Boolean(props.errors.email2)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.value.match(emailRegex)) {
                  handleChange(event);
                }
              }}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Email 3</label>
          <div className={classes.inputField}>
            <TextField
              name="email3"
              // value={props.data.email3}
              helperText={props.errors.email3}
              error={Boolean(props.errors.email3)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.value.match(emailRegex)) {
                  handleChange(event);
                }
              }}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Remarks</label>
          <div className={classes.inputField}>
            {/* <TextareaAutosize aria-label="minimum height" minRows={3} /> */}
            <TextField
              name="remarks"
              // value={props.data.remarks}
              onChange={handleChange}
              helperText={props.errors.remarks}
              error={Boolean(props.errors.remarks)}
            />
          </div>
        </div>
        {/* </div> */}
      </form>
    </React.Fragment>
  );
};

export default EmailInfoAdd;
