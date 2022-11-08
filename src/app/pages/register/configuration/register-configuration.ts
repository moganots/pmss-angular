import { DataColumn } from "../../../@shared/domain-models/data-column";

export class RegisterConfiguration {
    public static identifier = 'authentication';
    public static pageIcon = 'manage_accounts';
    public static pageRouteTitle = 'Register';
    public static pageRoute = `register`;
    public static pageRouteCssClass = ``;
    public static pageTitle = `Register`;
    public static pageName = `Register`;
    public static tableHeading = 'Register';
    public static graphHeading = ``;
    public static buildingBlockLabel = ``;
    public static dataColumns = [
    ].map((sdc) => {
        return new DataColumn(sdc);
    });
}
