const library = [
    new Book("AAA", "Author A", 10),
    new Book("BBB", "Author B", 20)
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;

    this.toggleReadStatus = function () {
        this.read = !this.read;
    };
}

function updateDisplay() {
    const cardContainer = document.querySelector("main");

    library.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = book.author;
    
        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = book.pages;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);

        cardContainer.appendChild(card);
    });
}

updateDisplay();