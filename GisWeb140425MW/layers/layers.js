var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi1802MW_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1802MW_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2102MW_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2102MW_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0503MW_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0503MW_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1003MW_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1003MW_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1503MW_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 15.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1503MW_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2003MW_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2003MW_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi3005MW_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.05 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3005MW_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0404MW_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.04 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0404MW_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1404MW_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.04 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1404MW_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var format_180225MW_10 = new ol.format.GeoJSON();
var features_180225MW_10 = format_180225MW_10.readFeatures(json_180225MW_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180225MW_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180225MW_10.addFeatures(features_180225MW_10);
var lyr_180225MW_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180225MW_10, 
                style: style_180225MW_10,
                popuplayertitle: '18.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/180225MW_10.png" /> 18.02.25 MW'
            });
var format_210225MW_11 = new ol.format.GeoJSON();
var features_210225MW_11 = format_210225MW_11.readFeatures(json_210225MW_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210225MW_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210225MW_11.addFeatures(features_210225MW_11);
var lyr_210225MW_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_210225MW_11, 
                style: style_210225MW_11,
                popuplayertitle: '21.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/210225MW_11.png" /> 21.02.25 MW'
            });
var format_050325MW_12 = new ol.format.GeoJSON();
var features_050325MW_12 = format_050325MW_12.readFeatures(json_050325MW_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_050325MW_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_050325MW_12.addFeatures(features_050325MW_12);
var lyr_050325MW_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_050325MW_12, 
                style: style_050325MW_12,
                popuplayertitle: '05.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/050325MW_12.png" /> 05.03.25 MW'
            });
var format_100325MW_13 = new ol.format.GeoJSON();
var features_100325MW_13 = format_100325MW_13.readFeatures(json_100325MW_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100325MW_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100325MW_13.addFeatures(features_100325MW_13);
var lyr_100325MW_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100325MW_13, 
                style: style_100325MW_13,
                popuplayertitle: '10.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/100325MW_13.png" /> 10.03.25 MW'
            });
var format_150325MW_14 = new ol.format.GeoJSON();
var features_150325MW_14 = format_150325MW_14.readFeatures(json_150325MW_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_150325MW_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_150325MW_14.addFeatures(features_150325MW_14);
var lyr_150325MW_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_150325MW_14, 
                style: style_150325MW_14,
                popuplayertitle: '15.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/150325MW_14.png" /> 15.03.25 MW'
            });
var format_180325MW_15 = new ol.format.GeoJSON();
var features_180325MW_15 = format_180325MW_15.readFeatures(json_180325MW_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180325MW_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180325MW_15.addFeatures(features_180325MW_15);
var lyr_180325MW_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180325MW_15, 
                style: style_180325MW_15,
                popuplayertitle: '18.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/180325MW_15.png" /> 18.03.25 MW'
            });
var format_200325MW_16 = new ol.format.GeoJSON();
var features_200325MW_16 = format_200325MW_16.readFeatures(json_200325MW_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200325MW_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200325MW_16.addFeatures(features_200325MW_16);
var lyr_200325MW_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200325MW_16, 
                style: style_200325MW_16,
                popuplayertitle: '20.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/200325MW_16.png" /> 20.03.25 MW'
            });
var format_300325MW_17 = new ol.format.GeoJSON();
var features_300325MW_17 = format_300325MW_17.readFeatures(json_300325MW_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_300325MW_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_300325MW_17.addFeatures(features_300325MW_17);
var lyr_300325MW_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_300325MW_17, 
                style: style_300325MW_17,
                popuplayertitle: '30.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/300325MW_17.png" /> 30.03.25 MW'
            });
var format_040425MW_18 = new ol.format.GeoJSON();
var features_040425MW_18 = format_040425MW_18.readFeatures(json_040425MW_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040425MW_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040425MW_18.addFeatures(features_040425MW_18);
var lyr_040425MW_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040425MW_18, 
                style: style_040425MW_18,
                popuplayertitle: '04.04.25 MW',
                interactive: true,
                title: '<img src="styles/legend/040425MW_18.png" /> 04.04.25 MW'
            });
var format_140425MW_19 = new ol.format.GeoJSON();
var features_140425MW_19 = format_140425MW_19.readFeatures(json_140425MW_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_140425MW_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_140425MW_19.addFeatures(features_140425MW_19);
var lyr_140425MW_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_140425MW_19, 
                style: style_140425MW_19,
                popuplayertitle: '14.04.25 MW',
                interactive: true,
                title: '<img src="styles/legend/140425MW_19.png" /> 14.04.25 MW'
            });
