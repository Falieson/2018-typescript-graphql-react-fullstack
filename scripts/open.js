/** `nps open`
 *
 * the particular way you open a browser changes based on your os
 * TODO: use node.os() to try and do some sensible defaulting
 *
 * windows: 'start'
 * osx:     'open'
 * linux:   'gnome-open' or 'google-chrome-stable'
 *
**/

module.exports = {
  default: 'nps open.web',
  web: 'google-chrome-stable http://localhost:3000/',
  gql: 'google-chrome-stable http://localhost:3000/graphiql',
}
