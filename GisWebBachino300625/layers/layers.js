var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_250225_1 = new ol.layer.Image({
                            opacity: 1,
                            title: '25.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/250225_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_070325_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '07.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/070325_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_010425_3 = new ol.layer.Image({
                            opacity: 1,
                            title: '01.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/010425_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_160425_4 = new ol.layer.Image({
                            opacity: 1,
                            title: '16.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/160425_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_210425_5 = new ol.layer.Image({
                            opacity: 1,
                            title: '21.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/210425_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_280425_6 = new ol.layer.Image({
                            opacity: 1,
                            title: '28.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/280425_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_010525_7 = new ol.layer.Image({
                            opacity: 1,
                            title: '01.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/010525_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_310525_8 = new ol.layer.Image({
                            opacity: 1,
                            title: '31.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/310525_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_050625_9 = new ol.layer.Image({
                            opacity: 1,
                            title: '05.06.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/050625_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_070625_10 = new ol.layer.Image({
                            opacity: 1,
                            title: '07.06.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/070625_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_250625_11 = new ol.layer.Image({
                            opacity: 1,
                            title: '25.06.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/250625_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_270625_12 = new ol.layer.Image({
                            opacity: 1,
                            title: '27.06.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/270625_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_300625_13 = new ol.layer.Image({
                            opacity: 1,
                            title: '30.06.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/300625_13.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var format_250225_14 = new ol.format.GeoJSON();
var features_250225_14 = format_250225_14.readFeatures(json_250225_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250225_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250225_14.addFeatures(features_250225_14);
var lyr_250225_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250225_14, 
                style: style_250225_14,
                popuplayertitle: '25.02.25',
                interactive: true,
                title: '<img src="styles/legend/250225_14.png" /> 25.02.25'
            });
var format_070325_15 = new ol.format.GeoJSON();
var features_070325_15 = format_070325_15.readFeatures(json_070325_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_070325_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070325_15.addFeatures(features_070325_15);
var lyr_070325_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070325_15, 
                style: style_070325_15,
                popuplayertitle: '07.03.25',
                interactive: true,
                title: '<img src="styles/legend/070325_15.png" /> 07.03.25'
            });
var format_010425_16 = new ol.format.GeoJSON();
var features_010425_16 = format_010425_16.readFeatures(json_010425_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010425_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010425_16.addFeatures(features_010425_16);
var lyr_010425_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010425_16, 
                style: style_010425_16,
                popuplayertitle: '01.04.25',
                interactive: true,
                title: '<img src="styles/legend/010425_16.png" /> 01.04.25'
            });
var format_160425_17 = new ol.format.GeoJSON();
var features_160425_17 = format_160425_17.readFeatures(json_160425_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_160425_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_160425_17.addFeatures(features_160425_17);
var lyr_160425_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_160425_17, 
                style: style_160425_17,
                popuplayertitle: '16.04.25',
                interactive: true,
                title: '<img src="styles/legend/160425_17.png" /> 16.04.25'
            });
var format_210425_18 = new ol.format.GeoJSON();
var features_210425_18 = format_210425_18.readFeatures(json_210425_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210425_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210425_18.addFeatures(features_210425_18);
var lyr_210425_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_210425_18, 
                style: style_210425_18,
                popuplayertitle: '21.04.25',
                interactive: true,
                title: '<img src="styles/legend/210425_18.png" /> 21.04.25'
            });
var format_280425_19 = new ol.format.GeoJSON();
var features_280425_19 = format_280425_19.readFeatures(json_280425_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280425_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280425_19.addFeatures(features_280425_19);
var lyr_280425_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280425_19, 
                style: style_280425_19,
                popuplayertitle: '28.04.25',
                interactive: true,
                title: '<img src="styles/legend/280425_19.png" /> 28.04.25'
            });
var format_010525_20 = new ol.format.GeoJSON();
var features_010525_20 = format_010525_20.readFeatures(json_010525_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010525_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010525_20.addFeatures(features_010525_20);
var lyr_010525_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010525_20, 
                style: style_010525_20,
                popuplayertitle: '01.05.25',
                interactive: true,
                title: '<img src="styles/legend/010525_20.png" /> 01.05.25'
            });
