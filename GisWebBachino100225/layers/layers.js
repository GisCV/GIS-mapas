var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_28924_1 = new ol.layer.Image({
                            opacity: 1,
                            title: '28.9.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/28924_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_31024_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '3.10.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/31024_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_281024_3 = new ol.layer.Image({
                            opacity: 1,
                            title: '28.10.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/281024_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_221224_4 = new ol.layer.Image({
                            opacity: 1,
                            title: '22.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/221224_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_10225_5 = new ol.layer.Image({
                            opacity: 1,
                            title: '10.2.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/10225_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var format_28924_6 = new ol.format.GeoJSON();
var features_28924_6 = format_28924_6.readFeatures(json_28924_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28924_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28924_6.addFeatures(features_28924_6);
var lyr_28924_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28924_6, 
                style: style_28924_6,
                popuplayertitle: '28.9.24',
                interactive: true,
                title: '<img src="styles/legend/28924_6.png" /> 28.9.24'
            });
var format_31024_7 = new ol.format.GeoJSON();
var features_31024_7 = format_31024_7.readFeatures(json_31024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31024_7.addFeatures(features_31024_7);
var lyr_31024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_31024_7, 
                style: style_31024_7,
                popuplayertitle: '3.10.24',
                interactive: true,
                title: '<img src="styles/legend/31024_7.png" /> 3.10.24'
            });
var format_281024_8 = new ol.format.GeoJSON();
var features_281024_8 = format_281024_8.readFeatures(json_281024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_281024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_281024_8.addFeatures(features_281024_8);
var lyr_281024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_281024_8, 
                style: style_281024_8,
                popuplayertitle: '28.10.24',
                interactive: true,
                title: '<img src="styles/legend/281024_8.png" /> 28.10.24'
            });
var format_221224_9 = new ol.format.GeoJSON();
var features_221224_9 = format_221224_9.readFeatures(json_221224_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_221224_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_221224_9.addFeatures(features_221224_9);
var lyr_221224_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_221224_9, 
                style: style_221224_9,
                popuplayertitle: '22.12.24',
                interactive: true,
                title: '<img src="styles/legend/221224_9.png" /> 22.12.24'
            });
var format_10225_10 = new ol.format.GeoJSON();
var features_10225_10 = format_10225_10.readFeatures(json_10225_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10225_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10225_10.addFeatures(features_10225_10);
var lyr_10225_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10225_10, 
                style: style_10225_10,
                popuplayertitle: '10.2.25',
                interactive: true,
                title: '<img src="styles/legend/10225_10.png" /> 10.2.25'
            });
var group_Evaluacion2022 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Evaluacion 2022'});
var group_Evaluacion2021 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Evaluacion 2021'});
var group_Potreros = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Potreros'});
var group_Octubre = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Octubre'});

lyr_GoogleHybrid_0.setVisible(true);lyr_28924_1.setVisible(true);lyr_31024_2.setVisible(true);lyr_281024_3.setVisible(true);lyr_221224_4.setVisible(true);lyr_10225_5.setVisible(true);lyr_28924_6.setVisible(true);lyr_31024_7.setVisible(true);lyr_281024_8.setVisible(true);lyr_221224_9.setVisible(true);lyr_10225_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_28924_1,lyr_31024_2,lyr_281024_3,lyr_221224_4,lyr_10225_5,lyr_28924_6,lyr_31024_7,lyr_281024_8,lyr_221224_9,lyr_10225_10];
lyr_28924_6.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '28.9.24_TC (kgMS/ha/d)': '28.9.24_TC (kgMS/ha/d)', '28.9.24_Disponible (kgMS/ha)': '28.9.24_Disponible (kgMS/ha)', });
lyr_31024_7.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '3.10.24_TC (kgMS/ha/d)': '3.10.24_TC (kgMS/ha/d)', '3.10.24_Disponible (kgMS/ha)': '3.10.24_Disponible (kgMS/ha)', });
lyr_281024_8.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '28.10.24_TC (kgMS/ha/d)': '28.10.24_TC (kgMS/ha/d)', '28.10.24_Disponible (kgMS/ha)': '28.10.24_Disponible (kgMS/ha)', });
lyr_221224_9.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '22.12.24_TC (kgMS/ha/d)': '22.12.24_TC (kgMS/ha/d)', '22.12.24_Disponible (kgMS/ha)': '22.12.24_Disponible (kgMS/ha)', });
lyr_10225_10.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '10.2.25_TC (kgMS/ha/d)': '10.2.25_TC (kgMS/ha/d)', '10.2.25_Disponible (kgMS/ha)': '10.2.25_Disponible (kgMS/ha)', });
lyr_28924_6.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '28.9.24_TC (kgMS/ha/d)': 'TextEdit', '28.9.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_31024_7.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '3.10.24_TC (kgMS/ha/d)': 'TextEdit', '3.10.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_281024_8.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '28.10.24_TC (kgMS/ha/d)': 'TextEdit', '28.10.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_221224_9.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '22.12.24_TC (kgMS/ha/d)': 'TextEdit', '22.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_10225_10.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '10.2.25_TC (kgMS/ha/d)': 'TextEdit', '10.2.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_28924_6.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '28.9.24_TC (kgMS/ha/d)': 'inline label - always visible', '28.9.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_31024_7.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '3.10.24_TC (kgMS/ha/d)': 'inline label - always visible', '3.10.24_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_281024_8.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '28.10.24_TC (kgMS/ha/d)': 'inline label - always visible', '28.10.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_221224_9.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '22.12.24_TC (kgMS/ha/d)': 'inline label - always visible', '22.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_10225_10.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '10.2.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.2.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_10225_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});