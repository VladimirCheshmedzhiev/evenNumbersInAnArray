function oddAndEvenSum(input){

    let inputAsString = input.toString();
    let inputAsArray = [];
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < inputAsString.length; i++) {
        let inputAsNumber = Number(inputAsString[i])
        inputAsArray.push(inputAsNumber);
        if(inputAsArray[i] % 2 == 0){
            evenSum += inputAsArray[i];
        } else if(inputAsArray[i] % 2 != 0){
            oddSum += inputAsArray[i];
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435)