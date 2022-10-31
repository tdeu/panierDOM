var btnPlusAll = document.querySelectorAll('.qty-plus'); 
var BtnMinusAll = document.querySelectorAll('.qty-minus');
var addButton = document.querySelector('#add_button'); 

btnPlusAll.forEach((btn) => {btn.addEventListener('click', increaseQuantity)}); 
BtnMinusAll.forEach((btn) => {btn.addEventListener('click', decreaseQuantity)}); 
addButton.addEventListener('click', addArticle); 

function increaseQuantity(){
    this.previousElementSibling.value =parseInt(this.previousElementSibling.value) +1 ;
    subtotal(this);
    total();

}


function decreaseQuantity(){
    if(this.nextElementSibling.value > 0){
    this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
    subtotal(this)
}

}

function subtotal(elt){
    let qty;
    if(elt.id == 'qty-minus'){
        qty = parseInt(elt.nextElementSibling.value); 
    }
    else{
        qty = parseInt(elt.previousElementSibling.value)
    }


    let price = parseInt(elt.parentElement.nextElementSibling.innerText);
    let subt = price*qty;
    elt.parentElement.nextElementSibling.nextElementSibling.innerText= subt + ' fr';
}

function addArticle(){
    let name = document.querySelector('#name_product');
    let price = document.querySelector ('#price_product'); 
document.querySelector('#all_products').innerHTML += '<tr><td class="article--name"><div style="margin-right:1rem"><img src="https://picsum.photos/id/237/100/100"></div> <div><h3>'+ name.value +'<h3/> <a class="remove" id="1">Supprimer</a></div></td><td class="quantity"><button class="qty-minus" id="qty-minus">-</button><input type="text" readonly placeholder="Unit price"  class="qty" value="1" ><button class="qty-plus" id="qty-plus">+</button></td><td class="price"> '+ price.value +'fr</td><td class="subtotal">'+ price.value +'fr</td></tr>'
loadNewelements();
}

function loadNewelements (){
    var btnPlusAll = document.querySelectorAll('.qty-plus'); 
    var BtnMinusAll = document.querySelectorAll('.qty-minus');
    for(let i = 0; i<btnPlusAll.length; i++){
        btnPlusAll[i].addEventListener('click', increaseQuantity);
        BtnMinusAll[i].addEventListener('click',decreaseQuantity);
    }
}

function total () {
    let subt = document.querySelectorAll('.subtotal');
    let sum = 0;
    for (let i = 0; i<subt.length; i++) {
        sum = parseInt(subt[i].innerText) + sum;
    }

    document.querySelector('#total_display').innerText = sum + "fr";
    
    
}