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
var lyr_200225_6 = new ol.layer.Image({
                            opacity: 1,
                            title: '20.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/200225_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var format_28924_7 = new ol.format.GeoJSON();
var features_28924_7 = format_28924_7.readFeatures(json_28924_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28924_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28924_7.addFeatures(features_28924_7);
var lyr_28924_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28924_7, 
                style: style_28924_7,
                popuplayertitle: '28.9.24',
                interactive: true,
                title: '<img src="styles/legend/28924_7.png" /> 28.9.24'
            });
var format_31024_8 = new ol.format.GeoJSON();
var features_31024_8 = format_31024_8.readFeatures(json_31024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31024_8.addFeatures(features_31024_8);
var lyr_31024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_31024_8, 
                style: style_31024_8,
                popuplayertitle: '3.10.24',
                interactive: true,
                title: '<img src="styles/legend/31024_8.png" /> 3.10.24'
            });
var format_281024_9 = new ol.format.GeoJSON();
var features_281024_9 = format_281024_9.readFeatures(json_281024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_281024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_281024_9.addFeatures(features_281024_9);
var lyr_281024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_281024_9, 
                style: style_281024_9,
                popuplayertitle: '28.10.24',
                interactive: true,
                title: '<img src="styles/legend/281024_9.png" /> 28.10.24'
            });
var format_221224_10 = new ol.format.GeoJSON();
var features_221224_10 = format_221224_10.readFeatures(json_221224_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_221224_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_221224_10.addFeatures(features_221224_10);
var lyr_221224_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_221224_10, 
                style: style_221224_10,
                popuplayertitle: '22.12.24',
                interactive: true,
                title: '<img src="styles/legend/221224_10.png" /> 22.12.24'
            });
var format_10225_11 = new ol.format.GeoJSON();
var features_10225_11 = format_10225_11.readFeatures(json_10225_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10225_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10225_11.addFeatures(features_10225_11);
var lyr_10225_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10225_11, 
                style: style_10225_11,
                popuplayertitle: '10.2.25',
                interactive: true,
                title: '<img src="styles/legend/10225_11.png" /> 10.2.25'
            });
var format_200225_12 = new ol.format.GeoJSON();
var features_200225_12 = format_200225_12.readFeatures(json_200225_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200225_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200225_12.addFeatures(features_200225_12);
var lyr_200225_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200225_12, 
                style: style_200225_12,
                popuplayertitle: '20.02.25',
                interactive: true,
                title: '<img src="styles/legend/200225_12.png" /> 20.02.25'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_28924_1.setVisible(true);lyr_31024_2.setVisible(true);lyr_281024_3.setVisible(true);lyr_221224_4.setVisible(true);lyr_10225_5.setVisible(true);lyr_200225_6.setVisible(true);lyr_28924_7.setVisible(true);lyr_31024_8.setVisible(true);lyr_281024_9.setVisible(true);lyr_221224_10.setVisible(true);lyr_10225_11.setVisible(true);lyr_200225_12.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_28924_1,lyr_31024_2,lyr_281024_3,lyr_221224_4,lyr_10225_5,lyr_200225_6,lyr_28924_7,lyr_31024_8,lyr_281024_9,lyr_221224_10,lyr_10225_11,lyr_200225_12];
lyr_28924_7.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '28.9.24_TC (kgMS/ha/d)': '28.9.24_TC (kgMS/ha/d)', '28.9.24_Disponible (kgMS/ha)': '28.9.24_Disponible (kgMS/ha)', });
lyr_31024_8.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '3.10.24_TC (kgMS/ha/d)': '3.10.24_TC (kgMS/ha/d)', '3.10.24_Disponible (kgMS/ha)': '3.10.24_Disponible (kgMS/ha)', });
lyr_281024_9.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '28.10.24_TC (kgMS/ha/d)': '28.10.24_TC (kgMS/ha/d)', '28.10.24_Disponible (kgMS/ha)': '28.10.24_Disponible (kgMS/ha)', });
lyr_221224_10.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '22.12.24_TC (kgMS/ha/d)': '22.12.24_TC (kgMS/ha/d)', '22.12.24_Disponible (kgMS/ha)': '22.12.24_Disponible (kgMS/ha)', });
lyr_10225_11.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '10.2.25_TC (kgMS/ha/d)': '10.2.25_TC (kgMS/ha/d)', '10.2.25_Disponible (kgMS/ha)': '10.2.25_Disponible (kgMS/ha)', });
lyr_200225_12.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '20.02.25_TC (kgMS/ha/d)': '20.02.25_TC (kgMS/ha/d)', '20.02.25_Disponible (kgMS/ha)': '20.02.25_Disponible (kgMS/ha)', });
lyr_28924_7.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '28.9.24_TC (kgMS/ha/d)': 'TextEdit', '28.9.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_31024_8.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '3.10.24_TC (kgMS/ha/d)': 'TextEdit', '3.10.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_281024_9.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '28.10.24_TC (kgMS/ha/d)': 'TextEdit', '28.10.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_221224_10.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '22.12.24_TC (kgMS/ha/d)': 'TextEdit', '22.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_10225_11.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '10.2.25_TC (kgMS/ha/d)': 'TextEdit', '10.2.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_200225_12.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '20.02.25_TC (kgMS/ha/d)': 'TextEdit', '20.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_28924_7.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '28.9.24_TC (kgMS/ha/d)': 'inline label - always visible', '28.9.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_31024_8.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '3.10.24_TC (kgMS/ha/d)': 'inline label - always visible', '3.10.24_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_281024_9.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '28.10.24_TC (kgMS/ha/d)': 'inline label - always visible', '28.10.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_221224_10.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '22.12.24_TC (kgMS/ha/d)': 'inline label - always visible', '22.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_10225_11.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '10.2.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.2.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_200225_12.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '20.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_200225_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});