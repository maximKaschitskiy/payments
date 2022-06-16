const paperStyle = {
    border: "1px solid #fff",
    borderRadius: "15px",
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    position: "relative",
    "& :before": {
      backgroundColor: "rgba(255,255,255,0.3)",
      backdropFilter: "blur(10px) saturate(100%) contrast(45%) brightness(130%)",
      webkitBackdropFilter: "blur(10px) saturate(100%) contrast(45%) brightness(130%)",
      content: "",
      height: "100%",
      position: "absolute",
      width: "100%",
    }  
  }