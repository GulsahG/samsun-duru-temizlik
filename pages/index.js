import React from 'react';
import { NextSeo } from 'next-seo';
import Homepage from '../src/components/Homepage';

const IndexPage = () => {
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
              url: process.env.GRAPH_IMAGE_URL,
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