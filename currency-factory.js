/**
 * Сервис работы с валютами
 * Предоставляет форматирование id пар для валютам,
 * полный список валют с сервера,
 * функцию для превращения списка id валют в раскрытые объекты валют.
 */
function currencyFactory() {

	var separator = '/';
	
	// пререндер списка валют откуда-то из нёдр бекенда
	var fullList = {
		99 : { name: 'All', id: 99 },
		0  : { name: 'EUR', id: 0 },
		1  : { name: 'USD', id: 1 },
		2  : { name: 'GBP', id: 2 }
	};
	
	/**
	 * @method App.currency.expand
	 * @param {number} id
	 * @returns {Object} - полный объект валюты по id
	 */
	var expand = function(id) {
		return fullList[id];
	};
	
	/**
	 * @method App.currency.getPair
	 * @param {number} id1
	 * @param {number} id2
	 * @returns {string} - отформатированный id валютной пары
	 */
	var getPair = function(id1, id2) {
		return [
			expand(id1).name,
			separator,
			expand(id2).name
		].join('');
	};
	
	return {
		fullList : fullList,
		getPair	 : getPair,
		expand 	 : expand
	};
}