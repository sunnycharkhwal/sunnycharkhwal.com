import { Button } from "@material-ui/core";
const LoginTopTitle = (props) => {
  return (
    <>
      <h3 className="mt-4 mb-4 login_title">{props.title}</h3>
    </>
  );
};
export default LoginTopTitle;
const LoginBtn = (props) => {
  return (
    <>
      <Button fullWidth variant="outlined" className="login_btn">
        {props.btnTitle}
      </Button>
    </>
  );
};

export { LoginBtn };
