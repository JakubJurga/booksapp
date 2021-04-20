{
  'use strict';


  const select = {
    booklist: '.books-list',
    bookImage: '.book__image',

  };

  const classNames = {
    favoriteBook: 'favorite',
    bookClass: 'book__image'

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
    const booksImage = booksList.querySelectorAll(select.bookImage);



    booksList.addEventListener('dblclick', function(event) {
      if(event.target.offsetParent.classList.contains(classNames.bookClass)){
          event.preventDefault();

        if(!event.target.offsetParent.classList.contains(classNames.favoriteBook)){

          event.target.offsetParent.classList.add(classNames.favoriteBook);

          const idCheck = event.target.offsetParent.getAttribute('data-id');
          favouriteBooks.push(idCheck);
        }
        else if (event.target.offsetParent.classList.contains(classNames.favoriteBook)){
          event.target.offsetParent.classList.remove(classNames.favoriteBook);
        }

      }
    });

  }


  initActions();



}
