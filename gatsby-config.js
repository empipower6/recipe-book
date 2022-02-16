require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `Recipe Book`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image",'gatsby-plugin-robots-txt', "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-plugin-sass","gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-graphcms',
      options: {
        // Your GraphCMS API endpoint. Available from your project settings.
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
        token: process.env.GRAPHCMS_TOKEN
      },
  },{
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