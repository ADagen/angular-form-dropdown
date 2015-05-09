/**
 * ��������� ��� ���������� ������� ������� �������
 */
function focusMe($timeout) {
	return {
		scope: { trigger: '=focusMe' },
		link: function(scope, element) {
			scope.$watch('trigger', function(value) {
				value && element[0].focus();
			});
		}
	};
}