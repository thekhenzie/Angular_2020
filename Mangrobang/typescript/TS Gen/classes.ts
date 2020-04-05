import {ICarProcessor} from './interfaces'
export default class CProcessor<T, U> implements ICarProcessor<T, U>
{ 
    process(car:T, brand:U, model: U):void { 
        console.log(`Class car = ${car}, brand = ${brand} model = ${model}`);
    }
}

