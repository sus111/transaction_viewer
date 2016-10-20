var background = document.querySelector('.background');
var responseBox = document.querySelector('.response-box');
var status = document.querySelector('.status');
var submitButton = document.querySelector('.submit-button');
var disabledState = document.createAttribute('disabled');

submitButton.addEventListener('click', function(){
  removeStatus();
  responseBox.style.visibility = "hidden";
  submitButton.setAttributeNode(disabledState);
  submitButton.textContent = 'Submitting...';
  var userData = getLocation(sendObject);
});

function removeStatus(){
  var status = document.querySelector('.status');
  if(status){responseBox.removeChild(status)};
}

function sendObject(userData){
  console.log(userData);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/transaction');
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(userData);
  xhr.onreadystatechange = function() {
    handleClick(xhr);
  };
};

function handleClick(xhr){
  if (xhr.readyState === 4 && xhr.status === 200){
    responseBox.style.visibility = "visible";
    var response = JSON.parse(xhr.responseText);
    var p = document.createElement('p');
    p.textContent = response.status;
    p.setAttribute('class', 'status');
    responseBox.appendChild(p);
    submitButton.removeAttributeNode(disabledState);
    submitButton.textContent = 'Submit Request';
  }
}

background.addEventListener('click', function (event) {
  if (event.target !== submitButton && event.target !== responseBox) {
    responseBox.style.visibility = "hidden";
    removeStatus();
  }
});
