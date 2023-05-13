module.exports = {
  client: {
    service: {
      name: 'my-jopa',
      // URL to the GraphQL API
      url: 'https://spacex-production.up.railway.app/',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}