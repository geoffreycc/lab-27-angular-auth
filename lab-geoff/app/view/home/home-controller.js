require('./home.scss');

module.exports = ['$log', '$location', 'authService', HomeController];

function HomeController($log, $location, authService) {
  $log.debug('HomeController');

  this.logOut = function() {
    $log.debug('homeCtrl.logOut()');

    authService.logout();
    //redirect to login
    $location.url('/login');
  };
}