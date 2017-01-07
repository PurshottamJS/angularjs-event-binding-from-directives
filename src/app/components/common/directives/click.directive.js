;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('clickDirective', clickDirective);
    clickDirective.$inject = [];

    function clickDirective() {
        return {
            restrict : "A",
            link : function clickDirectiveLinkFunction(scope, element){
                element.bind('click',function(){
                    $("#console").append("<h6>Clicked!</h6>")
                })
            }
        }
    }
}(window, angular, undefined));
