import { JwtHelperService } from "@auth0/angular-jwt";

export class JwtPlugin  {
    jwtHelper: JwtHelperService = new JwtHelperService();
    
    decodeToken(token: string): any {
        if (!token) {
            console.error('Token is null or empty');
            return null;
        }

        try {
            return this.jwtHelper.decodeToken(token);
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }
    
    getTokenExpirationDate(token: string): Date | null {
        if (!token) {
            console.error('Token is null or empty');
            return null;
        }

        try {
            return this.jwtHelper.getTokenExpirationDate(token);
        } catch (error) {
            console.error('Error getting token expiration date:', error);
            return null;
        }
    }
    
    isTokenExpired(token: string): boolean {
        if (!token) {
            console.error('Token is null or empty');
            return true;
        }

        try {
            return this.jwtHelper.isTokenExpired(token);
        } catch (error) {
            console.error('Error checking if token is expired:', error);
            return true; // Considerar el token como expirado en caso de error
        }
    }
}
