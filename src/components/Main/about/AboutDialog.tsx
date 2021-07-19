import {
  Button,
  Dialog,
  DialogContent,
  Slide,
  SlideProps,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { theme } from "../../../theme";
import { About } from "./About";

interface State {
  isOpen: boolean;
  onNo: ()=> void;
}
const DialogTransition = (props: JSX.IntrinsicAttributes & SlideProps) => (
  <Slide direction="up" {...props} />
);

export const AboutDialog: React.FC<State> = (props) => {
  const { isOpen, onNo } = props;
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={onNo}
        onEscapeKeyDown={onNo}
        TransitionComponent={DialogTransition}
      >
        <DialogContent style={{ background: "#2f2f2f" }}>
          <About />
        </DialogContent>
        <Button onClick={onNo} color="primary" autoFocus>
          Close
        </Button>
      </Dialog>
    </>
  );
};
