var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi3012hs_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3012hs_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2312hs_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312hs_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2012hs_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2012hs_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1812hs_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812hs_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1012hs_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1012hs_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi51224_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi51224_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_301224HS_7 = new ol.format.GeoJSON();
var features_301224HS_7 = format_301224HS_7.readFeatures(json_301224HS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_301224HS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_301224HS_7.addFeatures(features_301224HS_7);
var lyr_301224HS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_301224HS_7, 
                style: style_301224HS_7,
                popuplayertitle: '30.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/301224HS_7.png" /> 30.12.24 HS'
            });
var format_231224HS_8 = new ol.format.GeoJSON();
var features_231224HS_8 = format_231224HS_8.readFeatures(json_231224HS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_231224HS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224HS_8.addFeatures(features_231224HS_8);
var lyr_231224HS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224HS_8, 
                style: style_231224HS_8,
                popuplayertitle: '23.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/231224HS_8.png" /> 23.12.24 HS'
            });
var format_201224HS_9 = new ol.format.GeoJSON();
var features_201224HS_9 = format_201224HS_9.readFeatures(json_201224HS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201224HS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201224HS_9.addFeatures(features_201224HS_9);
var lyr_201224HS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201224HS_9, 
                style: style_201224HS_9,
                popuplayertitle: '20.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/201224HS_9.png" /> 20.12.24 HS'
            });
var format_181224HS_10 = new ol.format.GeoJSON();
var features_181224HS_10 = format_181224HS_10.readFeatures(json_181224HS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_181224HS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224HS_10.addFeatures(features_181224HS_10);
var lyr_181224HS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224HS_10, 
                style: style_181224HS_10,
                popuplayertitle: '18.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/181224HS_10.png" /> 18.12.24 HS'
            });
var format_101224HS_11 = new ol.format.GeoJSON();
var features_101224HS_11 = format_101224HS_11.readFeatures(json_101224HS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101224HS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101224HS_11.addFeatures(features_101224HS_11);
var lyr_101224HS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_101224HS_11, 
                style: style_101224HS_11,
                popuplayertitle: '10.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/101224HS_11.png" /> 10.12.24 HS'
            });
var format_51224HS_12 = new ol.format.GeoJSON();
var features_51224HS_12 = format_51224HS_12.readFeatures(json_51224HS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51224HS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51224HS_12.addFeatures(features_51224HS_12);
var lyr_51224HS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_51224HS_12, 
                style: style_51224HS_12,
                popuplayertitle: '5.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/51224HS_12.png" /> 5.12.24 HS'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_ndvi3012hs_1,lyr_ndvi2312hs_2,lyr_ndvi2012hs_3,lyr_ndvi1812hs_4,lyr_ndvi1012hs_5,lyr_ndvi51224_6,lyr_301224HS_7,lyr_231224HS_8,lyr_201224HS_9,lyr_181224HS_10,lyr_101224HS_11,lyr_51224HS_12,],
                                fold: "open",
                                title: 'H.S'});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: 'group1'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi3012hs_1.setVisible(true);lyr_ndvi2312hs_2.setVisible(true);lyr_ndvi2012hs_3.setVisible(true);lyr_ndvi1812hs_4.setVisible(true);lyr_ndvi1012hs_5.setVisible(true);lyr_ndvi51224_6.setVisible(true);lyr_301224HS_7.setVisible(true);lyr_231224HS_8.setVisible(true);lyr_201224HS_9.setVisible(true);lyr_181224HS_10.setVisible(true);lyr_101224HS_11.setVisible(true);lyr_51224HS_12.setVisible(true);
var layersList = [group_group1,group_HS];
lyr_301224HS_7.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_231224HS_8.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_201224HS_9.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'ndvi 20.12.24 hs_TC (kgMS/ha/d)', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'ndvi 20.12.24 hs_Disponible (kgMS/ha)', });
lyr_181224HS_10.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '18.12.24 hs_TC (kgMS/ha/d)': '18.12.24 hs_TC (kgMS/ha/d)', '18.12.24 hs_Disponible (kgMS/ha)': '18.12.24 hs_Disponible (kgMS/ha)', });
lyr_101224HS_11.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '10.12.24 hs_TC (kgMS/ha/d)': '10.12.24 hs_TC (kgMS/ha/d)', '10.12.24 hs_Disponible (kgMS/ha)': '10.12.24 hs_Disponible (kgMS/ha)', });
lyr_51224HS_12.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '5.12.24 hs': '5.12.24 hs', '5.12.24 _1': '5.12.24 _1', });
lyr_301224HS_7.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'TextEdit', '30.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_231224HS_8.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', '23.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_201224HS_9.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_181224HS_10.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '18.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '18.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_101224HS_11.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '10.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '10.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_51224HS_12.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '5.12.24 hs': '', '5.12.24 _1': '', });
lyr_301224HS_7.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '30.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_231224HS_8.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '23.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '23.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_201224HS_9.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_181224HS_10.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '18.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_101224HS_11.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '10.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '10.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_51224HS_12.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '5.12.24 hs': 'header label - always visible', '5.12.24 _1': 'header label - visible with data', });
lyr_51224HS_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});