module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', SignupController],
};

function SignupController($log, $location, authService) {
  $log.debug('SignupController');

  //get token

  this.signup = function(user) {
    $log.debug('signupCtrl.signup');

    //signup
  };
}