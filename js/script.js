// Write solution code here to dynamically add the form fields 

// Save the order details on clicking the submit button
var orderList = [];
function  saveData(){
let order = {

    "categoryname":document.getElementById("in1").value,
    "itemName":document.getElementById("in2").value,
    "price":document.getElementById("in3").value,
    "quantity":document.getElementById("in4").value,
    "amount":document.getElementById("in3").value * document.getElementById("in4").value
}
orderList.push(order);
alert("Details submitted")
document.getElementById("in5").value = order.amount;
console.log(orderList);
alert("Total bill amount is :"+order.amount);
return false;
}
function orderCategory($event){
event.preventDefault();
let div = document.getElementById("div1");
let label1 = document.createElement("label");
let label1Text = document.createTextNode("Category Name");
label1.appendChild(label1Text);
let input1 = document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("id","in1");
div.appendChild(label1);
div.appendChild(input1);

let label2 = document.createElement("label");
let label2Text = document.createTextNode("Item Name");
label2.appendChild(label2Text);
let input2 = document.createElement("input");
input2.setAttribute("type","text");
input2.setAttribute("id","in2");
div.appendChild(label2);
div.appendChild(input2);

let label3 = document.createElement("label");
let label3Text = document.createTextNode("Price");
label3.appendChild(label3Text);
let input3 = document.createElement("input");
input3.setAttribute("type","text");
input3.setAttribute("id","in3");
input3.setAttribute("value",0);
div.appendChild(label3);
div.appendChild(input3);

let label4 = document.createElement("label");
let label4Text = document.createTextNode("Quantity");
label4.appendChild(label4Text);
let input4 = document.createElement("input");
input4.setAttribute("type","text");
input4.setAttribute("id","in4");
div.appendChild(label4);
div.appendChild(input4);

let label5 = document.createElement("label");
let label5Text = document.createTextNode("Amount");
label5.appendChild(label5Text);
let input5 = document.createElement("input");
input5.setAttribute("type","text");
input5.setAttribute("id","in5");
div.appendChild(label5);
div.appendChild(input5);

let input6 = document.createElement("button");
tetxbtn = document.createTextNode("save");
input6.appendChild(tetxbtn);
input6.addEventListener("click",saveData)
div.appendChild(input6)


}