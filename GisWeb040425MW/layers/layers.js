var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi0102MW_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0102MW_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0302MW_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0302MW_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0802MW_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 08.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0802MW_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1802MW_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1802MW_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2102MW_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2102MW_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0503MW_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0503MW_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1003MW_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1003MW_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1503MW_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 15.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1503MW_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2003MW_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2003MW_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi3005MW_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.05 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3005MW_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0404MW_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.04 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0404MW_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var format_010225MW_12 = new ol.format.GeoJSON();
var features_010225MW_12 = format_010225MW_12.readFeatures(json_010225MW_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010225MW_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010225MW_12.addFeatures(features_010225MW_12);
var lyr_010225MW_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010225MW_12, 
                style: style_010225MW_12,
                popuplayertitle: '01.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/010225MW_12.png" /> 01.02.25 MW'
            });
var format_030225MW_13 = new ol.format.GeoJSON();
var features_030225MW_13 = format_030225MW_13.readFeatures(json_030225MW_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030225MW_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030225MW_13.addFeatures(features_030225MW_13);
var lyr_030225MW_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030225MW_13, 
                style: style_030225MW_13,
                popuplayertitle: '03.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/030225MW_13.png" /> 03.02.25 MW'
            });
var format_080225MW_14 = new ol.format.GeoJSON();
var features_080225MW_14 = format_080225MW_14.readFeatures(json_080225MW_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_080225MW_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_080225MW_14.addFeatures(features_080225MW_14);
var lyr_080225MW_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_080225MW_14, 
                style: style_080225MW_14,
                popuplayertitle: '08.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/080225MW_14.png" /> 08.02.25 MW'
            });
var format_180225MW_15 = new ol.format.GeoJSON();
var features_180225MW_15 = format_180225MW_15.readFeatures(json_180225MW_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180225MW_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180225MW_15.addFeatures(features_180225MW_15);
var lyr_180225MW_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180225MW_15, 
                style: style_180225MW_15,
                popuplayertitle: '18.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/180225MW_15.png" /> 18.02.25 MW'
            });
var format_210225MW_16 = new ol.format.GeoJSON();
var features_210225MW_16 = format_210225MW_16.readFeatures(json_210225MW_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210225MW_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210225MW_16.addFeatures(features_210225MW_16);
var lyr_210225MW_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_210225MW_16, 
                style: style_210225MW_16,
                popuplayertitle: '21.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/210225MW_16.png" /> 21.02.25 MW'
            });
var format_050325MW_17 = new ol.format.GeoJSON();
var features_050325MW_17 = format_050325MW_17.readFeatures(json_050325MW_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_050325MW_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_050325MW_17.addFeatures(features_050325MW_17);
var lyr_050325MW_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_050325MW_17, 
                style: style_050325MW_17,
                popuplayertitle: '05.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/050325MW_17.png" /> 05.03.25 MW'
            });
var format_100325MW_18 = new ol.format.GeoJSON();
var features_100325MW_18 = format_100325MW_18.readFeatures(json_100325MW_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100325MW_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100325MW_18.addFeatures(features_100325MW_18);
var lyr_100325MW_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100325MW_18, 
                style: style_100325MW_18,
                popuplayertitle: '10.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/100325MW_18.png" /> 10.03.25 MW'
            });
var format_150325MW_19 = new ol.format.GeoJSON();
var features_150325MW_19 = format_150325MW_19.readFeatures(json_150325MW_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_150325MW_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_150325MW_19.addFeatures(features_150325MW_19);
var lyr_150325MW_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_150325MW_19, 
                style: style_150325MW_19,
                popuplayertitle: '15.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/150325MW_19.png" /> 15.03.25 MW'
            });
var format_180325MW_20 = new ol.format.GeoJSON();
var features_180325MW_20 = format_180325MW_20.readFeatures(json_180325MW_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180325MW_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180325MW_20.addFeatures(features_180325MW_20);
var lyr_180325MW_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180325MW_20, 
                style: style_180325MW_20,
                popuplayertitle: '18.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/180325MW_20.png" /> 18.03.25 MW'
            });
var format_200325MW_21 = new ol.format.GeoJSON();
var features_200325MW_21 = format_200325MW_21.readFeatures(json_200325MW_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200325MW_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200325MW_21.addFeatures(features_200325MW_21);
var lyr_200325MW_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200325MW_21, 
                style: style_200325MW_21,
                popuplayertitle: '20.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/200325MW_21.png" /> 20.03.25 MW'
            });
var format_300325MW_22 = new ol.format.GeoJSON();
var features_300325MW_22 = format_300325MW_22.readFeatures(json_300325MW_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_300325MW_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_300325MW_22.addFeatures(features_300325MW_22);
var lyr_300325MW_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_300325MW_22, 
                style: style_300325MW_22,
                popuplayertitle: '30.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/300325MW_22.png" /> 30.03.25 MW'
            });
var format_040425MW_23 = new ol.format.GeoJSON();
var features_040425MW_23 = format_040425MW_23.readFeatures(json_040425MW_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040425MW_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040425MW_23.addFeatures(features_040425MW_23);
var lyr_040425MW_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040425MW_23, 
                style: style_040425MW_23,
                popuplayertitle: '04.04.25 MW',
                interactive: true,
                title: '<img src="styles/legend/040425MW_23.png" /> 04.04.25 MW'
            });
