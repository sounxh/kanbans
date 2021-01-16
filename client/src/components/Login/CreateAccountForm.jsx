import { Grid, Card, TextField } from "@material-ui/core";

const CreatAccountForm = () => {
  return (
    <Card>
      <Grid Container alignContent='center' spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="create_accounte"
            label="Saisisser votre adress mail"
            // value={newCard}
            // onChange={handleChange}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CreatAccountForm;
