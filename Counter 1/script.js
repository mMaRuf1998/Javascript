//

let num = 0 ;

countEl = document.getElementById("count-el");

function increase()
    {
        num++;
        countEl.textContent = num ;
        
    }

function decrease()
    {
        if(num>0)
        num--;
        
        countEl.textContent = num ;
       
    }
function save()
    {
            let entryEl = document.getElementById("entry-el");
            entryEl.textContent+= num + " - " ;
            num=0;
            countEl.textContent = num ;


        
    }