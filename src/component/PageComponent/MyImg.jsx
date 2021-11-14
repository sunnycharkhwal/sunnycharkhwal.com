const MyImg = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
        }}
      ></div>
    </>
  );
};
export default MyImg;
