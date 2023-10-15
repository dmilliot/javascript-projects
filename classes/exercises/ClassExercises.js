// Define your Book class here:
class Books{
    constructor(title, author, copyrightDate, isbn, 
        numPages, numCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.numCheckedOut = numCheckedOut;
        this.discarded = discarded;
    }
    anotherCheckOut(uses=1) {
        this.numCheckedOut += uses;
    }
}

class Novel extends Books {
    constructor(title, author, copyrightDate, isbn,
        numPages, numCheckedOut, discarded) {
            super(title, author, copyrightDate, isbn,
                numPages, numCheckedOut, discarded);
        }
    shouldDestroy(){
        if(this.numCheckedOut > 100) {
            this.discarded = 'yes';
        }
    }
}  

class Manuals extends Books {
    constructor(title, author, copyrightDate, isbn,
        numPages, numCheckedOut, discarded) {
            super(title, author, copyrightDate, isbn,
                numPages, numCheckedOut, discarded);
        }
    shouldDestroy(currentYear = 2023){
        if(currentYear - this.copyrightDate > 5){
            this.discarded = 'yes';
        }
    }
}

let book1 = new Novel('Pride and Prejudice', 'Jane Austen',
1813, 1111111111111, 432, 32, 'no')

let manual1 = new Manuals('Top Secret Shuttle Building Manual',
'Redacted', 2013, '0000000000000', 1147, 1, 'no')

book1.shouldDestroy();
manual1.shouldDestroy();
book1.anotherCheckOut(5);
console.log(book1, manual1);

// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here: