import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailUser = () => {
  const [data, setData] = useState(null);

  // call that hooks here and store to variable
  const params = useParams();

  console.log("isi params", params);

  // don't worry about this, we'll cover later
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        console.log(json);
        setData(json);
      });
    return () => {
      setData(null);
    };
  }, []);

  return (
    // code element inside Container
    // display information that stored in data
    // console.log first to see what information that you get from fetching
    <Container className="text-center">
      {data?.map((item) => {
        return (
          <div style={{border: "2px solid black"}}>
            <h1>{item?.email}</h1>
            <h1>{item?.name}</h1>
            <h1>{item?.phone}</h1>
            <h1>{item?.username}</h1>
          </div>
        );
      })}
    </Container>
  );
};

export default DetailUser;