var format_310525_21 = new ol.format.GeoJSON();
var features_310525_21 = format_310525_21.readFeatures(json_310525_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_310525_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_310525_21.addFeatures(features_310525_21);
var lyr_310525_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_310525_21, 
                style: style_310525_21,
                popuplayertitle: '31.05.25',
                interactive: true,
                title: '<img src="styles/legend/310525_21.png" /> 31.05.25'
            });
var format_070625_22 = new ol.format.GeoJSON();
var features_070625_22 = format_070625_22.readFeatures(json_070625_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_070625_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070625_22.addFeatures(features_070625_22);
var lyr_070625_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070625_22, 
                style: style_070625_22,
                popuplayertitle: '07.06.25',
                interactive: true,
                title: '<img src="styles/legend/070625_22.png" /> 07.06.25'
            });
var format_270625_23 = new ol.format.GeoJSON();
var features_270625_23 = format_270625_23.readFeatures(json_270625_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_270625_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_270625_23.addFeatures(features_270625_23);
var lyr_270625_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_270625_23, 
                style: style_270625_23,
                popuplayertitle: '27.06.25',
                interactive: true,
                title: '<img src="styles/legend/270625_23.png" /> 27.06.25'
            });
var format_300625_24 = new ol.format.GeoJSON();
var features_300625_24 = format_300625_24.readFeatures(json_300625_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_300625_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_300625_24.addFeatures(features_300625_24);
var lyr_300625_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_300625_24, 
                style: style_300625_24,
                popuplayertitle: '30.06.25',
                interactive: true,
                title: '<img src="styles/legend/300625_24.png" /> 30.06.25'
            });
var group_SHPS = new ol.layer.Group({
                                layers: [lyr_250225_14,lyr_070325_15,lyr_010425_16,lyr_160425_17,lyr_210425_18,lyr_280425_19,lyr_010525_20,lyr_310525_21,lyr_070625_22,lyr_270625_23,lyr_300625_24,],
                                fold: "open",
                                title: 'SHPS'});
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_250225_1,lyr_070325_2,lyr_010425_3,lyr_160425_4,lyr_210425_5,lyr_280425_6,lyr_010525_7,lyr_310525_8,lyr_050625_9,lyr_070625_10,lyr_250625_11,lyr_270625_12,lyr_300625_13,],
                                fold: "open",
                                title: 'NDVI'});
var group_Evaluacion2022 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Evaluacion 2022'});
var group_Evaluacion2021 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Evaluacion 2021'});
var group_Potreros = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Potreros'});
var group_Octubre = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Octubre'});

