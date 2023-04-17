class Books{
    constructor(author, language, subject, title){
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    }


    render(){
    const bookshelf = document.createElement("div");
    bookshelf.classList.add("book");

    const h1 = document.createElement("h1");
    h1.textContent = `Title ${this.title}`;

    const h2 = document.createElement("h2");
    h2.textContent = `by ${this.author}`;

    const h3 = document.createElement("h3");
    h3.textContent = `in ${this.language}`;
  
  
    const h4 = document.createElement("h4");
    h4.textContent = `subject  ${this.subject}`;

 
    bookshelf.appendChild(h1)
    bookshelf.appendChild(h2)
    bookshelf.appendChild(h3)
    bookshelf.appendChild(h4)

    return bookshelf
    }
}