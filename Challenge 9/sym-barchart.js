(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "barchart",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		getDefaultConfig: function(){ 
			return { 
				DataShape: 'Table',
				Height: 150,
				Width: 150 
			} 
		}
	}

	function getConfig(){
		return {
			"type": "serial",
			"categoryField": "category",
			"colors": [
				"#FF6600",
				"#45D2FF",
				"#B0DE09",
				"#0D8ECF",
				"#2A0CD0",
				"#CD0D74",
				"#CC0000",
				"#00CC00",
				"#0000CC",
				"#DDDDDD",
				"#999999",
				"#333333",
				"#990000"
			],
			"startDuration": 1,
			"categoryAxis": {
				"gridPosition": "start"
			},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "[[title]] of [[category]]:[[value]]",
					"fillAlphas": 1,
					"id": "AmGraph-1",
					"title": "Orange Series",
					"type": "column",
					"valueField": "column-1"
				},
				{
					"balloonText": "[[title]] of [[category]]:[[value]]",
					"fillAlphas": 1,
					"id": "AmGraph-2",
					"title": "Blue Series",
					"type": "column",
					"valueField": "column-2"
				}
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"title": "Gumballs"
				}
			],
			"allLabels": [],
			"balloon": {},
			"legend": {
				"enabled": true,
				"useGraphSettings": true
			},
			"titles": [
				{
					"id": "Orange vs Blue",
					"size": 15,
					"text": "Gumball Production"
				}
			],
			"dataProvider": [
				{
					"category": "category 1",
					"column-1": 8,
					"column-2": 5
				},
				{
					"category": "category 2",
					"column-1": 6,
					"column-2": 7
				},
				{
					"category": "category 3",
					"column-1": 2,
					"column-2": 3
				}
			]
		}
	}
	
	symbolVis.prototype.init = function(scope, elem) { 
		var container = elem.find('#container')[0];
		container.id = "barChart_" + scope.symbol.Name;
		var chart = AmCharts.makeChart(container.id, getConfig());
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
