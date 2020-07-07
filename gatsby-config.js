/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial",
    author: "Bema Konate",
    description: "Let's make a business",
    data: ['item 1', 'item 2'],
    person: { name: "peter", age: 32 }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4qa9it8bgcpr`,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },

  ],
}