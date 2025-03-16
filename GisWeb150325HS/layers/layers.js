var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi2201HS_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2201HS_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0102HS_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0102HS_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0302HS_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0302HS_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0802HS_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 08.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0802HS_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1802HS_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1802HS_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2102HS_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2102HS_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2802HS_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 28.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2802HS_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0302HS_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0302HS_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0503HS_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0503HS_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1003HS_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1003HS_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1303HS_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 13.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1303HS_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1503HS_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 15.03 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1503HS_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_220125HS_13 = new ol.format.GeoJSON();
var features_220125HS_13 = format_220125HS_13.readFeatures(json_220125HS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220125HS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220125HS_13.addFeatures(features_220125HS_13);
var lyr_220125HS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220125HS_13, 
                style: style_220125HS_13,
                popuplayertitle: '22.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/220125HS_13.png" /> 22.01.25 HS'
            });
var format_010225HS_14 = new ol.format.GeoJSON();
var features_010225HS_14 = format_010225HS_14.readFeatures(json_010225HS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010225HS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010225HS_14.addFeatures(features_010225HS_14);
var lyr_010225HS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010225HS_14, 
                style: style_010225HS_14,
                popuplayertitle: '01.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/010225HS_14.png" /> 01.02.25 HS'
            });
var format_030225HS_15 = new ol.format.GeoJSON();
var features_030225HS_15 = format_030225HS_15.readFeatures(json_030225HS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030225HS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030225HS_15.addFeatures(features_030225HS_15);
var lyr_030225HS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030225HS_15, 
                style: style_030225HS_15,
                popuplayertitle: '03.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/030225HS_15.png" /> 03.02.25 HS'
            });
var format_080225HS_16 = new ol.format.GeoJSON();
var features_080225HS_16 = format_080225HS_16.readFeatures(json_080225HS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_080225HS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_080225HS_16.addFeatures(features_080225HS_16);
var lyr_080225HS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_080225HS_16, 
                style: style_080225HS_16,
                popuplayertitle: '08.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/080225HS_16.png" /> 08.02.25 HS'
            });
var format_180225HS_17 = new ol.format.GeoJSON();
var features_180225HS_17 = format_180225HS_17.readFeatures(json_180225HS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180225HS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180225HS_17.addFeatures(features_180225HS_17);
var lyr_180225HS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180225HS_17, 
                style: style_180225HS_17,
                popuplayertitle: '18.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/180225HS_17.png" /> 18.02.25 HS'
            });
var format_210225HS_18 = new ol.format.GeoJSON();
var features_210225HS_18 = format_210225HS_18.readFeatures(json_210225HS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210225HS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210225HS_18.addFeatures(features_210225HS_18);
var lyr_210225HS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_210225HS_18, 
                style: style_210225HS_18,
                popuplayertitle: '21.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/210225HS_18.png" /> 21.02.25 HS'
            });
var format_280225HS_19 = new ol.format.GeoJSON();
var features_280225HS_19 = format_280225HS_19.readFeatures(json_280225HS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280225HS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280225HS_19.addFeatures(features_280225HS_19);
var lyr_280225HS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280225HS_19, 
                style: style_280225HS_19,
                popuplayertitle: '28.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/280225HS_19.png" /> 28.02.25 HS'
            });
var format_030325HS_20 = new ol.format.GeoJSON();
var features_030325HS_20 = format_030325HS_20.readFeatures(json_030325HS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030325HS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030325HS_20.addFeatures(features_030325HS_20);
var lyr_030325HS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030325HS_20, 
                style: style_030325HS_20,
                popuplayertitle: '03.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/030325HS_20.png" /> 03.03.25 HS'
            });
var format_050325HS_21 = new ol.format.GeoJSON();
var features_050325HS_21 = format_050325HS_21.readFeatures(json_050325HS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_050325HS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_050325HS_21.addFeatures(features_050325HS_21);
var lyr_050325HS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_050325HS_21, 
                style: style_050325HS_21,
                popuplayertitle: '05.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/050325HS_21.png" /> 05.03.25 HS'
            });
var format_100325HS_22 = new ol.format.GeoJSON();
var features_100325HS_22 = format_100325HS_22.readFeatures(json_100325HS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100325HS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100325HS_22.addFeatures(features_100325HS_22);
var lyr_100325HS_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100325HS_22, 
                style: style_100325HS_22,
                popuplayertitle: '10.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/100325HS_22.png" /> 10.03.25 HS'
            });
var format_130325HS_23 = new ol.format.GeoJSON();
var features_130325HS_23 = format_130325HS_23.readFeatures(json_130325HS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_130325HS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_130325HS_23.addFeatures(features_130325HS_23);
var lyr_130325HS_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_130325HS_23, 
                style: style_130325HS_23,
                popuplayertitle: '13.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/130325HS_23.png" /> 13.03.25 HS'
            });
var format_150325HS_24 = new ol.format.GeoJSON();
var features_150325HS_24 = format_150325HS_24.readFeatures(json_150325HS_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_150325HS_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_150325HS_24.addFeatures(features_150325HS_24);
var lyr_150325HS_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_150325HS_24, 
                style: style_150325HS_24,
                popuplayertitle: '15.03.25 HS',
                interactive: true,
                title: '<img src="styles/legend/150325HS_24.png" /> 15.03.25 HS'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_ndvi2201HS_1,lyr_ndvi0102HS_2,lyr_ndvi0302HS_3,lyr_ndvi0802HS_4,lyr_ndvi1802HS_5,lyr_ndvi2102HS_6,lyr_ndvi2802HS_7,lyr_ndvi0302HS_8,lyr_ndvi0503HS_9,lyr_ndvi1003HS_10,lyr_ndvi1303HS_11,lyr_ndvi1503HS_12,lyr_220125HS_13,lyr_010225HS_14,lyr_030225HS_15,lyr_080225HS_16,lyr_180225HS_17,lyr_210225HS_18,lyr_280225HS_19,lyr_030325HS_20,lyr_050325HS_21,lyr_100325HS_22,lyr_130325HS_23,lyr_150325HS_24,],
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

