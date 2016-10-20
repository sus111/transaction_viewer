function userObject(position) {

  var userRequest = {
    userID: c.userIDs[randomise(c.userIDs)],
      transaction: {
        type: c.transactionTypes[randomise(c.transactionTypes)],
        time: moment().format()
      },
      location: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      },
      device: {
        browser: c.userAgent.browser,
        os: c.userAgent.os,
        platform: c.userAgent.platform
      }
    }
  return JSON.stringify(userRequest);
}
