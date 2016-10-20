(function(exports){

  function Constants(){
    this.userAgent = new UserAgent().parse(navigator.userAgent);
    this.background = document.querySelector('.background');
    this.responseBox = document.querySelector('.response-box');
    this.status = document.querySelector('.status');
    this.submitButton = document.querySelector('.submit-button');
    this.disabledState = document.createAttribute('disabled');
    this.userIDs = ['mr_blonde', 'jules_winnfield', 'django', 'jBrown',
    'v_vega', 'bill', 'ordell_robbie', 'clarence_w', 'mia_w'];
    this.transactionTypes = ['login', 'payment'];
  }

  exports.constants = Constants;
})(this);
