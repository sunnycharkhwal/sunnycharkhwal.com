const BgImg = (props) => {
  return (
    <>
      <div
        className={props.Myclass}
        style={{
          backgroundImage: `url(${props.loginImg})`,
        }}
      ></div>
    </>
  );
};
export default BgImg;
