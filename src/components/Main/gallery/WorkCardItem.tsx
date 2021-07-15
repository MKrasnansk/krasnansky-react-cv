import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  createStyles,
  Dialog,
  DialogContent,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: "column",
      maxWidth: 200,
      marginBlock: 20,
      marginInline: 10,
      background: "#2f2f2f",
    },
    media: {
      height: 100,
    },
  })
);
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
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        scroll="paper"
      >
        <DialogContent style={{ background: "#2f2f2f", color: "#ccc" }}>
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
          style={{ background: "#333" }}
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
