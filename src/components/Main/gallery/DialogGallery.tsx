import {
  Button, Dialog,
  DialogContent,
  Grid, Slide, SlideProps
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import React from "react";
import { theme } from "../../../theme";
import { GalleryData } from './../../../assets/tileData';

interface State extends GalleryData{
  isOpen: boolean;
  onNo: any;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<SlideProps> },
  ref: React.Ref<GalleryData>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogGallery: React.FC<State> = (props) => {
  const { isOpen, onNo, describe, sourceHref, liveDemoHref, title } = props;

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
            {sourceHref.length > 0 ? (
              <Button href={sourceHref} color="secondary">
                Source
              </Button>
            ) : (
              ""
            )}
            {liveDemoHref.length > 0 ? (
              <Button href={liveDemoHref} color="secondary">
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
