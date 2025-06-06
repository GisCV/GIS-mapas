var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi180225_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi180225_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi210225_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi210225_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi050325_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi050325_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi100325_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi100325_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi150325_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 15.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi150325_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi180325_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi180325_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419459.558272, -3963757.170083, -6408239.534885, -3947110.319662]
                            })
                        });
var lyr_ndvi200325_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi200325_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi300325_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi300325_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi140425_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi140425_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var format_TC180225_10 = new ol.format.GeoJSON();
var features_TC180225_10 = format_TC180225_10.readFeatures(json_TC180225_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC180225_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC180225_10.addFeatures(features_TC180225_10);
var lyr_TC180225_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC180225_10, 
                style: style_TC180225_10,
                popuplayertitle: 'TC 18.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC180225_10.png" /> TC 18.02.25'
            });
var format_TC210225_11 = new ol.format.GeoJSON();
var features_TC210225_11 = format_TC210225_11.readFeatures(json_TC210225_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC210225_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC210225_11.addFeatures(features_TC210225_11);
var lyr_TC210225_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC210225_11, 
                style: style_TC210225_11,
                popuplayertitle: 'TC 21.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC210225_11.png" /> TC 21.02.25'
            });
var format_TC050325_12 = new ol.format.GeoJSON();
var features_TC050325_12 = format_TC050325_12.readFeatures(json_TC050325_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC050325_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC050325_12.addFeatures(features_TC050325_12);
var lyr_TC050325_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC050325_12, 
                style: style_TC050325_12,
                popuplayertitle: 'TC 05.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC050325_12.png" /> TC 05.03.25'
            });
var format_TC100325_13 = new ol.format.GeoJSON();
var features_TC100325_13 = format_TC100325_13.readFeatures(json_TC100325_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC100325_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC100325_13.addFeatures(features_TC100325_13);
var lyr_TC100325_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC100325_13, 
                style: style_TC100325_13,
                popuplayertitle: 'TC 10.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC100325_13.png" /> TC 10.03.25'
            });
var format_TC150325_14 = new ol.format.GeoJSON();
var features_TC150325_14 = format_TC150325_14.readFeatures(json_TC150325_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC150325_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC150325_14.addFeatures(features_TC150325_14);
var lyr_TC150325_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC150325_14, 
                style: style_TC150325_14,
                popuplayertitle: 'TC 15.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC150325_14.png" /> TC 15.03.25'
            });
var format_TC180325_15 = new ol.format.GeoJSON();
var features_TC180325_15 = format_TC180325_15.readFeatures(json_TC180325_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC180325_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC180325_15.addFeatures(features_TC180325_15);
var lyr_TC180325_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC180325_15, 
                style: style_TC180325_15,
                popuplayertitle: 'TC 18.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC180325_15.png" /> TC 18.03.25'
            });
var format_TC200325_16 = new ol.format.GeoJSON();
var features_TC200325_16 = format_TC200325_16.readFeatures(json_TC200325_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC200325_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC200325_16.addFeatures(features_TC200325_16);
var lyr_TC200325_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC200325_16, 
                style: style_TC200325_16,
                popuplayertitle: 'TC 20.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC200325_16.png" /> TC 20.03.25'
            });
var format_TC300325_17 = new ol.format.GeoJSON();
var features_TC300325_17 = format_TC300325_17.readFeatures(json_TC300325_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC300325_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC300325_17.addFeatures(features_TC300325_17);
var lyr_TC300325_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC300325_17, 
                style: style_TC300325_17,
                popuplayertitle: 'TC 30.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC300325_17.png" /> TC 30.03.25'
            });
