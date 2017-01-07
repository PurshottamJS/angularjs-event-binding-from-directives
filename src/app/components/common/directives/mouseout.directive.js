;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('mouseoutDirective', mouseoutDirective);
    mouseoutDirective.$inject = [];

    function mouseoutDirective() {
        return {
            restrict : "A",
            link : function mouseoutDirectiveLinkFunction(scope, element){
                element.bind('mouseout',function(){
                    $("#console").append("<h6>MouseOut!</h6>")
                })
            }
        }
    }
}(window, angular, undefined));
