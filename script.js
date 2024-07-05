function clickFunc(el) {
    if((document.getElementsByClassName('selected').length == 0)){
        el.classList.add('selected');
        el.children[0].style.transform = 'rotateY(180deg)';
    }
    else if (document.getElementsByClassName('selected').length<2){
        el.classList.add('selected');
        el.children[0].style.transform = 'rotateY(180deg)';
        const selections = document.getElementsByClassName('selected')
        tryCount=document.getElementById("counter");
        if(selections[0].className == selections[1].className){
            setTimeout(() => {
                selections[0].remove();
                selections[0].remove();
                if (tryCount.children[0].textContent=="Intentos restantes:") tryCount.children[1].textContent=parseInt(tryCount.children[1].textContent)-1
                else tryCount.children[1].textContent=parseInt(tryCount.children[1].textContent)+1
                btncheck();
                if (tryCount.children[1].textContent==0 && tryCount.children[0].textContent=="Intentos restantes:"){
                    setTimeout(()=>{loseMsg()},500);
                }
            },500);
        }
        else{
            setTimeout(() => {
                selections[0].children[0].style.transform = 'rotateY(0deg)';
                selections[1].children[0].style.transform = 'rotateY(0deg)';
                selections[0].classList.remove('selected');
                selections[0].classList.remove('selected');
                if (tryCount.children[0].textContent=="Intentos restantes:") tryCount.children[1].textContent=parseInt(tryCount.children[1].textContent)-1
                else tryCount.children[1].textContent=parseInt(tryCount.children[1].textContent)+1
                if (tryCount.children[1].textContent==0 && tryCount.children[0].textContent=="Intentos restantes:"){
                    setTimeout(()=>{loseMsg()},500);
                }
                
            },2000);
        }
    }
}

function btncheck(){
    if(document.getElementsByClassName('flip-card').length == 0){
        chronos.stopTimer();
        const tryCount=document.getElementById("counter");
        const timer=document.getElementById("time");
        const winMsg=document.getElementById("winner");
        const winMsgCounter=document.getElementById("winner-counter");
        const winMsgTimer=document.getElementById("winner-timer");
        const mainMenu=document.getElementById("mainMenu");
        if (tryCount.children[0].textContent=="Intentos restantes:"){
            winMsg.textContent=`GANASTE EN HARDCORE!?!?!`
            winMsgCounter.textContent=`Número de turnos: ${15-document.getElementById("counter").children[1].textContent}`  //modify accordingly to the hardcore mode tries
            winMsgTimer.textContent=`Tiempo transcurrido: ${document.getElementById("time").children[1].textContent}`
            document.getElementById("wholeBody").style.backgroundImage="url(https://static.vecteezy.com/system/resources/previews/002/174/599/non_2x/realistic-brown-wood-template-free-vector.jpg)";
            tryCount.classList.remove("try-counter-hardcore");
            tryCount.innerHTML="";
            timer.innerHTML="";
            document.getElementById('btnReturn').style.display = 'none';
            setTimeout(() => {
                const lb=document.getElementById("lb").children
                if (lb.length>0){
                    const newRecord=document.createElement("div");
                    newRecord.classList.add("leaderboard");
                    newRecord.textContent=`${lb.length}) Intento en hardcore || ${winMsgCounter.textContent} || ${winMsgTimer.textContent}`
                    document.getElementById("lb").appendChild(newRecord);
                }
                else{
                    const baseMsg=document.createElement("div");
                    baseMsg.classList.add("leaderboard");
                    baseMsg.textContent="Registro de victorias:"
                    document.getElementById("lb").appendChild(baseMsg);
                    const newRecord=document.createElement("div");
                    newRecord.classList.add("leaderboard");
                    newRecord.textContent=`${lb.length}) Intento en hardcore || ${winMsgCounter.textContent} || ${winMsgTimer.textContent}`
                    document.getElementById("lb").appendChild(newRecord);
                }
                winMsg.innerHTML="";
                winMsgCounter.innerHTML="";
                winMsgTimer.innerHTML="";
                mainMenu.textContent="Memorice";
                mainMenu.style.color="black";
                document.getElementById('sub').style.display = 'flex';
                document.getElementById('btnDiv').style.display = 'flex';
            },6000);
        }
        else{
            winMsg.textContent=`GANASTE!!`
            winMsgCounter.textContent=`Número de turnos: ${document.getElementById("counter").children[1].textContent}`
            winMsgTimer.textContent=`Tiempo transcurrido: ${document.getElementById("time").children[1].textContent}`
            tryCount.innerHTML="";
            timer.innerHTML="";
            document.getElementById('btnReturn').style.display = 'none';
            setTimeout(() => {
                const lb=document.getElementById("lb").children
                if (lb.length>0){
                    const newRecord=document.createElement("div");
                    newRecord.classList.add("leaderboard");
                    newRecord.textContent=`${lb.length}) Intento con ${mainMenu.textContent} || ${winMsgCounter.textContent} || ${winMsgTimer.textContent}`
                    document.getElementById("lb").appendChild(newRecord);
                }
                else{
                    const baseMsg=document.createElement("div");
                    baseMsg.classList.add("leaderboard");
                    baseMsg.textContent="Registro de victorias:"
                    document.getElementById("lb").appendChild(baseMsg);
                    const newRecord=document.createElement("div");
                    newRecord.classList.add("leaderboard");
                    newRecord.textContent=`${lb.length}) Intento con ${mainMenu.textContent} || ${winMsgCounter.textContent} || ${winMsgTimer.textContent}`
                    document.getElementById("lb").appendChild(newRecord);
                }
                winMsg.innerHTML="";
                winMsgCounter.innerHTML="";
                winMsgTimer.innerHTML="";
                mainMenu.textContent="Memorice";
                document.getElementById('sub').style.display = 'flex';
                document.getElementById('btnDiv').style.display = 'flex';
            },6000);
        }
    }
}

