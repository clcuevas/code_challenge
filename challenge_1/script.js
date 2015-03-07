$(function() {
	/*need to find a fix for chrome to see local JSON file*/
	var url = "data.json"; //JSON data, DOES NOT WORK WITH CHROME

	$.getJSON(url, function(response) {
		var employeesHTML = '<ul class="bulleted">';
		$.each(response, function(index, employee) {
			if (employee.occupation === 'Programmer') {
				employeesHTML += '<li class="in">';
			} else {
				employeesHTML += '<li class="out">';
			}
			if (employee.awesomeIndex) {
				employeesHTML += employee.name + ' - ' + employee.occupation + ', Index: ' + employee.awesomeIndex + '</li>';
			} else {
				employeesHTML += employee.name + ' - ' + employee.occupation + '</li>';
			}
		});
		employeesHTML += '</ul>';
		$('#employeeList').html(employeesHTML);
	}); //end getJSON

}); //end ready
