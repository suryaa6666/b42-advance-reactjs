import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  function handleLogin() {
    // aisdjfiodsjfdiosf backend
    console.log("sdfsf")
    setTimeout(() => {
      navigate('/profile')
    }, 2000)
  }

  return (
    <Container className="text-center">
      <p className="h1">Profile</p>
      <p>
        Nam pulvinar aliquam pretium. Etiam quis aliquet urna, quis maximus
        elit. In imperdiet imperdiet nulla, ac rhoncus mauris semper
        sollicitudin. Sed condimentum gravida accumsan. Proin eros quam,
        pharetra eu lectus non, suscipit porta augue. Nam eu sapien at nisi
        iaculis pretium. Proin interdum neque ex, et porttitor turpis dapibus
        non. Quisque massa lacus, faucibus non aliquet id, interdum mattis
        tellus.
      </p>
      {/* <Link to="/about">
        <Button>This click</Button>
      <Link> */}
      <Link to="/">Testing</Link>
      {<button onClick={handleLogin}>Login</button>}
    </Container>
  );
}

export default Profile;
