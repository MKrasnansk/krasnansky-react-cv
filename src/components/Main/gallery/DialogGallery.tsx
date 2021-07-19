import {
  SlideProps,
  Slide,
  Dialog,
  DialogContent,
  Grid,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { title } from "process";
import React from "react";
import { theme } from "../../../theme";

interface State {
  isOpen: boolean;
  onNo: () => void;
  describe: string;
  source: string;
  demo: string;
}
const DialogTransition = (props: JSX.IntrinsicAttributes & SlideProps) => (
  <Slide direction="up" {...props} />
);

export const DialogGallery: React.FC<State> = (props) => {
  const { isOpen, onNo, describe, source, demo } = props;
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
          style={{ background: theme.palette.text.disabled }}
          variant="contained"
          autoFocus
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};