function loseMsg(){
    chronos.stopTimer();
    const deck = document.getElementsByClassName('flip-card');
    Array.from(deck).forEach(card=>card.remove());
    const tryCount=document.getElementById("counter");
    const timer=document.getElementById("time");
    const winMsg=document.getElementById("winner");
    const winMsgTimer=document.getElementById("winner-timer");

    document.getElementById("wholeBody").style.backgroundImage="url(https://static.vecteezy.com/system/resources/previews/002/174/599/non_2x/realistic-brown-wood-template-free-vector.jpg)";
    winMsg.textContent=`TE QUEDASTE SIN INTENTOS :(`
    winMsgTimer.textContent=`Tiempo transcurrido: ${document.getElementById("time").children[1].textContent}`
    const mainMenu=document.getElementById("mainMenu");
    mainMenu.style.color="black";
    mainMenu.textContent="Memorice";
    tryCount.classList.remove("try-counter-hardcore");
    tryCount.innerHTML="";
    timer.innerHTML="";
    document.getElementById('btnReturn').style.display = 'none';
    setTimeout(() => {
        winMsg.innerHTML="";
        winMsgTimer.innerHTML="";
        document.getElementById('sub').style.display = 'flex';
        document.getElementById('btnDiv').style.display = 'flex';
    },6000);
}

function createFlipCard(number) {
    const flipCard = document.createElement('div');
    flipCard.classList.add('flip-card', `${number}`);
  
    const flipCardInner = document.createElement('div');
    flipCardInner.classList.add('flip-card-inner');
  
    const flipCardFront = document.createElement('div');
    flipCardFront.classList.add('flip-card-front');
  
    flipCardFront.textContent = '';
  
    const flipCardBack = document.createElement('div');
    flipCardBack.classList.add('flip-card-back');
  
    flipCardBack.textContent = number;
  
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
  
    flipCard.appendChild(flipCardInner);
  
    flipCard.addEventListener('click', function() {clickFunc(flipCard);});
  
    return flipCard;
}

