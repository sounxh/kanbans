import { v4 as uuid } from "uuid";
import { Grid, Card, Typography, Box, Button, Link, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import AddBoardForm from "../AddBoardForm";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    marginTop: "100px",
  },
}));

const SelectBoard = () => {
  const history = useHistory();
  const classes = useStyles();
  const boardDataFromBackEnd = {
    [uuid()]: {
      title: "Super Projet 1",
    },
    [uuid()]: {
      title: "Super Projet 2",
    },
  };
  Object.entries(boardDataFromBackEnd).map(([id, value], index) =>
    console.log("coucou la value", value)
  );
  return (
    <>
      <Header></Header>
      <Box className={classes.appContainer} component="div">
        <Grid container spacing={3}>
          {Object.entries(boardDataFromBackEnd).map(([id, value], index) => {
            return (
              <Grid item xs={4} key={id}>
                {/* Todo remplacer par le bon truc quand j'aurais le back  (mettre le project name dans le lien*/}
                  <Card>
                  <CardActionArea onClick={() => history.push("/Home")}>
                  <Typography>{value.title}</Typography>
                  </CardActionArea>
                    {/* <Button /> */}
                  </Card>
              </Grid>
            );
          })}
          <Grid item xs={4}>
            <Card>
              <AddBoardForm />
              {/* <Typography>Créer un tableau</Typography> */}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SelectBoard;
