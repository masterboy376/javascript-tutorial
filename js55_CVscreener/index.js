const data = [
    {
        name: 'kamal das',
        age: 19,
        gender:'male',
        country: 'India',
        language: 'JS',
        framework:'react',
        image:'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    {
        name: 'katherine james',
        age: 19,
        gender:'female',
        country: 'South Africa',
        language: 'JS',
        framework:'react',
        image:'https://randomuser.me/api/portraits/med/women/6.jpg'
    },
    {
        name: 'sam muller',
        age: 20,
        gender:'male',
        country: 'UK',
        language: 'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/71.jpg'
    },
    {
        name: 'xing-jung',
        age: 9,
        gender:'male',
        country: 'japan',
        language: 'php',
        framework:false,
        image:'https://randomuser.me/api/portraits/med/men/74.jpg'
    },
    {
        name: 'sam muller',
        age: 20,
        gender:'male',
        country: 'UK',
        language: 'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/women/71.jpg'
    },
    {
        name: 'sam muller',
        age: 20,
        gender:'male',
        country: 'UK',
        language: 'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/7.jpg'
    },
    {
        name: 'sam muller',
        age: 20,
        gender:'male',
        country: 'UK',
        language: 'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/women/70.jpg'
    },
    {
        name: 'sam muller',
        age: 20,
        gender:'male',
        country: 'UK',
        language: 'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/1.jpg'
    },
    {
        name: 'sam muller',
        age: 20,
        gender:'male',
        country: 'UK',
        language: 'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/women/66.jpg'
    },
    {
        name: 'sam muller',
        age: 20,
        gender:'male',
        country: 'UK',
        language: 'python',
        framework:'Django',
        image:'https://randomuser.me/api/portraits/med/men/41.jpg'
    }
];

//Iterator
function CViterator(profile){
      let nextIndex = 0;
      return {
          next: function(){
              return nextIndex<profile.length ? 
              {value: profile[nextIndex++],done: false} : {done:true};
          }
      }
}



//button listener
let nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', nextCV);

const canditates = CViterator(data);
nextCV();

function nextCV(){
    let currentCandidate = canditates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">Gender: ${currentCandidate.gender}</li>
    <li class="list-group-item">Country: ${currentCandidate.country}</li>
    <li class="list-group-item">Language(Framework): ${currentCandidate.language}(${currentCandidate.framework})</li>
  </ul>`;
    }
    else{
        window.alert('That is it!');
        window.location.reload();
    }

}