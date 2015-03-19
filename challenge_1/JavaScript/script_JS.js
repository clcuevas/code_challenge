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
// var getAvgIndex = document.getElementById('awesome-index');
var sum = 0;//sum container
// var avgIndex = 0;//avg Awesome Index container

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

function sendAvgIndex() {
	// console.log(avgIndex);//validate avg AwesomeIndex
	var msg = '<h2>Avg Awesome Index: </h2>';
	msg += avgAwesomeIndex();
	indexOutput.innerHTML = msg;//write output
	console.log(indexOutput);
}

sendAvgIndex();