import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
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
    // gridTemplateColumns: "repeat(8, 1fr)",
    // gridTemplateColumns: "1fr 1fr",
    // gap: "50px",
    backgroundColor: "skyblue",
    margin: "0px 10px",
  },
  formGroup: {
    gap: "20px",
    display: "grid",
    gridTemplateColumns: "0.5fr 2fr",
    padding: "10px",
    borderRadius: "50px",
    width: "200px",
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
  form__back__button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginLeft: "580px",
  },
  form__submit__button: {
    padding: "5px",
    color: "black",
    backgroundColor: "#27AE60",
    borderRadius: "5px",
    width: "100px",
    margin: "15px",
    marginRight: "580px",
  },
  errorMessage: {
    Color: "red",
    padding: "10px",
  },
  phoneNo: {
    gridColumn: "1/5",
  },
  yourName: {
    gridColumn: "5/8",
  },
});

const BasicInfoAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();
  const phoneNoRegex = "^[0-9-]+$|^$";

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
      <form>
        {/* <Link to={`/`}>
          <button className={classes.form__back__button}>Back</button>
        </Link> */}
        <div className={classes.form} id="BasicInfoAdd">
          <div className={classes.formGroup}>
            <label>Phone number</label>
            <div className={classes.inputField}>
              <TextField
                name="phoneNo"
                value={props.data.phoneNo}
                required={true}
                className={classes.phoneNo}
                InputProps={{ disableUnderline: true }}
                helperText={props.errors.phoneNo}
                error={Boolean(props.errors.phoneNo)}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.value.match(phoneNoRegex)) {
                    handleChange(event);
                  }
                }}
              />
            </div>
          </div>

          <div className={classes.formGroup}>
            <label>Your name</label>
            <div className={classes.inputField}>
              <TextField
                id="firstName"
                name="firstName"
                className={classes.yourName}
                InputProps={{ disableUnderline: true }}
                value={props.data.firstName}
                required={true}
                onChange={handleChange}
                helperText={props.errors.firstName}
                error={Boolean(props.errors.firstName)}
              />
            </div>
          </div>

          <div className={classes.formGroup}>
            <label>Title</label>
            <div className={classes.inputField}>
              <TextField
                name="lastName"
                value={props.data.lastName}
                InputProps={{ disableUnderline: true }}
                required={true}
                onChange={handleChange}
                helperText={props.errors.lastName}
                error={Boolean(props.errors.lastName)}
              />
            </div>
          </div>

          <div className={classes.formGroup}>
            <label>Employee ID</label>
            <div className={classes.inputField}>
              <TextField
                id="employeeID"
                name="employeeID"
                value={props.data.employeeID}
                InputProps={{ disableUnderline: true }}
                onChange={handleChange}
                helperText={props.errors.employeeID}
                error={Boolean(props.errors.employeeID)}
              />
            </div>
          </div>

          <div className={classes.formGroup}>
            <label>Company</label>
            <div className={classes.inputField}>
              <TextField
                name="company"
                value={props.data.company}
                InputProps={{ disableUnderline: true }}
                onChange={handleChange}
                helperText={props.errors.company}
                error={Boolean(props.errors.company)}
              />
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default BasicInfoAdd;
