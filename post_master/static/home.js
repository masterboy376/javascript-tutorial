// hide the parameter box initially
const parameterBox = document.getElementById('parameter-box');
parameterBox.style.display = 'none';

// hide the json box initially
const jsonBox = document.getElementById('json-box');
jsonBox.style.display = 'block';

// hide the parameter box when json option is selected
const json = document.getElementById('json');
json.addEventListener('click',(e)=>{
        jsonBox.style.display = 'block';
        parameterBox.style.display = 'none';
})

// hide the json box when parameters option is selected
const custom = document.getElementById('custom');
custom.addEventListener('click',(e)=>{
        jsonBox.style.display = 'none';
        parameterBox.style.display = 'block';
})

// if the user clicks on more parameters then add more parameters
function getElementFromString(string){
        let div = document.createElement('div');
        div.innerHTML = string;
        return div.firstElementChild;
}

let addedParamsCount = 0;
const moreParameter = document.getElementById('more-parameter');
moreParameter.addEventListener('click', (e)=>{
        let newParams = document.getElementById('new-params');
        let str = `
        <div class="row my-3">
           <label for="" class="col-sm-2 col-form-label">Parameter ${addedParamsCount+2}:</label>
           <div class="col-md-4">
              <input type="text" class="form-control" placeholder="enter parameter ${addedParamsCount+2} key" id="parameter${addedParamsCount+2}-key">
           </div>
           <div class="col-md-4">
              <input type="text" class="form-control" placeholder="enter parameter ${addedParamsCount+2} value" id="parameter${addedParamsCount+2}-value">
           </div>
           <button type="button" class="col-md-2 btn btn-outline-warning remove-parameter">Remove parameters</button>
        </div>
                  `;
        // convert the element into DOM node          
        let paramElement = getElementFromString(str);
        newParams.appendChild(paramElement);
        //add an event listener to remove parameter on clicking remove button
        let removeParameter = document.getElementsByClassName('remove-parameter');
        for (item of removeParameter){
                item.addEventListener('click', (e)=>{
                    e.target.parentElement.remove();
        })
        }
        addedParamsCount++;

})

// if the user clicks on the submit button
const fetchAPIBtn = document.getElementById('fetch-api-btn');
function getData(URL){
        fetch(URL).then((response)=>{
            return response.text();// this is for plain text. use json instead of json
        }).catch(()=>{
            console.log('some error occured during getting data');
        }).then((data)=>{
            console.log(JSON.parse(data));
            document.getElementById('json-response').value = `<pre><code>data</pre></code>`;
        }).catch(()=>{
            console.log('some error occured after getting data');
        });
}
fetchAPIBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        //show please wait in the response box
        document.getElementById('json-response').value = 'Please wait, fetching response...';

        //get all the information user has given us
        let URL = document.getElementById('URL-input').value;
        let method = document.querySelector('input[name=request-method]:checked').value;
        let content = document.querySelector('input[name=content-type]:checked').value;

        //if user chose custom content type
        let data;
        if (content === 'custom'){
            data = {};
            for( let i =0 ; i<addedParamsCount+1 ; i++){
                    if(document.getElementById(`parameter${i+1}-key`) != undefined){
                    let key = document.getElementById(`parameter${i+1}-key`).value;
                    let value = document.getElementById(`parameter${i+1}-value`).value;
                    data[key] =value;
                    }
                    data = JSON.stringify(data);
            }
        }
        else{
                data = document.getElementById('json-text').value;
        }

        //fetch api
        if(method == 'GET'){
                fetch(URL,{method:'GET'}).then(response=> response.text()).catch(()=>{
                        document.getElementById('json-response').value = 'Error ooccured during ftching data';
                }).then((text)=>{
                        document.getElementById('json-response').value = text;
                }).catch(()=>{
                        document.getElementById('json-response').value = 'Error ooccured during ftching data.';
                });
        }
        else{
                fetch(URL,{
                        method:'POST',
                        body: data,
                        headers: {
                                "content-type": "application/json; charset=UTF-8"
                        }
        }).then(response=> response.text()).catch(()=>{
                        document.getElementById('json-response').value = 'Error ooccured during ftching data';
                }).then((text)=>{
                        document.getElementById('json-response').value = text;
                }).catch(()=>{
                        document.getElementById('json-response').value = 'Error ooccured during ftching data.';
                }); 
        }
})