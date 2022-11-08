import { BaseModel } from "./base-model";
import { LookupCategory } from "./lookup-category";

export interface LookupValue extends BaseModel {
    lookupCategoryId?: number;
    value?: string;
    value2?: string;
    value3?: string;
    srcImage?: string;
    srcIcon?: string;
    lookupCategory?: LookupCategory;
    cssColorCategory?: string;
    cssColor?: string;
    cssClassCategory?: string;
    cssClass?: string;
}
