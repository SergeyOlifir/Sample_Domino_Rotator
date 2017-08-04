export default class DominoSettingsController {
    constructor(DominoState, $scope) {
        this.scaleFactor = 10;
        this.animationSpeed = 20;
        this.dominoStateService = DominoState;
        
        $scope.$on('event:clearData', (function(){
            this.scaleFactor = 10;
            this.animationSpeed = 20;
        }).bind(this));
    };
    
    UpdateScaleFactor () {
        this.dominoStateService.scaleFactor = this.scaleFactor / 10;
    };
    
    UpdateAnimationSpeed () {
        this.dominoStateService.animationSpeed = this.animationSpeed / 10;
    }
    
}

DominoSettingsController.$inject = ['DominoState', '$scope'];