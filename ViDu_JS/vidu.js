var number = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10];
number.forEach(num1 => {
    const isLeft19 = number.every(num =>  num + num1 < 19)
    console.log(isLeft19);
    
});

