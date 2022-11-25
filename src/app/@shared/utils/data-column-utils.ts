import { SharedConfiguration } from "../configuration/shared-configuration";

export class DataColumnUtils {
  static setIsRequired = (columnName: string) => {
    return !(
      SharedConfiguration.cannotEditColumns.includes(columnName) ||
      SharedConfiguration.optionalColumns.includes(columnName)
    );
  }
  static setCanEdit = (columnName: string) => {
    return !SharedConfiguration.cannotEditColumns.includes(columnName);
  }
  static isUseCheckbox = (columnName: string) => {
    return SharedConfiguration.checkboxColumns.includes(columnName);
  }
  static isDateField = (columnName: string) => {
    return SharedConfiguration.dateColumns.includes(columnName);
  }
  static isNumberField = (columnName: string) => {
    return SharedConfiguration.numberColumns.includes(columnName);
  }
  static isTextAreaField = (columnName: string) => {
    return SharedConfiguration.textAreaColumns.includes(columnName);
  }
  static isMaskedField = (columnName: string) => {
    return SharedConfiguration.maskedColumns.includes(columnName);
  }
  static isLookupValueField = (columnName: string) => {
    return SharedConfiguration.lookupValueColumns.includes(columnName);
  }
  static isReferenceValueField = (columnName: string) => {
    return SharedConfiguration.referenceValueColumns.includes(columnName);
  }
  static isLookupOrReferenceValueField = (columnName: string) => {
    return (
      this.isLookupValueField(columnName) ||
      this.isReferenceValueField(columnName)
    );
  }
  static isTimeField = (columnName: string) => {
    return SharedConfiguration.timeColumns.includes(columnName);
  }
  static isUseIcon = (columnName: string) => {
    return SharedConfiguration.useIconColumns.includes(columnName);
  }
  static isUseImage = (columnName: string) => {
    return SharedConfiguration.useImageColumns.includes(columnName);
  }
  static isUseBreakOrNewlineOrSection = (columnName: string) => {
    return SharedConfiguration.useBreakNewlineSectionColumns.includes(
      columnName
    );
  }
  static setControlType = (columnName: string) => {
    if (this.isUseCheckbox(columnName)) {
      return 'checkbox';
    } else if (this.isDateField(columnName)) {
      return 'datetimepicker';
    } else if (this.isNumberField(columnName)) {
      return 'number';
    } else if (this.isTextAreaField(columnName)) {
      return 'textarea';
    } else if (this.isMaskedField(columnName)) {
      return 'password';
    } else if (this.isUseBreakOrNewlineOrSection(columnName)) {
      return 'break';
    } else if (this.isLookupOrReferenceValueField(columnName)) {
      return 'select';
    } else if (this.isTimeField(columnName)) {
      this.setTimePickerLookupValues(columnName);
      return 'timepicker';
    } else if (this.isUseIcon(columnName)) {
      return 'icon';
    } else if (this.isUseImage(columnName)) {
      return 'image';
    } else {
      return 'textbox';
    }
  }
  static setSelectOptionControlType = (columnName: string) => {
    if (this.isReferenceValueField(columnName)) {
      return 'referenceValue';
    } else if (this.isUseIcon(columnName)) {
      return 'lookupIcon';
    } else if (this.isUseImage(columnName)) {
      return 'lookupImage';
    } else {
      return 'lookupValue';
    }
  }
  static setTimePickerLookupValues = (columnName: string) => {
    return SharedConfiguration.scheduleTimes?.map((time, index) => ({
      id: index,
      title: time,
      value: time,
      displayValue: time,
    }));
  }
}
