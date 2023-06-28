

let cards = [] ;


let sum = 0 ;
let hasBlackJack = false 
let isAlive = false ;
let isStart = false ; 
let message ;
let player = {

     name : "Maruf" ,
     chips : 145 ,

}

messageEl = document.getElementById("message-el") ;
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name +": $" + player.chips ;


function startGame()
    {
       

        messageEl.textContent="Want to play a round ?";
        cardsEl.textContent = "Cards: " ;
        sumEl.textContent = "Sum: " ;
        sum = 0 ;
        hasBlackJack = false 
        isAlive = false ;
        isStart = false ;


       cards=[];




        isAlive = true ;
        isStart = true ;

        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        sum = firstCard + secondCard ;
        cards.push(firstCard);
        cards.push(secondCard);

        renderGame();
    }
function renderGame()
    {
        sumEl.textContent = "Sum: "+sum ;
        cardsEl.textContent = "Cards: " ;

        let i = 0; 
        for(i=0;i<cards.length;i++){
            if(i!=0){
                cardsEl.textContent+=" , ";
            }
          


            cardsEl.textContent+= cards[i] ;
        }

        if(sum<21){
            message="Do You Wanna Draw a New Card ? ";
        }

        else if( sum === 21)
            {
                message="Wohoo ! You have BlackJack ! ";
                hasBlackJack = true ;
            }

        else{
            message="You are out of the game ! ";
            isAlive = false ;
        }

        messageEl.textContent=message;

       
    }
function newCard()
    {
        if(isAlive&&isStart&&hasBlackJack==false){
        let thirdCard = getRandomCard() ;
        sum+=thirdCard;
        cards.push(thirdCard);
        
        renderGame();   
        }
    }

function getRandomCard()
    {
        let randomNumber = Math.floor(Math.random()*13+1) ;
        if(randomNumber>10)
            randomNumber = 10 ; 
        else if(randomNumber===1)
            {
                randomNumber = 11 ;
            }

        return randomNumber ;
    }



