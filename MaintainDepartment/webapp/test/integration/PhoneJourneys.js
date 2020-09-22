jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"saptw/MaintainDepartment/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"saptw/MaintainDepartment/test/integration/pages/App",
	"saptw/MaintainDepartment/test/integration/pages/Browser",
	"saptw/MaintainDepartment/test/integration/pages/Master",
	"saptw/MaintainDepartment/test/integration/pages/Detail",
	"saptw/MaintainDepartment/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "saptw.MaintainDepartment.view."
	});

	sap.ui.require([
		"saptw/MaintainDepartment/test/integration/NavigationJourneyPhone",
		"saptw/MaintainDepartment/test/integration/NotFoundJourneyPhone",
		"saptw/MaintainDepartment/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});