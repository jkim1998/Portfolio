import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'v77o2r84',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.sk4NVuL60ZCzZy8ITVbab1MoR01QWiKH716b2WK1e2W5sPpWIgsB7mRMVXQuG3gO2S48Ks48yKHd1YT2H69RifmW0ScDrSlgntPrtu4v2dtnJgdU6Woo2JuK9CyNUXlPp2uznneAkVozIZHT1qOPlN1IO13BxhuwSaST62muVKN0pW0eUEcB,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);