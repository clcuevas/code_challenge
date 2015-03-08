$(function() {
	/*need to find a fix for chrome to see local JSON file*/
	var url = "data.json"; //JSON data, DOES NOT WORK WITH CHROME

	$.getJSON(url, function(response) {
		var employeesHTML = '<ul class="bulleted">';
		var avgIndex = '<h2>Avg Awesome Index: ';
		var avg;

		$.each(response, function(index, employee) {
			if (employee.occupation === 'Programmer') {
				employeesHTML += '<li class="in">';
			} else {
				employeesHTML += '<li class="out">';
			}
			if (employee.awesomeIndex) {
				employeesHTML += employee.name + ' - ' + employee.occupation + ', Awesome-Index: ' + employee.awesomeIndex + '</li>';
			} else {
				employeesHTML += employee.name + ' - ' + employee.occupation + '</li>';
			}
		});

		$.each(response, function(employee) {
			var sum = 0;
			if (employee.awesomeIndex) {
				for (var i = 0; i < employee.length; i++) {
					sum += JSON.parse(employee[i]).awesomeIndex;
				}
				avg += sum/employee.length;

				return avg;
			}
		});
		employeesHTML += '</ul>';
		avgIndex += avg + '</h2>';
		$('#employeeList').html(employeesHTML);
		$('#awesome-index').html(avgIndex);
	}); //end getJSON
	
}); //end ready
