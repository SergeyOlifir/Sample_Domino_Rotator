export default class DominoViewController {
    constructor(DominoState) {
        this.dominoStateService = DominoState;
    }
}

DominoViewController.$inject = ['DominoState'];