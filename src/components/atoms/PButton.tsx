import React from "react";
import Button from "@material-ui/core/Button";

const PButton = (props: any) => {
  return (
    <Button
      color="primary"
      variant="contained"
      onClick={() => props.onClick()}
      disabled={props.isDisabled}
    >
      {props.label}
    </Button>
  );
};

export default PButton;
