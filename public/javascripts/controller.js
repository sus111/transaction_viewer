var Constants = this.constants;
var c = new Constants();

c.submitButton.addEventListener('click', function(){
  removeStatus();
  c.responseBox.style.visibility = "hidden";
  c.submitButton.setAttributeNode(c.disabledState);
  c.submitButton.textContent = 'Submitting...';
  var userData = getLocation(sendObject);
});

c.background.addEventListener('click', function (event) {
  if (event.target !== c.submitButton && event.target !==
    c.responseBox) {c.responseBox.style.visibility = "hidden";
    removeStatus();
  }
});

function removeStatus(){
  if(c.status){c.responseBox.removeChild(c.status)};
}
