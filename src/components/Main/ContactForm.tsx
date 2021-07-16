import React, { ChangeEvent, FormEvent, useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  Button,
  CircularProgress,
  FormControl,
  Icon,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import axios, { AxiosResponse } from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      display: "flex",
      flexWrap: "wrap",
      margin: theme.spacing(1),
    },
    root: {
      marginBottom: 20,
    },
    color: {
      color: "white",
      marginBottom: 5,
    },
    back: {
      background: "#333",
    },
    ful: {
      width: "100%",
    },
    err: {
      "& .Mui-error": {
        color: "#ccc",
      },
      "& .MuiFormHelperText-root": {
        color: "#ccc",
      },
    },
    progress: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
      position: "absolute",
    },
  })
);

export const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errName, seterrName] = useState<boolean>(true);
  const [errEmail, seterrEmail] = useState<boolean>(true);
  const [errSubject, seterrSubject] = useState<boolean>(true);
  const [errMessage, seterrMessage] = useState<boolean>(true);
  const [required, setRequired] = useState<boolean>(false);
  const [progress, setProgress] = useState(false);
  const [send, setSend] = useState(false);
  const classes = useStyles();
  const handleName = (e: ChangeEvent<HTMLInputElement>): void => {
    if (name.length > 2) {
      seterrName(false);
    } else {
      seterrName(true);
    }
    setName(e.target.value);
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    if (new RegExp(/[\w-]+@([\w-]+\.)+[\w-]+/gm).test(email)) {
      seterrEmail(false);
    } else {
      seterrEmail(true);
    }
    setEmail(e.target.value);
  };
  const handleSubject = (e: ChangeEvent<HTMLInputElement>): void => {
    if (subject.length > 4) {
      seterrSubject(false);
    } else {
      seterrSubject(true);
    }
    setSubject(e.target.value);
  };
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (message.length > 10) {
      seterrMessage(false);
    } else {
      seterrMessage(true);
    }
    setMessage(e.target.value);
  };
  const handleOnSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setProgress(true);
    if (errName || errEmail || errSubject || errMessage) {
      setRequired(true);
      setProgress(false);
      return;
    } else {
      const objectMessage: Record<string, any> = {
        name,
        email,
        subject,
        message,
      };
      try {
        await axios
          .post(
            'https://api-cv-mail.herokuapp.com/',
            objectMessage
          )
          .then((response: AxiosResponse) => {
            if (response.status === 201) {
              setSend(true);
              setProgress(false);
            }
          });
      } catch (error) {
        console.log(error);
        setProgress(false);
      }
    }
  };
  return (
    <Grid container alignContent="center" alignItems="center">
      <form
        id="form"
        name="sendMessageForm"
        onSubmit={handleOnSubmit}
        className={classes.ful}
        noValidate
        autoComplete="off"
      >
        <FormControl className={classes.root} required fullWidth size="medium">
          <TextField
            disabled={send ? true : false}
            className={classes.err}
            helperText={required ? "This field is required!" : ""}
            type="text"
            value={name}
            onChange={handleName}
            label="Name"
            id="username"
            InputProps={{
              className: classes.color,
              startAdornment: (
                <InputAdornment position="start">
                  {name.length < 2 ? (
                    <CancelIcon color="primary" />
                  ) : (
                    <CheckCircleIcon color="secondary" />
                  )}
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            disabled={send ? true : false}
            className={classes.err}
            helperText={required ? "Email is not vallid!" : ""}
            type="email"
            value={email}
            onChange={handleEmail}
            required
            label="E-mail"
            id="email"
            InputProps={{
              className: classes.color,
              startAdornment: (
                <InputAdornment position="start">
                  {errEmail ? (
                    <CancelIcon color="primary" />
                  ) : (
                    <CheckCircleIcon color="secondary" />
                  )}
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            disabled={send ? true : false}
            className={classes.err}
            helperText={required ? "This field is required!" : ""}
            type="text"
            onChange={handleSubject}
            value={subject}
            required
            label="Subject"
            id="subject"
            InputProps={{
              className: classes.color,
              startAdornment: (
                <InputAdornment position="start">
                  {errSubject ? (
                    <CancelIcon color="primary" />
                  ) : (
                    <CheckCircleIcon color="secondary" />
                  )}
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            disabled={send ? true : false}
            className={classes.err}
            helperText={required ? "This field is required!" : ""}
            type="textarea"
            onChange={handleMessage}
            value={message}
            required
            label="Message"
            multiline
            rows={3}
            rowsMax={5}
            InputProps={{
              className: classes.color,
              startAdornment: (
                <InputAdornment position="start">
                  {errMessage ? (
                    <CancelIcon color="primary" />
                  ) : (
                    <CheckCircleIcon color="secondary" />
                  )}
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="outlined"
            color="primary"
            disabled={send ? true : false}
            endIcon={
              send ? <CheckCircleIcon color="secondary" /> : <Icon>send</Icon>
            }
          >
            {progress ? (
              <div className={classes.progress}>
                <CircularProgress size={30} color="secondary" />
              </div>
            ) : (
              ""
            )}
            Send
          </Button>
        </FormControl>
      </form>
    </Grid>
  );
};
