function fibonacci(num) {
    let listFibo = [0 , 1];
    for(i = 2; num > i;  i++){
        listFibo.push(listFibo[i - 1] + listFibo[i - 2]);
    }
    return listFibo
}

console.log(fibonacci(5));