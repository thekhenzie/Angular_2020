interface CarProcessor<T, U>
{
    (car: T, val: U): void;
};
interface ICarProcessor<T, U>
{
    process(car: T, brand: U, model?: U): void;
};


export {CarProcessor, ICarProcessor};