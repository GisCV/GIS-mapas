var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi0901hs_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0901hs_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0701hs_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 07.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0701hs_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0401hs_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0401hs_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0201hs_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0201hs_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi3012hs_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3012hs_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2312hs_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312hs_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2012hs_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2012hs_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1812hs_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812hs_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1012hs_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1012hs_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi51224_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi51224_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_090125HS_11 = new ol.format.GeoJSON();
var features_090125HS_11 = format_090125HS_11.readFeatures(json_090125HS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_090125HS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_090125HS_11.addFeatures(features_090125HS_11);
var lyr_090125HS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_090125HS_11, 
                style: style_090125HS_11,
                popuplayertitle: '09.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/090125HS_11.png" /> 09.01.25 HS'
            });
var format_070125HS_12 = new ol.format.GeoJSON();
var features_070125HS_12 = format_070125HS_12.readFeatures(json_070125HS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_070125HS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070125HS_12.addFeatures(features_070125HS_12);
var lyr_070125HS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070125HS_12, 
                style: style_070125HS_12,
                popuplayertitle: '07.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/070125HS_12.png" /> 07.01.25 HS'
            });
var format_040125HS_13 = new ol.format.GeoJSON();
var features_040125HS_13 = format_040125HS_13.readFeatures(json_040125HS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040125HS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040125HS_13.addFeatures(features_040125HS_13);
var lyr_040125HS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040125HS_13, 
                style: style_040125HS_13,
                popuplayertitle: '04.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/040125HS_13.png" /> 04.01.25 HS'
            });
var format_020125HS_14 = new ol.format.GeoJSON();
var features_020125HS_14 = format_020125HS_14.readFeatures(json_020125HS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_020125HS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_020125HS_14.addFeatures(features_020125HS_14);
var lyr_020125HS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_020125HS_14, 
                style: style_020125HS_14,
                popuplayertitle: '02.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/020125HS_14.png" /> 02.01.25 HS'
            });
var format_301224HS_15 = new ol.format.GeoJSON();
var features_301224HS_15 = format_301224HS_15.readFeatures(json_301224HS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_301224HS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_301224HS_15.addFeatures(features_301224HS_15);
var lyr_301224HS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_301224HS_15, 
                style: style_301224HS_15,
                popuplayertitle: '30.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/301224HS_15.png" /> 30.12.24 HS'
            });
var format_231224HS_16 = new ol.format.GeoJSON();
var features_231224HS_16 = format_231224HS_16.readFeatures(json_231224HS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_231224HS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224HS_16.addFeatures(features_231224HS_16);
var lyr_231224HS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224HS_16, 
                style: style_231224HS_16,
                popuplayertitle: '23.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/231224HS_16.png" /> 23.12.24 HS'
            });
var format_201224HS_17 = new ol.format.GeoJSON();
var features_201224HS_17 = format_201224HS_17.readFeatures(json_201224HS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201224HS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201224HS_17.addFeatures(features_201224HS_17);
var lyr_201224HS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201224HS_17, 
                style: style_201224HS_17,
                popuplayertitle: '20.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/201224HS_17.png" /> 20.12.24 HS'
            });
var format_181224HS_18 = new ol.format.GeoJSON();
var features_181224HS_18 = format_181224HS_18.readFeatures(json_181224HS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_181224HS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224HS_18.addFeatures(features_181224HS_18);
var lyr_181224HS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224HS_18, 
                style: style_181224HS_18,
                popuplayertitle: '18.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/181224HS_18.png" /> 18.12.24 HS'
            });
var format_101224HS_19 = new ol.format.GeoJSON();
var features_101224HS_19 = format_101224HS_19.readFeatures(json_101224HS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101224HS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101224HS_19.addFeatures(features_101224HS_19);
var lyr_101224HS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_101224HS_19, 
                style: style_101224HS_19,
                popuplayertitle: '10.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/101224HS_19.png" /> 10.12.24 HS'
            });
