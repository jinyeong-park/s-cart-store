const googleTrends = require('google-trends-api');

// googleTrends.apiMethod(optionsObject, [callback])

googleTrends.interestOverTime({keyword: 'Women\'s march'})
.then(function(results){

  var resultsJSON = JSON.parse(results);

  var data = resultsJSON["default"];
  var timelineData = data["timelineData"];

  timelineData.forEach(function(timestamp) {

  })


  console.log('These results are awesome', results);
})
.catch(function(err){
  console.error('Oh no there was an error', err);
});

googleTrends.interestOverTime({keyword: 'Women\'s march'}, function(err, results){
  if(err) console.error('there was an error!', err);
  else console.log('my sweet sweet results', results);
})