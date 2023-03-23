import { Fade } from "react-reveal";

export const FadeRight = ({ children }) => {
  return (
    <Fade right duration={1500}>
      {children}
    </Fade>
  );
};

export const FadeLeft = ({ children }) => {
  return (
    <Fade left duration={1500}>
      {children}
    </Fade>
  );
};

export const FadeTop = ({ children }) => {
  return (
    <Fade top duration={1500}>
      {children}
    </Fade>
  );
};

export const FadeBottom = ({ children }) => {
  return (
    <Fade bottom duration={1500}>
      {children}
    </Fade>
  );
};

export const FadeClear = ({ children, ...options }) => {
  return (
    <Fade duration={1500} {...options}>
      {children}
    </Fade>
  );
};
