const input = require('node:readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

function inputNum(question){
    return new Promise((resolve, reject)=>{
        input.question(question, (answer) => {
            resolve(answer);
        })
    })
}


async function main() {
    try{
        let result 
        const num1 = await inputNum("enter the first num: ");
        const num2 = await inputNum("enter the secont num: ");
        
        const intNum = Number(num1);
        const intNum2 = Number(num2);

        console.log("type 1 for +");
        console.log("type 2 for -");
        console.log("type 3 for x");
        console.log("type 4 for /");

        const operation = await inputNum("what operation would you like to perform? ")
        switch(operation){
            case '1':
                result = intNum + intNum2;
                console.log(`${intNum} + ${intNum2} = ${result}`)
                break;
            case '2':
                result = intNum - intNum2;
                console.log(`${intNum} - ${intNum2} = ${result}`)
                break;
            case '3':
                result = intNum * intNum2;
                console.log(`${intNum} x ${intNum2} = ${result}`)
                break;
            case '4':
                result = intNum / intNum2;
                console.log(`${intNum} // ${intNum2} = ${result}`)
                break;
            default:
                console.log("invalid number or operation choice")
        }
    }
    catch(error){
        console.error("error". error);
        input.close();
    }
}

main()