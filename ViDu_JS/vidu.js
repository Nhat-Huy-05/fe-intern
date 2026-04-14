

var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
function getTotalGold(array){
    let total = 0;
    for(var sport of array){
        total += sport.gold;
    }
    return total;
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23

let greeting = "Hi";
greeting += " there!";
console.log(greeting);