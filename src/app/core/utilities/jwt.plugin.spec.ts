
import { TestBed } from '@angular/core/testing';
import { JwtPlugin } from './jwt.plugin';
import { JwtHelperService } from '@auth0/angular-jwt';

describe('JwtPlugin', () => {
    let jwtPlugin: JwtPlugin;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [JwtHelperService, JwtPlugin],
        });

        jwtPlugin = TestBed.inject(JwtPlugin);
    });

    it('should decode a token', () => {
        const token = 'your_jwt_token_here';
        const decodedToken = jwtPlugin.decodeToken(token);
        expect(decodedToken).toBeDefined();
        // Add more expectations based on your specific token structure
    });

    it('should get token expiration date', () => {
        const token = 'your_jwt_token_here';
        const expirationDate = jwtPlugin.getTokenExpirationDate(token);
        expect(expirationDate).toBeInstanceOf(Date);
        // Add more expectations based on your specific token structure
    });

    it('should check if token is expired', () => {
        const token = 'your_jwt_token_here';
        const isExpired = jwtPlugin.isTokenExpired(token);
        expect(typeof isExpired).toBe('boolean');
        // Add more expectations based on your specific token structure
    });
});
