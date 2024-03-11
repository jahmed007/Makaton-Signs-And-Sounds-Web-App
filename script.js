let voiceList = [];
let speechSynth = window.speechSynthesis;
let voiceListSelection = document.getElementById('vl-select');
let textToVoiceSentence = document.getElementById('text-to-voice-sentence-div');
let textToVoiceSentencePlayBtn = document.getElementById('ttvs-play-btn');
let textToVoiceSentenceDeleteBtn = document.getElementById('ttvs-delete-btn');
let textToVoiceSentenceSpaceBtn = document.getElementById('ttvs-space-btn');
let textToVoice = document.getElementById('text-to-voice-sect');

// Populates Voices From Google Speech API
populateVoices();
if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
};

function populateVoices() {
    voiceList = speechSynth.getVoices();
    let selectedIndex = 0;
    let savedVoiceName = localStorage.getItem('voiceNameSelected');
    voiceListSelection.innerHTML = '';
    voiceList.forEach((voice, index) => {
        let voiceListItem = document.createElement('option');
        voiceListItem.textContent = voice.name;
        voiceListItem.setAttribute('data-lang', voice.lang);
        voiceListItem.setAttribute('data-name', voice.name);
        voiceListSelection.appendChild(voiceListItem);
        if (voice.name === savedVoiceName) {
            selectedIndex = index;
        }
    });
    voiceListSelection.selectedIndex = selectedIndex;
    voiceListSelection.addEventListener('change', function () {
        let voiceNameSelected = voiceList[voiceListSelection.selectedIndex].name;
        localStorage.setItem('voiceNameSelected', voiceNameSelected);
    });
};

// Array Data Stored Here
let divCount = 0;
let divImageData = [
    'media/signs/letter-a.png',
    'media/signs/letter-b.png',
    'media/signs/letter-c.png',
    'media/signs/letter-d.png',
    'media/signs/letter-e.png',
    'media/signs/letter-f.png',
    'media/signs/letter-g.png',
    'media/signs/letter-h.png',
    'media/signs/letter-i.png',
    'media/signs/letter-j.png',
    'media/signs/letter-k.png',
    'media/signs/letter-l.png',
    'media/signs/letter-m.png',
    'media/signs/letter-n.png',
    'media/signs/letter-o.png',
    'media/signs/letter-p.png',
    'media/signs/letter-q.png',
    'media/signs/letter-r.png',
    'media/signs/letter-s.png',
    'media/signs/letter-t.png',
    'media/signs/letter-u.png',
    'media/signs/letter-v.png',
    'media/signs/letter-w.png',
    'media/signs/letter-x.png',
    'media/signs/letter-y.png',
    'media/signs/letter-z.png',
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
    document.getElementById('ttv-btn#' + i).onclick = function () {
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
    document.getElementById('ttv-icon#' + i).onclick = function () {
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
        document.getElementById('ttv-btn2#' + i).onclick = function () {
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
        document.getElementById('ttv-icon2#' + i).onclick = function () {
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
document.getElementById('ttvs-play-btn').onclick = function () {
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
document.getElementById('ttvs-space-btn').onclick = function () {
    sentenceTextData.push(' ');
    let textToVoiceSentenceSpace = document.createElement('p');
    textToVoiceSentenceSpace.className = 'ttvs-space';
    textToVoiceSentenceSpace.innerText = '-';
    textToVoiceSentence.appendChild(textToVoiceSentenceSpace);
}

// Deletes Speech In Sentence On Click 
document.getElementById('ttvs-delete-btn').onclick = function () {
    sentenceTextData.length = 0;
    document.getElementById('text-to-voice-sentence-div').innerHTML = "";
}