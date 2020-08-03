//1st part 

document.getElementById("match").style.display = "none"
document.getElementById("unMatch").style.display = "none"

//2nd part

document.getElementById('generatePin').addEventListener('click' , function(){
    const random = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('showRandomNumber').value = random;  
})

//3rd part 
function digit(x){
    document.getElementById("showResult").value += x;
}

//4th part
function submitValue() {
    const generateValue= document.getElementById("showRandomNumber").value;
    const inputValue = document.getElementById("showResult").value;
    if (generateValue == inputValue) {
        document.getElementById("match").style.display = "block";
        document.getElementById("unMatch").style.display = "none";
    } 
    else {
        document.getElementById("unMatch").style.display = "block";
        document.getElementById("match").style.display = "none";
        actionLeft();
    }
}

//5th part
   document.getElementById("delete").addEventListener('click' , function(){
   document.getElementById("showResult").value = document.getElementById("showResult").value.slice(0,-1); 
})

//6th part 
    document.getElementById("clearAll").addEventListener('click',function(){
    document.getElementById("showResult").value= " " ;
    })

//7th part 
let Count = 0;
function actionLeft() {
    var generateValue = document.getElementById("showRandomNumber").value;
    var inputValue = document.getElementById("showResult").value;
    Count++ ;
    if (Count == 1 && inputValue !== generateValue) {
        document.getElementById("actionLeft").innerText = "2 try left";
    }
    else if (Count == 2 && inputValue !== generateValue) {
        document.getElementById("actionLeft").innerText = "1 try left";
    }
    else if (Count == 3 && inputValue !== generateValue) {
        document.getElementById("actionLeft").style.display = "none";
        document.getElementById("submitButton").disabled = true;
    }
}