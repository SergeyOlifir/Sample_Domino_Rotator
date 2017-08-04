
import angular from 'angular';

var scaleFactor = 1;
var rotAngle = 0;
var animationSpeed = 2; 
var topFace = null;
var bottomFace = null;

class DominoState {
  
    constructor($rootScope) {
        this.rootScope = $rootScope;
    };
    
    set scaleFactor (value) {
        if (value > 0) {
            scaleFactor = value;
        }
    };
    
    set animationSpeed (value) {
        if(value > 0) {
            animationSpeed = value;
        }
    };
    
    get scaleFactor () {
        return scaleFactor;
    };
    
    get rotAngle () {
        return rotAngle;
    };
    
    get animationSpeed () {
        return animationSpeed;
    };
    
    get topFace () {
        return topFace;
    };
    
    get bottomFace () {
        return bottomFace;
    };
    
    RotateLeft () {
        rotAngle += (-90);
    };
    
    RotateRight () {
        rotAngle += 90;
    };
    
    ClearState () {
        scaleFactor = 1;
        rotAngle = 0;
        animationSpeed = 2;
        topFace = null;
        bottomFace = null;
        
        this.rootScope.$broadcast('event:clearData');
    };
    
    SetFace (face) {
        if((topFace == null)) {
            topFace = face;
            return;
        }
        
        if((bottomFace == null)) {
            bottomFace = face;
            return;
        }
    };

}

export default angular.module('services.domino-state', [])
    .service('DominoState', DominoState)
    .name;
  
  