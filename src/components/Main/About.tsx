import { Avatar, Box, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import faceAvatar from "../../assets/img/krasnansky.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17),
      marginBottom: 10,
    },
  })
);

export const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container justify="center">
        <Avatar
          alt="Michal Krasnansky"
          src={faceAvatar}
          className={classes.large}
          sizes="xl"
        />
      </Grid>
      <Typography variant="body1" color="secondary" component="p">
        Ahoj v oblasti webu a aplikaciji sa pohybujem už skoro dva roky.
        Spočiatku som hľadal cestu, ako sa niekam dostať v tomto obore. Vyšiel
        som umeleckú školu, ktorá bola nabitá kreativitou celý čas, čo som tam
        chodil. Môj záujem ani po rokoch práce v iných odvetviach neopadol. Rád
        by som zužitkoval všetko, čo som sa naučil a pretavil to do vášne, ktorú
        mám k technológiám. Dnes som s programovaním vo fáze, kde už viem
        zápasiť aj so zložitejšími procesmi.
      </Typography>
      <Typography variant="body2" color="primary" component="p">
        Hlavný bod záujmu mám React a z backendu Nest. Tieto technológie ma
        oslovili nieje to tak dávno, ale všetko, čo som sa naučil môžem rozvíjať
        ďalej za pomoci týchto dvoch silných nástrojov. Každým dnom sa dostávam
        ďalej a som vďačný za každého kto mi s tím pomohol či už bývali
        kolegovia z teamu alebo autori na Stack Overflow
      </Typography>
      <Grid container direction="row-reverse">
        <Typography>Ďakujem Michal!</Typography>
      </Grid>
    </Box>
  );
};
