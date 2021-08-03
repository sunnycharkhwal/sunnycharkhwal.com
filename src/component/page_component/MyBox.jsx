import { Box } from "@material-ui/core";
const MyBox = (props) => {
  return (
    <>
      <Box className={props.className} component={props.component}>
        {props.children}
      </Box>
    </>
  );
};
export default MyBox;
