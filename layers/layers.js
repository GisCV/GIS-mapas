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
                            title: "ndvi 28.10.24",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi281024_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var format_Evaluacin_2024_2 = new ol.format.GeoJSON();
var features_Evaluacin_2024_2 = format_Evaluacin_2024_2.readFeatures(json_Evaluacin_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Evaluacin_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Evaluacin_2024_2.addFeatures(features_Evaluacin_2024_2);
var lyr_Evaluacin_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Evaluacin_2024_2, 
                style: style_Evaluacin_2024_2,
                popuplayertitle: "Evaluación_2024",
                interactive: true,
    title: 'Evaluación_2024<br />\
    <img src="styles/legend/Evaluacin_2024_2_0.png" /> MODULO 1<br />\
    <img src="styles/legend/Evaluacin_2024_2_1.png" /> MODULO 2<br />\
    <img src="styles/legend/Evaluacin_2024_2_2.png" /> MODULO 3<br />\
    <img src="styles/legend/Evaluacin_2024_2_3.png" /> MODULO 4<br />\
    <img src="styles/legend/Evaluacin_2024_2_4.png" /> MODULO 5<br />\
    <img src="styles/legend/Evaluacin_2024_2_5.png" /> MODULO 6<br />\
    <img src="styles/legend/Evaluacin_2024_2_6.png" /> MODULO 7<br />\
    <img src="styles/legend/Evaluacin_2024_2_7.png" /> MODULO 8<br />\
    <img src="styles/legend/Evaluacin_2024_2_8.png" /> <br />'
        });
var group_Octubre = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Octubre"});

lyr_GoogleHybrid_0.setVisible(true);lyr_ndvi281024_1.setVisible(true);lyr_Evaluacin_2024_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ndvi281024_1,lyr_Evaluacin_2024_2];
lyr_Evaluacin_2024_2.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', '28.10.24_TC': '28.10.24_TC', });
lyr_Evaluacin_2024_2.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', '28.10.24_TC': 'TextEdit', });
lyr_Evaluacin_2024_2.set('fieldLabels', {'Recurso': 'header label - always visible', 'MODULO': 'header label - always visible', 'Siembra': 'header label - always visible', 'Potrero': 'header label - always visible', '28.10.24_TC': 'header label - always visible', });
lyr_Evaluacin_2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});