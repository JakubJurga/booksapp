const select = {
  booklist: '.books-list',

}

const templates = {
  template: Handlebars.compile(document.getElementById('template-book').innerHTML)
}


function render () {
  for (const id of dataSource.books){
    const generatedHTML = templates.template(id);

    const id = utils.createDOMFromHTML(generatedHTML);

    booklist.appendChild(id);
  }
}
