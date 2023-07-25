let c = document.querySelectorAll(".cell");
let output = document.getElementById("status");
let reset_btn=document.getElementById("reset");
console.log(c);
let game_play=true;
let turn = 0;
let filled = [];
let check = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let x_filled = [];
let o_filled = [];

for (let i = 0; i < c.length; i++) {
    
  c[i].addEventListener('click', (e) => {
    console.log("clicked", i);
    game(i);
  });
}
// fa-fade

function game(i) {
  if (!filled.includes(i) && game_play==true) {
    turn+=1;
    console.log(turn+"xd")
    if(turn===9){
        output.innerHTML=`Draw!!`
        
    }
    if (turn % 2 !== 0) {
      c[i].innerHTML = "<i class='fa-solid fa-check' style='color: #6d47d7;'></i>";
      filled.push(i);
      x_filled.push(i);
      console.log(x_filled);
      console.log(filled);
      checkElementsInArrays(x_filled, check,1,"fa-check",i);
    } 
    
    else {
      c[i].innerHTML = "<i class='fa-solid fa-xmark' style='color: #ff0a0a;'></i>";
      filled.push(i);
      o_filled.push(i);
      console.log(o_filled);
      console.log(filled);
      checkElementsInArrays(o_filled, check,2,"fa-xmark",i);
    }
    
  } 
  else {
    console.log("Cell already filled.");
  }
}

function checkElementsInArrays(arrays, elements,player,mark,i) {
  console.log("y", arrays)
  for (let array of elements) {
    let allElementsExist = true;
    for (let element of array) {
      if (!arrays.includes(element)) {
        allElementsExist = false;
        break;
      }
      
      
    }
    if (allElementsExist) {
        
        output.innerHTML=`Player ${player} wins !`

        for (let element of array) {
            
              c[element].innerHTML = `<i class='fa-solid fa-fade ${mark}' style='color:black;'></i>`
            
          }

      game_play=false;
     
    } 
    
  }
}




reset_btn.addEventListener('click',(e)=>{
    restart_game(e);
   
})

function restart_game(e){
    console.log("xd");
    game_play=true;
    filled=[];
    x_filled = [];
    o_filled = [];
    turn=0;
    console.log(c);
    for (let i = 0; i < c.length; i++) {
        c[i].innerHTML = "";
    }
    output.innerHTML=``

}
