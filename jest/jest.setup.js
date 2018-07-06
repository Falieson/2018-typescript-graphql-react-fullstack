// # JEST Setup

// ## Enzyme
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

// ## Fetch for Apollo Link Http
global.fetch = require('jest-fetch-mock')