import { SharedConfiguration } from "../configuration/shared-configuration";

declare global {
    class DataColumnUtils {
        static setIsRequired: (columnName: string) => boolean;
        static setCanEdit: (columnName: string) => boolean;
        static isUseCheckbox: (columnName: string) => boolean;
        static isDateField: (columnName: string) => boolean;
        static isNumberField: (columnName: string) => boolean;
        static isTextAreaField: (columnName: string) => boolean;
        static isMaskedField: (columnName: string) => boolean;
        static isLookupValueField: (columnName: string) => boolean;
        static isReferenceValueField: (columnName: string) => boolean;
        static isLookupOrReferenceValueField: (columnName: string) => any;
        static isTimeField: (columnName: string) => boolean;
        static isUseIcon: (columnName: string) => boolean;
        static isUseImage: (columnName: string) => boolean;
        static isUseBreakOrNewlineOrSection: (columnName: string) => boolean;
        static setTimePickerLookupValues: (columnName: string) => { id: number; title: string; value: string; displayValue: string; }[];
        static setControlType: (columnName: string) => "checkbox" | "datetimepicker" | "number" | "textarea" | "password" | "break" | "select" | "timepicker" | "icon" | "image" | "textbox";
        static setSelectOptionControlType: (columnName: string) => "referenceValue" | "lookupIcon" | "lookupImage" | "lookupValue";
    }
}

DataColumnUtils.setIsRequired = (columnName: string) => {
    return !(
      SharedConfiguration.cannotEditColumns.includes(columnName) ||
      SharedConfiguration.optionalColumns.includes(columnName)
    );
  }
  DataColumnUtils.setCanEdit = (columnName: string) => {
    return !SharedConfiguration.cannotEditColumns.includes(columnName);
  }

  DataColumnUtils.isUseCheckbox = (columnName: string) => {
    return SharedConfiguration.checkboxColumns.includes(columnName);
  }
  DataColumnUtils.isDateField = (columnName: string) => {
    return SharedConfiguration.dateColumns.includes(columnName);
  }
  DataColumnUtils.isNumberField = (columnName: string) => {
    return SharedConfiguration.numberColumns.includes(columnName);
  }
  DataColumnUtils.isTextAreaField = (columnName: string) => {
    return SharedConfiguration.textAreaColumns.includes(columnName);
  }
  DataColumnUtils.isMaskedField = (columnName: string) => {
    return SharedConfiguration.maskedColumns.includes(columnName);
  }
  DataColumnUtils.isLookupValueField = (columnName: string) => {
    return SharedConfiguration.lookupValueColumns.includes(columnName);
  }
  DataColumnUtils.isReferenceValueField = (columnName: string) => {
    return SharedConfiguration.referenceValueColumns.includes(columnName);
  }
  DataColumnUtils.isLookupOrReferenceValueField = (columnName: string) => {
    return (
      DataColumnUtils.isLookupValueField(columnName) ||
      DataColumnUtils.isReferenceValueField(columnName)
    );
  }
  DataColumnUtils.isTimeField = (columnName: string) => {
    return SharedConfiguration.timeColumns.includes(columnName);
  }
  DataColumnUtils.isUseIcon = (columnName: string) => {
    return SharedConfiguration.useIconColumns.includes(columnName);
  }
  DataColumnUtils.isUseImage = (columnName: string) => {
    return SharedConfiguration.useImageColumns.includes(columnName);
  }
  DataColumnUtils.isUseBreakOrNewlineOrSection = (columnName: string) => {
    return SharedConfiguration.useBreakNewlineSectionColumns.includes(
      columnName
    );
  }
  DataColumnUtils.setControlType = (columnName: string) => {
    if (DataColumnUtils.isUseCheckbox(columnName)) {
      return 'checkbox';
    } else if (DataColumnUtils.isDateField(columnName)) {
      return 'datetimepicker';
    } else if (DataColumnUtils.isNumberField(columnName)) {
      return 'number';
    } else if (DataColumnUtils.isTextAreaField(columnName)) {
      return 'textarea';
    } else if (DataColumnUtils.isMaskedField(columnName)) {
      return 'password';
    } else if (DataColumnUtils.isUseBreakOrNewlineOrSection(columnName)) {
      return 'break';
    } else if (DataColumnUtils.isLookupOrReferenceValueField(columnName)) {
      return 'select';
    } else if (DataColumnUtils.isTimeField(columnName)) {
      DataColumnUtils.setTimePickerLookupValues(columnName);
      return 'timepicker';
    } else if (DataColumnUtils.isUseIcon(columnName)) {
      return 'icon';
    } else if (DataColumnUtils.isUseImage(columnName)) {
      return 'image';
    } else {
      return 'textbox';
    }
  }
  DataColumnUtils.setSelectOptionControlType = (columnName: string) => {
    if (DataColumnUtils.isReferenceValueField(columnName)) {
      return 'referenceValue';
    } else if (DataColumnUtils.isUseIcon(columnName)) {
      return 'lookupIcon';
    } else if (DataColumnUtils.isUseImage(columnName)) {
      return 'lookupImage';
    } else {
      return 'lookupValue';
    }
  }
  DataColumnUtils.setTimePickerLookupValues = (columnName: string) => {
    return SharedConfiguration.scheduleTimes?.map((time, index) => ({
      id: index,
      title: time,
      value: time,
      displayValue: time,
    }));
  }

export { }
