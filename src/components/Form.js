// import css modules
import FormStyling from './FormStyling.module.css'

// const styles = {
//   form: {
//     margin: "16px 20% 0",
//   },
//   formGroup: {
//     marginBottom: "16px",
//   },
//   formLabel: {
//     marginBottom: "8px",
//     display: "inline-block",
//   },
//   formInput: {
//     display: "block",
//     width: "100%",
//     padding: ".375rem .75rem",
//     fontSize: "1rem",
//     lineHeight: 1.5,
//     color: "#212529",
//     backgroundColor: "#fff",
//     border: "1px solid #ced4da",
//     borderRadius: ".25rem",
//   },
// };


function Form() {
  console.log(FormStyling)
  return (
    <div>
      <form className={FormStyling.form}>
        <div className={FormStyling.formGroup}>
          <label htmlFor="username" className={FormStyling.formLabel}>
            Username
          </label>
          <input
            id="username"
            placeholder="Input username"
            className={FormStyling.formInput}
          />
        </div>
        {/* code here */}
      </form>
    </div>
  )
}

export default Form
