var angular = require('angular')

var app = angular.module('app', [
    require('angular-ui-router').default
    // https://stackoverflow.com/questions/48771684/angular-1-6-9-uirouter-error-ngcpws-cant-copy-making-copies-of-window-or/50669244
])

app.config(
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $urlRouterProvider.otherwise('/')
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })

        $stateProvider
        .state('app', {
            url: '/',
            views: {
                content: {
                    template: require('./content.html')
                }
            }
        })

    }
)
