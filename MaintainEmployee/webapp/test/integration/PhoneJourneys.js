jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"saptw/MaintainEmployee/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"saptw/MaintainEmployee/test/integration/pages/App",
	"saptw/MaintainEmployee/test/integration/pages/Browser",
	"saptw/MaintainEmployee/test/integration/pages/Master",
	"saptw/MaintainEmployee/test/integration/pages/Detail",
	"saptw/MaintainEmployee/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "saptw.MaintainEmployee.view."
	});

	sap.ui.require([
		"saptw/MaintainEmployee/test/integration/NavigationJourneyPhone",
		"saptw/MaintainEmployee/test/integration/NotFoundJourneyPhone",
		"saptw/MaintainEmployee/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});