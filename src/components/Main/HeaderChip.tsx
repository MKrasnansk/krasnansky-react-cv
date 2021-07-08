import React from "react";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

const HeaderChip: React.FC = () => {

  return (
    <div>
      <Grid
        style={{ marginTop: 30, marginBottom: 10 }}
        container={true}
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Chip
          label="frontend"
          size="medium"
          color="primary"
          variant="outlined"
          clickable={true}
        />
        <div>
          <Grid container direction="row" justify="center" alignItems="center">
            <Chip
              variant="outlined"
              size="small"
              label="React.js"
              color="primary"
              clickable={true}
            />
            <Chip
              variant="outlined"
              size="small"
              label="JavaScript"
              color="primary"
              clickable={true}
            />
            <Chip
              variant="outlined"
              size="small"
              label="TypeScript"
              color="primary"
              clickable={true}
            />
               <Chip
              variant="outlined"
              size="small"
              label="Vue.js"
              color="primary"
              clickable={true}
            />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
          <Chip
              variant="outlined"
              size="small"
              label="TypeScript"
              color="secondary"
              clickable={true}
            />
            <Chip
              variant="outlined"
              size="small"
              label="Node.js"
              color="secondary"
              clickable={true}
            />
            <Chip
              variant="outlined"
              size="small"
              label="NestJS"
              color="secondary"
              clickable={true}
            />
              <Chip
              variant="outlined"
              size="small"
              label="Pug"
              color="secondary"
              clickable={true}
            />
          
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
          <Chip
              label="CSS"
              size="small"
              variant="outlined"
              color="primary"
              clickable={true}
            />
            <Chip
              variant="outlined"
              size="small"
              label="Sass"
              color="primary"
              clickable={true}
            />
               <Chip
              variant="outlined"
              size="small"
              label="Bootstrap"
              color="primary"
              clickable={true}
            />
               <Chip
              variant="outlined"
              size="small"
              label="Material-UI"
              color="primary"
              clickable={true}
            />
         
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
          <Chip
              variant="outlined"
              size="small"
              color="secondary"
              label="MongoDB"
              clickable={true}
            />
            <Chip
              variant="outlined"
              size="small"
              color="secondary"
              label="Firebase"
              clickable={true}
            />
            <Chip
              variant="outlined"
              size="small"
              color="secondary"
              label="MySQL"
              clickable={true}
            />
            <Chip
              label="PostgreSQL"
              size="small"
              color="secondary"
              variant="outlined"
              clickable={true}
            />
                <Chip
              label="GraphQL"
              size="small"
              color="secondary"
              variant="outlined"
              clickable={true}
            />
          </Grid>
        </div>

        <Chip
          label="backend"
          size="medium"
          color="secondary"
          variant="outlined"
          clickable={true}
        />
      </Grid>
    </div>
  );
};

export default HeaderChip;
