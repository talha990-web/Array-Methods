const array = [1, 2, 3, 4, 5, 6];
const result = array.flatMap(x => [x, x * 10] +  "<br/><br/>");
document.write(result);

const final = array.flatMap(x => [x, x * 10] + x + "<br/><br/>");
document.write(final);

const end = array.flatMap(z => [z, z * 100]);
document.write(end);



