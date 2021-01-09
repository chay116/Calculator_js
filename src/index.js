// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const number = document.getElementsByClassName("number");
const symbol = document.getElementsByClassName("symbol");
const reset = document.querySelector(".reset");
const resultpresent = document.querySelector(".result");

let calculating = false;
let result = 0;
let followup = 0;
let method = null;

function resultPresnt() {
  if (!calculating) {
    resultpresent.innerText = result;
  } else {
    resultpresent.innerText = followup;
  }
}

function addReset() {
  calculating = false;
  result = 0;
  followup = 0;
  resultPresnt();
}

function addNumber(event) {
  if (!calculating) {
    console.log(typeof result);
    result = result * 10 + parseInt(event.target.innerText);
  } else {
    followup = followup * 10 + parseInt(event.target.innerText);
  }
  console.log(result, followup);
  resultPresnt();
}

function addSymbol(event) {
  if ("=" === event.target.innerText) {
    if (followup === 0) {
      method = null;
    } else {
      switch (method) {
        case "+":
          result = result + followup;
          break;
        case "-":
          result = result - followup;
          break;
        case "*":
          result = result * followup;
          break;
        case "/":
          result = result / followup;
          break;
        default:
      }
    }
    followup = 0;
    calculating = false;
  } else {
    if (calculating === true) {
      if (followup === 0) {
        method = event.target.innerText;
      } else {
        switch (method) {
          case "+":
            result = result + followup;
            break;
          case "-":
            result = result - followup;
            break;
          case "*":
            result = result * followup;
            break;
          case "/":
            result = result / followup;
            break;
          default:
        }
        followup = 0;
      }
    } else {
      calculating = true;
      method = event.target.innerText;
    }
  }

  console.log(result, followup);
  resultPresnt();
}

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", addNumber);
}
reset.addEventListener("click", addReset);

for (let i = 0; i < symbol.length; i++) {
  symbol[i].addEventListener("click", addSymbol);
}
