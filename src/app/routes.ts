import { Routes } from "@angular/router";
import { MainComponent } from "./pages";

export const appRoutes: Routes = [
  { path: "pages", component: MainComponent },
  { path: "", redirectTo: "/pages", pathMatch: "full" }
];
