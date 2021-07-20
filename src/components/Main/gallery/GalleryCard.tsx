import React from "react";
import { Grid } from "@material-ui/core";
import { WorkCardItem } from "./WorkCardItem";
import { tileData } from "../../../assets/tileData";

export const GalleryCard: React.FC = () => {
  return (
    <>
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
export const MemoizedGalleryCard = React.memo(GalleryCard);
