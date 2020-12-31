import { Draggable } from "react-beautiful-dnd";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  typo: {
    padding: 10,
  },
});


const TaskCard = ({ item, index }) => {
  const classes = useStyles()
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Grid
            item
            xs={12}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Paper>
              <Typography className={classes.typo} variant="body2">
                {item.content}
              </Typography>
            </Paper>
          </Grid>
        );
      }}
    </Draggable>
  );
};

export default TaskCard;
