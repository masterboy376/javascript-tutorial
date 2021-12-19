console.log("this is ajax in js(vanilla)");

let fetchBtn = document.getElementById('fetch-btn');
// user requesting r=the data
fetchBtn.addEventListener('click', buttonClickHandler);
function buttonClickHandler(){
    console.log('fetchBtn clicked');

    // instantiate an XHR object
    const xhr = new XMLHttpRequest();

    //open the object
    //use this for GET request
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);// (method, location of request, asyc or not)

    //use this for POST request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type', 'application/json');// we are sending these form data to our url


    // what to do on progress(optional) -> here you can add loading symbol
    xhr.onprogress = function(){
        console.log('working on the request');
    }

    // xhr.onreadystatechange = function () {
    //     console.log('ready state is '+ this.readyState);
    //     /*
    //     0: unsend request
    //     1: open request
    //     2: send request call
    //     3: loading
    //     4: done(on load)
    //     */ 
    // }

    //on compeletion - response is ready
    xhr.onload = function(){
        if(this.status == 200){
        console.log(this.responseText);
        }
        else{
            console.log('some error occured');
        }
    }

    // sending the response(GET)
    // xhr.send();

    // sending the response(POST)
    params= `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log('we are done'); // this is becoz this is async
}

//------------------------------------------------------------------------------------------------------------------------
let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'employee.txt', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${key}: ${obj[key]} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

