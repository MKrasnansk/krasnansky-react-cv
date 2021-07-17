import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  useMediaQuery
} from "@material-ui/core";
import React, { useState } from "react";
import { theme } from "../../../theme";

interface Props {
  title: string;
  info: string;
  describe: string;
  source: string;
  demo: string;
}
export const WorkCardItem: React.FC<Props> = (props) => {
  const { title, info, describe, source, demo } = props;
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card
      style={{
        maxWidth: "200px",
        background: theme.palette.text.disabled,
        marginBlock: "10px",
        marginInline: "5px",
      }}
    >
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        scroll="paper"
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
          onClick={handleClose}
          style={{ background: theme.palette.text.disabled }}
          variant="contained"
          autoFocus
        >
          Ok
        </Button>
      </Dialog>
      <CardActionArea>
        <CardContent>
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="default" onClick={handleClickOpen}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
