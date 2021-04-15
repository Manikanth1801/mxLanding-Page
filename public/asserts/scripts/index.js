// var $x = $(".anm1");
// $x.waypoint(function(direction){
 
// });

// const loadFun = (function(){
//     let executed = false;
//    return function (){
//     if(!executed){
//       // console.log(executed);

//   //     executed = true;
//   //     console.log(executed);


//     }
//   }
  
// })();


//      var waypoint = $('.anm2').waypoint(function(){
//   TweenMax.from(".anm2",.5,{
//     x:1600, 
//     ease:Power2.easeInOut
// });
// }, {
//   offset: '100%'
// });



// waypoint = $('.anm3').waypoint(function() {
//   TweenMax.from(".anm3",.5,{
//     x:-900, 
//     ease:Power2.easeInOut
    
// });
// }, {
//   offset: '100%'
// });

// waypoint = $('.anm4').waypoint(function(){
//   TweenMax.from(".anm4",.5,{
//     x:1600, 
//     ease:Power2.easeInOut
// });
// }, {
//   offset: '100%'
// });

// waypoint = $('.anm5').waypoint(function() {
//   TweenMax.from(".anm5",.5,{
//     x:-900, 
//     ease:Power2.easeInOut
    
// });
// }, {
//   offset: '100%'
// });




// Modal Code Below
let modal = document.getElementById("mobModal");
let mobBtn = document.getElementById("mobBtn");
let span = document.querySelector(".close");
mobBtn.onclick = function(){

    modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Modal Code Below
let myModal = document.getElementById("clientModal");
let clientBtn = document.getElementById("clientBtn");
let clsBtn = document.getElementById("cls");
clientBtn.onclick = function(){

    myModal.style.display = "block";
}
clsBtn.onclick = function() {
  myModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
}


let webModal = document.getElementById("webModal");
let webBtn = document.getElementById("webBtn");
let ClsBtn = document.getElementById("close2");

webBtn.onclick = function(){
    webModal.style.display = "block";
}
ClsBtn.onclick = function(){
    webModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == myModal) {
    webModal.style.display = "none";
  }
}

let priceModal = document.getElementById("priceModal");
let priceBtn = document.getElementById("pricingBtn");
let closeBtn = document.getElementById("close3");

priceBtn.onclick = function(){
    webModal.style.display = "block";
}
closeBtn.onclick = function(){
    webModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == myModal) {
    priceModal.style.display = "none";
  }
}

// Model ends

 TweenMax.from(".anm1",1,{
    x:-900,
    ease:Power2.easeInOut
});
TweenMax.from(".anm2",2,{
    x:1600, 
    ease:Power2.easeInOut,
    
});
TweenMax.from(".anm3",2,{
    x:-900,
    ease:Power2.easeInOut
});
TweenMax.from(".anm4",2,{
    x:1600,
    ease:Power2.easeInOut
});
TweenMax.from(".anm5 ",2,{
    x:-900,
     ease:Power2.easeInOut
});

loadFun();