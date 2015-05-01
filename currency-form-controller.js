function currencyForm($scope, $resource) {
	console.log('currencyForm start');
	
	var continueCurrency = 0; // валюта, для которой появляется второй дропдаун и панелька с курсами
	$scope.selected1 = 1;
	$scope.selected2 = 2;
	
	$scope.$watch('selected1', function(newValue, oldValue) {
		$scope.showFuther = newValue == continueCurrency;
	});
	
	// общий список валют приходит отдельно,
	// списки дропдаунов - в виде массива id,
	// поэтому преобразую их тут перед использованием в директиве
	function expandCurrencies(id) { return currencies[id]; }
	$scope.list1 = [1, 0, 99].map(expandCurrencies);
	$scope.list2 = [1, 2].map(expandCurrencies);
	
	var exchangeRate = $resource('rate.json', {}, {
		'get':    { method: 'GET' },
		'query':  { method: 'GET', isArray: false }
	});
	exchangeRate.get({}, function(base) {
		$scope.base = base;
		console.log('Loaded exchangeRate:', base);
	});
}
