var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
};

exports.sendResponse = function(res, data, status){
  status = status || 200;
  res.writeHead(status, headers);
  res.end(data);
};

exports.getPage = function(req, res){
  if(req.url === '/'){
    fs.readFile('/Users/student/Code/Collin_Kokotas/2014-07-web-historian/web/public/index.html', function(err, data){
      if(err){
        console.log('ERROR: ', err);
        return;
      }
      exports.sendResponse(res, data, 200);
    });

  }else{
    archive.readListOfUrls(function(list){
      var inList = archive.isUrlInList(req.url, list);
      if(inList){
        //get site data from archive
        archive.getSiteData(req.url, function(htmlString) {

        });
        //load site
      }else{
        //get site data from specified site
        //add site data to archive
        //load site
      }
    });
    exports.sendResponse(res, null, 200);

  }
};

exports.handleCORS = function(req, res){
  sendResponse(res);
};


// As you progress, keep thinking about what helper functions you can put here!
