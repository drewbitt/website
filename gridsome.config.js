// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: "gridsome-source-buttercms",
      options: {
          authToken: process.env.VUE_APP_BUTTERCMS_API_KEY,
          collections: [''],
          pages: 'home',
          pageTypes: ''
        }
    },
  ],
  templates: {
    ButterPosts: '/blog/tech/:slug',
  }
}
