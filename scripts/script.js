// array that stores all the book objects
// const myLibrary = [];

// function deleteBook(book){

// }

// book prototype
// const bookPrototype = {
//     getTitle(){
//         return this.title;
//     },
//     getAuthor(){
//         return this.author;
//     },
//     getPages(){
//         return this.pages;
//     },
//     getStatus(){
//         return this.status;
//     },
//     toggleStatus(){
//         this.status = !this.status;
//     }
// };  

// book {id: 012dsanjofsao, title: A Song of Ice and Fire, author: George R.R. Martin, pages: 1024, status: false}
// book constructor
// function Book(title, author, pages, status){
//     if (!new.target){
//         throw Error("Use the new keyword you silly buffoon!!");
//     }
//     this.id = crypto.randomUUID();
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status;
// };

// function addBookToLibrary(book){
//     myLibrary.push(book);
// };

// function showBook(book){

// };

// myLibrary.forEach(showBook(book));

// const aSongOfIceAndFire = new Book('A Song of Ice and Fire', 'George R.R. Martin', 1024, false);


//open a modal dialog box
const addBook = document.querySelector(".add-button");
const dialog = document.querySelector("dialog");

addBook.addEventListener("click", () => {
    dialog.showModal();
})


