var angular = require('angular')
var axios = require('axios')

var app = angular.module('app', [
    require('angular-ui-router')
])

app.config(
    function($urlRouterProvider, $stateProvider, $locationProvider){
        $stateProvider
            .state('createProfile', {
                url: '/main',
                views: {
                    content: {
                        template: require('./content.html')
                    }
                }
            })
    $urlRouterProvider.otherwise('/main')
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
})
