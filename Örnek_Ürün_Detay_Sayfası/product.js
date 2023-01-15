const kucukfotolar=document.querySelectorAll(".kucukfotolar img")
const buyukfoto=document.querySelector(".buyukfoto img")

kucukfotolar.forEach(item=>{
    item.addEventListener("mouseover",()=>{
        buyukfoto.src=item.src;                
    })
})
