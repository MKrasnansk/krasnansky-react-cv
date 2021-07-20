import {
  Button,
  Dialog,
  DialogContent,
  Slide,
  SlideProps,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React from "react";
import { About } from "./About";

interface State {
  isOpen: boolean;
  onNo: any;
}
//props: JSX.IntrinsicAttributes & SlideProps
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<boolean, any> },
  ref: React.Ref<SlideProps>,
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
        <Button disableRipple onClick={onNo} color="primary" >
          Close
        </Button>
      </Dialog>
  );
};
