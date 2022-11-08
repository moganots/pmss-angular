declare global {
    interface Number {
        isSet(): boolean;
        thousandsSeperator(): string;
        currencyRandFormatter(): string;
    }
}

Number.prototype.isSet = () => {
    return !(Number(this) === null || Number(this) === null);
}
Number.prototype.thousandsSeperator = function (): string {
    return Number(this).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
Number.prototype.currencyRandFormatter = function (): string {
    return new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'RAND',
    }).format(Number(this));
}

export { }
