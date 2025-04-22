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
var lyr_10225_5 = new ol.layer.Image({
                            opacity: 1,
                            title: '10.2.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/10225_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_200225_6 = new ol.layer.Image({
                            opacity: 1,
                            title: '20.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/200225_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_250225_7 = new ol.layer.Image({
                            opacity: 1,
                            title: '25.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/250225_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_070325_8 = new ol.layer.Image({
                            opacity: 1,
                            title: '07.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/070325_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_010425_9 = new ol.layer.Image({
                            opacity: 1,
                            title: '01.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/010425_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_160425_10 = new ol.layer.Image({
                            opacity: 1,
                            title: '16.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/160425_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var lyr_210425_11 = new ol.layer.Image({
                            opacity: 1,
                            title: '21.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/210425_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6031019.077917, -3967210.496013, -6024371.967255, -3962839.768763]
                            })
                        });
var format_28924_12 = new ol.format.GeoJSON();
var features_28924_12 = format_28924_12.readFeatures(json_28924_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28924_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28924_12.addFeatures(features_28924_12);
var lyr_28924_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28924_12, 
                style: style_28924_12,
                popuplayertitle: '28.9.24',
                interactive: true,
                title: '<img src="styles/legend/28924_12.png" /> 28.9.24'
            });
var format_31024_13 = new ol.format.GeoJSON();
var features_31024_13 = format_31024_13.readFeatures(json_31024_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31024_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31024_13.addFeatures(features_31024_13);
var lyr_31024_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_31024_13, 
                style: style_31024_13,
                popuplayertitle: '3.10.24',
                interactive: true,
                title: '<img src="styles/legend/31024_13.png" /> 3.10.24'
            });
var format_281024_14 = new ol.format.GeoJSON();
var features_281024_14 = format_281024_14.readFeatures(json_281024_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_281024_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_281024_14.addFeatures(features_281024_14);
var lyr_281024_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_281024_14, 
                style: style_281024_14,
                popuplayertitle: '28.10.24',
                interactive: true,
                title: '<img src="styles/legend/281024_14.png" /> 28.10.24'
            });
var format_221224_15 = new ol.format.GeoJSON();
var features_221224_15 = format_221224_15.readFeatures(json_221224_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_221224_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_221224_15.addFeatures(features_221224_15);
var lyr_221224_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_221224_15, 
                style: style_221224_15,
                popuplayertitle: '22.12.24',
                interactive: true,
                title: '<img src="styles/legend/221224_15.png" /> 22.12.24'
            });
var format_10225_16 = new ol.format.GeoJSON();
var features_10225_16 = format_10225_16.readFeatures(json_10225_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10225_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10225_16.addFeatures(features_10225_16);
var lyr_10225_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10225_16, 
                style: style_10225_16,
                popuplayertitle: '10.2.25',
                interactive: true,
                title: '<img src="styles/legend/10225_16.png" /> 10.2.25'
            });
var format_200225_17 = new ol.format.GeoJSON();
var features_200225_17 = format_200225_17.readFeatures(json_200225_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200225_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200225_17.addFeatures(features_200225_17);
var lyr_200225_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200225_17, 
                style: style_200225_17,
                popuplayertitle: '20.02.25',
                interactive: true,
                title: '<img src="styles/legend/200225_17.png" /> 20.02.25'
            });
var format_250225_18 = new ol.format.GeoJSON();
var features_250225_18 = format_250225_18.readFeatures(json_250225_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_250225_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_250225_18.addFeatures(features_250225_18);
var lyr_250225_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_250225_18, 
                style: style_250225_18,
                popuplayertitle: '25.02.25',
                interactive: true,
                title: '<img src="styles/legend/250225_18.png" /> 25.02.25'
            });
var format_070325_19 = new ol.format.GeoJSON();
var features_070325_19 = format_070325_19.readFeatures(json_070325_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_070325_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070325_19.addFeatures(features_070325_19);
var lyr_070325_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070325_19, 
                style: style_070325_19,
                popuplayertitle: '07.03.25',
                interactive: true,
                title: '<img src="styles/legend/070325_19.png" /> 07.03.25'
            });
