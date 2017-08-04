routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('domino', {
        url: '/domino',
        views: {
            '@': {
                template: require('./domino.template.html'),
                controller: 'DominoController',
                controllerAs: 'domino',
            },
            
            'facesControl@domino': {
                template: require('./faces.template.html'),
                controller: 'DominoFacesController',
                controllerAs: 'dominoFaces',
            },
            
            'dominoView@domino': {
                template: require('./domino.view.template.html'),
                controller: 'DominoViewController',
                controllerAs: 'dominoView'
            },
            
            'settingsView@domino': {
                template: require('./settings.view.template.html'),
                controller: 'DominoSettingsController',
                controllerAs: 'settings'
            }
        }
    });
}