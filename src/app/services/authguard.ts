import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    let isloggedIn = sessionStorage.getItem('isLoggedIn');
    if (isloggedIn == 'false') {
        alert("Please login to access this page");
        router.navigate(['/login']);
        return false;
    }
        return true;

    // if (authService.isloggedIn()) {
    //     return true;
    // } else {
    //     router.navigate(['/login']);
    //     return false;
    // }

}