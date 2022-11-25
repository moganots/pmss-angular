declare global {
    interface String {
        isSet(): boolean;
        nullIf(): string;
        nullIfSame(value: string): string;
        toLocaleLowerCaseWithTrimAll(): string;
        toLocaleLowerCaseWithTrimStart(): string;
        toLocaleLowerCaseWithTrimRight(): string;
        toLocaleLowerCaseWithTrimLeft(): string;
        toLocaleLowerCaseWithTrimEnd(): string;
        padRight(padding: string): string;
        padLeft(padding: string): string;
        capitalizeFirstLetter(): string;
        splitCamelCase(): string;
        splitCamelCaseAndSpecialCharacters(): string;
        splitCamelCaseAndCapitalizeFirstLetter(): string;
    }
}

String.prototype.isSet = () => {
    return !(String(this) === null || String(this) === null || String(this)?.length === 0);
}
String.prototype.nullIf = () => {
    return String(this).isSet() ? this : null;
}
String.prototype.nullIfSame = (value: string) => {
    return String(this).isSet() && value.isSet() && String(this) === value ? null : String(this);
}
String.prototype.toLocaleLowerCaseWithTrimAll = () => {
    return String(this)?.toLocaleLowerCase()?.trim();
}
String.prototype.toLocaleLowerCaseWithTrimStart = () => {
    return String(this)?.toLocaleLowerCase()?.trimStart();
}
String.prototype.toLocaleLowerCaseWithTrimRight = () => {
    return String(this)?.toLocaleLowerCase()?.trimRight();
}
String.prototype.toLocaleLowerCaseWithTrimLeft = () => {
    return String(this)?.toLocaleLowerCase()?.trimLeft();
}
String.prototype.toLocaleLowerCaseWithTrimEnd = () => {
    return String(this)?.toLocaleLowerCase()?.trimEnd();
}
String.prototype.padRight = (padding: string = `0`) => {
    return (String(this) || ``).padEnd(padding.length, padding);
}
String.prototype.padLeft = (padding: string = `0`) => {
    return (String(this) || ``).padStart(padding.length, padding);
}
String.prototype.capitalizeFirstLetter = () => {
    return [(String(this) || ``).charAt(0).toLocaleUpperCase(), (String(this) || ``).slice(1)].join();
}
String.prototype.splitCamelCase = () => {
    return (String(this) || ``).trim().replace(/([a-z])([A-Z])/g, '$1 $2');
}
String.prototype.splitCamelCaseAndSpecialCharacters = () => {
    return (String(this) || ``).trim().replace(/([a-z])([A-Z])([_-])/g, '$1 $2 $3');
}
String.prototype.splitCamelCaseAndCapitalizeFirstLetter = () => {
    return (String(this) || ``).splitCamelCase().capitalizeFirstLetter();
}

export { }
