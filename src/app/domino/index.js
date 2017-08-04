import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './domino.routes';
import DominoController from './domino.controller';
import DominoFacesController from './domino.face.controller';
import DominoState from './domino.state.service';
import DominoAllFaces from './domino.allfaces.service';
import DominoSettingsController from './domino.settings.controller';
import DominoViewController from './domino.view.controller';

export default angular.module('app.domino', [uirouter, DominoState, DominoAllFaces])
  .config(routing)
  .controller('DominoController', DominoController)
  .controller('DominoFacesController', DominoFacesController)
  .controller('DominoSettingsController', DominoSettingsController)
  .controller('DominoViewController', DominoViewController)
  .name;