function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: 'templates/skills-member.html'
    };
}

angular.module('skillsApp').directive('skillsMember', skillsMember);