var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi1003HS_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1003HS_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1303HS_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 13.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1303HS_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1503HS_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 15.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1503HS_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1803HS_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1803HS_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397615.670254, -3876790.718087, -6395383.614863, -3875079.359172]
                            })
                        });
var lyr_ndvi2003HS_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2003HS_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi3003HS_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3003HS_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0404HS_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.04 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0404HS_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1404HS_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.04 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1404HS_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1704HS_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.04 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1704HS_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1904HS_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 19.04 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1904HS_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2204HS_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.04 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2204HS_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_100325HS_12 = new ol.format.GeoJSON();
var features_100325HS_12 = format_100325HS_12.readFeatures(json_100325HS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100325HS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100325HS_12.addFeatures(features_100325HS_12);
var lyr_100325HS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100325HS_12, 
                style: style_100325HS_12,
                popuplayertitle: '10.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/100325HS_12.png" /> 10.03.25 HS'
            });
var format_130325HS_13 = new ol.format.GeoJSON();
var features_130325HS_13 = format_130325HS_13.readFeatures(json_130325HS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_130325HS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_130325HS_13.addFeatures(features_130325HS_13);
var lyr_130325HS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_130325HS_13, 
                style: style_130325HS_13,
                popuplayertitle: '13.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/130325HS_13.png" /> 13.03.25 HS'
            });
var format_150325HS_14 = new ol.format.GeoJSON();
var features_150325HS_14 = format_150325HS_14.readFeatures(json_150325HS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_150325HS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_150325HS_14.addFeatures(features_150325HS_14);
var lyr_150325HS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_150325HS_14, 
                style: style_150325HS_14,
                popuplayertitle: '15.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/150325HS_14.png" /> 15.03.25 HS'
            });
var format_180325HS_15 = new ol.format.GeoJSON();
var features_180325HS_15 = format_180325HS_15.readFeatures(json_180325HS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180325HS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180325HS_15.addFeatures(features_180325HS_15);
var lyr_180325HS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180325HS_15, 
                style: style_180325HS_15,
                popuplayertitle: '18.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/180325HS_15.png" /> 18.03.25 HS'
            });
var format_200325HS_16 = new ol.format.GeoJSON();
var features_200325HS_16 = format_200325HS_16.readFeatures(json_200325HS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200325HS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200325HS_16.addFeatures(features_200325HS_16);
var lyr_200325HS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200325HS_16, 
                style: style_200325HS_16,
                popuplayertitle: '20.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/200325HS_16.png" /> 20.03.25 HS'
            });
var format_300325HS_17 = new ol.format.GeoJSON();
var features_300325HS_17 = format_300325HS_17.readFeatures(json_300325HS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_300325HS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_300325HS_17.addFeatures(features_300325HS_17);
var lyr_300325HS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_300325HS_17, 
                style: style_300325HS_17,
                popuplayertitle: '30.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/300325HS_17.png" /> 30.03.25 HS'
            });
var format_040425HS_18 = new ol.format.GeoJSON();
var features_040425HS_18 = format_040425HS_18.readFeatures(json_040425HS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040425HS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040425HS_18.addFeatures(features_040425HS_18);
var lyr_040425HS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040425HS_18, 
                style: style_040425HS_18,
                popuplayertitle: '04.04.25 HS',
                interactive: true,
                title: '<img src="styles/legend/040425HS_18.png" /> 04.04.25 HS'
            });
var format_140425HS_19 = new ol.format.GeoJSON();
var features_140425HS_19 = format_140425HS_19.readFeatures(json_140425HS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_140425HS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_140425HS_19.addFeatures(features_140425HS_19);
var lyr_140425HS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_140425HS_19, 
                style: style_140425HS_19,
                popuplayertitle: '14.04.25 HS',
                interactive: true,
                title: '<img src="styles/legend/140425HS_19.png" /> 14.04.25 HS'
            });
