declare global {
    interface Array<T> {
        isSet(): boolean;
        hasItems(): boolean;
        firstOrDefault(): T;
        lastOrDefault(): T;
        addValues(values: any[]);
    }
}

Array.prototype.isSet = () => {
    return (Array(this) === null || Array(this) === undefined);
}
Array.prototype.hasItems = () => {
    return (Array(this).isSet() && Array(this).length !== 0);
}
Array.prototype.firstOrDefault = () => {
    return (Array(this).hasItems()) ? Array(this)[0] : null;
}
Array.prototype.lastOrDefault = () => {
    const arr = Array(this);
    return (arr.hasItems()) ? arr[arr.length - 1] : null;
}
Array.prototype.addValues = (items: any[]) => {
    items?.forEach((item) => Array(this)?.push(item));
}

export { }
