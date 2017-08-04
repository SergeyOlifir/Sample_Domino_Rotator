import angular from 'angular';

export default angular.module('services.domino-allfaces', [])
    .factory('DominoAllFaces', () => { return {
        one: [
            'dot fifth-dot'
        ],
        
        two: [
            'dot second-dot',
            'dot third-dot'
        ],
        
        three: [
            'dot second-dot',
            'dot third-dot',
            'dot fifth-dot'
        ],
        
        four: [
            'dot first-dot',
            'dot second-dot',
            'dot third-dot',
            'dot forth-dot',
        ],
        
        five: [
            'dot first-dot',
            'dot second-dot',
            'dot third-dot',
            'dot forth-dot',
            'dot fifth-dot'
        ],
        
        six: [
            'dot first-dot',
            'dot second-dot',
            'dot third-dot',
            'dot forth-dot',
            'dot sixth-dot',
            'dot seventh-dot'
        ]
    }})
    .name;