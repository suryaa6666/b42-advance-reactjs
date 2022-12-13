import PropTypes from "prop-types";

function DetailAbout({ name, address, age }) {
  return (
    <>
      <div>{name}</div>
      <div>{address}</div>
      <div>{age}</div>
    </>
  );
}

DetailAbout.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

DetailAbout.defaultProps = {
  name: "surya ganteng",
  address: "sawangan",
  age: "99",
};

export default DetailAbout;
