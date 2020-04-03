export function Purge<T>(inventory: Array<T>) : Array<T> {
    return inventory.splice(2, inventory.length);
}


enum Category { Biography, Poetry, Fiction, History, Children, Software }

export { Category };