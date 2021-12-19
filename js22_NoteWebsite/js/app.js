console.log('done');
showNotes();

//if user adds a note
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    let notesTitle = localStorage.getItem('notesTitle');
    let notesObj;
    let notesObjTitle;
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    if(notesTitle == null){
        notesObjTitle = [];
    }
    else{
        notesObjTitle = JSON.parse(notesTitle);
    }
    notesObj.push(addTxt.value);
    notesObjTitle.push(addTitle.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    localStorage.setItem('notesTitle', JSON.stringify(notesObjTitle));
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
});

// show notes
function showNotes(){
    let notesElem =  document.getElementById('notes');
    let notes = localStorage.getItem('notes');
    let notesTitle = localStorage.getItem('notesTitle');
    let notesObj;
    let notesObjTitle;
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    if(notesTitle == null){
        notesObjTitle = [];
    }
    else{
        notesObjTitle = JSON.parse(notesTitle);
    }
    let html = "";
    for(let i = 0; i<notesObj.length; i++){
        html = html + `<div class="card my-3 mx-3 notecard col-4" style="width: 47%;">
        <div class="card-body">
          <h5 class="card-title">${notesObjTitle[i]}</h5>
          <p class="card-text">${notesObj[i]}</p>
          <a onclick="deleteNote(this.id)" class="btn btn-primary" id="${i}">Delete note</a>
        </div>
      </div>`
    }
    if(notesObj.length != 0){
       notesElem.innerHTML = html;
    }
    else{
       notesElem.innerHTML = `<p class = "my-3 mx-3">No notes here so far.</p>`;
    }
}

//function to delete note
function deleteNote(index){
    let notes = localStorage.getItem('notes');
    let notesTitle = localStorage.getItem('notesTitle');
    let notesObj;
    let notesObjTitle;
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    if(notesTitle == null){
        notesObjTitle = [];
    }
    else{
        notesObjTitle = JSON.parse(notesTitle);
    }

        notesObj.splice(index,1);
        notesObjTitle.splice(index,1);

   localStorage.setItem('notes', JSON.stringify(notesObj));
   localStorage.setItem('notesTitle', JSON.stringify(notesObjTitle));
   showNotes();
}

//search funtion
let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    let inputval = search.value;
    // console.log(inputval);
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element, index){
        let cardTxt = element.getElementsByTagName('p')[0];
        let cardTit = element.getElementsByTagName('h5')[0];
        if(((cardTxt.innerText).includes(inputval))||((cardTit.innerText).includes(inputval))){
            element.style.display='inline';
        }
        else{
            element.style.display='none';
        }
    })
})