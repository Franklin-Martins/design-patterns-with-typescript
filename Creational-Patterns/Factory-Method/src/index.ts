// Verificar se uma lista se tem números repetidos
// Se tiver, quem são eles e quantas vezes foi repetido

const list:number[] = [2,4,5,1,2,3,5,2,3,8,6,4,3,1];

class RepeatedNumbers{
    private number:number;
    private times:number;

    constructor(number:number , times:number){
        this.number = number;
        this.times = times;
    }

    public getNumber():number{
        return this.number;
    }

    public getTimes():number{
        return this.times;
    }

    public addTimes():void{
        this.times++;
    }
}

function checkArray(arrayToCheck:number[]){
    let auxiliarList:RepeatedNumbers[] = [];

    console.log(auxiliarList.length)
    if(arrayToCheck.length === 0) console.log('The array is empty');

    function checkOrCreateInstanceOfRepeatedNumbers(newNumber:number):void{
        // if(auxiliarList.length === 0){
        //     const obj = new RepeatedNumbers(newNumber, 0);
        //     auxiliarList.push(obj);
        // }
        
        const index = auxiliarList.findIndex(element => element.getNumber() === newNumber);

        if(index === -1){
            const obj = new RepeatedNumbers(newNumber, 1);
            auxiliarList.push(obj);
        }

        if(index !== -1){
            auxiliarList[index].addTimes();
        }
    }

    arrayToCheck.map((checkNumber:number)=>{
        checkOrCreateInstanceOfRepeatedNumbers(checkNumber);
    })

    console.log("Numeros repetidos e quantidades de repetições: ")
    auxiliarList.map((element:RepeatedNumbers)=>{
        if(element.getTimes() > 1){
            console.log(`numero ${element.getNumber()} foi repetido ${element.getTimes()} vezes`);
        }
    })
}

checkArray(list);