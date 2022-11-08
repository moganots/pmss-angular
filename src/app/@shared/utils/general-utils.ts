import { DataColumn } from "../domain-models/data-column";

declare global {
    class GeneralUtils {
        static columnNameWithoutId: (column: DataColumn) => string;
        static formatDisplayColumnName: (column: DataColumn) => any;
        static generateRandomString: (length?: number) => string;
    }
}

GeneralUtils.columnNameWithoutId = (column: DataColumn) => {
    const columnName = column?.name;
    if ([`_id`, `userid`].includes(columnName.toLocaleLowerCaseWithTrimAll())) {
        return columnName;
    }
    return columnName.toLocaleLowerCaseWithTrimAll().endsWith(`id`)
        ? columnName.substring(0, columnName.length - 2)
        : columnName;
}

GeneralUtils.formatDisplayColumnName = (column: DataColumn) => {
    const columnName = GeneralUtils.columnNameWithoutId(column);
    switch (columnName) {
        case `EmployeeClientSupplier`:
            return columnName.splitCamelCase().split(' ').join(' / ');
        default:
            return columnName.splitCamelCase().split(' ').join(' ').trim();
    }
}

GeneralUtils.generateRandomString = (length = 256) => {
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

export { }
