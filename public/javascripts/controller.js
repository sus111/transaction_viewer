var background = document.querySelector('.background');
var disabledState = document.createAttribute('disabled');
var responseBox = document.querySelector('.response-box');
var status = document.querySelector('.status');
var submitButton = document.querySelector('.submit-button');


submitButton.addEventListener('click', function(){
  removeStatus();
  responseBox.style.visibility = "hidden";
  submitButton.setAttributeNode(disabledState);
  submitButton.textContent = 'Submitting...';
  var userData = TransactionRequest.getLocation(TransactionRequest.sendObject);
});

background.addEventListener('click', function (event) {
  if (event.target !== submitButton && event.target !==
    responseBox) {responseBox.style.visibility = "hidden";
    removeStatus();
  }
});

function removeStatus(){
  var status = document.querySelector('.status');
  if(status){responseBox.removeChild(status)};
}
