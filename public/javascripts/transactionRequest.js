function getLocation(sendObject) {
  navigator.geolocation.getCurrentPosition(function showPosition(position) {
    sendObject(userObject(position))
  });
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
    c.responseBox.style.visibility = "visible";
    var response = JSON.parse(xhr.responseText);
    var p = document.createElement('p');
    p.textContent = response.status;
    p.setAttribute('class', 'status');
    c.responseBox.appendChild(p);
    c.submitButton.removeAttributeNode(c.disabledState);
    c.submitButton.textContent = 'Submit Request';
  }
}
