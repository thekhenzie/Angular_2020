import {CarProcessor, ICarProcessor} from './interfaces';
import CProcessor from './classes';


function carNumPairs<T, U>(car:number, value:number):void { 
    console.log('Function : car no.= ' + car + ', value = ' + value)
}

function carPairs<T, U>(car: number, value:string):void { 
    console.log('Function : car no. = '+ car + ', value = ' + value)
}
    
let carProc: CarProcessor<number, number> = carNumPairs;
carProc(1007, 12345); 

let carProc2: CarProcessor<number, string> = carPairs;
carProc2(1007, "Thousands"); 



let proc: ICarProcessor<number, string> = new CProcessor();
proc.process(2, 'Honda', 'Civic'); 
