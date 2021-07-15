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
        Ahoj v oblasti webu a aplikácií sa pohybujem už skoro dva roky.
        Spočiatku som hľadal cestu, ako sa niekam dostať v tomto obore. Vyštudoval
        som umeleckú školu, ktorá bola nabitá kreativitou po celý čas, čo som tam
        chodil. Môj záujem ani po rokoch práce v iných odvetviach neopadol. Rád
        by som zúžitkoval všetko, čo som sa naučil a pretavil to do vášne, ktorú
        mám k technológiám. Dnes som s programovaním vo fáze, kde už viem
        zápasiť aj so zložitejšími procesmi.
      </Typography>
      <Typography variant="body2" color="primary" component="p">
        Môj hlavný bod záujmu je React a z backendu Nest. Nie je to tak dávno, 
        čo ma tieto technológie oslovili, ale všetko, čo som sa naučil viem rozvíjať
        ďalej za pomoci týchto dvoch silných nástrojov. Každým dňom sa dostávam
        ďalej a som vďačný za každého, kto mi s tým pomohol, či už bývali
        kolegovia z teamu alebo autori na Stack Overflow.
      </Typography>
      <Grid container direction="row-reverse">
        <Typography>Ďakujem Michal!</Typography>
      </Grid>
    </Box>
  );
};
