// array that stores all the book objects
const myLibrary = [];

function deleteBook(book){

}

// book {id: 012dsanjofsao, title: A Song of Ice and Fire, author: George R.R. Martin, pages: 1024, status: false}
// book constructor
function Book(title, author, pages, status){
    if (!new.target){
        throw Error("Use the new keyword you silly buffoon!!");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
};

function addBookToLibrary(title, author, pages, status){
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
};

function createBookRead(bookItem){
    const bookRead = document.createElement("div");
    bookRead.classList.add("book-read");

    const cardSection1 = document.createElement("div");
    cardSection1.classList.add("card-section-1");

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");

    const bookHeading = document.createElement("h3");
    bookHeading.textContent = bookItem.title;

    const bookInfo = document.createElement("div");
    bookInfo.classList.add('book-info');

    const authorInfo = document.createElement("p");
    const authorName = document.createElement("em");
    authorName.textContent = bookItem.author;
    authorInfo.append("-By ", authorName, ".");

    const pageCount = document.createElement("p");
    pageCount.textContent = bookItem.pages + " Pages.";

    bookInfo.append(authorInfo, pageCount);
    bookTitle.appendChild(bookHeading);

    cardSection1.append(bookTitle, bookInfo);

    const cardSection2 = document.createElement("div");
    cardSection2.classList.add("card-section-2");

    const readStatus = document.createElement("div");
    readStatus.classList.add("read-status");

    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    inputCheck.id = "read-status-checkbox";
    const labelCheck = document.createElement("label");
    labelCheck.for = "read-status-checkbox";
    labelCheck.classList.add("read-label");
    labelCheck.textContent = "Read";
    readStatus.append(inputCheck, labelCheck);

    const deleteButton = document.createElement("div");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                        </svg>`;
    
    const deleteText = document.createElement("p");
    deleteText.textContent = "Delete";

    deleteButton.appendChild(deleteText);

    cardSection2.append(readStatus, deleteButton);

    bookRead.append(cardSection1, cardSection2);
    
    const cardContainer = document.querySelector(".card-container");
    cardContainer.appendChild(bookRead);
}

function createBookUnread(bookItem){
    const bookUnread = document.createElement("div");
    bookUnread.classList.add("book-unread");

    const cardSection1 = document.createElement("div");
    cardSection1.classList.add("card-section-1");

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");

    const bookHeading = document.createElement("h3");
    bookHeading.textContent = bookItem.title;

    const bookInfo = document.createElement("div");
    bookInfo.classList.add('book-info');

    const authorInfo = document.createElement("p");
    const authorName = document.createElement("em");
    authorName.textContent = bookItem.author;
    authorInfo.append("-By ", authorName, ".");

    const pageCount = document.createElement("p");
    pageCount.textContent = bookItem.pages + " Pages.";

    bookInfo.append(authorInfo, pageCount);
    bookTitle.appendChild(bookHeading);

    cardSection1.append(bookTitle, bookInfo);

    const cardSection2 = document.createElement("div");
    cardSection2.classList.add("card-section-2");

    const readStatus = document.createElement("div");
    readStatus.classList.add("read-status");

    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    inputCheck.id = "unread-status-checkbox";
    const labelCheck = document.createElement("label");
    labelCheck.for = "unread-status-checkbox";
    labelCheck.classList.add("unread-label");
    labelCheck.textContent = "Unread";
    readStatus.append(inputCheck, labelCheck);

    const deleteButton =document.createElement("div");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                        </svg>`;
    
    const deleteText = document.createElement("p");
    deleteText.textContent = "Delete";

    deleteButton.appendChild(deleteText);

    cardSection2.append(readStatus, deleteButton);

    bookUnread.append(cardSection1, cardSection2);

    const cardContainer = document.querySelector(".card-container");
    cardContainer.appendChild(bookUnread);
}

Book.prototype.getId = function(){
    return this.id;
}

Book.prototype.getTitle = function(){
    return this.title;
}

Book.prototype.getAuthor = function(){
    return this.author;
}

Book.prototype.getPages = function(){
    return this.pages;
}

Book.prototype.getStatus = function(){
    return this.status;
}

Book.prototype.toggleStatus = function(){
    this.status = !this.status;
}

//open a modal dialog box
const addBook = document.querySelector(".add-button");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".dialog-close-button");
const addButton = document.querySelector(".dialog-add-button");

addBook.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", e => {
    if (e.target === dialog){
        dialog.close();
    }
});

addButton.addEventListener("click", () => {
    const inputBookName = document.querySelector("#form-book-title");
    const inputbookAuthor = document.querySelector("#form-book-author");
    const inputBookPages = document.querySelector("#form-book-pages")
    const inputBookStatus = document.querySelector("#form-book-status");

    addBookToLibrary(inputBookName.value, inputbookAuthor.value, inputBookPages.value, inputBookStatus.checked);
    console.log(myLibrary);

    myLibrary.forEach((item) => {
        if (item.status === true){
            createBookRead(item);
        }
        else if (item.status === false){
            createBookUnread(item);
        }
    })
});

