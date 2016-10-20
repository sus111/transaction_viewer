var TransactionRequest = (function() {

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

  return {
    getLocation: function(sendObject) {
      navigator.geolocation.getCurrentPosition(function showPosition(position) {
        sendObject(userObject(position))
      });
    },

    sendObject: function(userData){
      console.log(userData);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/transaction');
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(userData);
      xhr.onreadystatechange = function() {
        handleClick(xhr);
      };
    }
  }

})();
