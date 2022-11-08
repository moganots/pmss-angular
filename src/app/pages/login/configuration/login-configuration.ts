import { DataColumn } from "../../../@shared/domain-models/data-column";

export class LoginConfiguration {
    public static identifier = 'authentication';
    public static pageIcon = 'login';
    public static pageRouteTitle = 'Login';
    public static pageRoute = `login`;
    public static pageRouteCssClass = ``;
    public static pageTitle = `Login`;
    public static pageName = `Login`;
    public static tableHeading = 'Login';
    public static graphHeading = ``;
    public static buildingBlockLabel = ``;
    public static dataColumns = [
    ].map((sdc) => {
        return new DataColumn(sdc);
    });
}
