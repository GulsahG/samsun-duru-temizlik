import '../styles/fonts.sass';
import Nav from '../src/components/Nav';
import  { BreakpointProvider } from 'react-socks';
import { ThemeProvider, StyleReset } from 'atomize';
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../helpers/styletron";

const MyApp = ({ Component, pageProps }) => {
  const theme = {
    colors: {
      primaryBlue: '#1c68ce',
      accentBlue: '#7ce4ed',
      primaryGreen: '#359353',
      accentGreen: '#b3e4c3',
      alpha: '#26262a'
    },
    fontFamily: {
      primary: "Monda, sans-serif",
      secondary: "Julius Sans One, sans-serif"
    },
    textSize: {
      size: {
        h1: "62px",
        h2: "42px",
        h3: "26px",
        body: "16px",
        smallB: "12px"
      },
      height: {
        h1: "1.5",
        h2: "1.5",
        h3: "1.5",
        body: "1.8",
        smallB: "1.8"
      }
    }
  };

  return (
    <StyletronProvider value={styletron}>
      <ThemeProvider theme={theme}>
        <BreakpointProvider>
          <StyleReset />
          <Nav />
          <Component {...pageProps} />
        </BreakpointProvider>
      </ThemeProvider>
    </StyletronProvider>
  );
}

export default MyApp;
