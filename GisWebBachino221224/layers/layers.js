var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi281024_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 28.10.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi281024_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_ndvi221224_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi221224_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077916, -3967210.496055, -6024371.967265, -3962839.768802]
                            })
                        });
var format_Evaluacion2024_3 = new ol.format.GeoJSON();
var features_Evaluacion2024_3 = format_Evaluacion2024_3.readFeatures(json_Evaluacion2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Evaluacion2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Evaluacion2024_3.addFeatures(features_Evaluacion2024_3);
var lyr_Evaluacion2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Evaluacion2024_3, 
                style: style_Evaluacion2024_3,
                popuplayertitle: 'Evaluacion 2024',
                interactive: true,
    title: 'Evaluacion 2024<br />\
    <img src="styles/legend/Evaluacion2024_3_0.png" /> MODULO 1<br />\
    <img src="styles/legend/Evaluacion2024_3_1.png" /> MODULO 2<br />\
    <img src="styles/legend/Evaluacion2024_3_2.png" /> MODULO 3<br />\
    <img src="styles/legend/Evaluacion2024_3_3.png" /> MODULO 4<br />\
    <img src="styles/legend/Evaluacion2024_3_4.png" /> MODULO 5<br />\
    <img src="styles/legend/Evaluacion2024_3_5.png" /> MODULO 6<br />\
    <img src="styles/legend/Evaluacion2024_3_6.png" /> MODULO 7<br />\
    <img src="styles/legend/Evaluacion2024_3_7.png" /> MODULO 8<br />\
    <img src="styles/legend/Evaluacion2024_3_8.png" /> <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_ndvi281024_1.setVisible(true);lyr_ndvi221224_2.setVisible(true);lyr_Evaluacion2024_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ndvi281024_1,lyr_ndvi221224_2,lyr_Evaluacion2024_3];
lyr_Evaluacion2024_3.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '22.12.24_TC (kgMS/ha/d)': '22.12.24_TC (kgMS/ha/d)', '22.12.24_Disponible (kgMS/ha)': '22.12.24_Disponible (kgMS/ha)', });
lyr_Evaluacion2024_3.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '22.12.24_TC (kgMS/ha/d)': 'TextEdit', '22.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_Evaluacion2024_3.set('fieldLabels', {'Recurso': 'header label - always visible', 'MODULO': 'header label - always visible', 'Siembra': 'hidden field', 'Potrero': 'header label - always visible', 'Id': 'hidden field', '22.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '22.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_Evaluacion2024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});