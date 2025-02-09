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
var format_28924_5 = new ol.format.GeoJSON();
var features_28924_5 = format_28924_5.readFeatures(json_28924_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28924_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28924_5.addFeatures(features_28924_5);
var lyr_28924_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28924_5, 
                style: style_28924_5,
                popuplayertitle: '28.9.24',
                interactive: true,
    title: '28.9.24<br />\
    <img src="styles/legend/28924_5_0.png" /> MODULO 1<br />\
    <img src="styles/legend/28924_5_1.png" /> MODULO 2<br />\
    <img src="styles/legend/28924_5_2.png" /> MODULO 3<br />\
    <img src="styles/legend/28924_5_3.png" /> MODULO 4<br />\
    <img src="styles/legend/28924_5_4.png" /> MODULO 5<br />\
    <img src="styles/legend/28924_5_5.png" /> MODULO 6<br />\
    <img src="styles/legend/28924_5_6.png" /> MODULO 7<br />\
    <img src="styles/legend/28924_5_7.png" /> MODULO 8<br />\
    <img src="styles/legend/28924_5_8.png" /> <br />'
        });
var format_31024_6 = new ol.format.GeoJSON();
var features_31024_6 = format_31024_6.readFeatures(json_31024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31024_6.addFeatures(features_31024_6);
var lyr_31024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_31024_6, 
                style: style_31024_6,
                popuplayertitle: '3.10.24',
                interactive: true,
    title: '3.10.24<br />\
    <img src="styles/legend/31024_6_0.png" /> MODULO 1<br />\
    <img src="styles/legend/31024_6_1.png" /> MODULO 2<br />\
    <img src="styles/legend/31024_6_2.png" /> MODULO 3<br />\
    <img src="styles/legend/31024_6_3.png" /> MODULO 4<br />\
    <img src="styles/legend/31024_6_4.png" /> MODULO 5<br />\
    <img src="styles/legend/31024_6_5.png" /> MODULO 6<br />\
    <img src="styles/legend/31024_6_6.png" /> MODULO 7<br />\
    <img src="styles/legend/31024_6_7.png" /> MODULO 8<br />\
    <img src="styles/legend/31024_6_8.png" /> <br />'
        });
var format_281024_7 = new ol.format.GeoJSON();
var features_281024_7 = format_281024_7.readFeatures(json_281024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_281024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_281024_7.addFeatures(features_281024_7);
var lyr_281024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_281024_7, 
                style: style_281024_7,
                popuplayertitle: '28.10.24',
                interactive: true,
    title: '28.10.24<br />\
    <img src="styles/legend/281024_7_0.png" /> MODULO 1<br />\
    <img src="styles/legend/281024_7_1.png" /> MODULO 2<br />\
    <img src="styles/legend/281024_7_2.png" /> MODULO 3<br />\
    <img src="styles/legend/281024_7_3.png" /> MODULO 4<br />\
    <img src="styles/legend/281024_7_4.png" /> MODULO 5<br />\
    <img src="styles/legend/281024_7_5.png" /> MODULO 6<br />\
    <img src="styles/legend/281024_7_6.png" /> MODULO 7<br />\
    <img src="styles/legend/281024_7_7.png" /> MODULO 8<br />\
    <img src="styles/legend/281024_7_8.png" /> <br />'
        });
var format_221224_8 = new ol.format.GeoJSON();
var features_221224_8 = format_221224_8.readFeatures(json_221224_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_221224_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_221224_8.addFeatures(features_221224_8);
var lyr_221224_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_221224_8, 
                style: style_221224_8,
                popuplayertitle: '22.12.24',
                interactive: true,
    title: '22.12.24<br />\
    <img src="styles/legend/221224_8_0.png" /> MODULO 1<br />\
    <img src="styles/legend/221224_8_1.png" /> MODULO 2<br />\
    <img src="styles/legend/221224_8_2.png" /> MODULO 3<br />\
    <img src="styles/legend/221224_8_3.png" /> MODULO 4<br />\
    <img src="styles/legend/221224_8_4.png" /> MODULO 5<br />\
    <img src="styles/legend/221224_8_5.png" /> MODULO 6<br />\
    <img src="styles/legend/221224_8_6.png" /> MODULO 7<br />\
    <img src="styles/legend/221224_8_7.png" /> MODULO 8<br />\
    <img src="styles/legend/221224_8_8.png" /> <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_28924_1.setVisible(true);lyr_31024_2.setVisible(true);lyr_281024_3.setVisible(true);lyr_221224_4.setVisible(true);lyr_28924_5.setVisible(true);lyr_31024_6.setVisible(true);lyr_281024_7.setVisible(true);lyr_221224_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_28924_1,lyr_31024_2,lyr_281024_3,lyr_221224_4,lyr_28924_5,lyr_31024_6,lyr_281024_7,lyr_221224_8];
lyr_28924_5.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '28.9.24_TC (kgMS/ha/d)': '28.9.24_TC (kgMS/ha/d)', '28.9.24_Disponible (kgMS/ha)': '28.9.24_Disponible (kgMS/ha)', });
lyr_31024_6.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '3.10.24_TC (kgMS/ha/d)': '3.10.24_TC (kgMS/ha/d)', '3.10.24_Disponible (kgMS/ha)': '3.10.24_Disponible (kgMS/ha)', });
lyr_281024_7.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '28.10.24_TC (kgMS/ha/d)': '28.10.24_TC (kgMS/ha/d)', '28.10.24_Disponible (kgMS/ha)': '28.10.24_Disponible (kgMS/ha)', });
lyr_221224_8.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '22.12.24_TC (kgMS/ha/d)': '22.12.24_TC (kgMS/ha/d)', '22.12.24_Disponible (kgMS/ha)': '22.12.24_Disponible (kgMS/ha)', });
lyr_28924_5.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '28.9.24_TC (kgMS/ha/d)': 'TextEdit', '28.9.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_31024_6.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '3.10.24_TC (kgMS/ha/d)': 'TextEdit', '3.10.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_281024_7.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '28.10.24_TC (kgMS/ha/d)': 'TextEdit', '28.10.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_221224_8.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '22.12.24_TC (kgMS/ha/d)': 'TextEdit', '22.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_28924_5.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '28.9.24_TC (kgMS/ha/d)': 'inline label - always visible', '28.9.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_31024_6.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '3.10.24_TC (kgMS/ha/d)': 'inline label - always visible', '3.10.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_281024_7.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '28.10.24_TC (kgMS/ha/d)': 'inline label - always visible', '28.10.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_221224_8.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '22.12.24_TC (kgMS/ha/d)': 'inline label - always visible', '22.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_221224_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});