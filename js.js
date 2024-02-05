const ochish = document.querySelector('#open')
const basket =  document.querySelector('.basket')
const close = document.querySelector('#close')
const cards =document.querySelector('.cards')

const  data  = [
    {
        img:"./img/section2/cardimg.png",
        nomi: "Daisy",
        narxi:5
    },
    {
        img:"./img/section2/cardimg.png",
        nomi: "Daisy",
        narxi:6
    },
    {
        img:"./img/section2/cardimg.png",
        nomi: "Daisy",
        narxi:8
    },
    {
        img:"./img/section2/cardimg.png",
        nomi: "Daisy",
        narxi:9
    },
    {
        img:"./img/section2/cardimg.png",
        nomi: "Daisy",
        narxi:10
    },
    {
        img:"./img/section2/cardimg.png",
        nomi: "Daisy",
        narxi:11
    },
    {
        img:"./img/section2/cardimg.png",
        nomi: "Daisy",
        narxi:12
    },
    {
        img:"./img/section2/cardimg.png",
        nomi: "Daisy",
        narxi:13
    },

]



ochish.addEventListener('click', function() {
    basket.style.transform = 'translateX(0)'
}
)
close.addEventListener('click', function() {
    basket.style.transform = 'translateX(350px)'
}   
)




// yangi bosh quti 

const  savat = []




function  addbasket(index){

    savat.push(data[index])

    savat.map((item)=>{
        basket.innerHTML+=`
       <div class="modalcard">
       
       <img  src="${item.img}"   />
       <p>${item.nomi}</p>
    
       <span>${item.narxi}$</span>
       
       </div>
        `
    })

  


}






data.map((item,index)=>{
    cards.innerHTML+= `
    <div  class="card"> 
    <img  src="${item.img}"   />
    <p>${item.nomi}</p>

    <div class="price">
    <span>${item.narxi}$</span>

    <button onclick="addbasket(${index})"   >  
      Add to card</button>
    </div>
    </div>
    `
})
