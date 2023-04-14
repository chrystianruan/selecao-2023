let badWords = [
 "Caralho", "Porra", "Foda-se", "Merda",
 "Filho da puta", "Puta que pariu", "Cuzão", "Piroca",
 "Viado", "Buceta", "Corno", "Arrombado", "cu",
 "Babaca", "Desgraçado", "Idiota", "Retardado", "Vagabundo",
 "Fudido", "Miserável", "Trouxa", "Cafajeste", "Fuleiro",
 "Galinha", "Desgraça", "Xingamento", "Pamonha",
 "Burro", "Putaria"
];


let emptyInput = document.getElementById("empty-input");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let digitedWord = document.getElementById("digited-words");

let ofensiveWords = document.getElementById("ofensive-words");


function checkInput() {

    let words = input.value;
    let list = words.split(' ');

    if (words.trim() != 0) {
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < badWords.length; j++) {
                if (list[i].toLowerCase() == badWords[j].toLowerCase()) {
                    ofensiveWords.style.display = "block";
                    ofensiveWords.textContent = "O texto digitado contém palavras de baixo calão e/ou ofensivas";
                    setTimeout(function() {
                        ofensiveWords.style.display="none";
                    }, 3000);
                    return 1;
                } 
            }

        }   
        return 2;

    } else {
        emptyInput.style.display = "block";
        emptyInput.textContent = "O campo está vazio";
        setTimeout(function() {
            emptyInput.style.display="none";
        }, 1500);
    }


}


function valuesInputAndCss() {

    if (checkInput() == 1) {
        let danger = document.createElement("div");
        danger.className = "danger alert";
        danger.id = "danger";
        let content = document.createElement("div");
        content.className = "content";
        let icon = document.createElement("div");
        icon.className = "icon";
        let iconImg = document.createElement("i");
        iconImg.className = "fa fa-times";
        let wordDenied = document.createElement("p");
        wordDenied.id = "word-denied";
        danger.style.display = "block";
        wordDenied.textContent = input.value;
        danger.appendChild(content);
        icon.appendChild(iconImg);
        content.appendChild(icon);
        content.appendChild(wordDenied);
        digitedWord.appendChild(danger);

    } else if (checkInput() == 2) {
        let success = document.createElement("div");
        success.className = "success alert";
        success.id = "sucess";
        let content = document.createElement("div");
        content.className = "content";
        let icon = document.createElement("div");
        icon.className = "icon";
        let iconImg = document.createElement("i");
        iconImg.className = "fa fa-check";
        let wordApproved = document.createElement("p");
        wordApproved.id = "word-approved";
        success.style.display = "block";
        wordApproved.textContent = input.value;
        success.appendChild(content);
        icon.appendChild(iconImg);
        content.appendChild(icon);
        content.appendChild(wordApproved);
        digitedWord.appendChild(success);

    }

}

function cleanInput () {
    input.value = "";
}


btn.addEventListener("click", checkInput);
btn.addEventListener("click", valuesInputAndCss);
btn.addEventListener("click", cleanInput);
