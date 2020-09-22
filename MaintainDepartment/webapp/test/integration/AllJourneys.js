jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Department in the list
// * All 3 Department have at least one Employees

sap.ui.require([
	"sap/ui/test/Opa5",
	"saptw/MaintainDepartment/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"saptw/MaintainDepartment/test/integration/pages/App",
	"saptw/MaintainDepartment/test/integration/pages/Browser",
	"saptw/MaintainDepartment/test/integration/pages/Master",
	"saptw/MaintainDepartment/test/integration/pages/Detail",
	"saptw/MaintainDepartment/test/integration/pages/Create",
	"saptw/MaintainDepartment/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "saptw.MaintainDepartment.view."
	});

	sap.ui.require([
		"saptw/MaintainDepartment/test/integration/MasterJourney",
		"saptw/MaintainDepartment/test/integration/NavigationJourney",
		"saptw/MaintainDepartment/test/integration/NotFoundJourney",
		"saptw/MaintainDepartment/test/integration/BusyJourney",
		"saptw/MaintainDepartment/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});