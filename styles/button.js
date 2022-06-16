const buttonStyle = {
      borderRadius: 2.5,
      border: "2px solid #000",
      backgroundColor: "white",
      color: "black",
      transition: "all ease 0.6s",
      background: "linear-gradient(75deg, black 50%, white 50%)",
      backgroundSize: "250% 100%",
      backgroundPosition: "right bottom",
      "&:hover": {
        color: "#fff",
        backgroundPosition: "left bottom",
      },
  };

export default buttonStyle;