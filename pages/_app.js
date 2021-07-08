import '../styles/fonts.sass';
import '../styles/style.scss';
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
        h1: "56px",
        h2: "42px",
        h3: "24px",
        body: "18px",
        smallB: "14px"
      },
      height: {
        h1: "1.5",
        h2: "1.5",
        h3: "1.5",
        body: "1.8",
        smallB: "1.8"
      }
    },
    grid: {
      containerWidth: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1156px",
        xl: "1350px"
      },
      gutterWidth: "12px",
    }
  };

  return (
    <StyletronProvider value={styletron}>
      <ThemeProvider theme={theme}>
        <BreakpointProvider>
          <script>0</script>
          <StyleReset />
          <Nav />
          <Component {...pageProps} />
        </BreakpointProvider>
      </ThemeProvider>
    </StyletronProvider>
  );
}

export default MyApp;
