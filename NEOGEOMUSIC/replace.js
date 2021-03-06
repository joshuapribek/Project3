const replace = require('replace-in-file');
const options = {
  files: './articloc.json',
  from: /}{/g,
  to: '},{',
};

try {
    const results = replace.sync(options);
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }