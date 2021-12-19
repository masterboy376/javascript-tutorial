class library {
    constructor(title, author, category) {
        this.book = {
            title: title,
            author: author,
            category: category
        }
    }
    static add() {
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

    static clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate() {
        if (this.book.title.length < 2 || this.book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    static show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Messge:</strong> ${displayMessage}
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 2000);
    }

    save() {
        let savedBooks = localStorage.getItem('savedBooks');
        let savedBooksArr;
        if (savedBooks == null) {
            savedBooksArr = [];
        }
        else {
            savedBooksArr = JSON.parse(savedBooks);
        }
        savedBooksArr.push(this.book);
        localStorage.setItem('savedBooks', JSON.stringify(savedBooksArr));
    }
}

// on refresh 
library.add();

//add submit event listener to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);//just name of the function here

function libraryFormSubmit(e) {
    e.preventDefault();
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
    let lib = new library(title, author, category);
    console.log(lib);
    if (lib.validate()) {
        lib.save();
        library.show('success', 'Book added successfully');
        library.add();
        library.clear();
    }
    else {
        library.show('danger', 'Invalid inputs');
    }

}