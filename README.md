## Callsign Task - Transaction Viewer
<br>
The front-end of this app is written in Javascript, without any frameworks or libraries like JQuery, and the back-end is in Node and Express.

If you click on the 'Submit Request' button, the client-side JavaScript creates a user object (with data such as transaction, location and details about their device) which is sent to the back-end and logged in the console. Upon request of this object, the back-end serves up a random response of either 'successful', 'fraudulent' or 'timed_out', which is displayed underneath the submit button on the user interface. If a user clicks on the background, the response status will be cleared and the user can submit another request.

In order to run the app, run the following commands:
```
npm install
```
```
npm start
```

To run the tests, run the command:
```
npm test
```

<br>
#### Creating the User Object
- User ID: a userID in the form of a string chosen at random from an array of strings.
- Transaction Type: the transaction type is a string chosen at random from an array. The time is found via the date library moment, which also formats the time to the ISO 8601 format with the format() method.
- Location: is found with geolocation, which is also the cause of the response coming back quite slowly, while a device's co-ordinates are found.
- Device: details about the user's device are set through the request header of the initial get request, which are then available for use by the client-side JavaScript via the package express-useragent.

#### Communication between the front and back ends
Once the values have been set for the user object, it's sent to the back-end of the application via JSON. In response, the back-end sends a JSON with the status of the response.

#### Testing
The app is tested with Mocha, Zombie and Supertest. There are feature tests to ensure the correct data displays on the page, as well as tests to check the server makes the correct requests/responses.

#### Styling
The app was styled to fit with the Callsign design scheme.
