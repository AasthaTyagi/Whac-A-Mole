let maxTime=10;
let updateTimer= setInterval(function(){
        if(maxTime>0){
            maxTime-=1;
            document.getElementById("timer").innerHTML=`Time Left : ${maxTime}`;
        }
        else{
            alert("Time out !!")
            maxTime=10;
        }
    },1000)

var score=0;
var boxId;
document.getElementById("score").innerHTML=`Score : ${score} `
var boxArr=['first','second','third','fourth','fifth','sixth','seventh','eight','ninth'];
        function show(score){

            let box=Math.floor(Math.random()*100%9);
            boxId=boxArr[box];
        // let state=false;
        //console.log(boxArr[box]);
        let pop=document.getElementById(boxId);
        pop.innerHTML=`<image class="image" src="mole.jpg" style="width:150px;height:150px;border-radius:5px" id=${boxId}> `;
        //document.getElementById("score").innerHTML=`Score : ${score} `
            //pop.onclick=callFunction;
        //    pop.addEventListener("click", () => {
        //        score+=100;
        // 	alert('hello');
        //     });
                // if(document.getElementById(boxId).onclick){
                //     console.log("Hey");
                // }
        }
show();
        function callFunction(event){
            // console.log(event.target.id);
            // console.log(boxId);
            //alert("Hey");
            if(event.target.id==boxId){
                score+=100;
                document.getElementById("score").innerHTML=`Score : ${score} `
                document.getElementById(boxId).innerHTML=`<span class="palette" id=${boxId}> </span>`;
                show(score);
                //alert("correct");
            }
            else{
                score-=50;
                document.getElementById("score").innerHTML=`Score : ${score} `
            }

        }