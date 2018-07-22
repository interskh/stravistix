import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutesModel } from "../models/app-routes.model";
import { AthleteSettingsComponent } from "../../athlete-settings/athlete-settings.component";
import { GlobalSettingsComponent } from "../../global-settings/global-settings.component";
import { ZonesSettingsComponent } from "../../zones-settings/zones-settings.component";
import { DonateComponent } from "../../donate/donate.component";
import { ReleasesNotesComponent } from "../../releases-notes/releases-notes.component";
import { ReleasesNotesResolverService } from "../../releases-notes/releases-notes-resolver.service";
import { ShareComponent } from "../../share/share.component";
import { ReportComponent } from "../../report/report.component";
import { AdvancedMenuComponent } from "../../advanced-menu/advanced-menu.component";

const routes: Routes = [
	{
		path: AppRoutesModel.fitnessTrend,
		loadChildren: "../../fitness-trend/fitness-trend.module#FitnessTrendModule"
	},
	{
		path: AppRoutesModel.yearProgressions,
		loadChildren: "../../year-progress/year-progress.module#YearProgressModule"
	},
	{
		path: AppRoutesModel.globalSettings,
		component: GlobalSettingsComponent
	},
	{
		path: AppRoutesModel.athleteSettings,
		component: AthleteSettingsComponent
	},
	{
		path: AppRoutesModel.zonesSettings,
		component: ZonesSettingsComponent
	},
	{
		path: AppRoutesModel.zonesSettings + "/:zoneValue",
		component: ZonesSettingsComponent
	},
	{
		path: AppRoutesModel.donate,
		component: DonateComponent
	},
	{
		path: AppRoutesModel.releasesNotes,
		component: ReleasesNotesComponent,
		resolve: {
			releasesNotes: ReleasesNotesResolverService
		}
	},
	{
		path: AppRoutesModel.share,
		component: ShareComponent
	},
	{
		path: AppRoutesModel.report,
		component: ReportComponent
	},
	{
		path: AppRoutesModel.advancedMenu,
		component: AdvancedMenuComponent
	},
	{
		path: "", redirectTo: AppRoutesModel.fitnessTrend, pathMatch: "full"
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {enableTracing: false, useHash: true})
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}
