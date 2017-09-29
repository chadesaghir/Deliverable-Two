function myNumFunction() {
    var num = Number(prompt("Enter a number"));
    var sum = 0;
    for (var i = num; i != 0; i--) {
        sum += i;
    }
    console.log(sum);

    alert(sum);

}