var group_MW = new ol.layer.Group({
                                layers: [lyr_ndvi1802MW_1,lyr_ndvi2102MW_2,lyr_ndvi0503MW_3,lyr_ndvi1003MW_4,lyr_ndvi1503MW_5,lyr_ndvi2003MW_6,lyr_ndvi3005MW_7,lyr_ndvi0404MW_8,lyr_ndvi1404MW_9,lyr_180225MW_10,lyr_210225MW_11,lyr_050325MW_12,lyr_100325MW_13,lyr_150325MW_14,lyr_180325MW_15,lyr_200325MW_16,lyr_300325MW_17,lyr_040425MW_18,lyr_140425MW_19,],
                                fold: "open",
                                title: 'M.W'});
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

lyr_googlesatelite_0.setVisible(true);lyr_ndvi1802MW_1.setVisible(true);lyr_ndvi2102MW_2.setVisible(true);lyr_ndvi0503MW_3.setVisible(true);lyr_ndvi1003MW_4.setVisible(true);lyr_ndvi1503MW_5.setVisible(true);lyr_ndvi2003MW_6.setVisible(true);lyr_ndvi3005MW_7.setVisible(true);lyr_ndvi0404MW_8.setVisible(true);lyr_ndvi1404MW_9.setVisible(true);lyr_180225MW_10.setVisible(true);lyr_210225MW_11.setVisible(true);lyr_050325MW_12.setVisible(true);lyr_100325MW_13.setVisible(true);lyr_150325MW_14.setVisible(true);lyr_180325MW_15.setVisible(true);lyr_200325MW_16.setVisible(true);lyr_300325MW_17.setVisible(true);lyr_040425MW_18.setVisible(true);lyr_140425MW_19.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_MW];
lyr_180225MW_10.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_210225MW_11.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (kgMS/ha)': '21.02.25_Disponible (kgMS/ha)', });
lyr_050325MW_12.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_100325MW_13.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_150325MW_14.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (kgMS/ha)': '15.03.25_Disponible (kgMS/ha)', });
lyr_180325MW_15.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '18.03.25_TC (kgMS/ha/d)': '18.03.25_TC (kgMS/ha/d)', '18.03.25_Disponible (kgMS/ha)': '18.03.25_Disponible (kgMS/ha)', });
lyr_200325MW_16.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '20.03.25_TC (kgMS/ha/d)': '20.03.25_TC (kgMS/ha/d)', '20.03.25_Disponible (kgMS/ha)': '20.03.25_Disponible (kgMS/ha)', });
lyr_300325MW_17.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '30.03.25_TC (kgMS/ha/d)': '30.03.25_TC (kgMS/ha/d)', '30.03.25_Disponible (kgMS/ha)': '30.03.25_Disponible (kgMS/ha)', });
lyr_040425MW_18.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '04.04.25_TC (kgMS/ha/d)': '04.04.25_TC (kgMS/ha/d)', '04.04.25_Disponible (kgMS/ha)': '04.04.25_Disponible (kgMS/ha)', });
lyr_140425MW_19.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '14.04.25_TC (kgMS/ha/d)': '14.04.25_TC (kgMS/ha/d)', '14.04.25_Disponible (kgMS/ha)': '14.04.25_Disponible (kgMS/ha)', });
lyr_180225MW_10.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_210225MW_11.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_050325MW_12.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'TextEdit', '05.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_100325MW_13.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'TextEdit', '10.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_150325MW_14.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'TextEdit', '15.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_180325MW_15.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '18.03.25_TC (kgMS/ha/d)': 'TextEdit', '18.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_200325MW_16.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '20.03.25_TC (kgMS/ha/d)': 'TextEdit', '20.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_300325MW_17.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '30.03.25_TC (kgMS/ha/d)': 'TextEdit', '30.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_040425MW_18.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '04.04.25_TC (kgMS/ha/d)': 'TextEdit', '04.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_140425MW_19.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '14.04.25_TC (kgMS/ha/d)': 'TextEdit', '14.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_180225MW_10.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_210225MW_11.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_050325MW_12.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_100325MW_13.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_150325MW_14.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_180325MW_15.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '18.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_200325MW_16.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '20.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_300325MW_17.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '30.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '30.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_040425MW_18.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '04.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '04.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_140425MW_19.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '14.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_140425MW_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});