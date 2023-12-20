// ["Red","Blue","Green","Yellow","Orange","Lime","Cyan","White","Grey"],
let list=[
    ["Red","Blue","Orange","Cyan","Grey"],["Blue","Yellow","Lime","Cyan","Grey"],["Green","Orange","Lime","Cyan","White","Grey"],["Red","Green","Yellow","White","Grey"]];
    
    let ul = document.getElementsByTagName("ul")[0];
    let current=0;
    let str="";
    let res="";
    function Start(){
        document.getElementsByTagName("h2")[0].innerText="Is your color present in this list?";
        document.getElementsByClassName("start")[0].classList.add("hide");
        document.getElementsByClassName("nothere")[0].classList.remove("hide")
        next("");
    }
    function next(val){
        str+=val;
        ul.innerHTML="";
        if(str.length<=3){
            list[current++].forEach((element)=>{
                let li = document.createElement("li");
                li.innerText=element;
                li.style.color=element;
                ul.appendChild(li);
            })
        }
        else{
        document.getElementsByTagName("h2")[0].innerText="Is it right?  ";
        document.getElementsByClassName("nothere")[0].classList.add("hide");
        ul.remove();
        let h2= document.createElement("h2");
        switch(str){
            case "1001":
            res="Red";
            break;
            case "1100":
            res="Blue"
            break;
            case "0011":
            res="Green"
            break;
            case "0101":
            res="Yellow"
            break;
            case "1010":
            res="Orange";
            break;
            case "0110":
            res="Lime";
            break;
            case "1110":
            res="Cyan"
            break;
            case "0111":
            res="White"
            break;
            case "1011":
            res="Grey";
            break;
            default:
                res=NaN;
        }
        console.log(str);

        if(res){
            h2.innerText=`You've chosen ${res}`;
            h2.style.color=res;
        }
        else
        h2.innerText=`Incorrect selection :(`;
        
        document.getElementById("here").appendChild(h2);

        document.getElementById("rest").classList.remove("hide");

    }
}

