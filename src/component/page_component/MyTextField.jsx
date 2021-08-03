import { TextField } from "@material-ui/core";
const MyTextField = (props) => {
  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        variant="outlined"
        label={props.label}
        type={props.type}
      />
    </>
  );
};
export default MyTextField;
