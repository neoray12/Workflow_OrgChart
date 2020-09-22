sap.ui.define([
	"saptw/MaintainEmployee/model/GroupSortState",
	"sap/ui/model/json/JSONModel",
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function () {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("managerId").length, 1, "The sorting by managerId returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("description").length, 1, "The sorting by description returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("managerId").length, 1, "The group by managerId returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});

	QUnit.test("Should set the sorting to managerId if the user groupes by managerId", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("managerId");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "managerId", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by description and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "managerId");

		this.oGroupSortState.sort("description");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});