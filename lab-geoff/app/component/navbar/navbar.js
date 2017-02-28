require('./navbar.js');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$rootScope', '$location', 'authService', NavbarController],
  controllerAs: 'navBarCtrl'
};

function NavbarController($log, $rootScope, $location, authService) {
  $log.debug('NavbarController');

  this.logOut = function() {
    $log.debug('homeCtrl.logOut()');

    authService.logout();
    
    $location.url('/login');
  };
}