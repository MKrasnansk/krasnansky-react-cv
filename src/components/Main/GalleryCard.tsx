import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { tileData } from "../../assets/img/tileData";

const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    maxWidth: 200,
    marginBlock: 20,
    marginInline:10,
    background: '#2f2f2f'
  },
  media: {
    height: 100,
  },
});

export const GalleryCard: React.FC = () => {
  const classes = useStyles();
  return (

    <Grid
      container={true}
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      {tileData.map((tile)=> (
        <Card key={tile.id} className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography color='secondary' gutterBottom variant="h5" component="h2">
              {tile.title}
            </Typography>
            <Typography  variant="body2" color="primary" component="p">
             {tile.author}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="default">
            Learn More
          </Button>
        </CardActions>
      </Card>
      ))}
    </Grid>
  );
};