var format_170425HS_20 = new ol.format.GeoJSON();
var features_170425HS_20 = format_170425HS_20.readFeatures(json_170425HS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_170425HS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_170425HS_20.addFeatures(features_170425HS_20);
var lyr_170425HS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_170425HS_20, 
                style: style_170425HS_20,
                popuplayertitle: '17.04.25 HS',
                interactive: true,
                title: '<img src="styles/legend/170425HS_20.png" /> 17.04.25 HS'
            });
var format_190425HS_21 = new ol.format.GeoJSON();
var features_190425HS_21 = format_190425HS_21.readFeatures(json_190425HS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_190425HS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_190425HS_21.addFeatures(features_190425HS_21);
var lyr_190425HS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_190425HS_21, 
                style: style_190425HS_21,
                popuplayertitle: '19.04.25 HS',
                interactive: true,
                title: '<img src="styles/legend/190425HS_21.png" /> 19.04.25 HS'
            });
var format_220425HS_22 = new ol.format.GeoJSON();
var features_220425HS_22 = format_220425HS_22.readFeatures(json_220425HS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220425HS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220425HS_22.addFeatures(features_220425HS_22);
var lyr_220425HS_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220425HS_22, 
                style: style_220425HS_22,
                popuplayertitle: '22.04.25 HS',
                interactive: true,
                title: '<img src="styles/legend/220425HS_22.png" /> 22.04.25 HS'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_ndvi1003HS_1,lyr_ndvi1303HS_2,lyr_ndvi1503HS_3,lyr_ndvi1803HS_4,lyr_ndvi2003HS_5,lyr_ndvi3003HS_6,lyr_ndvi0404HS_7,lyr_ndvi1404HS_8,lyr_ndvi1704HS_9,lyr_ndvi1904HS_10,lyr_ndvi2204HS_11,lyr_100325HS_12,lyr_130325HS_13,lyr_150325HS_14,lyr_180325HS_15,lyr_200325HS_16,lyr_300325HS_17,lyr_040425HS_18,lyr_140425HS_19,lyr_170425HS_20,lyr_190425HS_21,lyr_220425HS_22,],
                                fold: "open",
                                title: 'H.S'});
