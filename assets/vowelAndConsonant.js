function vowel(str) {
  let vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  let vowelArr = [];
  let lowercasStr = str.toLowerCase();
  for (let i = 0; i < lowercasStr.length; i++) {
    if (vowels.includes(lowercasStr[i])) {
      vowelArr.push(lowercasStr[i]);
      vowelArr.sort();
    }
  }
  let reverseArr = vowelArr.reverse();
  let strVowel = reverseArr.join("");
  return strVowel;
}

function consonant(str) {
  let consonant = [];
  let vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  let lowercasStr = str.toLowerCase();
  for (let j = 0; j < vowels.length; j++) {
    if (!vowels.includes(lowercasStr[j])) {
      if (lowercasStr[j] !== " ") {
        consonant.push(lowercasStr[j]);
      }
    }
  }
  let strConsonant = consonant.join("");
  return strConsonant;
}

const vowelDOM = document.querySelector("#vowel");
const consonantDOM = document.querySelector("#consonant");
const buttonDOM = document.querySelector("#button");
const CHACE_KEY = "rahasia";
buttonDOM.addEventListener("click", function () {
  const inputDOM = document.querySelector("#input").value;
  function print(str) {
    vowelDOM.innerText = `Vowel Characters : ${vowel(str)}`;
    console.log(vowel(str));
    consonantDOM.innerText = `Consonant Characters :${consonant(str)}`;

    let history = {
      inputData: inputDOM,
      vowelData: vowel(str),
      consonantData: consonant(str),
    };

    if (typeof Storage !== "undefined") {
      let historyData = null;
      if (localStorage.getItem(CHACE_KEY) === null) {
        historyData = [];
      } else {
        historyData = JSON.parse(localStorage.getItem(CHACE_KEY));
      }

      historyData.unshift(history);
      if (historyData.length > 5) {
        historyData.pop();
      }
      localStorage.setItem(CHACE_KEY, JSON.stringify(historyData));
    }
  }

  function showHistory() {
    if (typeof Storage !== "undefined") {
      return JSON.parse(localStorage.getItem(CHACE_KEY)) || [];
    } else {
      return [];
    }
  }

  let data = showHistory();
  const historyList = document.querySelector('#historyList');
  historyList.innerHTML = "";
  data.forEach((el) => {
    let row = document.createElement('tr')
        row.innerHTML = `<td>${el.inputData}</td>`
        row.innerHTML += `<td>${el.vowelData}</td>`
        row.innerHTML += `<td>${el.consonantData}</td>`

        historyList.appendChild(row)
  });
  
  print(inputDOM);
  console.log(data);
});
