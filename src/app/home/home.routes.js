routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.template.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}