function dropdown($timeout, $currency) {
	
	function initialize(scope, iElement, iAttrs) {
		scope.expanded = false;
		scope.selectedName = $currency.expand(scope.selected).name;
		
		scope.setCurrency = function(id) {
			scope.selected = id;
			scope.selectedName = $currency.expand(scope.selected).name;
			scope.expanded = false;
		}
		
		scope.setExpanded = function() {
			scope.expanded = true;
		}
		
		scope.setCollapsed = function() {
			// в ангуляре вроде есть какие-то приоритеты
			// вместо сеттаймаута с 0 миллисекунд использовать эти приоритеты?
			$timeout(function() {
				scope.expanded = false;
			}, 100);
		}
	}

	return {
		restrict: 'E',
		scope: {
			list	 : '=list',
			selected : '=selected'
		},
		templateUrl: 'dropdown-template.html',
		link: initialize
	}
}