class Book{
    constructor(){
        this.shelf = [];
    }

    seed(bookData){
        for(const books of bookData){
            const newBooks = new Books(books.author, books.language, books.subject, books.title);
            this.addOrder(newBooks)
        }
    }

    
    addOrder(individualBooks){
        this.shelf.push(individualBooks)
    }


    redner(){
        const bookShelf = document.createElement("div");

        for(const books of this.shelf){
            bookShelf.append(books.render())
        }

        document.body.append(bookShelf)
    }
}