document.addEventListener("DOMContentLoaded", function(){
    const scoreDisplay = document.getElementById("score")
    const width = 28; 
    let score = 0;
    const grid = document.querySelector(".grid");
    // 0-petalos
    // 1- mur
    //2-cova
    //3-rosa
    //4-buit
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,
        1,0,1,3,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,3,1,0,0,1,
        1,0,1,0,2,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,2,0,1,0,0,1,
        1,0,1,0,4,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,4,0,1,0,0,1,
        1,0,1,1,4,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,4,1,1,0,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,4,0,4,1,0,1,1,1,0,4,1,0,1,1,4,0,4,1,0,1,1,1,0,1,
        1,0,4,0,0,1,4,1,0,4,0,0,4,4,1,0,4,0,0,1,4,1,0,4,0,0,4,1,
        1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,1,
        1,0,0,4,1,0,0,1,0,0,1,4,0,0,1,0,0,4,1,0,0,1,0,0,1,4,0,1,
        1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,1,
        1,0,4,0,0,1,4,1,0,4,0,0,4,4,1,0,4,0,0,4,4,1,0,4,0,0,0,1,
        1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,4,1,1,0,4,1,0,1,1,1,0,1,
        1,0,0,4,1,0,0,1,0,0,1,4,0,0,1,0,0,4,1,0,0,1,0,0,1,4,0,1,
        1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,4,1,1,0,4,1,0,1,1,1,0,1,
        1,0,4,0,0,1,4,1,0,4,0,0,4,4,1,0,4,0,0,1,4,1,0,4,0,0,4,1,
        1,0,1,1,1,0,4,1,0,1,1,1,0,1,1,0,1,1,1,0,4,1,0,1,1,1,0,1,
        1,0,0,4,1,0,0,1,0,0,1,4,0,0,1,0,0,4,1,0,0,1,0,0,1,4,0,1,
        1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,1,
        1,0,4,0,0,4,4,1,0,4,0,0,1,4,1,0,4,0,0,1,4,1,0,4,0,0,4,1,
        1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,1,
        1,0,0,4,1,0,0,1,0,0,1,3,0,0,1,0,0,3,1,0,0,1,0,0,1,4,0,1,
        1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,4,1,0,1,1,1,0,1,
        1,0,1,1,1,0,4,4,0,1,1,1,0,4,4,0,1,1,1,0,4,4,0,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ];
    
    //crear tablero
    function createBoard(){
        for(let i=0; i< layout.length; i++){
            const square = document.createElement('div')
            if(layout[i]==0){
                square.classList.add("pink")
            }else if(layout[i]==1){
                square.classList.add("brown")
            }else if(layout [i]==2){
                square.classList.add("gris")
            }else if(layout [i]==3){
                square.classList.add("red")
            }else if(layout [i]==4){
                square.classList.add("white")
    
        }
        grid.appendChild(square)
            
        }
    }

    createBoard()
    
    
     
});

