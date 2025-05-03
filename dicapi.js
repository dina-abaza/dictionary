let input = document.getElementById("inputsearch");
let btn = document.getElementById("btn");
let result = document.querySelector(".result");
let sound = document.createElement('audio');

let api = "https://api.dictionaryapi.dev/api/v2/entries/en/";


btn.addEventListener("click", async function() {
    let value = input.value.trim();
    
    if (!value) {
        alert("Please enter a word.");
        return;
    }

    try {
        let response = await fetch(`${api}${value}`);
        
        if (!response.ok) {
            throw new Error('Word not found');
        }

        let data = await response.json();
        console.log(data);
        result.innerHTML=`<div class="result">
        <div class="voicesearch">
           <div class="sample">
            <h1 id="wordadress">${value}</h1>
            <span>${data[0].meanings[0].partOfSpeech}</span>
            <span>${data[0].phonetic}</span>
           </div>
            <img src="https://e7.pngegg.com/pngimages/848/405/png-clipart-microphone-drawing-podcast-open-mic-condensatormicrofoon-open-electronics-microphone-thumbnail.png" id="sound" onclick="playsound()">
        </div>

        <div class="wordsearch">
            
            <p>${data[0].meanings[0].definitions[0].definition}</p>
            <p class="p2">${data[0].meanings[0].definitions[0].example ||''}</p>

        </div>
    </div> `;
    sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);

    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching data.');
    }
   
});
function playsound(){
    sound.play();
}

