const menuPos = document.querySelectorAll('.main__menu-pos');
console.log(menuPos);
const posArray = Array.from(menuPos);
console.log(posArray);

   /* posArray.forEach(elem => {
    elem.addEventListener('click', function(){
        
elem.classList.add(active-pos);


    })
})
*/



menuPos.forEach((item)=>{
    item.addEventListener("click", function(){
       menuPos.forEach((el)=>{
        el.classList.remove("active-pos")
       })
       
        item.classList.add("active-pos"); 
    })
});

const allCards = document.querySelectorAll('.main__menu-card');
const breakfast = document.querySelector('#breakfast');
const breakfastCards = document.querySelectorAll('#bf');
const wine = document.querySelector('#wine');
const wineCards = document.querySelectorAll('.wine');
const salad = document.querySelector('#salad');
const saladCards = document.querySelectorAll('.salad');



breakfast.addEventListener("click", function(){
    allCards.forEach((e)=>{
        e.classList.remove('hidden');
    })
    
    wineCards.forEach((elem)=>{
        elem.classList.add("hidden");
    })

    saladCards.forEach((elem)=>{
        elem.classList.add("hidden");
    })
})

wine.addEventListener("click", function(){

    allCards.forEach((e)=>{
        e.classList.remove('hidden');
    })


breakfastCards.forEach((elem)=>{
    elem.classList.add("hidden");
})
saladCards.forEach((elem)=>{
    elem.classList.add("hidden");
})

})

salad.addEventListener("click", function(){

    allCards.forEach((e)=>{
        e.classList.remove('hidden');
    })


breakfastCards.forEach((elem)=>{
    elem.classList.add("hidden");
})
wineCards.forEach((elem)=>{
    elem.classList.add("hidden");
})

})


