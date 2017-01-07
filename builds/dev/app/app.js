;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app', ['app.common'])
}(window, angular, undefined));
;
(function(window, angular, undefined) {
    'use strict';
    angular.module('app.common', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
}(window, angular, undefined));

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