lyr_googlesatelite_0.setVisible(true);lyr_ndvi2201HS_1.setVisible(true);lyr_ndvi0102HS_2.setVisible(true);lyr_ndvi0302HS_3.setVisible(true);lyr_ndvi0802HS_4.setVisible(true);lyr_ndvi1802HS_5.setVisible(true);lyr_ndvi2102HS_6.setVisible(true);lyr_ndvi2802HS_7.setVisible(true);lyr_ndvi0302HS_8.setVisible(true);lyr_ndvi0503HS_9.setVisible(true);lyr_ndvi1003HS_10.setVisible(true);lyr_ndvi1303HS_11.setVisible(true);lyr_ndvi1503HS_12.setVisible(true);lyr_220125HS_13.setVisible(true);lyr_010225HS_14.setVisible(true);lyr_030225HS_15.setVisible(true);lyr_080225HS_16.setVisible(true);lyr_180225HS_17.setVisible(true);lyr_210225HS_18.setVisible(true);lyr_280225HS_19.setVisible(true);lyr_030325HS_20.setVisible(true);lyr_050325HS_21.setVisible(true);lyr_100325HS_22.setVisible(true);lyr_130325HS_23.setVisible(true);lyr_150325HS_24.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_HS];
lyr_220125HS_13.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (KgMS/ha)': '22.01.25_Disponible (KgMS/ha)', });
lyr_010225HS_14.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (KgMS/ha)': '01.02.25_Disponible (KgMS/ha)', });
lyr_030225HS_15.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (KgMS/ha)': '03.02.25_Disponible (KgMS/ha)', });
lyr_080225HS_16.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '08.02.25_TC (kgMS/ha/d)': '08.02.25_TC (kgMS/ha/d)', '08.02.25_Disponible (KgMS/ha)': '08.02.25_Disponible (KgMS/ha)', });
lyr_180225HS_17.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (KgMS/ha)': '18.02.25_Disponible (KgMS/ha)', });
lyr_210225HS_18.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (KgMS/ha)': '21.02.25_Disponible (KgMS/ha)', });
lyr_280225HS_19.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '28.02.25_TC (kgMS/ha/d)': '28.02.25_TC (kgMS/ha/d)', '28.02.25_Disponible (KgMS/ha)': '28.02.25_Disponible (KgMS/ha)', });
lyr_030325HS_20.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '03.03.25_28.02.25_TC (kgMS/ha/d)': '03.03.25_28.02.25_TC (kgMS/ha/d)', '03.03.25_28.02.25_Disponible (KgMS/ha)': '03.03.25_28.02.25_Disponible (KgMS/ha)', '03.03.25_TC (kgMS/ha/d)': '03.03.25_TC (kgMS/ha/d)', '03.03.25_Disponible (KgMS/ha)': '03.03.25_Disponible (KgMS/ha)', });
lyr_050325HS_21.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (KgMS/ha)': '05.03.25_Disponible (KgMS/ha)', });
lyr_100325HS_22.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '10.03.25_(kgMS/ha/d)': '10.03.25_(kgMS/ha/d)', '10.03.25_Disponible (KgMS/ha)': '10.03.25_Disponible (KgMS/ha)', });
lyr_130325HS_23.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '13.03.25_TC (kgMS/ha/d)': '13.03.25_TC (kgMS/ha/d)', '13.03.25_Disponible (KgMS/ha)': '13.03.25_Disponible (KgMS/ha)', });
lyr_150325HS_24.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (KgMS/ha)': '15.03.25_Disponible (KgMS/ha)', });
lyr_220125HS_13.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_010225HS_14.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'TextEdit', '01.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_030225HS_15.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_080225HS_16.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '08.02.25_TC (kgMS/ha/d)': 'TextEdit', '08.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_180225HS_17.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_210225HS_18.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_280225HS_19.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '28.02.25_TC (kgMS/ha/d)': 'TextEdit', '28.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_030325HS_20.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '03.03.25_28.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.03.25_28.02.25_Disponible (KgMS/ha)': 'TextEdit', '03.03.25_TC (kgMS/ha/d)': 'TextEdit', '03.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_050325HS_21.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'TextEdit', '05.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_100325HS_22.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '10.03.25_(kgMS/ha/d)': 'TextEdit', '10.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_130325HS_23.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '13.03.25_TC (kgMS/ha/d)': 'TextEdit', '13.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_150325HS_24.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'TextEdit', '15.03.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_220125HS_13.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.01.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_010225HS_14.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_030225HS_15.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_080225HS_16.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '08.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_180225HS_17.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_210225HS_18.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_280225HS_19.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '28.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '28.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_030325HS_20.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '03.03.25_28.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.03.25_28.02.25_Disponible (KgMS/ha)': 'inline label - always visible', '03.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_050325HS_21.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_100325HS_22.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '10.03.25_(kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_130325HS_23.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '13.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '13.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_150325HS_24.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_150325HS_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});