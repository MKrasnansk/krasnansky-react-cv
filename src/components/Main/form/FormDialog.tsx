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
import { ContactForm } from "./ContactForm";

interface State {
  isOpen: boolean;
  onNo: ()=> void;
}
const DialogTransition = (props: JSX.IntrinsicAttributes & SlideProps) => (
  <Slide direction="up" {...props} />
);

export const FormDialog: React.FC<State> = (props) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { isOpen, onNo } = props;

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
          <ContactForm />
        </DialogContent>
          <Button onClick={onNo} color="primary" autoFocus>
            Close
          </Button>
      </Dialog>
    </>
  );
};
