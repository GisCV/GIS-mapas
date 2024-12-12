var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi51224_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 5.12.24",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi51224_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1012hs_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 10.12 hs",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi1012hs_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_51224HS_3 = new ol.format.GeoJSON();
var features_51224HS_3 = format_51224HS_3.readFeatures(json_51224HS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51224HS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51224HS_3.addFeatures(features_51224HS_3);
var lyr_51224HS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_51224HS_3, 
                style: style_51224HS_3,
                popuplayertitle: "5.12.24 HS",
                interactive: true,
                title: '<img src="styles/legend/51224HS_3.png" /> 5.12.24 HS'
            });
var format_101224HS_4 = new ol.format.GeoJSON();
var features_101224HS_4 = format_101224HS_4.readFeatures(json_101224HS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101224HS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101224HS_4.addFeatures(features_101224HS_4);
var lyr_101224HS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_101224HS_4, 
                style: style_101224HS_4,
                popuplayertitle: "10.12.24 HS",
                interactive: true,
                title: '<img src="styles/legend/101224HS_4.png" /> 10.12.24 HS'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_ndvi51224_1,lyr_ndvi1012hs_2,lyr_51224HS_3,lyr_101224HS_4,],
                                fold: "open",
                                title: "H.S"});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: "group1"});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi51224_1.setVisible(true);lyr_ndvi1012hs_2.setVisible(true);lyr_51224HS_3.setVisible(true);lyr_101224HS_4.setVisible(true);
var layersList = [group_group1,group_HS];
lyr_51224HS_3.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '5.12.24 hs': '5.12.24 hs', '5.12.24 _1': '5.12.24 _1', });
lyr_101224HS_4.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '10.12.24 hs_TC (kgMS/ha/d)': '10.12.24 hs_TC (kgMS/ha/d)', '10.12.24 hs_Disponible (kgMS/ha)': '10.12.24 hs_Disponible (kgMS/ha)', });
lyr_51224HS_3.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '5.12.24 hs': '', '5.12.24 _1': '', });
lyr_101224HS_4.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '10.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '10.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_51224HS_3.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '5.12.24 hs': 'header label - always visible', '5.12.24 _1': 'header label - visible with data', });
lyr_101224HS_4.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '10.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '10.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_101224HS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});