const word_el = document.getElementById('word')
const popup = document.getElementById('popup-container')
const message_el = document.getElementById('success-message')
const wrongletters_el = document.getElementById('wrong-letters')
const items = document.querySelectorAll('.item')



const correctLetters = [];
const wrongletters = [];
const selectedword = getRandomWord();


function getRandomWord(){
    const words = ["javascript", "java", "html", "css", "git", "react"]
    return words[Math.floor(Math.random() * words.length)]
}

function displayWord(){
    

    word_el.innerHTML = `
    ${
        selectedword.split('').map(letter =>`
            <div class="letter">
            ${correctLetters.includes(letter) ? letter: ''}
            </div>
            `).join('')}    
        `;
        const w = word_el.innerText.replace(/\n/g,'');
        if (w === selectedword){
            popup.style.display = 'flex';
            message_el.innerText = 'Tebrikler Kazandınız :)'
            
        }
}

function updateWrongLetters(){
    wrongletters_el.innerHTML = `
    ${wrongletters.length>0?'<h3>Hatalı Harfler</h3>':''}
    ${wrongletters.map(letter => `<span>${letter}</span>`)}    
    `;
    items.forEach((item,index)=> {
        const errorCount = wrongletters.length;

        if(index<errorCount){
            item.style.display = 'block'

        }else{
            item.style.display = 'none'
        }
    })
    
}

window.addEventListener('keydown', function(e){

    if(e.keyCode >= 65 && e.keyCode <=90){
      const letter =e.key;

      if(selectedword.includes(letter)){
        if(!correctLetters.includes(letter)){
            correctLetters.push(letter);
            displayWord();

        }else{
            console.log('bu harfi zaten eklediniz');
        }
      }else{
        if(!wrongletters.includes(letter)){
            wrongletters.push(letter);
            updateWrongLetters();
        }
      }
    }
});

displayWord()






