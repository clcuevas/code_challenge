$(document).ready(function() {
	/*need to find a fix for chrome to see local JSON file*/
	var url = "data.json"; //JSON data, DOES NOT WORK WITH CHROME

	$.getJSON(url, function(response) {
		var employeesHTML = '<ul class="bulleted">';
		var avgIndex = '<h2>Avg Awesome Index: ';
		var avg = 0;
		var sum = 0;
		var tempArray = [];//temp Array for Index values

		$.each(response, function(index, employee) {
			if (employee.occupation === 'Programmer') {
				employeesHTML += '<li class="in">';
			} else {
				employeesHTML += '<li class="out">';
			}
			if (employee.awesomeIndex) {
				employeesHTML += employee.name + ' - ' + employee.occupation + ', Awesome-Index: ' + employee.awesomeIndex + '</li>';
				tempArray.push(employee.awesomeIndex);
			} else {
				employeesHTML += employee.name + ' - ' + employee.occupation + '</li>';
			}
		});

		// for (var i = 0; i < tempArray.length; i++) {
		// 	sum += tempArray[i];
		// 	console.log(sum);
		// }
		sum = _.sum(tempArray);//use lodash sum method instead

		avg += Math.floor(sum / tempArray.length);
		console.log(avg + " is the average");

		employeesHTML += '</ul>';
		avgIndex += avg + '</h2>';
		$('#employeeList').html(employeesHTML);
		$('#awesome-index').html(avgIndex);
	}); //end getJSON
	
}); //end ready
