import { useState } from "react";
import Body from "./Body";
import Header from "./Header";

const Login = () => {
  const [isConnection, setIsConnection] = useState(true);
  
  return (
    <>
      <Header setIsConnection={setIsConnection} />
      <Body isConnection={isConnection} />
    </>
  );
};

export default Login;
