import products from "./products";
let shipping: number, taxPercent: number, taxTotal: number, total: number;
let shippingAddress = "90210 New York";

const productName: string = "fanny pack";
// const productName: string = 'shirt'
const product = products.find((product) => product.name === productName);

if (product?.preOrder === "true")
  console.log("We will send you a message when your product is on its way.");

if (Number(product?.price) > 25) {
  shipping = 0;
  console.log("We will provide free shipping");
} else {
  shipping = 5;
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product?.price) * taxPercent;

total = taxTotal + Number(product?.price) + shipping;

console.log(`
Product:  ${product?.name}
Address:  ${shippingAddress}
Price:    $${product?.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
