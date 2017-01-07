;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.common')
        .directive('mouseoverDirective', mouseoverDirective);
    mouseoverDirective.$inject = [];

    function mouseoverDirective() {
        return {
            restrict : "A",
            link : function mouseoverDirectiveLinkFunction(scope,element){
                element.bind('mouseover',function(){
                    $("#console").append("<h6>mouseover!</h6>")
                })
            }
        }
    }
}(window, angular, undefined));
