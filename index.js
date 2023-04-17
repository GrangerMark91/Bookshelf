const bookInstance = new Book();

bookInstance.seed(bookData);

bookInstance.redner()

const bookes = [];
const title = document.getElementById("title");
const author = document.getElementById("author");
const language = document.getElementById("language");
const subject = document.getElementById("subject");
const bookListSection = document.getElementById("bookListHeader");
const userInputButton = document.getElementById("userInputButton");



userInputButton.addEventListener("click", ()=>{
    const newBookes = {
        title: title.value,
        author: author.value,
        language: language.value,
        subject: subject.value
    };

    bookes.push(newBookes);
    bookListSection.innerHTML = '';

    for(const book of bookes){
        const renderedBookes = render(book);
        bookListSection.append(renderedBookes)
    }
})

function render(bookobj){
    const bookCover = document.createElement("div");
    bookCover.style.border = "1px solid"
    bookCover.style.margin = "8px"
    bookCover.style.width = "32%"
    bookCover.style.display = "flex"
    bookCover.style.backgroundColor = "aquamarine"

    const bookTitle = document.createElement("h1");
    bookTitle.textContent = bookobj.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = bookobj.author;

    const bookSubject = document.createElement("h3");
    bookSubject.textContent = bookobj.subject;

    const bookLanguage = document.createElement("p");
    bookLanguage.textContent = bookobj.language;

    const bookButton = document.createElement("button");
    bookButton.textContent = "Comment"
    bookButton.style.backgroundColor = "grey"
    bookButton.style.borderRadius = "10%"

    bookCover.append(bookTitle)
    bookCover.append(bookAuthor)
    bookCover.append(bookSubject)
    bookCover.append(bookLanguage)
    bookCover.append(bookButton)

    return bookCover;

}