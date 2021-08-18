var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json"
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {

    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var tText = json.contents.translated;
            outputDiv.innerText = tText;
        })
        .catch(errorHandler)

};

btntranslate.addEventListener("click", clickHandler)