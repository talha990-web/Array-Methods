const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.copyWithin() + "<br/>");
document.write(fruits.copyWithin(0, 1) + "<br/>");
document.write(fruits.copyWithin(1, 3) + "<br/>");
document.write(fruits.copyWithin(3, 4) + "<br/>");
document.write(fruits.copyWithin(3, 0) + "<br/>");
document.write(fruits.copyWithin(3, 2) + "<br/>");