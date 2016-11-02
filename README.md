## Transaction Viewer
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
