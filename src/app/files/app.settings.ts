export class AppSettings {
    
    public static get API_ENDPOINT() : String { return 'http://10.2.4.196:8080/api'; }
    public static get SUCCESS_STATUS() : String { return 'SUCCESS'; }
    public static get ROLE_ADMIN() : String { return  'ADMIN'; }
    public static get SUPER_ADMIN() : string { return 'Super Admin'; }
    public static get ROLE_USER() : String { return  'USER'; }
    public static get USER_ID() : String { return  'userId'; }
    
    public static get PAGE_SIZE() : number {return 10; }
    public static get SORT_DIRECTION_ASC(): string { return 'asc'; }
    public static get SORT_DIRECTION_DESC(): string { return 'desc'; }
    public static get DATE_TIME_FORMAT() : string { return 'dd-MMM-yyyy hh:mm:ss a'; }
    public static get MAIN_MENU_KEY() : string { return 'mainMenu'; }
    public static get AUTH_TOKEN_KEY() : string { return 'authToken'; }
    public static get ROLE_KEY() : string { return 'userRole'; }

    private static errorObj : string;
    public static get error() : string { return this.errorObj; }
    public static set error(error : string) { this.errorObj = error; }

    private static errorDetailsObj : any;
    public static get errorDetails() : any { return this.errorDetailsObj; }
    public static set errorDetails(errorObject : any) { this.errorDetailsObj = errorObject; }

    private static mainMenuObj : any;
    
    public static getHtmlMessages(messages : any) : string  {
        let msgs : string = '';
        let index : number = 0;
        messages.forEach(msg => {
            msgs += (index === 0 ? '' : '<br><br>') + msg;
            index++;
        });
        return msgs;
    }

    public static get isLoggedIn(): boolean { return !!localStorage.getItem(this.AUTH_TOKEN_KEY); }
    public static get isAdminRole(): boolean { return localStorage.getItem(AppSettings.ROLE_KEY) === AppSettings.ROLE_ADMIN; }
}
