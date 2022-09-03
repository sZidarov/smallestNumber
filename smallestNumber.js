function greaterNumber (input){
    let index = 0;
    let num = input[index];    
    let min = Number.MAX_SAFE_INTEGER;

    while(num!=="Stop"){
        num=Number(num);
        if (num<min){
            min=num;
        }
        num = input[index];
        index++;
    }
    console.log(min);
}
greaterNumber(["-1",
"-2",
"Stop"])






