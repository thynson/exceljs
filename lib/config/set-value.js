'use strict';

var PromishLib = require('../utils/promish');

function setValue(key, value, overwrite) {
  if (overwrite === undefined) {
    // only avoid overwrite if explicitly disabled
    overwrite = true;
  }
  switch(key.toLowerCase()) {
    case 'promise':
      if (!overwrite && PromishLib.Promish) return;
      PromishLib.Promish = value;
      break;
  }
}

module.exports = setValue;