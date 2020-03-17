module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    var a = [];
    return a;
}
else {
var b = [];
for (i = 0; i < matrix.length; i++){
    if (i % 2 == 0) {
        b[i] = matrix[i];
}
    else {
        b[i] = matrix[i].reverse();
    }
}
var a = [];
 for (i = 0; i < b.length; i++){

    a = a.concat(b[i]);
}
return a;
}
}