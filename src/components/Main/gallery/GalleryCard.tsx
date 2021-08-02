import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { WorkCardItem } from "./WorkCardItem";
import { tileData } from "../../../assets/tileData";

export const GalleryCard: React.FC = () => {
  return (
    <Fragment>
      <h3 style={{ textAlign: "center" }}>My works</h3>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {tileData.map((tile) => (
          <WorkCardItem
            key={tile.id}
            id={tile.id}
            title={tile.title}
            info={tile.info}
            describe={tile.describe}
            sourceHref={tile.sourceHref}
            liveDemoHref={tile.liveDemoHref}
          />
        ))}
      </Grid>
    </Fragment>
  );
};
export const MemoizedGalleryCard = React.memo(GalleryCard);
