import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { theme } from "../../../theme";
import { DialogGallery } from "./DialogGallery";

interface Props {
  title: string;
  info: string;
  describe: string;
  source: string;
  demo: string;
}
export const WorkCardItem: React.FC<Props> = (props) => {
  const { title, info, describe, source, demo } = props;
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  return (
    <>
      <Card
        style={{
          background: theme.palette.text.disabled,
          marginBlock: "10px",
          marginInline: "5px",
        }}
      >
        <DialogGallery
          isOpen={isOpen}
          describe={describe}
          source={source}
          demo={demo}
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
    </>
  );
};
