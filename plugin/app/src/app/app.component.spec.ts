import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { TEST_SYNCED_ACTIVITIES } from "../shared-fixtures/activities-2015.fixture";
import { ExternalUpdatesService } from "./shared/services/external-updates/external-updates.service";

describe("AppComponent", () => {

	const pluginId = "c061d18abea0";
	let component: AppComponent = null;
	let fixture: ComponentFixture<AppComponent> = null;

	beforeEach((done: Function) => {

		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				CoreModule,
				SharedModule
			]
		}).compileComponents();

		done();
	});

	beforeEach(() => {

		spyOn(ExternalUpdatesService, "getBrowserExternalMessages").and.returnValue({
			addListener: (request: any, sender: chrome.runtime.MessageSender) => {
			}
		});

		spyOn(ExternalUpdatesService, "getBrowserPluginId").and.returnValue(pluginId);

		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;

		spyOn(component.syncService, "getLastSyncDateTime").and.returnValue(Promise.resolve(Date.now()));
		spyOn(component.syncService.activityDao, "fetch").and.returnValue(Promise.resolve(TEST_SYNCED_ACTIVITIES));

		fixture.detectChanges();
	});

	it("should create the app", (done: Function) => {
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
		done();
	});

	it("should have main menu items", (done: Function) => {
		const app = fixture.debugElement.componentInstance;
		expect(app.mainMenuItems.length).toEqual(5);
		done();
	});

	it("should update tool bar title (1)", (done: Function) => {

		// Given
		const expected = "Global Settings";
		const route = "/globalSettings";

		// When
		const actual = AppComponent.convertRouteToTitle(route);

		// Then
		expect(actual).toBe(expected);
		done();

	});

	it("should update tool bar title (2)", (done: Function) => {

		// Given
		const expected = "Say Hello To World";
		const route = "/sayHelloToWorld/ohMyGod";

		// When
		const actual = AppComponent.convertRouteToTitle(route);

		// Then
		expect(actual).toBe(expected);
		done();

	});

	it("should update tool bar title (3)", (done: Function) => {

		// Given
		const expected = "Oh My God";
		const route = "ohMyGod";

		// When
		const actual = AppComponent.convertRouteToTitle(route);

		// Then
		expect(actual).toBe(expected);
		done();

	});

	it("should update tool bar title (4)", (done: Function) => {

		// Given
		const expected = "Global Settings";
		const route = "/globalSettings?viewOptionHelperId=displayAdvancedHrData";

		// When
		const actual = AppComponent.convertRouteToTitle(route);

		// Then
		expect(actual).toBe(expected);
		done();

	});

	it("should not update tool bar title", (done: Function) => {

		// Given
		const expected = null;
		const route = null;

		// When
		const actual = AppComponent.convertRouteToTitle(route);

		// Then
		expect(actual).toBeNull(expected);
		done();

	});

});
