import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core"
import ConnectionForm from './ConnectionForm'

const useStyles = makeStyles((theme) => ({
  appContainer: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    whiteSpace: "no-wrap",
    overflowY: "hidden",
    position: "absolute",
    marginTop: "100px",
    padding: "10px"
  },
}));

const Body = () => {
  const classes = useStyles();

  return (
    <Box className={classes.appContainer}>
      <ConnectionForm/>
    </Box>
  );
};

export default Body;
