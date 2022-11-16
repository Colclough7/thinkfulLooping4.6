/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  if(cart.length === 0 || cart === undefined)return 0
  let cartValues = Object.values(cart)
  let price = cartValues.map(price=>price.priceInCents*price.quantity) 
  return price.reduce((a,b)=>a+b,0)
}


function printCartInventory(cart) {
  let phrase = ""
  if(cart.length === 0) return ''
  let key = Object.keys(cart)
  let quantity = Object.values(cart)
  let value = quantity.map(x=>x.quantity)
  let totalCents = quantity.map(x=>x.priceInCents*x.quantity)
  for(let i = 0;i < Object.keys(cart).length;i++){
   phrase += `${value[i]}x${key[i]}\n`
  }
  return phrase
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
