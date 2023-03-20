x=0;
y=0;
drawcircle="";
drawrect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognised as : "+content;
    if(content=="Circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        drawcircle="set";
    }
    if(content=="Rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        drawrect="set";
    }
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(drawcircle=="set"){
        radius=Math.floor(Math.random()*100); 
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        drawcircle="";
    }
    if(drawrect=="set"){
        width=Math.floor(Math.random()*100); 
        height=Math.floor(Math.random()*50); 
       rect(x,y,width,height);
        document.getElementById("status").innerHTML="rectangle is drawn";
        drawrect="";
    }
}