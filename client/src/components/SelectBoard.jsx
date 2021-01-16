import { v4 as uuid } from "uuid";
import { Grid, Card, Typography } from "@material-ui/core";
import AddBoardForm from './AddBoardForm'
const SelectBoard = () => {
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
    <Grid container spacing={3}>
      {Object.entries(boardDataFromBackEnd).map(([id, value], index) => {
        return (
          <Grid item xs={4} key={id}>
            <Card>
              <Typography>{value.title}</Typography>
            </Card>
          </Grid>
        );
      })}
      <Grid item xs={4}>
        <Card>
        <AddBoardForm/>
          {/* <Typography>Créer un tableau</Typography> */}
        </Card>
      </Grid>
    </Grid>
  );
};

export default SelectBoard;
