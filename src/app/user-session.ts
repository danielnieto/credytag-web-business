import { UserToken } from "./user-token";
import { UserData } from "./user-data";

export class UserSession {
    token: UserToken;
    user: UserData;

    business: string;
    branch: string;

    constructor() {
        this.token = new UserToken();
        this.user = new UserData();
    }
}