var format_51224HS_20 = new ol.format.GeoJSON();
var features_51224HS_20 = format_51224HS_20.readFeatures(json_51224HS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51224HS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51224HS_20.addFeatures(features_51224HS_20);
var lyr_51224HS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_51224HS_20, 
                style: style_51224HS_20,
                popuplayertitle: '5.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/51224HS_20.png" /> 5.12.24 HS'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_ndvi0901hs_1,lyr_ndvi0701hs_2,lyr_ndvi0401hs_3,lyr_ndvi0201hs_4,lyr_ndvi3012hs_5,lyr_ndvi2312hs_6,lyr_ndvi2012hs_7,lyr_ndvi1812hs_8,lyr_ndvi1012hs_9,lyr_ndvi51224_10,lyr_090125HS_11,lyr_070125HS_12,lyr_040125HS_13,lyr_020125HS_14,lyr_301224HS_15,lyr_231224HS_16,lyr_201224HS_17,lyr_181224HS_18,lyr_101224HS_19,lyr_51224HS_20,],
                                fold: "open",
                                title: 'H.S'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi0901hs_1.setVisible(true);lyr_ndvi0701hs_2.setVisible(true);lyr_ndvi0401hs_3.setVisible(true);lyr_ndvi0201hs_4.setVisible(true);lyr_ndvi3012hs_5.setVisible(true);lyr_ndvi2312hs_6.setVisible(true);lyr_ndvi2012hs_7.setVisible(true);lyr_ndvi1812hs_8.setVisible(true);lyr_ndvi1012hs_9.setVisible(true);lyr_ndvi51224_10.setVisible(true);lyr_090125HS_11.setVisible(true);lyr_070125HS_12.setVisible(true);lyr_040125HS_13.setVisible(true);lyr_020125HS_14.setVisible(true);lyr_301224HS_15.setVisible(true);lyr_231224HS_16.setVisible(true);lyr_201224HS_17.setVisible(true);lyr_181224HS_18.setVisible(true);lyr_101224HS_19.setVisible(true);lyr_51224HS_20.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_HS];
lyr_090125HS_11.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_070125HS_12.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '07.01.25_TC (kgMS/ha/d)': '07.01.25_TC (kgMS/ha/d)', '07.01.25_Disponible (kgMS/ha)': '07.01.25_Disponible (kgMS/ha)', });
lyr_040125HS_13.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_020125HS_14.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '02.01.25_TC (kgMS/ha/d)': '02.01.25_TC (kgMS/ha/d)', '02.01.25_Disponible (kgMS/ha)': '02.01.25_Disponible (kgMS/ha)', });
lyr_301224HS_15.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_231224HS_16.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_201224HS_17.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'ndvi 20.12.24 hs_TC (kgMS/ha/d)', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'ndvi 20.12.24 hs_Disponible (kgMS/ha)', });
lyr_181224HS_18.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '18.12.24 hs_TC (kgMS/ha/d)': '18.12.24 hs_TC (kgMS/ha/d)', '18.12.24 hs_Disponible (kgMS/ha)': '18.12.24 hs_Disponible (kgMS/ha)', });
lyr_101224HS_19.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '10.12.24 hs_TC (kgMS/ha/d)': '10.12.24 hs_TC (kgMS/ha/d)', '10.12.24 hs_Disponible (kgMS/ha)': '10.12.24 hs_Disponible (kgMS/ha)', });
lyr_51224HS_20.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '5.12.24 hs': '5.12.24 hs', '5.12.24 _1': '5.12.24 _1', });
lyr_090125HS_11.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070125HS_12.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '07.01.25_TC (kgMS/ha/d)': 'TextEdit', '07.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_040125HS_13.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_020125HS_14.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '02.01.25_TC (kgMS/ha/d)': 'TextEdit', '02.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_301224HS_15.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'TextEdit', '30.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_231224HS_16.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', '23.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_201224HS_17.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_181224HS_18.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '18.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '18.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_101224HS_19.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '10.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '10.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_51224HS_20.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '5.12.24 hs': 'TextEdit', '5.12.24 _1': 'TextEdit', });
lyr_090125HS_11.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '09.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '09.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_070125HS_12.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '07.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '07.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_040125HS_13.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '04.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '04.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_020125HS_14.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - visible with data', '02.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '02.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_301224HS_15.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '30.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_231224HS_16.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '23.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '23.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_201224HS_17.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_181224HS_18.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '18.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_101224HS_19.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '10.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '10.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_51224HS_20.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '5.12.24 hs': 'header label - always visible', '5.12.24 _1': 'header label - visible with data', });
lyr_51224HS_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});