const random = ["Fruits"]
document.write(random.concat("Veges") + "<br/>");

const girls = ["Cecilie", "Lone"];
const boys = ["Emil", "Tobias", "Linus"];
const result = girls.concat(boys);
document.write(result.join(" ") + "<br/>");

const female = ["Cecilie", "Lone"];
const male = ["Emil", "Tobias", "Linus"];
const others = ["Robin", "Morgan"];
const childrens = female.concat(male , others);
document.write(childrens);