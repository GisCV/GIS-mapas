var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi300325_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi300325_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi140425_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi140425_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi170425_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi170425_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi190425_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 19.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi190425_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi220425_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi220425_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi290425_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 29.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi290425_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi020525_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi020525_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi040525_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi040525_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi120525_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 12.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi120525_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var format_TC200325_10 = new ol.format.GeoJSON();
var features_TC200325_10 = format_TC200325_10.readFeatures(json_TC200325_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC200325_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC200325_10.addFeatures(features_TC200325_10);
var lyr_TC200325_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC200325_10, 
                style: style_TC200325_10,
                popuplayertitle: 'TC 20.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC200325_10.png" /> TC 20.03.25'
            });
var format_TC300325_11 = new ol.format.GeoJSON();
var features_TC300325_11 = format_TC300325_11.readFeatures(json_TC300325_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC300325_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC300325_11.addFeatures(features_TC300325_11);
var lyr_TC300325_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC300325_11, 
                style: style_TC300325_11,
                popuplayertitle: 'TC 30.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC300325_11.png" /> TC 30.03.25'
            });
var format_TC140425_12 = new ol.format.GeoJSON();
var features_TC140425_12 = format_TC140425_12.readFeatures(json_TC140425_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC140425_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC140425_12.addFeatures(features_TC140425_12);
var lyr_TC140425_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC140425_12, 
                style: style_TC140425_12,
                popuplayertitle: 'TC 14.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC140425_12.png" /> TC 14.04.25'
            });
var format_TC170425_13 = new ol.format.GeoJSON();
var features_TC170425_13 = format_TC170425_13.readFeatures(json_TC170425_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC170425_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC170425_13.addFeatures(features_TC170425_13);
var lyr_TC170425_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC170425_13, 
                style: style_TC170425_13,
                popuplayertitle: 'TC 17.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC170425_13.png" /> TC 17.04.25'
            });
var format_TC190425_14 = new ol.format.GeoJSON();
var features_TC190425_14 = format_TC190425_14.readFeatures(json_TC190425_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC190425_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC190425_14.addFeatures(features_TC190425_14);
var lyr_TC190425_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC190425_14, 
                style: style_TC190425_14,
                popuplayertitle: 'TC 19.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC190425_14.png" /> TC 19.04.25'
            });
var format_TC220425_15 = new ol.format.GeoJSON();
var features_TC220425_15 = format_TC220425_15.readFeatures(json_TC220425_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC220425_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC220425_15.addFeatures(features_TC220425_15);
var lyr_TC220425_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC220425_15, 
                style: style_TC220425_15,
                popuplayertitle: 'TC 22.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC220425_15.png" /> TC 22.04.25'
            });
var format_TC290425_16 = new ol.format.GeoJSON();
var features_TC290425_16 = format_TC290425_16.readFeatures(json_TC290425_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC290425_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC290425_16.addFeatures(features_TC290425_16);
var lyr_TC290425_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC290425_16, 
                style: style_TC290425_16,
                popuplayertitle: 'TC 29.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC290425_16.png" /> TC 29.04.25'
            });
var format_TC040525_17 = new ol.format.GeoJSON();
var features_TC040525_17 = format_TC040525_17.readFeatures(json_TC040525_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC040525_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC040525_17.addFeatures(features_TC040525_17);
var lyr_TC040525_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC040525_17, 
                style: style_TC040525_17,
                popuplayertitle: 'TC 04.05.25',
                interactive: true,
                title: '<img src="styles/legend/TC040525_17.png" /> TC 04.05.25'
            });
var format_TC120525_18 = new ol.format.GeoJSON();
var features_TC120525_18 = format_TC120525_18.readFeatures(json_TC120525_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC120525_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC120525_18.addFeatures(features_TC120525_18);
var lyr_TC120525_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC120525_18, 
                style: style_TC120525_18,
                popuplayertitle: 'TC 12.05.25',
                interactive: true,
                title: '<img src="styles/legend/TC120525_18.png" /> TC 12.05.25'
            });
var format_ResumenTCpromediokgMShad_19 = new ol.format.GeoJSON();
var features_ResumenTCpromediokgMShad_19 = format_ResumenTCpromediokgMShad_19.readFeatures(json_ResumenTCpromediokgMShad_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResumenTCpromediokgMShad_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumenTCpromediokgMShad_19.addFeatures(features_ResumenTCpromediokgMShad_19);
var lyr_ResumenTCpromediokgMShad_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResumenTCpromediokgMShad_19, 
                style: style_ResumenTCpromediokgMShad_19,
                popuplayertitle: 'Resumen TC promedio (kgMS/ha/d)',
                interactive: true,
                title: '<img src="styles/legend/ResumenTCpromediokgMShad_19.png" /> Resumen TC promedio (kgMS/ha/d)'
            });
