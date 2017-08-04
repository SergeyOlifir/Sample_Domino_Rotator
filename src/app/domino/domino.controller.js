export default class DominoController {
  constructor(DominoState) {
      this.dominoStateService = DominoState;
  }
}

DominoController.$inject = ['DominoState'];
