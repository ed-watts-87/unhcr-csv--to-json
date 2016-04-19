var fs = require('fs');
var iconv = require('iconv-lite');
var Converter = require("csvtojson").Converter;
var converter = new Converter({
  delimiter: '|',
  noheader: true
});

var jsonOutput = {
  "license-url": "http://creativecommons.org/licenses/by/4.0/",
  "readme": "Default content to be built into distributable apk. Translations by: http://translatorswithoutborders.org and http://mercycorps.org",
  "locked": false,
  "timestamp": new Date().getTime(),
  "deck_label": "Humanitarian Responder - Transit Centre",
  "publisher": "UNHCR Innovation",
  "id": "org.innovation.unhcr.txc-default-deck",
  "source_language": "en",
  "languages": [{
    "iso_code": "ar",
    "cards": [

    ]
  }, {
    "iso_code": "fa",
    "cards": [

    ]
  }]
};
var converterStream = iconv.decodeStream('utf16');

converter.on("end_parsed", function() {
  var json2write = JSON.stringify(jsonOutput, null, 4);
  fs.writeFile('data.json', json2write, function (err) {
    if (err) return console.log(err);
    console.log('Data written to JSON!');
  });

});

converter.on("record_parsed", function(jsonObj) {
  if (jsonObj.field1 === "META:Background");
  else {
    var card = {
      "dest_txt": jsonObj.field4,
      "card_label": jsonObj.field1,
      "dest_audio": jsonObj.field2
    };
    if (jsonObj.field3 === 'Arabic') {
      jsonOutput.languages[0].cards.push(card);
    } else if (jsonObj.field3 === "Farsi") {
      jsonOutput.languages[1].cards.push(card);
    }
  }
});

var filename = process.argv[2];

var file = fs.createReadStream(filename);
file.pipe(converterStream).pipe(converter);
