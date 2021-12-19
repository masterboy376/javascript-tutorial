// First let us use prototypes

//constructor
function Book(title, author, category) {
    this.title = title;
    this.author = author;
    this.category = category;
}

//display constructor
function Display() {
}

//Add methods to display prototype
Display.prototype.add = function () {
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ``;
    let savedBooks = localStorage.getItem('savedBooks');
    let savedBooksArr;
    if (savedBooks == null) {
        savedBooksArr = [];
    }
    else {
        savedBooksArr = JSON.parse(savedBooks);
    }
    savedBooksArr.forEach(function (element, index) {
        let uiString = `<tr>
                        <th>${index + 1}</th>
                        <td>${element.title}</td>
                        <td>${element.author}</td>
                        <td>${element.category}</td>
                      </tr>`;
        tableBody.innerHTML += uiString;
    });
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if (book.title.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);
}

Display.prototype.save = function (book) {
    let savedBooks = localStorage.getItem('savedBooks');
    let savedBooksArr;
    if (savedBooks == null) {
        savedBooksArr = [];
    }
    else {
        savedBooksArr = JSON.parse(savedBooks);
    }
    savedBooksArr.push(book);
    localStorage.setItem('savedBooks', JSON.stringify(savedBooksArr));
}

let display = new Display();
display.add();

//add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);//just name of the function here

function libraryFormSubmit(e) {
    let title = document.getElementById('bookTitle').value;
    let author = document.getElementById('bookAuthor').value;

    let fiction = document.getElementById('Fiction');
    let autobiography = document.getElementById('Autobiography');
    let science = document.getElementById('Science');
    let other = document.getElementById('Other');

    let category;
    if (fiction.checked) {
        category = fiction.value;
    }
    else if (autobiography.checked) {
        category = autobiography.value;
    }
    else if (science.checked) {
        category = science.value;
    }
    else {
        category = other.value;
    }

    let book = new Book(title, author, category);

    let display = new Display();

    if (display.validate(book)) {
        display.save(book);
        display.add();
        display.clear();
        display.show('success', 'Book added successfully');
    }
    else {
        display.show('danger', 'Invalid inputs');
    }

    e.preventDefault();
}
