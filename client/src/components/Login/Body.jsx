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

const Body = ({ isConnection, handleOnClick  } ) => {
  const classes = useStyles();

  return (
    <div className={classes.appContainer} >
      {isConnection ? <ConnectionForm handleOnClick={handleOnClick}/> : <CreatAccountForm />}
    </div>
  );
};

export default Body;
