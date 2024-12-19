ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([409099.866781, 6432205.404923, 416861.250539, 6436075.144708]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi81224_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 8.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi81224_1.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi181224_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi181224_2.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682743, 6432345.002670, 414372.066114, 6435674.934895]
                            })
                        });
var format_181224_3 = new ol.format.GeoJSON();
var features_181224_3 = format_181224_3.readFeatures(json_181224_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_181224_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224_3.addFeatures(features_181224_3);
var lyr_181224_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224_3, 
                style: style_181224_3,
                popuplayertitle: '18.12.24',
                interactive: true,
                title: '<img src="styles/legend/181224_3.png" /> 18.12.24'
            });
var format_81224_4 = new ol.format.GeoJSON();
var features_81224_4 = format_81224_4.readFeatures(json_81224_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_81224_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_81224_4.addFeatures(features_81224_4);
var lyr_81224_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_81224_4, 
                style: style_81224_4,
                popuplayertitle: '8.12.24',
                interactive: true,
                title: '<img src="styles/legend/81224_4.png" /> 8.12.24'
            });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_ndvi81224_1,lyr_ndvi181224_2,],
                                fold: "open",
                                title: '2024'});

lyr_GoogleHybrid_0.setVisible(true);lyr_ndvi81224_1.setVisible(true);lyr_ndvi181224_2.setVisible(true);lyr_181224_3.setVisible(true);lyr_81224_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_2024,lyr_181224_3,lyr_81224_4];
lyr_181224_3.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '18.12.24_TC (kgMS/ha/d)': '18.12.24_TC (kgMS/ha/d)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_81224_4.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '8.12.24_TC': '8.12.24_TC', '8.12.24_Di': '8.12.24_Di', });
lyr_181224_3.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '18.12.24_TC (kgMS/ha/d)': 'TextEdit', '18.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_81224_4.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '8.12.24_TC': '', '8.12.24_Di': '', });
lyr_181224_3.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '18.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_81224_4.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '8.12.24_TC': 'header label - visible with data', '8.12.24_Di': 'header label - visible with data', });
lyr_81224_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});