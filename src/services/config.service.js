angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quizapireequiz-api-ree-env.eba-qkqetirw.us-east-2.elasticbeanstalk.com/';

    return service;
}]);