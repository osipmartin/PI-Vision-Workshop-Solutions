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
				Width: 150,
				BackgroundColor: '#ff5733',
				BorderRadius: 10,
				DisplayDigits: 1
			} 
		},
		configOptions: function () { 
			return [{ 
				title: "Format Symbol",
				mode: "format" 
			}];
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
		
		//Extra Credit
		this.onConfigChange = configChange;
		function configChange(oldConfig, newConfig){
			for(var propertyName in newConfig) {
				if(oldConfig[propertyName] !== newConfig[propertyName]){
					console.log(`${propertyName} Changed: (old) ${oldConfig[propertyName]} vs (new) ${newConfig[propertyName]}`);
				}
			}
		}
	};

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
