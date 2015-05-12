angular.module('App.filters', [])
	.filter('filterSelected', ['App.currency', function($currency) {
		var filterSelected = function($base, selects) {
			if (!$base.$resolved) { return []; }
			
			if (selects.selected1 == 99) {
				return $base.base;
			}
		
			var pair = $currency.getPair(selects.selected1, selects.selected2);
			
			return $base.base.filter(function(currency) {
				return currency.name === pair;
			});
		};
		
		filterSelected.$stateful = true;
		return filterSelected;
	}]);
