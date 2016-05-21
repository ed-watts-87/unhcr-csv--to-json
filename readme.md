# UNHCR CSV to JSON converter

## Versions
* Version 1 April 2016 - First release

## Description
Takes pipe delimited CSV of phrases and their translations and converts to JSON as per [this JSON](https://github.com/translation-cards/default-deck/blob/master/txc/card_deck.json) format.

## Requirements
NodeJS (Built and tested with v0.12.2)

## How to use
The following is a step by step list of instructions to follow:
### Either
Run
```
$ npm install unhcr-csv-to-json
```
### Or..
* Ensure [NodeJS](https://nodejs.org/) is installed
* Fork/Clone this project
* Run
```
$ npm install
```

This will use NPM to download the required node modules (as described above). If there are any errors, then try and debug.
* Run
```
node index.js /path/to.csv
```

## Output
The application will read in the CSV and output the data to data.json in the root of the folder.
