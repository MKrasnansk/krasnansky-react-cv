import {
  useMediaQuery,
  Dialog,
  DialogContent,
  Button,
  Slide,
  SlideProps,
} from "@material-ui/core";
import React from "react";
import { theme } from "../../../theme";
import { Curiculum } from "./Curiculum";

interface State {
  isOpen: boolean;
  onNo: ()=> void;
}
const DialogTransition = (props: JSX.IntrinsicAttributes & SlideProps) => (
  <Slide direction="up" {...props} />
);

export const CvDialog: React.FC<State> = (props) => {
  const { isOpen, onNo } = props;
  const fullScreen = useMediaQuery(theme.breakpoints.down("xl"));

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
          <Curiculum />
        </DialogContent>
        <Button onClick={onNo} color="primary" autoFocus>
          Close
        </Button>
      </Dialog>
    </>
  );
};
