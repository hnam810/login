import React from "react";
import { Button, Checkbox, FormControlLabel, Grid, Link, TextField } from "@mui/material";
import useStyles from "./styles";
import ggIcon from "./icons/ggIcon.svg";
import glIcon from "./icons/gitlabIcon.svg";

const Login = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} display="flex">
      <Grid className={classes.form}>
        <img src={glIcon} alt="glIcon" className={classes.logo} />
        <p className={classes.textTitle}>Welcome back</p>
        <p className={classes.textSubTitle}>Welcome back! Please enter your details.</p>
        <Grid maxWidth="360px" m="auto">
          <Grid className={classes.input} display="flex" flexDirection="column">
            <p>Email</p>
            <TextField variant="outlined" classes={{ root: classes.inputRoot }} placeholder="Enter your email" />
            <p>Password</p>
            <TextField
              variant="outlined"
              type="password"
              classes={{ root: classes.inputRoot }}
              placeholder="Enter your password"
            />
          </Grid>
          <Grid className={classes.checkBox} display="flex" alignItems="center" justifyContent="space-between">
            <FormControlLabel control={<Checkbox size="small" />} label="Remember for 30 days" />
            <Link href="">Forgot password</Link>
          </Grid>
          <Grid className={classes.btn}>
            <Button variant="contained" fullWidth sx={{ background: "#7F56D9", border: "1px solid #7F56D9" }}>
              Sign in
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{ background: "#FFF", border: "1px solid #D0D5DD", color: "#000" }}
            >
              <img src={ggIcon} alt="ggIcon" />
              Sign in with Google
            </Button>
          </Grid>
          <p className={classes.textForgot}>
            Don’t have an account? <Link href="">Forgot password</Link>
          </p>
        </Grid>
      </Grid>
      <Grid className={classes.bkg} display="flex" flexDirection="column" justifyContent="flex-end">
        <Grid className={classes.info}>
          <p className="title">
            “Untitled has saved us thousands of hours of work. We’re able to spin up projects faster and take on more
            clients.”
          </p>
          <Grid>
            <p className="textName">Lula Meyers</p>
            <p className="textBy">Product Manager, Hourglass</p>
            <p className="textTy">Web Design Agency</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
