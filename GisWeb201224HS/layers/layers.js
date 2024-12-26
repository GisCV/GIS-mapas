var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi2012hs_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2012hs_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1812hs_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812hs_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1012hs_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1012hs_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi51224_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi51224_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_201224HS_5 = new ol.format.GeoJSON();
var features_201224HS_5 = format_201224HS_5.readFeatures(json_201224HS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201224HS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201224HS_5.addFeatures(features_201224HS_5);
var lyr_201224HS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201224HS_5, 
                style: style_201224HS_5,
                popuplayertitle: '20.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/201224HS_5.png" /> 20.12.24 HS'
            });
var format_181224HS_6 = new ol.format.GeoJSON();
var features_181224HS_6 = format_181224HS_6.readFeatures(json_181224HS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_181224HS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224HS_6.addFeatures(features_181224HS_6);
var lyr_181224HS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224HS_6, 
                style: style_181224HS_6,
                popuplayertitle: '18.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/181224HS_6.png" /> 18.12.24 HS'
            });
var format_101224HS_7 = new ol.format.GeoJSON();
var features_101224HS_7 = format_101224HS_7.readFeatures(json_101224HS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101224HS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101224HS_7.addFeatures(features_101224HS_7);
var lyr_101224HS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_101224HS_7, 
                style: style_101224HS_7,
                popuplayertitle: '10.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/101224HS_7.png" /> 10.12.24 HS'
            });
var format_51224HS_8 = new ol.format.GeoJSON();
var features_51224HS_8 = format_51224HS_8.readFeatures(json_51224HS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51224HS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51224HS_8.addFeatures(features_51224HS_8);
var lyr_51224HS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_51224HS_8, 
                style: style_51224HS_8,
                popuplayertitle: '5.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/51224HS_8.png" /> 5.12.24 HS'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_ndvi2012hs_1,lyr_ndvi1812hs_2,lyr_ndvi1012hs_3,lyr_ndvi51224_4,lyr_201224HS_5,lyr_181224HS_6,lyr_101224HS_7,lyr_51224HS_8,],
                                fold: "open",
                                title: 'H.S'});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: 'group1'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi2012hs_1.setVisible(true);lyr_ndvi1812hs_2.setVisible(true);lyr_ndvi1012hs_3.setVisible(true);lyr_ndvi51224_4.setVisible(true);lyr_201224HS_5.setVisible(true);lyr_181224HS_6.setVisible(true);lyr_101224HS_7.setVisible(true);lyr_51224HS_8.setVisible(true);
var layersList = [group_group1,group_HS];
lyr_201224HS_5.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'ndvi 20.12.24 hs_TC (kgMS/ha/d)', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'ndvi 20.12.24 hs_Disponible (kgMS/ha)', });
lyr_181224HS_6.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '18.12.24 hs_TC (kgMS/ha/d)': '18.12.24 hs_TC (kgMS/ha/d)', '18.12.24 hs_Disponible (kgMS/ha)': '18.12.24 hs_Disponible (kgMS/ha)', });
lyr_101224HS_7.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '10.12.24 hs_TC (kgMS/ha/d)': '10.12.24 hs_TC (kgMS/ha/d)', '10.12.24 hs_Disponible (kgMS/ha)': '10.12.24 hs_Disponible (kgMS/ha)', });
lyr_51224HS_8.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '5.12.24 hs': '5.12.24 hs', '5.12.24 _1': '5.12.24 _1', });
lyr_201224HS_5.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_181224HS_6.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '18.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '18.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_101224HS_7.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '10.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '10.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_51224HS_8.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '5.12.24 hs': '', '5.12.24 _1': '', });
lyr_201224HS_5.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_181224HS_6.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '18.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_101224HS_7.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '10.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '10.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_51224HS_8.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '5.12.24 hs': 'header label - always visible', '5.12.24 _1': 'header label - visible with data', });
lyr_51224HS_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});