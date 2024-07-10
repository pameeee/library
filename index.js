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

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
openModal.addEventListener("click", () => {
    modal.showModal();
});

document.querySelector("form").addEventListener("submit", function (event) {
    // event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    const newBook = new Book(title, author, parseInt(pages, 10));
    library.push(newBook);
    console.log(library);
    this.reset();
    updateDisplay();
});

function updateDisplay() {

    const cardContainer = document.querySelector("main");
    const cards = cardContainer.querySelectorAll(".card");
    cards.forEach((card) => card.remove());

    library.forEach((book, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // New
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttonContainer");

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = book.author;

        const pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = book.pages;

        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "X";

        const readBtn = document.createElement("button");
        readBtn.textContent = "Read ✅";
        readBtn.classList.add("readButton");
        if (!book.read) {
            readBtn.classList.add("unread");
            readBtn.textContent = "Not read";
        }

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        buttonContainer.appendChild(removeButton);
        buttonContainer.appendChild(readBtn);
        card.appendChild(buttonContainer);

        cardContainer.appendChild(card);

        removeButton.addEventListener("click", function () {
            library.splice(index, 1);
            updateDisplay();
        });

        readBtn.addEventListener("click", function () {
            book.toggleReadStatus();
            updateDisplay();
        });
    });
}

updateDisplay();