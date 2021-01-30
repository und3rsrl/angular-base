import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { APPROUTES } from "./infrastructure/constants/app-routes.constants";

export const ROUTES: Routes = [
    // Default route
    {path: APPROUTES.home, component: AppComponent},

    // Lazy Loaded Feature routes
    //{path: APPROUTES.NewFeature.root, loadChildren: () => import('./features/newFeature/newFeature.module').then(m => m.NewFeatureModule)}

    // Unauthorized route

    // Incorrect route (404)
    { path: APPROUTES.catchAll, redirectTo: APPROUTES.home }
];