//Create map
var map = L.map('map',{
	center: [47.61, -122.33],
	zoom: 12,
	minZoom: 10
});
//Add CartoDB base layer to map
var baseLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: 'CartoDB',
    maxZoom: 18
}).addTo(map);

//Create heat map by calling buildHeatArray and add it to the map
function createHeatLayer(geoJsonVarHeat, maxPointVal){
	var heat = L.heatLayer(geoJsonVarHeat, {
		max: maxPointVal,
		radius: 35,
		blur: 25,
		});	
	return heat;
}

var baseLayers = {
	"homicide Heatmap":createHeatLayer(homicide, .15),
	"assaults Heatmap":createHeatLayer(assaults, 2.5),
	"weapons calls Heatmap":createHeatLayer(weapons_calls, 1.5),
	"person down injury Heatmap":createHeatLayer(person_down_injury, 2),
	"theft and burglary Heatmap":createHeatLayer(theft_burglary, 25),	
	"narcotics complaints Heatmap":createHeatLayer(narcotics_complaints, 3),
};

//Add control to turn on and off crime point heatmaps
L.control.layers(baseLayers).addTo(map);

