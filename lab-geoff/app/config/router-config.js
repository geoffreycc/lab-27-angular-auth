module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('signup', '/join#signup');
  $urlRouterProvider.when('', '/join#signup');
  $urlRouterProvider.when('/', '/join$signup');
  $urlRouterProvider.when('/login', '/join#login');

  let states = [
    {
      name: 'landing',
      url: '/join',
      template: require('../view/landing/landing.html'),
      controller: 'LandingController',
      controllerAs: 'landingCtrl'
    },
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    }
  ];

  states.forEach(state => {
    $stateProvider.state(state);
  });
}