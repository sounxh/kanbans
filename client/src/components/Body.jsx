import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import Column from "./Column";
import AddColumnForm from "./AddColumnForm";

const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "To do",
    items: [],
  },
  [uuid()]: {
    name: "In Progress",
    items: [],
  },
  [uuid()]: {
    name: "Done",
    items: [],
  },
};

// repenser la disposition des colum faire un tableau d'id de column et agire en consequence ...
const tabsFromBackend = { id: uuid(), columns: columnsFromBackend };

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination, type } = result;
  if (type === "Card") {
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  }
  if (type === "Column") {
  }
};

const useStyles = makeStyles((theme) => ({
  appContainer: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    whiteSpace: "no-wrap",
    overflowY: "hidden",
    position: "absolute",
    marginTop: "100px",
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0
    // display: 'inlineBlock',
    // display: 'flex',
    // flexWrap: 'no-wrap',
    // whiteSpace: 'no-wrap',
    // display: 'block'
  },
  box2: {
    // float: 'left',
    display: "block",
    padding: 10,
    // display: '' ,
    width: 272,
  },
}));

function App() {
  const classes = useStyles();
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <Droppable droppableId="all-tab" type="Column" direction="horizontal">
        {(provided) => (
          <Box
            className={classes.appContainer}
            component="div"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <Column
                  column={column}
                  columnId={columnId}
                  index={index}
                  key={columnId}
                />
              );
            })}
            {provided.placeholder}
            <Box className={classes.box2} component="div">
              <AddColumnForm />
            </Box>
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
