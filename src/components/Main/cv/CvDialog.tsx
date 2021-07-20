import {
  Dialog,
  DialogContent,
  Button,
  Slide,
  SlideProps,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React from "react";
import { Curiculum } from "./Curiculum";

interface State {
  isOpen: boolean;
  onNo: any;
}
// const DialogTransition = (props: JSX.IntrinsicAttributes & SlideProps) => (
//   <Slide direction="up" {...props} />
// );
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<SlideProps> },
  ref: React.Ref<State>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CvDialog: React.FC<State> = (props) => {
  const { isOpen, onNo } = props;

  return (
      <Dialog
        fullScreen
        open={isOpen}
        onClose={onNo}
        TransitionComponent={Transition}
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
