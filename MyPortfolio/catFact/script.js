const button = document.querySelector('button');
button.addEventListener('click', loadFile);

function loadFile() {
    let xhr = new XMLHttpRequest(); // STEP 1
    xhr.open('GET', 'https://meowfacts.herokuapp.com/?count=1'); // STEP 2

    // STEP 4
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === xhr.DONE) {
            // Remember to use responseTEXT instead of responseXML
            // console.log(xhr.responseText);

            let data = JSON.parse(xhr.responseText);
            // JSON.stringify();
            console.log(data);
            formatData(data);
        }
    })
    xhr.send(null); // STEP 3
}

function formatData(data) {
    const box = document.getElementById('main');
    box.textContent = data.data;
}