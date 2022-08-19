import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { formDataType } from "../Homepage";
import { ErrorType } from "../Homepage";

type DemoFormProps = {
  data: formDataType;
  setData: React.Dispatch<React.SetStateAction<formDataType>>;
  errors: ErrorType;
  setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
};

const useStyles = makeStyles({
  form: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    // gap: "50px",
    // backgroundColor: "#F5EEF8",
    // padding: "20px 100px",
    border: "1px solid black",
    margin: "10px",
    // borderRadius: "10px",
    // margin: "20px 150px",
  },
  // formGroup: {
  //   gap: "10px",
  //   padding: "10px",
  // },
  formGroup: {
    gap: "10px",
    display: "grid",
    gridTemplateColumns: "auto auto",
    padding: "10px",
    // borderRadius: "50px",
    width: "100px",
  },
  inputField: {
    // gap: "5px",
    // display: "grid",
    // gridTemplateColumns: "0.5fr 2fr",
    // padding: "10px",
    // backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "50px",
    width: "130px",
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

const CustomerSIAdd: React.FC<DemoFormProps> = (props) => {
  const classes = useStyles();

  // ============================== Methods =========================

  /** 
       This Method for get all change on the Input Field
      */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    isValid();

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

  /** 
       This Method for validation on the Input Field
      */
  const isValid = () => {
    let hasError = false;
    const copyErrors: ErrorType = { ...props.errors };

    const validationFields = ["skill1"];

    for (let key in copyErrors) {
      if (
        validationFields.includes(key) &&
        props.data[key as keyof typeof props.data] === ""
      ) {
        copyErrors[key] = "required";
        hasError = true;
      } else {
        copyErrors[key] = ``;
      }
    }

    if (props.data.skill1.length < 3) {
      copyErrors.skill1 = "Employee Must contain at least 1 Skill";
      hasError = true;
    } else {
      copyErrors.skill1 = "";
    }

    props.setErrors(copyErrors);

    return hasError;
  };

  return (
    <React.Fragment>
      <form className={classes.form}>
        <div className={classes.formGroup}>
          <label>Customer Supplementary Information</label>
        </div>
        <div className={classes.formGroup}>
          <label>Requester</label>
          <div className={classes.inputField}>
            <TextField
              id="requester"
              name="requester"
              // value={props.data.requester}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Gender</label>
          <div className={classes.inputField}>
            <TextField
              id="gender"
              name="gender"
              // value={props.data.gender}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Receipt address</label>
          <div className={classes.inputField}>
            <TextField
              id="receiptAddress"
              name="receiptAddress"
              // value={props.data.receiptAddress}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Age</label>
          <div className={classes.inputField}>
            <TextField
              id="age"
              name="age"
              // value={props.data.age}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Discount rate</label>
          <div className={classes.inputField}>
            <TextField
              id="discountRate"
              name="discountRate"
              // value={props.data.discountRate}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Experience</label>
          <div className={classes.inputField}>
            <TextField
              id="skill1Experience"
              name="skill1Experience"
              value={props.data.skill1Experience}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Skill 1</label>
          <div className={classes.inputField}>
            <TextField
              id="skill1"
              name="skill1"
              value={props.data.skill1}
              required={true}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
              helperText={props.errors.skill1}
              error={Boolean(props.errors.skill1)}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Experience</label>
          <div className={classes.inputField}>
            <TextField
              id="skill1Experience"
              name="skill1Experience"
              value={props.data.skill1Experience}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Skill 2</label>
          <div className={classes.inputField}>
            <TextField
              id="skill2"
              name="skill2"
              value={props.data.skill2}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Experience</label>
          <div className={classes.inputField}>
            <TextField
              id="skill2Experience"
              name="skill2Experience"
              value={props.data.skill2Experience}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Skill 3</label>
          <div className={classes.inputField}>
            <TextField
              id="skill3"
              name="skill3"
              value={props.data.skill3}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Experience</label>
          <div className={classes.inputField}>
            <TextField
              id="skill3Experience"
              name="skill3Experience"
              value={props.data.skill3Experience}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Skill 4</label>
          <div className={classes.inputField}>
            <TextField
              id="skill4"
              name="skill4"
              value={props.data.skill4}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Experience</label>
          <div className={classes.inputField}>
            <TextField
              id="skill4Experience"
              name="skill4Experience"
              value={props.data.skill4Experience}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={classes.formGroup}>
          <label>Father's Name</label>
          <div className={classes.inputField}>
            <TextField
              id="fathersName"
              name="fathersName"
              value={props.data.fathersName}
              required={true}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
              helperText={props.errors.fathersName}
              error={Boolean(props.errors.fathersName)}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Profession</label>
          <div className={classes.inputField}>
            <TextField
              id="fathersProfession"
              name="fathersProfession"
              value={props.data.fathersProfession}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Mother's Name</label>
          <div className={classes.inputField}>
            <TextField
              id="mothersName"
              name="mothersName"
              value={props.data.mothersName}
              required={true}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
              helperText={props.errors.mothersName}
              error={Boolean(props.errors.mothersName)}
            />
          </div>
        </div>

        <div className={classes.formGroup}>
          <label>Profession</label>
          <div className={classes.inputField}>
            <TextField
              id="mothersProfession"
              name="mothersProfession"
              value={props.data.mothersProfession}
              InputProps={{ disableUnderline: true }}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CustomerSIAdd;
