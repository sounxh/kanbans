import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  textfield: {
    flexGrow: 1,
    margin: 4,
  },
  button: {
    marginLeft: 4,
    padding: 5,
    // height: 40
  },
}));

const AddTabForm = (props) => {
  const classes = useStyles();
  const [revealForm, setRevealForm] = useState(false);
  const handleReveal = () => {
    setRevealForm(true);
  };
  const handleDelete = () => {
    setRevealForm(false);
  };

  return (
    <>
      {!revealForm ? (
        <Box onClick={handleReveal}>
          <Typography>+ Ajouter une autre listes</Typography>
        </Box>
      ) : (
        <>
          <TextField
            className={classes.textfield}
            id="add_card"
            label="Saisisser le titre de la liste"
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
            className={classes.button}
          >
            Ajouter autre liste
          </Button>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </>
      )}
    </>
  );
};

export default AddTabForm;
