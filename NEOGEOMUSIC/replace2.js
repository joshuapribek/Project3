fs = require('fs');
fs.readFile('artistloc.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
        var output = "";
        for (var i=0; i<data.length; i++) {
            if (data.charCodeAt(i) <= 127) {
                output += data.charAt(i);
            }
        }
        console.log(output)
        fs.writeFile('newartistarray.json', output, function (err) {
            if (err) return console.log(err);
            console.log('head written');
          });
        }
    
  );


