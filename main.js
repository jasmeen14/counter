let count = 0;

const value = document.querySelector("#value");
const btns =document.querySelectorAll(".btn");
    console.log(btns);
btns.forEach(function(btn){
    console.log(btn);
  btn.addEventListener("click",function(e){ //event object
 const styles = e.currentTarget.classList;
 if(styles.contains ("decrease")) {
     count--;
 }
// console.log('btns');

 else if (styles.contains("increase")){
     count++;
 }
 else{
     count = 0;
 }
 if(count > 0){
     value.style.color ="green";
    }
    if(count < 0){
        value.style.color ="red";
    }
    if(count == 0){
        value.style.color = "black";
    }
 value.textContent = count;
    });
});