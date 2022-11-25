import { environment } from "./../../../environments/environment";


export class SharedConfiguration {
  public static isProduction = environment.production;
  public static companyName = environment.company.name;
  public static companyWebsite = environment.company.website;
  public static developedBy = environment.developedBy.name;
  public static developedByWebsite = environment.developedBy.website;
  public static applicationName = environment.application.name;
  public static applicationShortName = environment.application.shortName;
  public static applicationFullName = [this.applicationName, (this.applicationShortName) ? `(${this.applicationShortName})` : '' ].join(' ');
  public static applicationSrcIcon = environment.application.srcIcon;
  public static applicationEncryptionKey = environment.application.encryption.key;
  public static applicationEncryptionSaltCount = environment.application.encryption.saltCount;
  public static applicationApiProtocol = environment.application.api.protocol;
  public static applicationApiHost = environment.application.api.host;
  public static applicationApiPort = environment.application.api.port;
  public static applicationApiRelativePath = environment.application.api.relativePath;
  public static applicationApiBaseUrl = () => {
    return `${this.applicationApiProtocol}://${this.applicationApiHost}${this.applicationApiPort ? `:${this.applicationApiPort}` : ``}/${this.applicationApiRelativePath}/`
  }
  public static applicationUseSignInWith = environment.application.useSignInWith;
  public static applicationUseSignUpWith = environment.application.useSignUpWith;
  public static localStorageUser = environment.localStorage.user;
  public static firebaseApiKey = environment.firebase.apiKey;
  public static firebaseaAuthDomain = environment.firebase.authDomain;
  public static firebaseProjectId = environment.firebase.projectId;
  public static firebaseStorageBucket = environment.firebase.storageBucket;
  public static firebaseMessagingSenderId = environment.firebase.messagingSenderId;
  public static firebaseAppId = environment.firebase.appId;
  public static firebaseMeasurementId = environment.firebase.measurementId;
  public static fileExtensions = [
    `.3g2`,
    `.3gp`,
    `.7z`,
    `.7zip`,
    `.aac`,
    `.abw`,
    `.ae`,
    `.ai`,
    `.apk`,
    `.arc`,
    `.au`,
    `.avi`,
    `.azw`,
    `.bin`,
    `.bmp`,
    `.br`,
    `.bz`,
    `.bz2`,
    `.cda`,
    `.csh`,
    `.css`,
    `.csv`,
    `.dbf`,
    `.doc`,
    `.docx`,
    `.dw`,
    `.dwg`,
    `.email`,
    `.eml`,
    `.eot`,
    `.eps`,
    `.epub`,
    `.exe`,
    `.file`,
    `.fl`,
    `.fla`,
    `.fw`,
    `.gif`,
    `.gz`,
    `.htm`,
    `.html`,
    `.ico`,
    `.ics`,
    `.il`,
    `.iso`,
    `.jar`,
    `.java`,
    `.jpeg`,
    `.jpg`,
    `.js`,
    `.json`,
    `.jsonld`,
    `.ld`,
    `.mid`,
    `.midi`,
    `.mjs`,
    `.mp3`,
    `.mp4`,
    `.mpeg`,
    `.mpkg`,
    `.msg`,
    `.msi`,
    `.odp`,
    `.ods`,
    `.odt`,
    `.oga`,
    `.ogv`,
    `.ogx`,
    `.opus`,
    `.otf`,
    `.pdf`,
    `.php`,
    `.pl`,
    `.png`,
    `.ppt`,
    `.pptx`,
    `.pr`,
    `.ps`,
    `.psd`,
    `.pub`,
    `.rar`,
    `.rtf`,
    `.search`,
    `.sh`,
    `.svg`,
    `.swf`,
    `.tar`,
    `.tif`,
    `.tiff`,
    `.ts`,
    `.ttf`,
    `.txt`,
    `.vsd`,
    `.wav`,
    `.weba`,
    `.webm`,
    `.webp`,
    `.woff`,
    `.woff2`,
    `.word`,
    `.xhtml`,
    `.xls`,
    `.xlsx`,
    `.xml`,
    `.xul`,
    `.zar`,
    `.zip`,
  ];
  public static uriFileAttachment = `#/secure/attachments`;
  public static ignoreColumns = [`userId`];
  public static cannotEditColumns = [
    `_id`,
    `id`,
    `birthDate`,
    `employeeNumber`,
    `eateTerminated`,
    `eenderId`,
    `isTerminated`,
    `maximumHoursAllocated`,
    `userId`,
    `employeeClientSupplierId`,
    `dateLastLoggedIn`,
    `createdBy`,
    `dateCreated`,
    `modifiedBy`,
    `dateModified`,
    // `statusId`,
    `sessionToken`,
    `parentTaskId`,
  ];
  public static optionalColumns = [
    `vatNumber`,
    `isAdmin`,
    `isLocked`,
    `isActive`,
  ];
  public static checkboxColumns = [
    `canCreate`,
    `canDelete`,
    `canEdit`,
    `canView`,
    `isActive`,
    `isAdmin`,
    `isAllDayEvent`,
    `isLocked`,
    `isTerminated`,
    `isTransactionSuccessful`,
    `useEmailAddress`,
    `useHomeTelephoneNumber`,
    `useMobileTelephoneNumber`,
    `useOfficeTelephoneNumber`,
    `usePostalAddress`,
  ];
  public static dateColumns = [
    `birthDate`,
    `dateCreated`,
    `dateHired`,
    `dateLastLoggedIn`,
    `dateModified`,
    `dateTerminated`,
    `endDate`,
    `startDate`,
  ];
  public static timeColumns = [
    `startTime`,
    `startDateTime`,
    `endTime`,
    `endDateTime`,
  ];
  public static numberColumns = [
    `accountNumber`,
    `amount`,
    `employeeClientSupplierId`,
    `homeTelephoneNumber`,
    `hoursWorked`,
    `idNumber`,
    `maximumHoursAllocated`,
    `mobileTelephoneNumber`,
    `mfficeTelephoneNumber`,
    `postalCode`,
    `vatNumber`,
  ];
  public static maskedColumns = [`password`, `confirmPassword`];
  public static textAreaColumns = [`description`, `summary`, `message`];
  public static useBreakNewlineSectionColumns = [`break`, `newline`, `section`];
  public static referenceValueColumns = [
    `assigneeId`,
    `clientId`,
    `employeeId`,
    `entityId`,
    `lookupCategoryId`,
    `managerId`,
    `menuItemId`,
    `projectId`,
    `supplierId`,
    `taskId`,
    `userGroupId`,
    `userId`,
    `eventAttendeeId`,
    `parentProjectId`,
    `parentTaskId`,
    `createdBy`,
    `modifiedBy`,
    `sentBy`,
    `loggedBy`,
  ];
  public static lookupValueColumns = [
    `bankId`,
    `budgetCodeId`,
    `calendarEventTypeId`,
    `capacityId`,
    `configurationTypeId`,
    `countryId`,
    `departmentId`,
    `employmentTypeId`,
    `genderId`,
    `groupId`,
    `industryTypeId`,
    `positionId`,
    `preferredLanguageId`,
    `priorityId`,
    `projectAssignmentTypeId`,
    `projectTypeId`,
    `provinceId`,
    `salutationId`,
    `statusId`,
    `taskTypeId`,
    `transactionTypeId`,
    `userLockReasonId`,
    `userTypeId`,
    `wageTypeId`,
  ];
  public static useIconColumns = [
    `genderId`,
    `groupId`,
    `priorityId`,
    `projectTypeId`,
    `statusId`,
    `taskTypeId`,
    `userTypeId`,
  ];
  public static useImageColumns = [`bankId`, `avatar`];
  public static selectControlTypeNames = [`lookupValue`, `referenceValue`];
  public static scheduleTimes = [
    `00:00`,
    `00:30`,
    `01:00`,
    `01:30`,
    `02:00`,
    `02:30`,
    `03:00`,
    `03:30`,
    `04:00`,
    `04:30`,
    `05:00`,
    `05:30`,
    `06:00`,
    `06:30`,
    `07:00`,
    `07:30`,
    `08:00`,
    `08:30`,
    `09:00`,
    `09:30`,
    `10:00`,
    `10:30`,
    `11:00`,
    `11:30`,
    `12:00`,
    `12:30`,
    `13:00`,
    `13:30`,
    `14:00`,
    `14:30`,
    `15:00`,
    `15:30`,
    `16:00`,
    `16:30`,
    `17:00`,
    `17:30`,
    `18:00`,
    `18:30`,
    `19:00`,
    `19:30`,
    `20:00`,
    `20:30`,
    `21:00`,
    `21:30`,
    `22:00`,
    `22:30`,
    `23:00`,
    `23:30`,
  ];
  public static timePeriods = [`Year`, `Month`, `Day`, `Week`, `Hour`, `Minute`, `Second`];
  public static optionsCreate = [`add`, `create`, `new`];
  public static optionsView = [`load`, `read`, `view`, `refresh`, `show`];
  public static optionsUpdate = [`change`, `edit`, `save`, `update`];
  public static optionsDelete = [`archive`, `delete`, `remove`, `deactivate`];
  public static inboxMessageOptionsCreate = [`add`, `create`, `new`];
  public static inboxMessageOptionsView = [`read`, `show`, `view`];
  public static inboxMessageOptionsReplySend = [`reply`, `send`];
  public static inboxMessageOptionsReplySendAll = [`replyall`, `reply-all`, `sendall`, `send-all`];
}