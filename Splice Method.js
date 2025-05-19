const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.splice(1).join(" ") + "<br/>");
document.write(fruits.splice(1, 0, "Kiwi")); 
document.write(fruits.splice(0 , 1) + "<br/>");
document.write(fruits.splice(2, 2, "Guava" , "Chocolate")); 
document.write(fruits.splice(2, 0, "Water melon" , "Strawberry")); 
document.write(fruits);
