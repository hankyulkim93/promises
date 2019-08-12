/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var cbReview = require('./callbackReview.js')

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  let promise = new Promise(function(resolve, reject) {
    cbReview.pluckFirstLineFromFile(filePath, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
  })

  promise
  .then((res) => {return res})
  .catch((err) => {return err});
  // console.log("HELLO: ", cbReview.pluckFirstLineFromFile(filePath,callback))
  // pluckFirstLineFromFileAsync(filePath)
  // .then(console.log('hiiiii'))
  // .catch(console.log('error'));

  return promise;
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  let promise = new Promise(function(resolve, reject) {
    cbReview.getStatusCode(url, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
  });

  promise
  .then((res) => {return res})
  .catch((err) => {return err});

  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
