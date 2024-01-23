import { JwtHelperService } from "@auth0/angular-jwt";

export class JwtPlugin  {
    jwtHelper:JwtHelperService = new JwtHelperService();
    decodeToken(token:string):any {
        return this.jwtHelper.decodeToken(token);
    }
    getTokenExpirationDate(token:string):Date|null {
        return this.jwtHelper.getTokenExpirationDate(token);
    }
    isTokenExpired(token:string):boolean {
        return this.jwtHelper.isTokenExpired(token);
    }

}