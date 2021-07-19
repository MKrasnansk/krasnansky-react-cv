import {
  Button, Dialog,
  DialogContent,
  Grid, Slide
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { title } from "process";
import React from "react";
import { theme } from "../../../theme";

interface State {
  isOpen: boolean;
  onNo: any;
  describe: string;
  source: string;
  demo: string;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogGallery: React.FC<State> = (props) => {
  const { isOpen, onNo, describe, source, demo } = props;

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onNo}
        TransitionComponent={Transition}
      >
        <DialogContent
          style={{
            background: theme.palette.text.disabled,
            color: theme.palette.primary.main,
          }}
        >
          <h3>{title}</h3>
          <p>{describe}</p>
          <Grid container direction="row-reverse">
            {source.length > 0 ? (
              <Button href={source} color="secondary">
                Source
              </Button>
            ) : (
              ""
            )}
            {demo.length > 0 ? (
              <Button href={demo} color="secondary">
                Live Demo
              </Button>
            ) : (
              ""
            )}
          </Grid>
        </DialogContent>
        <Button
          onClick={onNo}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};
