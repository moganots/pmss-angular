import { Observable } from "rxjs";
import { DataColumnUtils } from "../utils/data-column-utils";
import { GeneralUtils } from "../utils/general-utils";

export class DataColumn {
    id: number;
    name: string;
    canCreate: boolean;
    canView: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canGroup: boolean;
    canSort: boolean;
    displayName: string;
    isRequired: boolean;
    controlType: string;
    selectOptionControlType: string;
    lookupValues = [];
    filteredLookupValues: Observable<any>;
    value = null;
    constructor(dataColumn: any) {
      this.id = dataColumn.id;
      this.name = dataColumn.name;
      this.canCreate = dataColumn.canCreate;
      this.canView = dataColumn.canView;
      this.canEdit = DataColumnUtils.setCanEdit(this.name);
      this.canDelete = dataColumn.canDelete;
      this.canGroup = dataColumn.canGroup;
      this.canSort = dataColumn.canSort;
      this.displayName = GeneralUtils.formatDisplayColumnName(this);
      this.isRequired = DataColumnUtils.setIsRequired(this.name);
      this.controlType = DataColumnUtils.setControlType(this.name);
      this.selectOptionControlType = DataColumnUtils.setSelectOptionControlType(this.name);
    }
}