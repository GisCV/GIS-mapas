ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([409151.623074, 6431858.970505, 416899.685618, 6435893.521317]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi131124pot_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 13.11.24 pot",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi131124pot_1.png",
    attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi31224_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 3.12.24",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi31224_2.png",
    attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var format_LasAvenidas_3 = new ol.format.GeoJSON();
var features_LasAvenidas_3 = format_LasAvenidas_3.readFeatures(json_LasAvenidas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_LasAvenidas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LasAvenidas_3.addFeatures(features_LasAvenidas_3);
var lyr_LasAvenidas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LasAvenidas_3, 
                style: style_LasAvenidas_3,
                popuplayertitle: "Las Avenidas",
                interactive: true,
                title: '<img src="styles/legend/LasAvenidas_3.png" /> Las Avenidas'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ndvi131124pot_1.setVisible(true);lyr_ndvi31224_2.setVisible(true);lyr_LasAvenidas_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ndvi131124pot_1,lyr_ndvi31224_2,lyr_LasAvenidas_3];
lyr_LasAvenidas_3.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '3.12.24_TC (kgMS/ha/d)': '3.12.24_TC (kgMS/ha/d)', '3.12.24_Disponibilidad (kgMS/ha)': '3.12.24_Disponibilidad (kgMS/ha)', });
lyr_LasAvenidas_3.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '3.12.24_TC (kgMS/ha/d)': 'TextEdit', '3.12.24_Disponibilidad (kgMS/ha)': 'TextEdit', });
lyr_LasAvenidas_3.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '3.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '3.12.24_Disponibilidad (kgMS/ha)': 'header label - visible with data', });
lyr_LasAvenidas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});