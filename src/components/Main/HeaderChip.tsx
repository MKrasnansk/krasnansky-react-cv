import React from "react";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { front, back } from "./../../assets/headerChipsData";

export const HeaderChip: React.FC = () => {
  return (
    <>
      <Grid
        style={{ marginTop: 30, marginBottom: 10 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Chip
          label="frontend"
          size="medium"
          color="primary"
          variant="outlined"
        />
        <div>
          <Grid container direction="row" justifyContent="center">
            {front.map((data) => (
              <Chip
                key={data.id}
                variant="outlined"
                size="small"
                label={data.label}
                color="primary"
              />
            ))}
          </Grid>

          <Grid container direction="row" justifyContent="center">
            {back.map((data) => (
              <Chip
                key={data.id}
                variant="outlined"
                size="small"
                label={data.label}
                color="secondary"
              />
            ))}
          </Grid>
        </div>

        <Chip
          label="backend"
          size="medium"
          color="secondary"
          variant="outlined"
        />
      </Grid>
    </>
  );
};
export const MemoizedHeaderChips = React.memo(HeaderChip);
