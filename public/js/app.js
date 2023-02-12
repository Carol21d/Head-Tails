// imprimimos por consola
//  function Pulse(){
//     const coin = Math.random() < 0.5 ? "Head" :"Tails";
//     console.log(coin);
//  }

//anañdiendo


function Pulse(){
    const head = document.querySelector(".wrapper__head");
    const tails = document.querySelector(".wrapper__tails");
    const flipCoin = Math.random() <= 0.5;

    if (flipCoin) {
        head.style.display ="block";
        tails.style.display = "none";
        
    }else{
        head.style.display = "none";
        tails.style.display = "block";
    }
}
