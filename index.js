let uss=0;
let cd=0;
const choices=document.querySelectorAll(".choice");
const uu=document.querySelector("#mes")
const user=document.querySelector("#user")
const comp=document.querySelector("#comp")
const cp=()=>{
    const arr=["rock","paper","scissors"];
    const i=Math.floor(Math.random()*3);
    return arr[i];
}
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "yellow";
  };
  
const sw=(uw,us,userid)=>{
    if(uw==true){
        uss++;
uu.innerText=`You win! Your ${userid} beats ${us} !`;
user.innerText=uss;
uu.style.backgroundColor="green"
    }
    else{
        cd++;
        uu.innerText=`You lose,${us} beats your ${userid}!`;
        comp.innerText=cd;
        uu.style.backgroundColor="red"
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userid=choice.getAttribute("id");
console.log("clicked",userid);
const us=cp();
if(us===userid){
    uu.innerText="Draw";
    uu.style.backgroundColor="yellow"
}else{
    let uw=true;
if(us=="rock" && userid=="paper"){
    uw=true;
}
if(us=="paper" && userid=="rock"){
   uw=false;
}
if(us=="rock" && userid=="scissors"){
   uw=false;
}
if(us=="scissors" && userid=="rock"){
    uw=true;
}
if(us=="paper" && userid=="scissors"){
    uw=true;
}
if(us=="scissors" && userid=="paper"){
 uw=false;
}
sw(uw,us,userid)
}
    });
});
