// import React Bootstrap components
import { useState } from "react";
import { Button } from "react-bootstrap";

// import css modules
import cssModules from "./Form.module.css";

const styles = {
  form: {
    margin: "16px 20% 0",
  },
  formGroup: {
    marginBottom: "16px",
  },
  formLabel: {
    marginBottom: "8px",
    display: "inline-block",
  },
  formInput: {
    display: "block",
    width: "100%",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    borderRadius: ".25rem",
  },
};

function FormComponent() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username :" + form.username);
    console.log("Email :" + form.email);
    console.log("Gender :" + form.gender);
  };

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.id, e.target.value)
    console.log(form)
  }

  return (
    <div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.formLabel}>
            Username
          </label>
          <input
            name="username"
            placeholder="Input username"
            style={styles.formInput}
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div className={cssModules.formGroup}>
          <label htmlFor="email" className={cssModules.formLabel}>
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Input email"
            className={cssModules.formInput}
            value={form.email}
            onChange={handleChange}
          />
        </div>
        {/* css global */}
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            name="gender"
            className="form-select"
            defaultValue="Choose..."
            onChange={handleChange}
          >
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        {/* code here */}
        <Button type="submit" variant="success" className="w-100">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FormComponent;
