import { DataColumn } from "../domain-models/data-column";

export class GeneralUtils {
  static columnNameWithoutId = (column: DataColumn) => {
    const columnName = column?.name?.toLocaleLowerCase().trim();
    if ([`_id`, `userid`].includes(columnName)) {
      return columnName;
    }
    return columnName.endsWith(`id`)
      ? columnName.substring(0, columnName.length - 2)
      : columnName;
  }
  static formatDisplayColumnName = (column: DataColumn) => {
    const columnName = this.columnNameWithoutId(column);
    switch (columnName) {
      case `EmployeeClientSupplier`:
        return this.splitCamelCase(columnName).split(' ').join(' / ');
      default:
        return this.splitCamelCase(columnName).split(' ').join(' ').trim();
    }
  }
  static splitCamelCase = (str: string) => {
    return (str || ``).trim().replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  static generateRandomString = (length = 256) => {
    const result = [];
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join(``);
  }
}
