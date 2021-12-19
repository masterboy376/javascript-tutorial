const imgBox = document.querySelector('.imgBox');
let whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    e.target.className += ' hold';
    setTimeout(() => {// set time out 0 means this will execute at very last
        e.target.className += ' hide';
    }, 0);
})
imgBox.addEventListener('dragend', (e) => {
    e.target.className = 'imgBox';
    console.log('drag ended');
})

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    whiteBox.addEventListener('dragenter', (e) => {
        e.target.className += ' dashed'; 
    })

    whiteBox.addEventListener('dragleave', (e) => {
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        e.target.className = 'whiteBox'
        e.target.append(imgBox);
    })
}