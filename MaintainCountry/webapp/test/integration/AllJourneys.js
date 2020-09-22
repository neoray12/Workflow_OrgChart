jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Country in the list
// * All 3 Country have at least one countries

sap.ui.require([
	"sap/ui/test/Opa5",
	"saptw/MaintainCountry/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"saptw/MaintainCountry/test/integration/pages/App",
	"saptw/MaintainCountry/test/integration/pages/Browser",
	"saptw/MaintainCountry/test/integration/pages/Master",
	"saptw/MaintainCountry/test/integration/pages/Detail",
	"saptw/MaintainCountry/test/integration/pages/Create",
	"saptw/MaintainCountry/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "saptw.MaintainCountry.view."
	});

	sap.ui.require([
		"saptw/MaintainCountry/test/integration/MasterJourney",
		"saptw/MaintainCountry/test/integration/NavigationJourney",
		"saptw/MaintainCountry/test/integration/NotFoundJourney",
		"saptw/MaintainCountry/test/integration/BusyJourney",
		"saptw/MaintainCountry/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});