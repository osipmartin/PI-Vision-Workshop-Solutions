(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "archivedata",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		iconUrl: '/Images/globe.png', //extra credit
		getDefaultConfig: function(){ 
			return { 
				DataShape: "Timeseries",
				Height: 150,
				Width: 150 
			} 
		}
	}
	
	symbolVis.prototype.init = function(scope, elem) { 
	
		this.onDataUpdate = dataUpdate;
		function dataUpdate(data){
			if(!data) return;
			
			var firstAttribute = data.Data[0];
			scope.Values = firstAttribute.Values;
			if(firstAttribute.Label){
				scope.Label = firstAttribute.Label;
				scope.UOM = firstAttribute.Units;
			}
		}	
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
