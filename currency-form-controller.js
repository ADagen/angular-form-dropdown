function currencyForm($scope, $currency, $resource) {
	
	var continueCurrency = 0; // id валюты, для которой появляется второй дропдаун и панелька с курсами
	$scope.selects = {
		selected1: 1,  // id валюты, по-умолчанию выбранной для первого селекта
		selected2: 1   // ...и для второго селекта
	};
	
	$scope.$watch('selects.selected1', function(newValue, oldValue) {
		$scope.showFuther = newValue == continueCurrency;
	});
	
	$scope.$watch('selects.selected2', function(newValue, oldValue) {
		$scope.pair = $currency.getPair($scope.selects.selected1, $scope.selects.selected2);
	});
	
	// общий список валют приходит отдельно,
	// списки дропдаунов - в виде массива id,
	// поэтому преобразую их тут перед использованием в директиве
	$scope.list1 = [1, 0, 99].map($currency.expand);
	$scope.list2 = [1, 2].map($currency.expand);
	
	var exchangeRate = $resource('rate.json', {}, {
		'get':    { method: 'GET' },
		'query':  { method: 'GET', isArray: false }
	});
	exchangeRate.get({}, function(result) {
		$scope.base = result;
		console.log('Loaded exchangeRate:', result.base);
	});
}
