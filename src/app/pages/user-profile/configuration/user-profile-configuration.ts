import { DataColumn } from "../../../@shared/domain-models/data-column";

export class UserProfileConfiguration {
    public static identifier = 'user';
    public static pageIcon = 'account_circle';
    public static pageRouteTitle = 'User Profile';
    public static pageRoute = `user-profile`;
    public static pageRouteCssClass = ``;
    public static pageTitle = `Manage Profile`;
    public static pageName = `Manage Profile`;
    public static tableHeading = 'Manage Profile';
    public static graphHeading = ``;
    public static buildingBlockLabel = ``;
    public static dataColumns = [
    ].map((sdc) => {
        return new DataColumn(sdc);
    });
}
