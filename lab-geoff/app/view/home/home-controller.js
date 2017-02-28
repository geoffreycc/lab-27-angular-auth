require('./home.scss');

module.exports = ['$log', '$location', 'authService', HomeController];

function HomeController($log) {
  $log.debug('HomeController');
}