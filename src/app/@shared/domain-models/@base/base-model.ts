import { User } from "../user/user";

export interface BaseModel {
    id?: any;
    name?: string;
    title?: string;
    code?: string;
    description?: string;
    dateCreated?: Date;
    createdBy?: number;
    dateModified?: Date;
    modifiedBy?: number;
    isActive?: boolean;
    canView?: boolean;
    canEdit?: boolean;
    canDelete?: boolean;
    canShow?: boolean;
    canSort?: boolean;
    canGroup?: boolean;
    delete?: boolean;
    displayName?: string;
    srcIcon?: string;
    srcImage?: string;
    CreatedBy?: User;
    ModifiedBy?: User;
}
