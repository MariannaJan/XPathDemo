const osmosis = require('osmosis');
const fs = require('fs');

let savedData = [];

osmosis
    .get('https://www.axios.com/health-care')
    .find('//h3[@class="Headline__headline--32KDc"]')
    .set({'Heading': 'text()',
            'content': ['..//p']})
    .data(data => {console.log(data);
        savedData.push(data);
    })
    .done(function() {
       fs.writeFile('data.json', JSON.stringify( savedData, null, 4), function(err) {
         if(err) console.error(err);
         else console.log('Data Saved to data.json file');
       })
    });