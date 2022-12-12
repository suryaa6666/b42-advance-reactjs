import Styles from "./Style"

// create Form component
function Form() {
  return (
    // code inside div
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* form */}
      <form
        style={{
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          padding: "0 20px 50px 20px",
          borderRadius: "5px"
        }}
      >
        <h1> Login </h1>
        <input type="text" placeholder="Email..." style={Styles.textInput} />
        <input
          type="password"
          placeholder="Password..."
          style={Styles.textInput}
        />
        <input type="button" value={"Submit"} style={{ backgroundColor: "#1d3557", color: "#f1faee", ...Styles.textInput}} />
      </form>
    </div>
  );
}

export default Form;
