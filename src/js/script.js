{
  'use strict';


  const select = {
    booklist: '.books-list',
    bookImage: '.book__image',

  };

  const classNames = {
    favoriteBook: 'favorite',

  };

  const templates = {
    template: Handlebars.compile(document.getElementById('template-book').innerHTML)
  };


  function render () {
    for (const id of dataSource.books){
      const booklist = document.querySelector(select.booklist);
      const generatedHTML = templates.template(id);

      const elementHTML = utils.createDOMFromHTML(generatedHTML);

      booklist.appendChild(elementHTML);


    }
  }

  render();

  let favouriteBooks = [];

  function initActions(){

    const booksList = document.querySelector(select.booklist);
    const booksImage = booksContainer.querySelectorAll(select.bookImage);

    for(let image of booksImage){

      image.addEventListener('dblclick', function(event) {
        event.preventDefault();
        image.classList.add(classNames.favoriteBook);

        const idCheck = image.getAttribute('data-id');
        favouriteBooks.push(idCheck);
      });
    }
  }

  initActions();



}
