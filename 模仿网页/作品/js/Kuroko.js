
var quantityInput = document.getElementById('quantity');
var totalPriceElement = document.getElementById('totalPrice');

// 初始化商品单价和数量
var unitPrice = 120.00;
var quantity = 1;

var button=document.getElementById('pre-order');


// 减少数量
function decrementQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantityAndTotal();
    }
}

// 增加数量
function incrementQuantity() {
    quantity++;
    updateQuantityAndTotal();
}

// 更新数量和总价
function updateQuantityAndTotal() {
    quantityInput.value = quantity;
    var totalPrice = unitPrice * quantity;
    totalPriceElement.textContent = totalPrice.toFixed(2); // 保留两位小数
}

button.addEventListener('click',function(){
    if(quantity>3){
        alert('每人限购3件');
    }
    else{
        alert('预购时间还没到!');
    }
    
});

