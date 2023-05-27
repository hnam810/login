import { createStyles, makeStyles } from "@mui/styles";
import bkg from "./icons/bkg.jpg";

export default makeStyles((theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
    form: {
      width: "50%",
      margin: "auto",
      "@media only screen and (max-width: 960px)": {
        width: "100%",
        margin: "auto 15px",
      },
    },
    bkg: {
      backgroundImage: `url(${bkg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "right",
      width: "50%",
      margin: 24,
      borderRadius: 20,
      "@media only screen and (max-width: 960px)": {
        display: "none !important",
      },
    },
    input: {
      "& p": {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        color: "#344054",
        marginBottom: 6,
        marginTop: 20,
      },
    },
    logo: {
      width: 30,
      margin: "auto",
      display: "block",
    },
    textTitle: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "38px",
      marginBottom: 12,
      marginTop: 24,
      textAlign: "center",
      color: "#101828",
    },
    textSubTitle: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#667085",
      marginBottom: 12,
      textAlign: "center",
    },
    inputRoot: {
      background: "#FFFFFF",
      "& input": {
        padding: "10px 14px",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
      },
      "& fieldset": {
        border: "1px solid #D0D5DD !important",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: "8px",
      },
    },
    checkBox: {
      marginTop: 15,
      marginBottom: 15,
      "& span": {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "20px",
        color: "#344054",
      },
      "& a": {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "20px",
        color: "#6941C6",
        textDecoration: "unset",
      },
    },
    btn: {
      "& button": {
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "24px",
        textTransform: "none",
        padding: "10px 0",
        marginBottom: 16,
        "&:hover": {
          backgroundColor: "#bbadd3b8",
          boxShadow: "none",
        },
        "& img": {
          width: 24,
          paddingRight: 12,
        },
      },
    },
    info: {
      height: "322px",
      background: "rgba(255, 255, 255, 0.3)",
      borderTop: "1px solid rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(12px)",
      borderRadius: '0px 0px 20px 20px',
      "& .title": {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "30px",
        lineHeight: "30px",
        color: "#000",
        padding: "32px",
        margin: 0,
      },
      "& .textName": {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "36px",
        lineHeight: "44px",
        color: "#000",
        paddingBottom: "12px",
        paddingLeft: 32,
        margin: 0,
      },
      "& .textBy": {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "28px",
        color: "#000",
        paddingBottom: "12px",
        paddingLeft: 32,
        margin: 0,
      },
      "& .textTy": {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
        color: "#000",
        paddingBottom: "4px",
        paddingLeft: 32,
        margin: 0,
      },
    },
    textForgot: {
      textAlign: "center",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      color: "#475467",
      "& a": {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "20px",
        color: "#6941C6",
        textDecoration: "unset",
      },
    },
  })
);

// export default useStyles;
