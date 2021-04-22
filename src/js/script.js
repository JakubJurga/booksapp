{
  'use strict';


  const select = {
    booklist: '.books-list',
    bookImage: '.book__image',
    filter: '.filters',

  };

  const classNames = {
    favoriteBook: 'favorite',
    bookClass: 'book__image'

  };

  const templates = {
    template: Handlebars.compile(document.getElementById('template-book').innerHTML)
  };


  function render () {
    for (const book of dataSource.books){
      const ratingBgc = determineRatingBgc(book.rating);
      const ratingWidth = book.ratingBgc * 10;
      const booklist = document.querySelector(select.booklist);

      const generatedHTML = templates.template({
        id: book.id,
        price: book.price,
        name: book.name,
        image: book.image,
        rating: book.rating,
        ratingBgc,
        ratingWidth,
      });

      const elementHTML = utils.createDOMFromHTML(generatedHTML);

      booklist.appendChild(elementHTML);


    }
  }

  render();

  let favouriteBooks = [];

  let filters = [];


  function initActions(){

    const booksList = document.querySelector(select.booklist);
    //const booksImage = booksList.querySelectorAll(select.bookImage);
    const filter = document.querySelector(select.filter);


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

    filter.addEventListener('click', function(event) {
      if(event.target.tagName === 'INPUT' && event.target.type === 'checkbox' && event.target.name === 'filter'){
        console.log(event.target.value);
      } if(event.target.checked == true){
        filters.push(event.target.value);
      } else if (event.target.checked == false){
        const indexOfFilter = filters.indexOf(event.target.value);
        filters.splice(indexOfFilter, 1);
      }
      filterBooks();
    });



  }

  function filterBooks(){
    for(let book of dataSource.books){
      let shouldBeHidden = false;

      for(const filter of filters){
        if(!book.details[filter]){
          shouldBeHidden = true;
          break;
        }
      }

      const idOfBook = book.id;
      const itemImage = document.querySelector('.book__image[data-id="'+idOfBook+'"]');

      if(shouldBeHidden == true){
        itemImage.classList.add('hidden');
      } else if (shouldBeHidden == false){
        itemImage.classList.remove('hidden');
      }
    }
  }

  function determineRatingBgc(rating){
    let background = '';
    if (rating < 6){
      background = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
    } else if (rating > 6 && rating <= 8) {
      background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
    } else if(rating > 8 && rating <= 9) {
      background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
    } else if(rating > 9){
      background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
    }
    return background;
  }


  initActions();



}