var group_MW = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'M.W'});
var group_Oliver = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Oliver'});
var group_JULIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'JULIO'});
var group_AGOSTO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'AGOSTO'});
var group_JUNIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'JUNIO'});
var group_2024 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '2024'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi1003HS_1.setVisible(true);lyr_ndvi1303HS_2.setVisible(true);lyr_ndvi1503HS_3.setVisible(true);lyr_ndvi1803HS_4.setVisible(true);lyr_ndvi2003HS_5.setVisible(true);lyr_ndvi3003HS_6.setVisible(true);lyr_ndvi0404HS_7.setVisible(true);lyr_ndvi1404HS_8.setVisible(true);lyr_ndvi1704HS_9.setVisible(true);lyr_ndvi1904HS_10.setVisible(true);lyr_ndvi2204HS_11.setVisible(true);lyr_100325HS_12.setVisible(true);lyr_130325HS_13.setVisible(true);lyr_150325HS_14.setVisible(true);lyr_180325HS_15.setVisible(true);lyr_200325HS_16.setVisible(true);lyr_300325HS_17.setVisible(true);lyr_040425HS_18.setVisible(true);lyr_140425HS_19.setVisible(true);lyr_170425HS_20.setVisible(true);lyr_190425HS_21.setVisible(true);lyr_220425HS_22.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_HS];
lyr_100325HS_12.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '10.03.25_(kgMS/ha/d)': '10.03.25_(kgMS/ha/d)', '10.03.25_Disponible (KgMS/ha)': '10.03.25_Disponible (KgMS/ha)', });
lyr_130325HS_13.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '13.03.25_TC (kgMS/ha/d)': '13.03.25_TC (kgMS/ha/d)', '13.03.25_Disponible (KgMS/ha)': '13.03.25_Disponible (KgMS/ha)', });
lyr_150325HS_14.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (KgMS/ha)': '15.03.25_Disponible (KgMS/ha)', });
lyr_180325HS_15.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '18.03.25_TC (kgMS/ha/d)': '18.03.25_TC (kgMS/ha/d)', '18.03.25_Disponible (KgMS/ha)': '18.03.25_Disponible (KgMS/ha)', });
lyr_200325HS_16.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '20.03.25_TC (kgMS/ha/d)': '20.03.25_TC (kgMS/ha/d)', '20.03.25_Disponible (KgMS/ha)': '20.03.25_Disponible (KgMS/ha)', });
lyr_300325HS_17.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '30.03.25_TC (kgMS/ha/d)': '30.03.25_TC (kgMS/ha/d)', '30.03.25_Disponible (KgMS/ha)': '30.03.25_Disponible (KgMS/ha)', });
lyr_040425HS_18.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '04.04.25_TC (kgMS/ha/d)': '04.04.25_TC (kgMS/ha/d)', '04.04.25_Disponible (KgMS/ha)': '04.04.25_Disponible (KgMS/ha)', });
lyr_140425HS_19.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '14.04.25TC (kgMS/ha/d)': '14.04.25TC (kgMS/ha/d)', '14.04.25Disponible (KgMS/ha)': '14.04.25Disponible (KgMS/ha)', });
lyr_170425HS_20.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '17.04.25_TC (kgMS/ha/d)': '17.04.25_TC (kgMS/ha/d)', '17.04.25_Disponible (KgMS/ha)': '17.04.25_Disponible (KgMS/ha)', });
lyr_190425HS_21.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '19.04.25_TC (kgMS/ha/d)': '19.04.25_TC (kgMS/ha/d)', '19.04.25_Disponible (KgMS/ha)': '19.04.25_Disponible (KgMS/ha)', });
lyr_220425HS_22.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '22.04.25_TC (kgMS/ha/d)': '22.04.25_TC (kgMS/ha/d)', '22.04.25_Disponible (KgMS/ha)': '22.04.25_Disponible (KgMS/ha)', });
lyr_100325HS_12.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '10.03.25_(kgMS/ha/d)': 'TextEdit', '10.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_130325HS_13.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '13.03.25_TC (kgMS/ha/d)': 'TextEdit', '13.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_150325HS_14.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'TextEdit', '15.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_180325HS_15.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '18.03.25_TC (kgMS/ha/d)': 'TextEdit', '18.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_200325HS_16.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '20.03.25_TC (kgMS/ha/d)': 'TextEdit', '20.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_300325HS_17.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '30.03.25_TC (kgMS/ha/d)': 'TextEdit', '30.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_040425HS_18.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '04.04.25_TC (kgMS/ha/d)': 'TextEdit', '04.04.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_140425HS_19.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '14.04.25TC (kgMS/ha/d)': 'TextEdit', '14.04.25Disponible (KgMS/ha)': 'TextEdit', });
lyr_170425HS_20.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '17.04.25_TC (kgMS/ha/d)': 'TextEdit', '17.04.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_190425HS_21.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '19.04.25_TC (kgMS/ha/d)': 'TextEdit', '19.04.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_220425HS_22.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '22.04.25_TC (kgMS/ha/d)': 'TextEdit', '22.04.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_100325HS_12.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '10.03.25_(kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_130325HS_13.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '13.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '13.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_150325HS_14.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_180325HS_15.set('fieldLabels', {'id': 'header label - visible with data', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '18.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_200325HS_16.set('fieldLabels', {'id': 'header label - visible with data', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '20.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_300325HS_17.set('fieldLabels', {'id': 'header label - visible with data', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '30.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '30.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_040425HS_18.set('fieldLabels', {'id': 'header label - visible with data', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '04.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '04.04.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_140425HS_19.set('fieldLabels', {'id': 'header label - visible with data', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '14.04.25TC (kgMS/ha/d)': 'inline label - always visible', '14.04.25Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_170425HS_20.set('fieldLabels', {'id': 'header label - visible with data', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '17.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.04.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_190425HS_21.set('fieldLabels', {'id': 'header label - visible with data', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '19.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '19.04.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_220425HS_22.set('fieldLabels', {'id': 'header label - visible with data', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '22.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.04.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_220425HS_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});