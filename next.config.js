
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['wj1MibRubqzWuU8RZQrXvd'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  