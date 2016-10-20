var userAgent = new UserAgent().parse(navigator.userAgent);
var transactionTypes = ['login', 'payment'];
var userIDs = ['mr_blonde', 'jules_winnfield', 'django', 'jBrown',
'v_vega', 'bill', 'ordell_robbie', 'clarence_w', 'mia_w'];

function userObject(position) {

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
