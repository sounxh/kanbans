import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  TextField,
  Container,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    alignItems: "center",
  },
}));

// TODO verifier que toute les information son rentré
// TODO verifier que les deux mots de passe son les même
const CreatAccountForm = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassWord, setConfirmedPassWord] = useState("");
  // TODO verifier le format
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmedPassword = (e) => {
    setConfirmedPassWord(e.target.value);
  };
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Typography variant="h4">Créer un compte</Typography>
        <Grid item xs={12}>
          <TextField
            id="mail_accounte"
            label="Addresse mail"
            required
            fullWidth
            value={mail}
            onChange={handleMail}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password_accounte"
            label="Mot de passe"
            type="password"
            required
            fullWidth
            value={password}
            onChange={handlePassword}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="confirm_password_accounte"
            label="Confirmer mot de passe"
            type="password"
            required
            fullWidth
            value={confirmedPassWord}
            onChange={handleConfirmedPassword}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={(e) =>
              console.log(
                "creation submit with information",
                mail,
                password,
                confirmedPassWord
              )
            }
            size="medium"
            variant="contained"
            color="primary"
          >
            Créer un compte
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreatAccountForm;
