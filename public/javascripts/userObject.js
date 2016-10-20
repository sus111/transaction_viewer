var userAgent = new UserAgent().parse(navigator.userAgent);
var userIDs = ['mr_blonde', 'jules_winnfield', 'django', 'jBrown', 'v_vega', 'bill', 'ordell_robbie', 'clarence_w', 'mia_w'];
var transactionTypes = ['login', 'payment'];

function getLocation(sendObject) {
  navigator.geolocation.getCurrentPosition(function showPosition(position) {
    sendObject(userObject(position))
  });
}

userObject = function(position) {

  var userRequest = {
    userID: userIDs[randomise(userIDs)],
      transaction: {
        type: transactionTypes[randomise(transactionTypes)],
        time: moment().format()
      },
      location: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      },
      device: {
        browser: userAgent.browser,
        os: userAgent.os,
        platform: userAgent.platform
      }
    }
  return JSON.stringify(userRequest);
}

randomise = function (array){
  return Math.floor(Math.random() * array.length);
}
