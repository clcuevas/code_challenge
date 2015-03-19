var employees = [
	{ name: "Bob",
		occupation: "Programmer",
		awesomeIndex: 7 },
	{ name: "Alice",
		occupation: "Programmer",
		awesomeIndex: 9 },
	{ name: "Zaphod",
		occupation: "President of the Galaxy" }
];

var indexOutput = document.getElementById('awesome-index');
var employeeOutput = document.getElementById('employeeList');
var sum = 0;//sum container

//get the sum of all the Awesome Index in the array
function sumAwesomeIndex() {
	for(var i = 0; i < employees.length; i++) {
		if(employees[i].awesomeIndex) {
			sum += employees[i].awesomeIndex;
		}
	}
}

/*calculate the average Awesome Index from all array
items that contain an Awesome Index key/value*/
function avgAwesomeIndex() {
	sumAwesomeIndex();//run sum
	var tempArray = []; //push only those with awesomeIndex
	var avgIndex = 0;//avg Awesome Index container
	
	for(var i = 0; i < employees.length; i++) {
		if(employees[i].awesomeIndex) {
			tempArray.push(employees[i].awesomeIndex);
		}
	}
	avgIndex += Math.floor(sum / tempArray.length);
	return avgIndex;
}

function printAvgIndex() {
	// console.log(avgIndex);//validate avg AwesomeIndex
	var msg = '<h2>Avg Awesome Index: '+ avgAwesomeIndex() + '</h2>';
	indexOutput.innerHTML = msg;//write output
}

function printEmployees() {
	var employeesHTML = '<ul class"bulleted">';

	for (var i = 0; i < employees.length; i++) {
		if(employees[i].occupation === 'Programmer') {
			employeesHTML += '<li class="yes">';
		} else {
			employeesHTML += '<li class="no">';
		}
		if(employees[i].awesomeIndex) {
			employeesHTML += employees[i].name + ' - ' + employees[i].occupation + ', Awesome-Index: ' + employees[i].awesomeIndex + '</li>';
		} else {
			employeesHTML += employees[i].name + ' - ' + employees[i].occupation + '</li>';
		}
	}
	employeesHTML += '</ul>';
	employeeOutput.innerHTML = employeesHTML;
}

printEmployees();//run on load
printAvgIndex();//run on load
