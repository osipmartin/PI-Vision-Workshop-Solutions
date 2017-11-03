(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "basicvalue",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		getDefaultConfig: function(){ 
			return { 
				Height: 150,
				Width: 150 
			} 
		}
	}

	var dataItem = {
		Time: "14-Mar-15 00:00:00",
		Value: 100 
	} 

	
	symbolVis.prototype.init = function(scope, elem) { 
		scope.Time = dataItem.Time;
		scope.Value = dataItem.Value;
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
