var number1=prompt("What is your choice? 1.Rock, 2. Paper, 3. Scissors");
if(number1<1 || number1 >3){
    alert("Enter valid input");
}
var items=["rock","paper","scissor"];
// var number1=Math.floor(Math.random()*3+1);
var image1=document.querySelectorAll("img")[0];
var item1=items[number1-1];
imagegenerated1="images/"+item1+".jpeg";
image1.setAttribute("src",imagegenerated1)

var number2=Math.floor(Math.random()*3+1);
var image2=document.querySelectorAll("img")[1];
var item2=items[number2-1];
imagegenerated2="images/"+item2+".jpeg";
image2.setAttribute("src",imagegenerated2)
var result="";
if(item1==="rock"){
    if(item2==="rock"){
        result+="Draw";
    }
    else if(item2==="scissor")
    {
        result+="You won!";
    }
    else{
        result+="Better luck next time!";
    }
}
else if(item1==="scissor"){
    if(item2==="rock"){
        result+="Better luck next time!";
    }
    else if(item2==="scissor")
    {
        result+="Draw";
    }
    else{
        result+="You won!";
    }
}
else if(item1==="paper"){
    if(item2==="rock"){
        result+="You won!";
    }
    else if(item2==="scissor")
    {
        result+="Better luck next time!";
    }
    else{
        result+="Draw";
    }
}
document.querySelector("h2").innerHTML=result;
