import React from "react";
import { Grid } from "@material-ui/core";
import { tileData } from "../../assets/img/tileData";
import { WorkCardItem } from "./gallery/WorkCardItem";

export const GalleryCard: React.FC = () => {
  return (
    <Grid
      container={true}
      direction="row"
      justify="space-evenly"
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
  );
};
