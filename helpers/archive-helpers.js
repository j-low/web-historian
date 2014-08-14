var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  // read sites.txt file
  fs.readFile(exports.paths.list, function(err, data){
    if(err) {
      console.log('READ_LIST ERROR: ', err);
      return;
    }
    callback(data.toString());
  });
};

exports.isUrlInList = function(url, list){
  // iterate over list
  list = list.split('\n');
  var found = false;
  list.forEach(function(listUrl) {
    if( listUrl.match(url) ){
      if( listUrl !== ''){
        found = true;
      }
    }
  });
  console.log('found: ', found);
  return found;
};

exports.getSiteData = function(url, callback){
  fs.readFile(exports.paths.archivedSites+url, function(err, data){
    if(err) {
      console.log('GET_SITE_DATA ERROR: ', err);
      return;
    }
    callback(data.toString());
  });
}

exports.addUrlToList = function(){
};

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
};
