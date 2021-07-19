import {
  Button,
  Dialog,
  DialogContent,
  Slide,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React from "react";
import { About } from "./About";

interface State {
  isOpen: boolean;
  onNo: any;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const AboutDialog: React.FC<State> = (props) => {
  const { isOpen, onNo } = props;
  return (
      <Dialog
        fullScreen
        open={isOpen}
        onClose={onNo}
        TransitionComponent={Transition}
      >
        <DialogContent style={{ background: "#2f2f2f" }}>
          <About />
        </DialogContent>
        <Button onClick={onNo} color="primary" >
          Close
        </Button>
      </Dialog>
  );
};
