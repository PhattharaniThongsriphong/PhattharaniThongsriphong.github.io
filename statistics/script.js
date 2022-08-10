let num;
let list = [];
let avg;
let min;
let max;
do{
    num = Number(prompt("Enter an integer (a negative number to quit)"));
    if(num >= 0){
        readInput(num);
    } else if (num < 0){
        break;
    }
    displayStats(list);
    // avg = (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2);
    // min = Math.min(...list);
    // max = Math.max(...list);

}while(num >= 0 || isNaN(num) || !Number.isInteger(num));

alert("For the list " + list + " the average is " + avg + ", the minimum is " + min + ", and the maximum is " + max);

function displayStats(list){
    avg = (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2);
    min = Math.min(...list);
    max = Math.max(...list);
}

function readInput(n){
    list.push(n);
}