// Your code here:

for (let i = 100; i >= 0; i--) {
    if (i > 1 && i < 100 && i!=2) {
        let j = i - 1;
        console.log(i + " bottles of milk on the wall, " + i + " bottles of milk. Take one down and pass it around, " + j + " bottles of milk on the wall.");
    } else if (i === 0) {
        console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
    } else if (i === 1) {
        console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
    } else if (i === 2) {
        console.log("2 bottles of milk on the wall, 2 bottles of milk. Take one down and pass it around, 1 bottle of milk on the wall.");
    }
}