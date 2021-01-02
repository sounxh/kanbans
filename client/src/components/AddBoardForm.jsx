import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const AddBoardForm = (props) => {
  const [revealForm, setRevealForm] = useState(false);
  const handleReveal = () => {
    setRevealForm(true);
  };
  const handleDelete = () => {
    setRevealForm(false);
  };
  const handleClick = (e) => {
    console.log("le tableau que je veux crée porte le titre ", e)
  }
  return (
    <>
      {!revealForm ? (
        <Box onClick={handleReveal}>
          <Typography>Créer un tableau</Typography>
        </Box>
      ) : (
        <>
          <TextField
            // className={classes.textfield}
            id="add_board"
            label="Ajouter un titre au tableau"
            multiline
            rowsMax={4}
            // value={newCard}
            // onChange={handleChange}
            variant="outlined"
          />
          <Button
            // size='small'
            variant="contained"
            color="primary"
            onClick={handleClick}
            // className={classes.button}
          >
            Créer un tableau
          </Button>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </>
      )}
    </>
  );
};

export default AddBoardForm;
