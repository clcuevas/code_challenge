
function Library() {
	this.name = "Library";
	this.shelves = [];
}



function Book(author, title) {
	this.author = author;
	this.title = title;
}

Book.prototype.describe = function() {
	console.log("Title: " + this.title + ", Author: " + this.author);
}

function Shelf() {
	this.books = [];
}

Shelf.prototype = new Library();//inheritance

Shelf.prototype.addBooks = function(author, title) {
	this.books.push(new Book(author, title));
}

Shelf.prototype.removeBooks = function(book) {
	var index = this.books.indexOf(book);
	this.books.splice(index, 1);
}

Shelf.prototype.shelfSummary = function() {
	for(var i = 0; i < this.books.length; i++) {
		this.books[i].describe();
	}
}

var shelf = new Shelf();
shelf.addBooks("Joelle Charbonneau", "The Testing");
shelf.addBooks("Marie Lu", "Legend");
shelf.addBooks("Sarah J. Maas", "Heir of Fire");
shelf.removeBooks("Heir");
shelf.shelfSummary();

var shelfTwo = new Shelf();
shelfTwo.addBooks("Joelle Charbonneau", "Independent Study");
shelfTwo.addBooks("Marie Lu", "Prodigy");
shelfTwo.addBooks("Sarah J. Maas", "Heir of Fire");
shelfTwo.addBooks("Ann Aguirre", "Enclave");
shelfTwo.addBooks("Kelley Armstrong", "Sea of Shadows");
shelfTwo.removeBooks("Sea");
shelfTwo.shelfSummary();