var format_010425_20 = new ol.format.GeoJSON();
var features_010425_20 = format_010425_20.readFeatures(json_010425_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010425_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010425_20.addFeatures(features_010425_20);
var lyr_010425_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010425_20, 
                style: style_010425_20,
                popuplayertitle: '01.04.25',
                interactive: true,
                title: '<img src="styles/legend/010425_20.png" /> 01.04.25'
            });
var format_160425_21 = new ol.format.GeoJSON();
var features_160425_21 = format_160425_21.readFeatures(json_160425_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_160425_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_160425_21.addFeatures(features_160425_21);
var lyr_160425_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_160425_21, 
                style: style_160425_21,
                popuplayertitle: '16.04.25',
                interactive: true,
                title: '<img src="styles/legend/160425_21.png" /> 16.04.25'
            });
var format_210425_22 = new ol.format.GeoJSON();
var features_210425_22 = format_210425_22.readFeatures(json_210425_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210425_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210425_22.addFeatures(features_210425_22);
var lyr_210425_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_210425_22, 
                style: style_210425_22,
                popuplayertitle: '21.04.25',
                interactive: true,
                title: '<img src="styles/legend/210425_22.png" /> 21.04.25'
            });
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

lyr_GoogleHybrid_0.setVisible(true);lyr_28924_1.setVisible(true);lyr_31024_2.setVisible(true);lyr_281024_3.setVisible(true);lyr_221224_4.setVisible(true);lyr_10225_5.setVisible(true);lyr_200225_6.setVisible(true);lyr_250225_7.setVisible(true);lyr_070325_8.setVisible(true);lyr_010425_9.setVisible(true);lyr_160425_10.setVisible(true);lyr_210425_11.setVisible(true);lyr_28924_12.setVisible(true);lyr_31024_13.setVisible(true);lyr_281024_14.setVisible(true);lyr_221224_15.setVisible(true);lyr_10225_16.setVisible(true);lyr_200225_17.setVisible(true);lyr_250225_18.setVisible(true);lyr_070325_19.setVisible(true);lyr_010425_20.setVisible(true);lyr_160425_21.setVisible(true);lyr_210425_22.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_28924_1,lyr_31024_2,lyr_281024_3,lyr_221224_4,lyr_10225_5,lyr_200225_6,lyr_250225_7,lyr_070325_8,lyr_010425_9,lyr_160425_10,lyr_210425_11,lyr_28924_12,lyr_31024_13,lyr_281024_14,lyr_221224_15,lyr_10225_16,lyr_200225_17,lyr_250225_18,lyr_070325_19,lyr_010425_20,lyr_160425_21,lyr_210425_22];
lyr_28924_12.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '28.9.24_TC (kgMS/ha/d)': '28.9.24_TC (kgMS/ha/d)', '28.9.24_Disponible (kgMS/ha)': '28.9.24_Disponible (kgMS/ha)', });
lyr_31024_13.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '3.10.24_TC (kgMS/ha/d)': '3.10.24_TC (kgMS/ha/d)', '3.10.24_Disponible (kgMS/ha)': '3.10.24_Disponible (kgMS/ha)', });
lyr_281024_14.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'id': 'id', '28.10.24_TC (kgMS/ha/d)': '28.10.24_TC (kgMS/ha/d)', '28.10.24_Disponible (kgMS/ha)': '28.10.24_Disponible (kgMS/ha)', });
lyr_221224_15.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '22.12.24_TC (kgMS/ha/d)': '22.12.24_TC (kgMS/ha/d)', '22.12.24_Disponible (kgMS/ha)': '22.12.24_Disponible (kgMS/ha)', });
lyr_10225_16.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '10.2.25_TC (kgMS/ha/d)': '10.2.25_TC (kgMS/ha/d)', '10.2.25_Disponible (kgMS/ha)': '10.2.25_Disponible (kgMS/ha)', });
lyr_200225_17.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '20.02.25_TC (kgMS/ha/d)': '20.02.25_TC (kgMS/ha/d)', '20.02.25_Disponible (kgMS/ha)': '20.02.25_Disponible (kgMS/ha)', });
lyr_250225_18.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '25.02.25_TC (kgMS/ha/d)': '25.02.25_TC (kgMS/ha/d)', '25.02.25_Disponible (kgMS/ha)': '25.02.25_Disponible (kgMS/ha)', });
lyr_070325_19.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '07.03.25_TC (kgMS/ha/d)': '07.03.25_TC (kgMS/ha/d)', '07.03.25_Disponible (kgMS/ha)': '07.03.25_Disponible (kgMS/ha)', });
lyr_010425_20.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '01.04.25_TC (kgMS/ha/d)': '01.04.25_TC (kgMS/ha/d)', '01.04.25_Disponible (kgMS/ha)': '01.04.25_Disponible (kgMS/ha)', });
lyr_160425_21.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '16.04.25_TC (kgMS/ha/d)': '16.04.25_TC (kgMS/ha/d)', '16.04.25_Disponible (kgMS/ha)': '16.04.25_Disponible (kgMS/ha)', });
lyr_210425_22.set('fieldAliases', {'Recurso': 'Recurso', 'MODULO': 'MODULO', 'Siembra': 'Siembra', 'Potrero': 'Potrero', 'Id': 'Id', '21.04.25_TC (kgMS/ha/d)': '21.04.25_TC (kgMS/ha/d)', '21.04.25_Disponible (kgMS/ha)': '21.04.25_Disponible (kgMS/ha)', });
lyr_28924_12.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '28.9.24_TC (kgMS/ha/d)': 'TextEdit', '28.9.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_31024_13.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '3.10.24_TC (kgMS/ha/d)': 'TextEdit', '3.10.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_281024_14.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'id': 'TextEdit', '28.10.24_TC (kgMS/ha/d)': 'TextEdit', '28.10.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_221224_15.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '22.12.24_TC (kgMS/ha/d)': 'TextEdit', '22.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_10225_16.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '10.2.25_TC (kgMS/ha/d)': 'TextEdit', '10.2.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_200225_17.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '20.02.25_TC (kgMS/ha/d)': 'TextEdit', '20.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_250225_18.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '25.02.25_TC (kgMS/ha/d)': 'TextEdit', '25.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070325_19.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '07.03.25_TC (kgMS/ha/d)': 'TextEdit', '07.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_010425_20.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '01.04.25_TC (kgMS/ha/d)': 'TextEdit', '01.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_160425_21.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '16.04.25_TC (kgMS/ha/d)': 'TextEdit', '16.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_210425_22.set('fieldImages', {'Recurso': 'TextEdit', 'MODULO': 'TextEdit', 'Siembra': 'TextEdit', 'Potrero': 'TextEdit', 'Id': 'TextEdit', '21.04.25_TC (kgMS/ha/d)': 'TextEdit', '21.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_28924_12.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '28.9.24_TC (kgMS/ha/d)': 'inline label - always visible', '28.9.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_31024_13.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '3.10.24_TC (kgMS/ha/d)': 'inline label - always visible', '3.10.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_281024_14.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'id': 'hidden field', '28.10.24_TC (kgMS/ha/d)': 'inline label - always visible', '28.10.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_221224_15.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '22.12.24_TC (kgMS/ha/d)': 'inline label - always visible', '22.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_10225_16.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '10.2.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.2.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_200225_17.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '20.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_250225_18.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '25.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '25.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_070325_19.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '07.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '07.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_010425_20.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '01.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_160425_21.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '16.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '16.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_210425_22.set('fieldLabels', {'Recurso': 'inline label - always visible', 'MODULO': 'inline label - always visible', 'Siembra': 'hidden field', 'Potrero': 'inline label - always visible', 'Id': 'hidden field', '21.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_210425_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});