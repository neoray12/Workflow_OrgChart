sap.ui.define([
	"saptw/MaintainDepartment/model/GroupSortState",
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
		assert.strictEqual(this.oGroupSortState.sort("departmentId").length, 1, "The sorting by departmentId returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("description").length, 1, "The sorting by description returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("departmentId").length, 1, "The group by departmentId returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});

	QUnit.test("Should set the sorting to departmentId if the user groupes by departmentId", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("departmentId");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "departmentId", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by description and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "departmentId");

		this.oGroupSortState.sort("description");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});