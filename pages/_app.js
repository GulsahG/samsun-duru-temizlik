import '../styles/fonts.sass';
import '../styles/style.scss';
import Nav from '../src/components/Nav';
import { NextSeo } from 'next-seo';
import { ThemeProvider, StyleReset } from 'atomize';
import { Provider as StyletronProvider } from "styletron-react";
import { styletron, debug } from "../helpers/styletron";
import Homepage from './Homepage';

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
          <script>0</script>
          <StyleReset />
          <NextSeo
            title="Samsun Duru Temizlik"
            description="Samsun Duru Temizlik Samsun'un her yerinde ev, ofis temizliği servisi veriyor."
            canonical={process.env.PAGE_URL}
            mobileAlternate={{
              media: 'only screen and (max-width: 640px)',
              href: process.env.MOBILE_PAGE_URL,
            }}
            openGraph={{
              type: 'website',
              locale: 'tr_TR',
              url: process.env.PAGE_URL,
              title: 'Samsun Duru Temizlik Şirketi',
              description: 'Samsun Duru Temizlik Samsun\'un her yerinde ev, ofis temizliği servisi veriyor.',
              images: [
                {
                  url: 'https://samsun-duru-temizlik.vercel.app/_next/static/images/logo-220a15d9f60b5967a6d7e50b3c4b8e34.svg',
                  width: 548,
                  height: 372,
                  alt: 'Şirket logosu-duru temizlik',
                }
              ],
              site_name: 'Duru Temizlik',
            }}
            additionalMetaTags={[{
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0'
            }]}
          />
          <Nav />
          <Homepage />
          <Component {...pageProps} />
      </ThemeProvider>
    </StyletronProvider>
  );
}

export default MyApp;