function initializeFlipCards(el) {
    const flipCardsData8 = [1, 2, 3, 4];
    const flipCardsData16 = [1, 2, 3, 4, 5, 6, 7, 8];
    const flipCardsData32 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const cardContainer = document.getElementById('card-container');

    const tryCount=document.getElementById("counter");
    const newCountContainer = document.createElement('div');
    const newCountText = document.createElement('div');
    newCountText.textContent="Turnos:";
    newCountContainer.textContent = '0';
    tryCount.appendChild(newCountText);
    tryCount.appendChild(newCountContainer);

    const timer=document.getElementById("time");
    const newTimeContainer = document.createElement('div');
    const newTimeText = document.createElement('div');
    const mainMenu=document.getElementById("mainMenu")
    newTimeText.textContent="Tiempo:";
    newTimeContainer.textContent = '00:00:00';
    timer.appendChild(newTimeText);
    timer.appendChild(newTimeContainer);
    chronos.startTimer();


    if(el.id == 8){
        flipCardsData8.forEach(number => {
            const newCard1 = createFlipCard(number);
            const newCard2 = createFlipCard(number);
            cardContainer.appendChild(newCard1);
            cardContainer.appendChild(newCard2);
            mainMenu.textContent="8 cartas";
        });

    }
    else if(el.id == 16){
        flipCardsData16.forEach(number => {
            const newCard1 = createFlipCard(number);
            const newCard2 = createFlipCard(number);
            cardContainer.appendChild(newCard1);
            cardContainer.appendChild(newCard2);
            mainMenu.textContent="16 cartas";
          });
          
    }
    else if (el.id == "hardcore"){
        flipCardsData16.forEach(number => {     //modify the list used in this for each to increase or decrease the ammount of cards in hardcore
            const newCard1 = createFlipCard(number);
            const newCard2 = createFlipCard(number);
            cardContainer.appendChild(newCard1);
            cardContainer.appendChild(newCard2);
        });
        document.getElementById("wholeBody").style.backgroundImage="url(https://wallpaperset.com/w/full/4/1/1/450852.jpg)";
        mainMenu.style.color="#d20000";
        mainMenu.textContent="HARDCORE";
        tryCount.classList.add("try-counter-hardcore");
        newCountText.textContent="Intentos restantes:";
        newCountContainer.textContent = '15';  //define the ammount of tries for the hardcore mode
    }
    else{
        flipCardsData32.forEach(number => {
            const newCard1 = createFlipCard(number);
            const newCard2 = createFlipCard(number);
            cardContainer.appendChild(newCard1);
            cardContainer.appendChild(newCard2);
            mainMenu.textContent="32 cartas";
          });
    }
    const fullDeck = Array.from(cardContainer.children);
    const shuffledDeck=shuffle(fullDeck,4,1);
    cardContainer.innerHTML = '';
    shuffledDeck.forEach(item => {
        cardContainer.appendChild(item);
        });
  }

function shuffle(array,startingPoint,count){
    const ordered=array.map((item,idx)=>{
        if ((startingPoint+idx)<=(array.length-1)) return array[startingPoint+idx];
        else return array[array.length-idx-1];
    })
    if (count<(array.length*3)){  //modify this if you want to sort the cards more or less times
        return shuffle(ordered,(Math.floor(Math.random() * (array.length))),count+1);
    }
    else return ordered;
}

function mainMenu(){
    const deck = document.getElementsByClassName('flip-card');
    chronos.stopTimer();
    const tryCount=document.getElementById("counter");
    const timer=document.getElementById("time");
    document.getElementById('btnReturn').style.display = 'none';
    document.getElementById('sub').style.display = 'flex';
    document.getElementById('btnDiv').style.display = 'flex';
    timer.innerHTML="";
    const mainMenu=document.getElementById("mainMenu");
    if (tryCount.children[0].textContent=="Intentos restantes:"){
        document.getElementById("wholeBody").style.backgroundImage="url(https://static.vecteezy.com/system/resources/previews/002/174/599/non_2x/realistic-brown-wood-template-free-vector.jpg)";
        mainMenu.style.color="black";
        tryCount.classList.remove("try-counter-hardcore");
    }
    mainMenu.textContent="Memorice";
    tryCount.innerHTML="";
    Array.from(deck).forEach(card=> card.remove());
}

const chronos = (function() {
    let interval;
    
    function startTimer() {
        let seconds = 0;
        const timer = document.getElementById('time').children[1];
        function updateTime() {
            seconds++;
            timer.textContent = formatTime(seconds);
        }
        function formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${secs < 10 ? '0' + secs : secs}`;
        }
        interval = setInterval(updateTime, 1000);
    }

    function stopTimer() {
        clearInterval(interval); 
    }

    return {
        startTimer: startTimer,
        stopTimer: stopTimer
    };
})();

document.addEventListener("DOMContentLoaded", (event) => {
    const btnAdd = document.getElementsByClassName("btnAdd");
    const btnBack= document.getElementById("btnReturn");
    Array.from(btnAdd).forEach(el => {
        el.addEventListener("click", () => {
            document.getElementById('sub').style.display="none";
            document.getElementById('btnDiv').style.display = 'none';
            document.getElementById('btnReturn').style.display = 'flex';
            initializeFlipCards(el);});
    });
    btnBack.addEventListener("click", ()=>mainMenu())
});