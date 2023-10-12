const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: "1.25px inset black",
        width: 300,
        height: 70,
        textAlign: "right",
        marginBottom: 10,
        backgroundColor: "#EEEEEE",
        fontFamily: "Calculator",
        fontWeight: 'bolder',
        fontSize: 18
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
