import { makeStyles } from "@material-ui/styles";
import { Box, Container } from "@material-ui/core";
import ConnectionForm from "./ConnectionForm";
import CreatAccountForm from "./CreateAccountForm";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    marginTop: "100px",
    padding: "10px",
  },
}));

const Body = ({ isConnection } = true) => {
  console.log(
    "🚀 ~ file: Body.jsx ~ line 20 ~ Body ~ isConnection",
    isConnection
  );
  const classes = useStyles();

  return (
    <div className={classes.appContainer} >
      {isConnection ? <ConnectionForm /> : <CreatAccountForm />}
    </div>
  );
};

export default Body;
