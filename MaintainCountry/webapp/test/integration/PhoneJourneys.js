jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"saptw/MaintainCountry/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"saptw/MaintainCountry/test/integration/pages/App",
	"saptw/MaintainCountry/test/integration/pages/Browser",
	"saptw/MaintainCountry/test/integration/pages/Master",
	"saptw/MaintainCountry/test/integration/pages/Detail",
	"saptw/MaintainCountry/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "saptw.MaintainCountry.view."
	});

	sap.ui.require([
		"saptw/MaintainCountry/test/integration/NavigationJourneyPhone",
		"saptw/MaintainCountry/test/integration/NotFoundJourneyPhone",
		"saptw/MaintainCountry/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});