//check if the discount is applied to the food order or not 
//if already applied do not apply the discount for the next food order
//Coupon can be used only once
let hasDiscountCoupon = true;


function discountForOrders(){
    if(hasDiscountCoupon){
        console.log("Discount is applied to foor order!")
        hasDiscountCoupon = false
    }
    else{
        console.log("Coupon already used!")
    }
}


discountForOrders()
discountForOrders()