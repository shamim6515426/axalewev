var bannermain = document.querySelector (".banner-slider").children;

 var pre = document.querySelector("#pre");
 var next = document.querySelector("#next");
 var index=0;
 next.addEventListener("click",()=>{
    nextslider();
    restTime();
})
pre.addEventListener("click",()=>{
   preslider();
   restTime();
})
function preslider(){
    if( index==0){
        index=bannermain.length-1;
    }else{
        index--;
    }
    changimafe();
}
function nextslider(){
    if(index == bannermain.length-1 ){
        index= 0;
    }else{
        index++;
    }
   changimafe();  
}

function changimafe(){
   for( let i=0; i<bannermain.length; i++){
        bannermain[i].classList.remove("active");
   }
     bannermain[index].classList.add("active")
}
function restTime(){
    clearInterval(time);
    time=setInterval(autoplay,6000);
}

function autoplay(){
    nextslider();
}

let time= setInterval(autoplay,6000);


AOS.init();
//our gallrylkkkk


// var gallary= document.querySelector(".gallary-box");
// var divgallary= document.querySelector(".divgallary");

// gallary.addEventListener("mousemove",()=>{
//    divgallary.classList.add("lkdfjg")
// });
// gallary.addEventListener("mouseout",()=>{
//     divgallary.classList.remove("lkdfjg")
//  });
    


var valuDisplay= document.querySelectorAll(".num");
var inteval=4000;
valuDisplay.forEach((valuDisplay)=>{
    let startvalu=0;
    let endvalue= parseInt( valuDisplay.getAttribute("data-val"));
    let dutatoin= Math.floor( inteval/endvalue);

     let countrt= setInterval( function(){
         startvalu +=1;
          valuDisplay.textContent=startvalu;
          if(startvalu==endvalue){
             clearInterval(countrt);
          }
     },dutatoin);
})
 



// fiexd button

var fixedbutton = document.querySelector(".fixedbutton");

  window.addEventListener("scroll", ()=>{
     let topber= window.scrollY;
      if( topber >=500){
         fixedbutton.classList.add("fixedre");
      }else{
        fixedbutton.classList.remove("fixedre");
         
      }
  })
  

