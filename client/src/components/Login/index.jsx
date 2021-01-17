import { useState, useContext } from "react";
import Body from "./Body";
import Header from "./Header";
import { AuthContext } from "../../App";
import Cookies from "js-cookie";

const Login = () => {
  const [isConnection, setIsConnection] = useState(true);
  const auth = useContext(AuthContext);
  let twoHourExpiration = new Date(new Date().getTime() + 120 * 60 * 1000);
  

  const handleOnClick = (login, password) => {
    // if le login et la mot de passe son dans la base alors je fait ça:
    // mettre le username a la place de user
    Cookies.set("user", "loginTrue", {
      expires: twoHourExpiration,
    });
    console.log("coucou les amis");
    auth.setAuth(true);
  };

  return (
    <>
      <Header setIsConnection={setIsConnection} />
      <Body isConnection={isConnection} handleOnClick={handleOnClick} />
    </>
  );
};

export default Login;
