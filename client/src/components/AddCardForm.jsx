import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  IconButton,
  Box,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Delete } from "@material-ui/icons";
import Axios from 'axios';

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

const AddCardForm = (props) => {
  const classes = useStyles();
  const [newCard, setNewCard] = useState("");
  const [revealForm, setRevealForm] = useState(false);
  const handleReveal = () => {
    setRevealForm(true);
  };
  const handleChange = (e) => {
    console.log("je reçois dans le formulaire les valeur ", e);
    setNewCard(e.target.value);
  };
  const handleDelete = () => {
    setRevealForm(false);
  };

  const submitCard = () => {
    console.log(newCard);
    Axios.post("http://localhost:3001/api/insert", {
      cardName: newCard,
    }).then(() => {
      alert("successfully insert");
    });
  };


  return (
    <>
      {!revealForm ? (
        <Box onClick={handleReveal}>
          <Typography>+ Ajouter une carte</Typography>
        </Box>
      ) : (
        <>
          <TextField
            className={classes.textfield}
            id="add_card"
            label="Ajouter une autre carte"
            multiline
            rowsMax={4}
            value={newCard}
            onChange={handleChange}
            variant="outlined"
          />
          <Button
            onClick ={submitCard}
            size="small"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Ajouter une carte
          </Button>
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </>
      )}
    </>
  );
};

export default AddCardForm;
