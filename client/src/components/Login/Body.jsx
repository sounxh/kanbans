import { makeStyles } from "@material-ui/styles";
import { Box, Container } from "@material-ui/core";
import ConnectionForm from "./ConnectionForm";
import CreatAccountForm from "./CreateAccountForm";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    whiteSpace: "no-wrap",
    overflowY: "hidden",
    position: "absolute",
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
    <Container className={classes.appContainer} maxWidth="sm">
      {isConnection ? <ConnectionForm /> : <CreatAccountForm />}
    </Container>
  );
};

export default Body;
