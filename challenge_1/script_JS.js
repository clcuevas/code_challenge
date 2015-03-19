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
var sum = 0;

function sumAwesomeIndex() {

}

function avgAwesomeIndex() {
	var avgIndex = 0;
	var sum = 0;

	for(var i = 0; i < employees.length; i++) {
		if(employees[i].awesomeIndex) {
			sum += employees[i].awesomeIndex;
			avgIndex += sum / employees.length;
		}
	}
	console.log(sum);
	// avgIndex += Math.floor(sum / employees.length);
	console.log(avgIndex);
}

avgAwesomeIndex();

