import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useState, Fragment } from "react";
import { theme } from "../../../theme";
import { DialogGallery } from "./DialogGallery";
import { GalleryData } from "./../../../assets/tileData";

export const WorkCardItem: React.FC<GalleryData> = (props) => {
  const { id, title, info, describe, sourceHref, liveDemoHref } = props;
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  return (
    <Fragment>
      <Card
        style={{
          background: theme.palette.text.disabled,
          marginBlock: "10px",
          marginInline: "5px",
          width: "230px",
        }}
      >
        <DialogGallery
          key={id}
          id={id}
          info={info}
          isOpen={isOpen}
          describe={describe}
          title={title}
          sourceHref={sourceHref}
          liveDemoHref={liveDemoHref}
          onNo={closeDialog}
        />
        <CardContent>
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            component="p"
            style={{ width: "150px", height: "70px" }}
          >
            {info}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="default" onClick={openDialog}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};
export const MemoizedGallery = React.memo(WorkCardItem);
