import React from "react";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

export const HeaderChip: React.FC = () => {

  return (
    <>
      <Grid
        style={{ marginTop: 30, marginBottom: 10 }}
        container
        direction="row"
        justifyContent='center'
        alignItems="center"
      >
        <Chip
          label="frontend"
          size="medium"
          color="primary"
          variant="outlined"
        />
        <div>
          <Grid container direction="row" justifyContent="center" >
            <Chip
              variant="outlined"
              size="small"
              label="React.js"
              color="primary"
            />
            <Chip
              variant="outlined"
              size="small"
              label="JavaScript"
              color="primary"
            />
            <Chip
              variant="outlined"
              size="small"
              label="TypeScript"
              color="primary"
            />
               <Chip
              variant="outlined"
              size="small"
              label="Vue.js"
              color="primary"
            />
          </Grid>
          <Grid container direction="row" justify="center" >
          <Chip
              variant="outlined"
              size="small"
              label="TypeScript"
              color="secondary"
            />
            <Chip
              variant="outlined"
              size="small"
              label="Node.js"
              color="secondary"
            />
            <Chip
              variant="outlined"
              size="small"
              label="NestJS"
              color="secondary"
            />
              <Chip
              variant="outlined"
              size="small"
              label="Pug"
              color="secondary"
            />
          
          </Grid>
          <Grid container direction="row" justify="center" >
          <Chip
              label="CSS"
              size="small"
              variant="outlined"
              color="primary"
            />
            <Chip
              variant="outlined"
              size="small"
              label="Sass"
              color="primary"
            />
               <Chip
              variant="outlined"
              size="small"
              label="Bootstrap"
              color="primary"
            />
               <Chip
              variant="outlined"
              size="small"
              label="Material-UI"
              color="primary"
            />
         
          </Grid>
          <Grid container direction="row" justify="center" >
          <Chip
              variant="outlined"
              size="small"
              color="secondary"
              label="MongoDB"
            />
            <Chip
              variant="outlined"
              size="small"
              color="secondary"
              label="Firebase"
            />
            <Chip
              variant="outlined"
              size="small"
              color="secondary"
              label="MySQL"
            />
            <Chip
              label="PostgreSQL"
              size="small"
              color="secondary"
              variant="outlined"
            />
                <Chip
              label="GraphQL"
              size="small"
              color="secondary"
              variant="outlined"
            />
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

