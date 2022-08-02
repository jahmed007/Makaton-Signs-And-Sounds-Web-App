let voiceList = [];
let speechSynth = window.speechSynthesis;
let voiceListSelection = document.getElementById('vl-select');
let textToVoiceSentence = document.getElementById('text-to-voice-sentence-div');
let textToVoiceSentencePlayBtn = document.getElementById('ttvs-play-btn');
let textToVoiceSentenceDeleteBtn = document.getElementById('ttvs-delete-btn');
let textToVoiceSentenceSpaceBtn = document.getElementById('ttvs-space-btn');
let textToVoice = document.getElementById('text-to-voice-sect');

// Populates Voices From Web Speech API
populateVoices();
if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
};

function populateVoices() {
    voiceList = speechSynth.getVoices();
    let selectedIndex = voiceListSelection.selectedIndex < 0 ? 0 : voiceListSelection.selectedIndex;
    voiceListSelection.innerHTML = '';
    voiceList.forEach((voice) => {
        let voiceListItem = document.createElement('option');
        voiceListItem.textContent = voice.name;
        voiceListItem.setAttribute('data-lang', voice.lang);
        voiceListItem.setAttribute('data-name', voice.name);
        voiceListSelection.appendChild(voiceListItem);
    });
    voiceListSelection.selectedIndex = selectedIndex;
};

// Array Data Stored Here
let divCount = 0;
let divImageData = [
    'resources/letter-a.png',
    'resources/letter-b.png',
    'resources/letter-c.png',
    'resources/letter-d.png',
    'resources/letter-e.png',
    'resources/letter-f.png',
    'resources/letter-g.png',
    'resources/letter-h.png',
    'resources/letter-i.png',
    'resources/letter-j.png',
    'resources/letter-k.png',
    'resources/letter-l.png',
    'resources/letter-m.png',
    'resources/letter-n.png',
    'resources/letter-o.png',
    'resources/letter-p.png',
    'resources/letter-q.png',
    'resources/letter-r.png',
    'resources/letter-s.png',
    'resources/letter-t.png',
    'resources/letter-u.png',
    'resources/letter-v.png',
    'resources/letter-w.png',
    'resources/letter-x.png',
    'resources/letter-y.png',
    'resources/letter-z.png',
];
let divTextData = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
let sentenceImageData = [];
let sentenceTextData = [];

// Outputs From Array Data
for (let i = 0; i < divImageData.length; i++) {
    let textToVoiceDiv = document.createElement('div');
    textToVoiceDiv.id = 'ttv-div#' + divCount;
    textToVoiceDiv.className = 'ttv-div';
    textToVoice.appendChild(textToVoiceDiv);

    let textToVoiceImg = document.createElement('img');
    textToVoiceImg.id = 'ttv-img#' + divCount;
    textToVoiceImg.className = 'ttv-img';
    textToVoiceImg.src = divImageData[i];
    textToVoiceDiv.appendChild(textToVoiceImg);

    let textToVoiceButtonDiv = document.createElement('div');
    textToVoiceButtonDiv.id = 'ttv-btn-div';
    textToVoiceDiv.appendChild(textToVoiceButtonDiv);

    let textToVoiceInputI = document.createElement('i');
    textToVoiceInputI.id = 'ttv-icon#' + divCount;
    textToVoiceInputI.className = 'fas fa-play-circle ttv-icon';
    textToVoiceButtonDiv.appendChild(textToVoiceInputI);

    let textToVoiceInput = document.createElement('input');
    textToVoiceInput.id = 'ttv-btn#' + divCount;
    textToVoiceInput.className = 'ttv-btn';
    textToVoiceInput.type = 'button';
    textToVoiceInput.value = divTextData[i];
    textToVoiceButtonDiv.appendChild(textToVoiceInput);

    let textToVoiceButtonDiv2 = document.createElement('div');
    textToVoiceButtonDiv2.id = 'ttv-btn-div2';
    textToVoiceDiv.appendChild(textToVoiceButtonDiv2);

    let textToVoiceInputI2 = document.createElement('i');
    textToVoiceInputI2.id = 'ttv-icon2#' + divCount;
    textToVoiceInputI2.className = 'fas fa-plus-circle ttv-icon2';
    textToVoiceButtonDiv2.appendChild(textToVoiceInputI2);

    let textToVoiceInput2 = document.createElement('input');
    textToVoiceInput2.id = 'ttv-btn2#' + divCount;
    textToVoiceInput2.className = 'ttv-btn2';
    textToVoiceInput2.type = 'button';
    textToVoiceInput2.value = 'Add Sign';
    textToVoiceButtonDiv2.appendChild(textToVoiceInput2);

    divCount += 1;
}

