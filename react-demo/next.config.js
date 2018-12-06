const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
module.exports = withCss(withLess({
  useFileSystemPublicRoutes: false,
  cssModules: false,
}));