var group_MW = new ol.layer.Group({
                                layers: [lyr_ndvi0102MW_1,lyr_ndvi0302MW_2,lyr_ndvi0802MW_3,lyr_ndvi1802MW_4,lyr_ndvi2102MW_5,lyr_ndvi0503MW_6,lyr_ndvi1003MW_7,lyr_ndvi1503MW_8,lyr_ndvi2003MW_9,lyr_ndvi3005MW_10,lyr_ndvi0404MW_11,lyr_010225MW_12,lyr_030225MW_13,lyr_080225MW_14,lyr_180225MW_15,lyr_210225MW_16,lyr_050325MW_17,lyr_100325MW_18,lyr_150325MW_19,lyr_180325MW_20,lyr_200325MW_21,lyr_300325MW_22,lyr_040425MW_23,],
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

lyr_googlesatelite_0.setVisible(true);lyr_ndvi0102MW_1.setVisible(true);lyr_ndvi0302MW_2.setVisible(true);lyr_ndvi0802MW_3.setVisible(true);lyr_ndvi1802MW_4.setVisible(true);lyr_ndvi2102MW_5.setVisible(true);lyr_ndvi0503MW_6.setVisible(true);lyr_ndvi1003MW_7.setVisible(true);lyr_ndvi1503MW_8.setVisible(true);lyr_ndvi2003MW_9.setVisible(true);lyr_ndvi3005MW_10.setVisible(true);lyr_ndvi0404MW_11.setVisible(true);lyr_010225MW_12.setVisible(true);lyr_030225MW_13.setVisible(true);lyr_080225MW_14.setVisible(true);lyr_180225MW_15.setVisible(true);lyr_210225MW_16.setVisible(true);lyr_050325MW_17.setVisible(true);lyr_100325MW_18.setVisible(true);lyr_150325MW_19.setVisible(true);lyr_180325MW_20.setVisible(true);lyr_200325MW_21.setVisible(true);lyr_300325MW_22.setVisible(true);lyr_040425MW_23.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_MW];
lyr_010225MW_12.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (kgMS/ha)': '01.02.25_Disponible (kgMS/ha)', });
lyr_030225MW_13.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '01.02.25_T': '01.02.25_T', '01.02.25_D': '01.02.25_D', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (kgMS/ha)': '03.02.25_Disponible (kgMS/ha)', });
lyr_080225MW_14.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '08.02.25_TC (kgMS/ha/d)': '08.02.25_TC (kgMS/ha/d)', '08.02.25_Disponible (kgMS/ha)': '08.02.25_Disponible (kgMS/ha)', });
lyr_180225MW_15.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_210225MW_16.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (kgMS/ha)': '21.02.25_Disponible (kgMS/ha)', });
lyr_050325MW_17.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_100325MW_18.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_150325MW_19.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (kgMS/ha)': '15.03.25_Disponible (kgMS/ha)', });
lyr_180325MW_20.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '18.03.25_TC (kgMS/ha/d)': '18.03.25_TC (kgMS/ha/d)', '18.03.25_Disponible (kgMS/ha)': '18.03.25_Disponible (kgMS/ha)', });
lyr_200325MW_21.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '20.03.25_TC (kgMS/ha/d)': '20.03.25_TC (kgMS/ha/d)', '20.03.25_Disponible (kgMS/ha)': '20.03.25_Disponible (kgMS/ha)', });
lyr_300325MW_22.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '30.03.25_TC (kgMS/ha/d)': '30.03.25_TC (kgMS/ha/d)', '30.03.25_Disponible (kgMS/ha)': '30.03.25_Disponible (kgMS/ha)', });
lyr_040425MW_23.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '04.04.25_TC (kgMS/ha/d)': '04.04.25_TC (kgMS/ha/d)', '04.04.25_Disponible (kgMS/ha)': '04.04.25_Disponible (kgMS/ha)', });
lyr_010225MW_12.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'TextEdit', '01.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_030225MW_13.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '01.02.25_T': 'TextEdit', '01.02.25_D': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_080225MW_14.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '08.02.25_TC (kgMS/ha/d)': 'TextEdit', '08.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_180225MW_15.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_210225MW_16.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_050325MW_17.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'TextEdit', '05.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_100325MW_18.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'TextEdit', '10.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_150325MW_19.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'TextEdit', '15.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_180325MW_20.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '18.03.25_TC (kgMS/ha/d)': 'TextEdit', '18.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_200325MW_21.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '20.03.25_TC (kgMS/ha/d)': 'TextEdit', '20.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_300325MW_22.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '30.03.25_TC (kgMS/ha/d)': 'TextEdit', '30.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_040425MW_23.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '04.04.25_TC (kgMS/ha/d)': 'TextEdit', '04.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_010225MW_12.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_030225MW_13.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '01.02.25_T': 'hidden field', '01.02.25_D': 'hidden field', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_080225MW_14.set('fieldLabels', {'id': 'header label - always visible', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '08.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_180225MW_15.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_210225MW_16.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_050325MW_17.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_100325MW_18.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_150325MW_19.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_180325MW_20.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '18.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_200325MW_21.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '20.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_300325MW_22.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '30.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '30.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_040425MW_23.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '04.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '04.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_040425MW_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});