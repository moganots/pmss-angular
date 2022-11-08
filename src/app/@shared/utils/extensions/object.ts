declare global {
    interface Object {
        isSet(): boolean;
    }
}

Object.prototype.isSet = () => {
    return !(Object(this) === null || Object(this) === null);
}

export { }