var group_TC2025 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'TC 2025'});
var group_2025 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '2025'});
var group_2024 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '2024'});
var group_Octubre = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Octubre '});
var group_Nouso = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'No uso'});

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi300325_1.setVisible(true);lyr_ndvi140425_2.setVisible(true);lyr_ndvi170425_3.setVisible(true);lyr_ndvi190425_4.setVisible(true);lyr_ndvi220425_5.setVisible(true);lyr_ndvi290425_6.setVisible(true);lyr_ndvi020525_7.setVisible(true);lyr_ndvi040525_8.setVisible(true);lyr_ndvi120525_9.setVisible(true);lyr_TC200325_10.setVisible(true);lyr_TC300325_11.setVisible(true);lyr_TC140425_12.setVisible(true);lyr_TC170425_13.setVisible(true);lyr_TC190425_14.setVisible(true);lyr_TC220425_15.setVisible(true);lyr_TC290425_16.setVisible(true);lyr_TC040525_17.setVisible(true);lyr_TC120525_18.setVisible(true);lyr_ResumenTCpromediokgMShad_19.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi300325_1,lyr_ndvi140425_2,lyr_ndvi170425_3,lyr_ndvi190425_4,lyr_ndvi220425_5,lyr_ndvi290425_6,lyr_ndvi020525_7,lyr_ndvi040525_8,lyr_ndvi120525_9,lyr_TC200325_10,lyr_TC300325_11,lyr_TC140425_12,lyr_TC170425_13,lyr_TC190425_14,lyr_TC220425_15,lyr_TC290425_16,lyr_TC040525_17,lyr_TC120525_18,lyr_ResumenTCpromediokgMShad_19];
lyr_TC200325_10.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '20.03.25_TC (kgMS/ha/d)': '20.03.25_TC (kgMS/ha/d)', '20.03.25_Disponible (kgMS/ha)': '20.03.25_Disponible (kgMS/ha)', });
lyr_TC300325_11.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '30.03.25_TC (kgMS/ha/d)': '30.03.25_TC (kgMS/ha/d)', '30.03.25_Disponible (kgMS/ha)': '30.03.25_Disponible (kgMS/ha)', });
lyr_TC140425_12.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '14.04.25_TC (kgMS/ha/d)': '14.04.25_TC (kgMS/ha/d)', '14.04.25_Disponible (kgMS/ha)': '14.04.25_Disponible (kgMS/ha)', });
lyr_TC170425_13.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '17.04.25_TC (kgMS/ha/d)': '17.04.25_TC (kgMS/ha/d)', '17.04.25_Disponible (kgMS/ha)': '17.04.25_Disponible (kgMS/ha)', });
lyr_TC190425_14.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '19.04.25_TC (kgMS/ha/d)': '19.04.25_TC (kgMS/ha/d)', '19.04.25_Disponible (kgMS/ha)': '19.04.25_Disponible (kgMS/ha)', });
lyr_TC220425_15.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '22.04.25_TC (kgMS/ha/d)': '22.04.25_TC (kgMS/ha/d)', '22.04.25_Disponible (kgMS/ha)': '22.04.25_Disponible (kgMS/ha)', });
lyr_TC290425_16.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '29.04.25_TC (kgMS/ha/d)': '29.04.25_TC (kgMS/ha/d)', '29.04.25_Disponible (kgMS/ha)': '29.04.25_Disponible (kgMS/ha)', });
lyr_TC040525_17.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '02.05_TC (kgMS/ha/d)': '02.05_TC (kgMS/ha/d)', '02.05_Disponible (kgMS/ha)': '02.05_Disponible (kgMS/ha)', '04.05_TC (kgMS/ha/d)': '04.05_TC (kgMS/ha/d)', '04.05_Disponible (kgMS/ha)': '04.05_Disponible (kgMS/ha)', });
lyr_TC120525_18.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '12.05.25_TC (kgMS/ha/d)': '12.05.25_TC (kgMS/ha/d)', '12.05.25_Disponible (kgMS/ha)': '12.05.25_Disponible (kgMS/ha)', });
lyr_ResumenTCpromediokgMShad_19.set('fieldAliases', {'SemanaCrí': 'SemanaCrí', 'SemanaRecr': 'SemanaRecr', 'MarzoCr�': 'MarzoCr�', 'MarzoRec': 'MarzoRec', });
lyr_TC200325_10.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '20.03.25_TC (kgMS/ha/d)': 'TextEdit', '20.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC300325_11.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '30.03.25_TC (kgMS/ha/d)': 'TextEdit', '30.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC140425_12.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '14.04.25_TC (kgMS/ha/d)': 'TextEdit', '14.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC170425_13.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '17.04.25_TC (kgMS/ha/d)': 'TextEdit', '17.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC190425_14.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '19.04.25_TC (kgMS/ha/d)': 'TextEdit', '19.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC220425_15.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '22.04.25_TC (kgMS/ha/d)': 'TextEdit', '22.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC290425_16.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '29.04.25_TC (kgMS/ha/d)': 'TextEdit', '29.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC040525_17.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '02.05_TC (kgMS/ha/d)': 'TextEdit', '02.05_Disponible (kgMS/ha)': 'TextEdit', '04.05_TC (kgMS/ha/d)': 'TextEdit', '04.05_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC120525_18.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '12.05.25_TC (kgMS/ha/d)': 'TextEdit', '12.05.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_ResumenTCpromediokgMShad_19.set('fieldImages', {'SemanaCrí': 'TextEdit', 'SemanaRecr': 'TextEdit', 'MarzoCr�': '', 'MarzoRec': '', });
lyr_TC200325_10.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '20.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC300325_11.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '30.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '30.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC140425_12.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '14.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC170425_13.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '17.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC190425_14.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '19.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '19.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC220425_15.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '22.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC290425_16.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '29.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '29.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC040525_17.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '02.05_TC (kgMS/ha/d)': 'inline label - always visible', '02.05_Disponible (kgMS/ha)': 'inline label - always visible', '04.05_TC (kgMS/ha/d)': 'inline label - always visible', '04.05_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC120525_18.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '12.05.25_TC (kgMS/ha/d)': 'inline label - always visible', '12.05.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_19.set('fieldLabels', {'SemanaCrí': 'inline label - always visible', 'SemanaRecr': 'inline label - always visible', 'MarzoCr�': 'inline label - always visible', 'MarzoRec': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});