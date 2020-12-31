import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, CardHeader, CardContent, Grid } from "@material-ui/core";
import AddCardForm from "./AddCardForm";
const useStyles = makeStyles((theme) => ({
  columnContainer: {
    display: "block",
    padding: 10,
    width: 272,
  },
}));

const Column = ({ columnId, column, index }) => {
  const classes = useStyles();
  return (
    <Box className={classes.columnContainer} key={columnId}>
      <Draggable index={index} draggableId={columnId}>
        {(provided) => (
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardHeader title={column.name} />
            <Droppable droppableId={columnId} key={columnId} type="Card">
              {(provided, snapshot) => {
                return (
                  <CardContent
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <Grid container spacing={1}>
                      {column.items.map((item, index) => {
                        return (
                          <TaskCard item={item} key={index} index={index} />
                        );
                      })}
                      <AddCardForm />
                    </Grid>
                    {provided.placeholder}
                  </CardContent>
                );
              }}
            </Droppable>
          </Card>
        )}
      </Draggable>
    </Box>
  );
};

export default Column;
