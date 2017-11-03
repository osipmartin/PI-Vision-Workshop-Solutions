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
	
	symbolVis.prototype.init = function(scope, elem) { 
		this.onDataUpdate = dataUpdate;
		
		function dataUpdate(newdata){
			if(!newdata) return;
			
			scope.Time = newdata.Time;
			scope.Value = newdata.Value;
			
			if(newdata.Label){
				scope.Label = newdata.Label;
				scope.Units = newdata.Units;
				
				//Extra Credit
				scope.Source = newdata.Path.substring(0,2).toUpperCase();
			}
		}
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