// Outputs Speech On Click
for (let i = 0; i < divTextData.length; i++) {
    document.getElementById('ttv-btn#' + i).onclick = function() {
        let textToVoiceOutput = new SpeechSynthesisUtterance();
        let voiceListItemSelected = voiceListSelection.selectedOptions[0].getAttribute('data-name');
        voiceList.forEach((voice) => {
            if (voice.name === voiceListItemSelected) {
                textToVoiceOutput.voice = voice;
                textToVoiceOutput.text = divTextData[i];
            };
        }); speechSynth.speak(textToVoiceOutput);
    }
};
for (let i = 0; i < divTextData.length; i++) {
    document.getElementById('ttv-icon#' + i).onclick = function() {
        let textToVoiceOutput = new SpeechSynthesisUtterance();
        let voiceListItemSelected = voiceListSelection.selectedOptions[0].getAttribute('data-name');
        voiceList.forEach((voice) => {
            if (voice.name === voiceListItemSelected) {
                textToVoiceOutput.voice = voice;
                textToVoiceOutput.text = divTextData[i];
            };
        }); speechSynth.speak(textToVoiceOutput);
    }
};

// Adds Speech To Sentence On Click
for (let i = 0; i < divTextData.length; i++) {
    for (let j = 0; j < divImageData.length; j++) {
        document.getElementById('ttv-btn2#' + i).onclick = function() {
            sentenceTextData.push(divTextData[i]);
            sentenceImageData.push(divImageData[i]);

            let textToVoiceDiv = document.createElement('div');
            textToVoiceDiv.className = 'ttvs-div';
            textToVoiceSentence.appendChild(textToVoiceDiv);

            let textToVoiceImg = document.createElement('img');
            textToVoiceImg.className = 'ttvs-img';
            textToVoiceImg.src = divImageData[i];
            textToVoiceDiv.appendChild(textToVoiceImg);
        }
    };
};
for (let i = 0; i < divTextData.length; i++) {
    for (let j = 0; j < divImageData.length; j++) {
        document.getElementById('ttv-icon2#' + i).onclick = function() {
            sentenceTextData.push(divTextData[i]);
            sentenceImageData.push(divImageData[i]);

            let textToVoiceDiv = document.createElement('div');
            textToVoiceDiv.className = 'ttvs-div';
            textToVoiceSentence.appendChild(textToVoiceDiv);

            let textToVoiceImg = document.createElement('img');
            textToVoiceImg.className = 'ttvs-img';
            textToVoiceImg.src = divImageData[i];
            textToVoiceDiv.appendChild(textToVoiceImg);
        }
    };
};

// Outputs Speech In Sentence On Click 
document.getElementById('ttvs-play-btn').onclick = function() {
    let textToVoiceOutput = new SpeechSynthesisUtterance();
    let voiceListItemSelected = voiceListSelection.selectedOptions[0].getAttribute('data-name');
    voiceList.forEach((voice) => {
        if (voice.name === voiceListItemSelected) {
            textToVoiceOutput.voice = voice;
            textToVoiceOutput.text = sentenceTextData.join('');
        };
    }); speechSynth.speak(textToVoiceOutput);
}

// Adds Space In Sentence On Click
document.getElementById('ttvs-space-btn').onclick = function() {
    sentenceTextData.push(' ');
    let textToVoiceSentenceSpace = document.createElement('p');
    textToVoiceSentenceSpace.className = 'ttvs-space';
    textToVoiceSentenceSpace.innerText = '-';
    textToVoiceSentence.appendChild(textToVoiceSentenceSpace);
}

// Deletes Speech In Sentence On Click 
document.getElementById('ttvs-delete-btn').onclick = function() {
    sentenceTextData.length = 0;
    document.getElementById('text-to-voice-sentence-div').innerHTML = "";
}