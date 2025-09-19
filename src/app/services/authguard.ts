import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = (route) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    let isloggedIn = sessionStorage.getItem('isLoggedIn');
    if (isloggedIn == 'true') {
        const UserRole = localStorage.getItem('userrole');
        if (route.data['roles'] && route.data['roles'].includes("") === -1) {
            router.navigate(['/login']);
            return false;
        }

        return true;
    }
    alert("Please login to access this page");
    router.navigate(['/login']);
    return false;

    // if (authService.isloggedIn()) {
    //     return true;
    // } else {
    //     router.navigate(['/login']);
    //     return false;
    // }

}