lyr_GoogleHybrid_0.setVisible(true);lyr_250225_1.setVisible(true);lyr_070325_2.setVisible(true);lyr_010425_3.setVisible(true);lyr_160425_4.setVisible(true);lyr_210425_5.setVisible(true);lyr_280425_6.setVisible(true);lyr_010525_7.setVisible(true);lyr_310525_8.setVisible(true);lyr_050625_9.setVisible(true);lyr_070625_10.setVisible(true);lyr_250625_11.setVisible(true);lyr_270625_12.setVisible(true);lyr_300625_13.setVisible(true);lyr_250225_14.setVisible(true);lyr_070325_15.setVisible(true);lyr_010425_16.setVisible(true);lyr_160425_17.setVisible(true);lyr_210425_18.setVisible(true);lyr_280425_19.setVisible(true);lyr_010525_20.setVisible(true);lyr_310525_21.setVisible(true);lyr_070625_22.setVisible(true);lyr_270625_23.setVisible(true);lyr_300625_24.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_NDVI,group_SHPS];
lyr_250225_14.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '25.02.25_TC (kgMS/ha/d)': '25.02.25_TC (kgMS/ha/d)', '25.02.25_Disponible (kgMS/ha)': '25.02.25_Disponible (kgMS/ha)', });
lyr_070325_15.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '07.03.25_TC (kgMS/ha/d)': '07.03.25_TC (kgMS/ha/d)', '07.03.25_Disponible (kgMS/ha)': '07.03.25_Disponible (kgMS/ha)', });
lyr_010425_16.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '01.04.25_TC (kgMS/ha/d)': '01.04.25_TC (kgMS/ha/d)', '01.04.25_Disponible (kgMS/ha)': '01.04.25_Disponible (kgMS/ha)', });
lyr_160425_17.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '16.04.25_TC (kgMS/ha/d)': '16.04.25_TC (kgMS/ha/d)', '16.04.25_Disponible (kgMS/ha)': '16.04.25_Disponible (kgMS/ha)', });
lyr_210425_18.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '21.04.25_TC (kgMS/ha/d)': '21.04.25_TC (kgMS/ha/d)', '21.04.25_Disponible (kgMS/ha)': '21.04.25_Disponible (kgMS/ha)', });
lyr_280425_19.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '28.04.25_TC (kgMS/ha/d)': '28.04.25_TC (kgMS/ha/d)', '28.04.25_Disponible (kgMS/ha)': '28.04.25_Disponible (kgMS/ha)', });
lyr_010525_20.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '01.05.25_TC (kgMS/ha/d)': '01.05.25_TC (kgMS/ha/d)', '01.05.25_Disponible (kgMS/ha)': '01.05.25_Disponible (kgMS/ha)', });
lyr_310525_21.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '31.05.25_TC (kgMS/ha/d)': '31.05.25_TC (kgMS/ha/d)', '31.05.25_Disponible (kgMS/ha)': '31.05.25_Disponible (kgMS/ha)', });
lyr_070625_22.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '05.06.25_TC (kgMS/ha/d)': '05.06.25_TC (kgMS/ha/d)', '05.06.25_Disponible (kgMS/ha)': '05.06.25_Disponible (kgMS/ha)', '07.06.25_TC (kgMS/ha/d)': '07.06.25_TC (kgMS/ha/d)', '07.06.25_Disponible (kgMS/ha)': '07.06.25_Disponible (kgMS/ha)', });
lyr_270625_23.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '25.06.25_TC (kgMS/ha/d)': '25.06.25_TC (kgMS/ha/d)', '25.06.25_Disponible (kgMS/ha)': '25.06.25_Disponible (kgMS/ha)', '27.06.25_TC (kgMS/ha/d)': '27.06.25_TC (kgMS/ha/d)', '27.06.25_Disponible (kgMS/ha)': '27.06.25_Disponible (kgMS/ha)', });
lyr_300625_24.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '30.06.25_TC (kgMS/ha/d)': '30.06.25_TC (kgMS/ha/d)', '30.06.25_Disponible (kgMS/ha)': '30.06.25_Disponible (kgMS/ha)', });
lyr_250225_14.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '25.02.25_TC (kgMS/ha/d)': 'TextEdit', '25.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070325_15.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '07.03.25_TC (kgMS/ha/d)': 'TextEdit', '07.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_010425_16.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '01.04.25_TC (kgMS/ha/d)': 'TextEdit', '01.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_160425_17.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '16.04.25_TC (kgMS/ha/d)': 'TextEdit', '16.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_210425_18.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '21.04.25_TC (kgMS/ha/d)': 'TextEdit', '21.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_280425_19.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '28.04.25_TC (kgMS/ha/d)': 'TextEdit', '28.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_010525_20.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '01.05.25_TC (kgMS/ha/d)': 'TextEdit', '01.05.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_310525_21.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '31.05.25_TC (kgMS/ha/d)': 'TextEdit', '31.05.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070625_22.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '05.06.25_TC (kgMS/ha/d)': 'TextEdit', '05.06.25_Disponible (kgMS/ha)': 'TextEdit', '07.06.25_TC (kgMS/ha/d)': 'TextEdit', '07.06.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_270625_23.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '25.06.25_TC (kgMS/ha/d)': 'TextEdit', '25.06.25_Disponible (kgMS/ha)': 'TextEdit', '27.06.25_TC (kgMS/ha/d)': 'TextEdit', '27.06.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_300625_24.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '30.06.25_TC (kgMS/ha/d)': 'TextEdit', '30.06.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_250225_14.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '25.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '25.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_070325_15.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '07.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '07.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_010425_16.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '01.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_160425_17.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '16.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '16.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_210425_18.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '21.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_280425_19.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '28.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '28.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_010525_20.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '01.05.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.05.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_310525_21.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '31.05.25_TC (kgMS/ha/d)': 'inline label - always visible', '31.05.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_070625_22.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '05.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.06.25_Disponible (kgMS/ha)': 'inline label - always visible', '07.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '07.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_270625_23.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '25.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '25.06.25_Disponible (kgMS/ha)': 'inline label - always visible', '27.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '27.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_300625_24.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '30.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '30.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_300625_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});