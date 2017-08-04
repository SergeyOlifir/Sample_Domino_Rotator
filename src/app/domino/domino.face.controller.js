export default class DominoFacesController {
  constructor(DominoState, DominoAllFaces) {
      this.allAvaliableFaces = DominoAllFaces;
      
      this.SelectFace = function(face) {
          DominoState.SetFace(face);
      }
  }
};

DominoFacesController.$inject = ['DominoState', 'DominoAllFaces']