var format_TC140425_18 = new ol.format.GeoJSON();
var features_TC140425_18 = format_TC140425_18.readFeatures(json_TC140425_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC140425_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC140425_18.addFeatures(features_TC140425_18);
var lyr_TC140425_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC140425_18, 
                style: style_TC140425_18,
                popuplayertitle: 'TC 14.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC140425_18.png" /> TC 14.04.25'
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

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi180225_1.setVisible(true);lyr_ndvi210225_2.setVisible(true);lyr_ndvi050325_3.setVisible(true);lyr_ndvi100325_4.setVisible(true);lyr_ndvi150325_5.setVisible(true);lyr_ndvi180325_6.setVisible(true);lyr_ndvi200325_7.setVisible(true);lyr_ndvi300325_8.setVisible(true);lyr_ndvi140425_9.setVisible(true);lyr_TC180225_10.setVisible(true);lyr_TC210225_11.setVisible(true);lyr_TC050325_12.setVisible(true);lyr_TC100325_13.setVisible(true);lyr_TC150325_14.setVisible(true);lyr_TC180325_15.setVisible(true);lyr_TC200325_16.setVisible(true);lyr_TC300325_17.setVisible(true);lyr_TC140425_18.setVisible(true);lyr_ResumenTCpromediokgMShad_19.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi180225_1,lyr_ndvi210225_2,lyr_ndvi050325_3,lyr_ndvi100325_4,lyr_ndvi150325_5,lyr_ndvi180325_6,lyr_ndvi200325_7,lyr_ndvi300325_8,lyr_ndvi140425_9,lyr_TC180225_10,lyr_TC210225_11,lyr_TC050325_12,lyr_TC100325_13,lyr_TC150325_14,lyr_TC180325_15,lyr_TC200325_16,lyr_TC300325_17,lyr_TC140425_18,lyr_ResumenTCpromediokgMShad_19];
lyr_TC180225_10.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_TC210225_11.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (kgMS/ha)': '21.02.25_Disponible (kgMS/ha)', });
lyr_TC050325_12.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_TC100325_13.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_TC150325_14.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (kgMS/ha)': '15.03.25_Disponible (kgMS/ha)', });
lyr_TC180325_15.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '18.03.25_TC (kgMS/ha/d)': '18.03.25_TC (kgMS/ha/d)', '18.03.25_Disponible (kgMS/ha)': '18.03.25_Disponible (kgMS/ha)', });
lyr_TC200325_16.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '20.03.25_TC (kgMS/ha/d)': '20.03.25_TC (kgMS/ha/d)', '20.03.25_Disponible (kgMS/ha)': '20.03.25_Disponible (kgMS/ha)', });
lyr_TC300325_17.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '30.03.25_TC (kgMS/ha/d)': '30.03.25_TC (kgMS/ha/d)', '30.03.25_Disponible (kgMS/ha)': '30.03.25_Disponible (kgMS/ha)', });
lyr_TC140425_18.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '14.04.25_TC (kgMS/ha/d)': '14.04.25_TC (kgMS/ha/d)', '14.04.25_Disponible (kgMS/ha)': '14.04.25_Disponible (kgMS/ha)', });
lyr_ResumenTCpromediokgMShad_19.set('fieldAliases', {'SemanaCrí': 'SemanaCrí', 'SemanaRecr': 'SemanaRecr', 'MarzoCr�': 'MarzoCr�', 'MarzoRec': 'MarzoRec', });
lyr_TC180225_10.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC210225_11.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC050325_12.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'TextEdit', '05.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC100325_13.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'TextEdit', '10.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC150325_14.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'TextEdit', '15.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC180325_15.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '18.03.25_TC (kgMS/ha/d)': 'TextEdit', '18.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC200325_16.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '20.03.25_TC (kgMS/ha/d)': 'TextEdit', '20.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC300325_17.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '30.03.25_TC (kgMS/ha/d)': 'TextEdit', '30.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC140425_18.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '14.04.25_TC (kgMS/ha/d)': 'TextEdit', '14.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_ResumenTCpromediokgMShad_19.set('fieldImages', {'SemanaCrí': 'TextEdit', 'SemanaRecr': 'TextEdit', 'MarzoCr�': '', 'MarzoRec': '', });
lyr_TC180225_10.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC210225_11.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC050325_12.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC100325_13.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC150325_14.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC180325_15.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '18.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC200325_16.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '20.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC300325_17.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '30.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '30.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC140425_18.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '14.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_19.set('fieldLabels', {'SemanaCrí': 'inline label - always visible', 'SemanaRecr': 'inline label - always visible', 'MarzoCr�': 'inline label - always visible', 'MarzoRec': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});