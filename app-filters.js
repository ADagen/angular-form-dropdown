angular.module('App.filters', [])
	.filter('filterSelected', [function() {
		var filterSelected = function($base, selected1, selected2) {
			console.log('filterSelected', $base.base, selected1, selected2);
			
			if (!$base.$resolved) { return []; }
			var pair = currencies[selected1].name + '/' + currencies[selected2].name;
			console.log(pair);
			
			return $base.base.filter(function(currency) {
				return currency.name === pair;
			});
		};
		
		filterSelected.$stateful = true;
		return filterSelected;
	}]);