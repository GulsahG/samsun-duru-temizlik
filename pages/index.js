import React from 'react';
import { NextSeo } from 'next-seo';
import Homepage from './Homepage';

const IndexPage = () => {
  /* gets rid of the flash of unstyled elements
  useEffect(() => {
    const removeFouc = (foucElement) => {
      if(foucElement)
        foucElement.className = foucElement.className.replace('no-fouc', 'fouc');
    };

    removeFouc(document.querySelector('.no-fouc'));
  }, []);*/

  return (
    <div>
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
      />
      <Homepage />
    </div>
  );
};

export default IndexPage;