import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CardMedia from "@material-ui/core/CardMedia";

const tutorialSteps = [
  {
    title: "Proyecto Somos Mas Alkemy",
    urlVideo: "https://www.youtube.com/embed/C-b-SEvSTXQ",
  },
  {
    title: "Challenge Tabla de comercios",
    urlVideo:
      "https://www.youtube.com/embed/fhf9wsKgIOA",
  },
  {
    title: "Challenge Alkemy",
    urlVideo:
      "https://www.youtube.com/embed/OVw1j94W5qc",
  },
  
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    textAlign: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 355,
    minWidth: 300,
    maxWidth: 550,
    overflow: "hidden",
    display: "block",
  },
}));

export default function Carrousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].title}</Typography>
      </Paper>
      <CardMedia
        className={classes.img}
        component="iframe"
        title="Your Title"
        src={tutorialSteps[activeStep].urlVideo}
        allowfullscreen="allowfullscreen"
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
