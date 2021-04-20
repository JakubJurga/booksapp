{
  'use strict';


  const select = {
    booklist: '.books-list',

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
}
