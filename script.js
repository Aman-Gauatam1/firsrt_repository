let modebn=document.querySelector("#mode");
let curMode="light";

modebn.addEventListener("click", ()=>{
    if(curMode==="light"){
        curMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        curMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(curMode);
});