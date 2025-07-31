require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `Recipe Book`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image",'gatsby-plugin-robots-txt', "gatsby-plugin-sharp", "gatsby-plugin-sass","gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-hygraph',
      options: {
        endpoint: process.env.HYGRAPH_ENDPOINT,
        token: process.env.HYGRAPH_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
      name: `Emre's Recipe Book`,
      short_name: `starter`,
      display: `minimal-ui`,
      icon: `src/images/kasik.png`, // This path is relative to the root of the site.
      }
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};