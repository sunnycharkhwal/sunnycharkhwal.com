import { Button } from "@material-ui/core";
const Btn = (props) => {
  return (
    <>
      <Button
        color={props.color}
        exact
        component={props.component}
        to={props.link}
        variant={props.variant}
      >
        {props.btnName}
      </Button>
    </>
  );
};
export default Btn;
