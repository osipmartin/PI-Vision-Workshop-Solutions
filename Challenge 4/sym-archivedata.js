(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "archivedata",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		getDefaultConfig: function(){ 
			return { 
				Height: 150,
				Width: 150 
			} 
		}
	}
	
	var dataItems = [ 
		{
		 Time: "14-Oct-17 06:00:00",
		 Value: 100 
		},
		{
		 Time: "15-Oct-17 09:00:00",
		 Value: 50 
		} 
	];

	
	symbolVis.prototype.init = function(scope, elem) { 
	
		scope.Values = dataItems;
		
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
