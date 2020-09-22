jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Employee in the list
// * All 3 Employee have at least one departmentId

sap.ui.require([
	"sap/ui/test/Opa5",
	"saptw/MaintainEmployee/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"saptw/MaintainEmployee/test/integration/pages/App",
	"saptw/MaintainEmployee/test/integration/pages/Browser",
	"saptw/MaintainEmployee/test/integration/pages/Master",
	"saptw/MaintainEmployee/test/integration/pages/Detail",
	"saptw/MaintainEmployee/test/integration/pages/Create",
	"saptw/MaintainEmployee/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "saptw.MaintainEmployee.view."
	});

	sap.ui.require([
		"saptw/MaintainEmployee/test/integration/MasterJourney",
		"saptw/MaintainEmployee/test/integration/NavigationJourney",
		"saptw/MaintainEmployee/test/integration/NotFoundJourney",
		"saptw/MaintainEmployee/test/integration/BusyJourney",
		"saptw/MaintainEmployee/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});