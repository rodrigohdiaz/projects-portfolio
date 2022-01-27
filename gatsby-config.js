module.exports = {
  siteMetadata: {
    title: "rodrigo-diaz",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {}
        },
          resolve: 'gatsby-plugin-html-attributes',
          options: {
            lang: 'en'
          }
      
      }
      
    },
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
};
