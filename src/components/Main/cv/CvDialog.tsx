import {
  Dialog,
  DialogContent,
  Button,
  Slide,
  SlideProps,
} from "@material-ui/core";
import React from "react";
import { Curiculum } from "./Curiculum";

interface State {
  isOpen: boolean;
  onNo: any;
}
const DialogTransition = (props: JSX.IntrinsicAttributes & SlideProps) => (
  <Slide direction="up" {...props} />
);

export const CvDialog: React.FC<State> = (props) => {
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
          <Curiculum />
        </DialogContent>
        <Button onClick={onNo} color="primary" autoFocus>
          Close
        </Button>
      </Dialog>
  );
};
