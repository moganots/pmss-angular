import { BaseModel } from "../@base/base-model";
import { LookupValue } from "../@base/lookup-value";

export interface User extends BaseModel {
    uid?: string;
    emailAddress?: string;
    userTypeId?: number;
    isAdmin?: boolean;
    isEmailVerified?: boolean;
    isLocked?: boolean;
    avatar?: string;
    password?: string;
    dateLastLoggedIn?: Date;
    sessionToken?: string;
    userType?: LookupValue;
    menuItems?: any[];
}
