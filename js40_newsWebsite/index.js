// 4818d9ee6a0640efa8efb6fc93a93e63

//variable- news parameters
const source = 'the-hindu';
let APIKEY = '4818d9ee6a0640efa8efb6fc93a93e63';

//making xhr request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${APIKEY}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML = ``;
        let newsAcordian = document.getElementById('news-acordian');
        articles.forEach((articles,index)=>{
            let news =
            `<div class="accordion-item">
                 <h2 class="accordion-header" id="headingOne">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                         data-bs-target="#collapse${index+1}" aria-expanded="true" aria-controls="collapse${index+1}">
                         <b><span class="badge bg-secondary">Breaking news ${index+1}</span>. ${articles["title"]}</b>
                     </button>
                 </h2>
                 <div id="collapse${index+1}" class="accordion-collapse collapse text-light bg-dark" aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample">
                     <div class="accordion-body">
                         ${articles["description"]}. <a href = "${articles["url"]}" target = "_blank">Read more here</a>
                 </div>
             </div>`;
             newsHTML += news;
        });
        newsAcordian.innerHTML = newsHTML;

    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();

//work
let newsAcordian = document.getElementById('news-acordian');


