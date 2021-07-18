import {Grid } from "@material-ui/core";
import React from "react";
import { tileData } from "../../assets/img/tileData";
import { WorkCardItem } from "./gallery/WorkCardItem";

export const GalleryCard: React.FC = () => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>My works</h3>
      <Grid
        container={true}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {tileData.map((tile) => (
          <WorkCardItem
            key={tile.id}
            title={tile.title}
            info={tile.info}
            describe={tile.describe}
            source={tile.sourceHref}
            demo={tile.liveDemoHref}
          />
        ))}
      </Grid>
    </>
  );
};
