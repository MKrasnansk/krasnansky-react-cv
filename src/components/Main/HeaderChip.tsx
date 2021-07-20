import React from "react";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { HeaderChipsData } from "../../assets/headerChipsData";

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
            {HeaderChipsData.map((data) =>
              data.front?.map((fdata) => (
                <Chip
                  key={fdata.id}
                  variant="outlined"
                  size="small"
                  label={fdata.label}
                  color="primary"
                />
              ))
            )}
          </Grid>

          <Grid container direction="row" justifyContent="center">
            {HeaderChipsData.map((data) =>
              data.back?.map((bdata) => (
                <Chip
                  key={bdata.id}
                  variant="outlined"
                  size="small"
                  label={bdata.label}
                  color="secondary"
                />
              ))
            )}
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
