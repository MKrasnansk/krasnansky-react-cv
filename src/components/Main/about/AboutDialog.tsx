import {
  Button,
  Dialog,
  DialogContent,
  Slide,
  SlideProps,
} from "@material-ui/core";
import React from "react";
import { About } from "./About";

interface State {
  isOpen: boolean;
  onNo: any;
}
const DialogTransition = (props: JSX.IntrinsicAttributes & SlideProps) => (
  <Slide direction="up" {...props} />
);
export const AboutDialog: React.FC<State> = (props) => {
  const { isOpen, onNo } = props;
  return (
      <Dialog
        fullScreen
        open={isOpen}
        onClose={onNo}
        onEscapeKeyDown={onNo}
        TransitionComponent={DialogTransition}
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
