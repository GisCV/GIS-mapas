var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi51224_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi51224_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi101224_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi101224_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi301224_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi301224_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi040125_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi040125_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi090125_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi090125_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi110125_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 11.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi110125_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi140125_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi140125_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi170125_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi170125_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi220125_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi220125_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi010225_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi010225_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var format_TC51224_11 = new ol.format.GeoJSON();
var features_TC51224_11 = format_TC51224_11.readFeatures(json_TC51224_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC51224_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC51224_11.addFeatures(features_TC51224_11);
var lyr_TC51224_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC51224_11, 
                style: style_TC51224_11,
                popuplayertitle: 'TC 5.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC51224_11.png" /> TC 5.12.24'
            });
var format_TC101224_12 = new ol.format.GeoJSON();
var features_TC101224_12 = format_TC101224_12.readFeatures(json_TC101224_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC101224_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC101224_12.addFeatures(features_TC101224_12);
var lyr_TC101224_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC101224_12, 
                style: style_TC101224_12,
                popuplayertitle: 'TC 10.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC101224_12.png" /> TC 10.12.24'
            });
var format_TC3012224_13 = new ol.format.GeoJSON();
var features_TC3012224_13 = format_TC3012224_13.readFeatures(json_TC3012224_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC3012224_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC3012224_13.addFeatures(features_TC3012224_13);
var lyr_TC3012224_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC3012224_13, 
                style: style_TC3012224_13,
                popuplayertitle: 'TC 30.12.224',
                interactive: true,
                title: '<img src="styles/legend/TC3012224_13.png" /> TC 30.12.224'
            });
var format_TC040125_14 = new ol.format.GeoJSON();
var features_TC040125_14 = format_TC040125_14.readFeatures(json_TC040125_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC040125_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC040125_14.addFeatures(features_TC040125_14);
var lyr_TC040125_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC040125_14, 
                style: style_TC040125_14,
                popuplayertitle: 'TC 04.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC040125_14.png" /> TC 04.01.25'
            });
var format_TC090125_15 = new ol.format.GeoJSON();
var features_TC090125_15 = format_TC090125_15.readFeatures(json_TC090125_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC090125_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC090125_15.addFeatures(features_TC090125_15);
var lyr_TC090125_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC090125_15, 
                style: style_TC090125_15,
                popuplayertitle: 'TC 09.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC090125_15.png" /> TC 09.01.25'
            });
var format_TC110125_16 = new ol.format.GeoJSON();
var features_TC110125_16 = format_TC110125_16.readFeatures(json_TC110125_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC110125_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC110125_16.addFeatures(features_TC110125_16);
var lyr_TC110125_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC110125_16, 
                style: style_TC110125_16,
                popuplayertitle: 'TC 11.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC110125_16.png" /> TC 11.01.25'
            });
var format_TC140125_17 = new ol.format.GeoJSON();
var features_TC140125_17 = format_TC140125_17.readFeatures(json_TC140125_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC140125_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC140125_17.addFeatures(features_TC140125_17);
var lyr_TC140125_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC140125_17, 
                style: style_TC140125_17,
                popuplayertitle: 'TC 14.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC140125_17.png" /> TC 14.01.25'
            });
var format_TC170125_18 = new ol.format.GeoJSON();
var features_TC170125_18 = format_TC170125_18.readFeatures(json_TC170125_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC170125_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC170125_18.addFeatures(features_TC170125_18);
var lyr_TC170125_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC170125_18, 
                style: style_TC170125_18,
                popuplayertitle: 'TC 17.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC170125_18.png" /> TC 17.01.25'
            });
var format_TC220125_19 = new ol.format.GeoJSON();
var features_TC220125_19 = format_TC220125_19.readFeatures(json_TC220125_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC220125_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC220125_19.addFeatures(features_TC220125_19);
var lyr_TC220125_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC220125_19, 
                style: style_TC220125_19,
                popuplayertitle: 'TC 22.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC220125_19.png" /> TC 22.01.25'
            });
var format_TC010225_20 = new ol.format.GeoJSON();
var features_TC010225_20 = format_TC010225_20.readFeatures(json_TC010225_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC010225_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC010225_20.addFeatures(features_TC010225_20);
var lyr_TC010225_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC010225_20, 
                style: style_TC010225_20,
                popuplayertitle: 'TC 01.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC010225_20.png" /> TC 01.02.25'
            });
var format_ResumenTCpromediokgMShad_21 = new ol.format.GeoJSON();
var features_ResumenTCpromediokgMShad_21 = format_ResumenTCpromediokgMShad_21.readFeatures(json_ResumenTCpromediokgMShad_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResumenTCpromediokgMShad_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumenTCpromediokgMShad_21.addFeatures(features_ResumenTCpromediokgMShad_21);
var lyr_ResumenTCpromediokgMShad_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResumenTCpromediokgMShad_21, 
                style: style_ResumenTCpromediokgMShad_21,
                popuplayertitle: 'Resumen TC promedio (kgMS/ha/d)',
                interactive: true,
                title: '<img src="styles/legend/ResumenTCpromediokgMShad_21.png" /> Resumen TC promedio (kgMS/ha/d)'
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

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi51224_1.setVisible(true);lyr_ndvi101224_2.setVisible(true);lyr_ndvi301224_3.setVisible(true);lyr_ndvi040125_4.setVisible(true);lyr_ndvi090125_5.setVisible(true);lyr_ndvi110125_6.setVisible(true);lyr_ndvi140125_7.setVisible(true);lyr_ndvi170125_8.setVisible(true);lyr_ndvi220125_9.setVisible(true);lyr_ndvi010225_10.setVisible(true);lyr_TC51224_11.setVisible(true);lyr_TC101224_12.setVisible(true);lyr_TC3012224_13.setVisible(true);lyr_TC040125_14.setVisible(true);lyr_TC090125_15.setVisible(true);lyr_TC110125_16.setVisible(true);lyr_TC140125_17.setVisible(true);lyr_TC170125_18.setVisible(true);lyr_TC220125_19.setVisible(true);lyr_TC010225_20.setVisible(true);lyr_ResumenTCpromediokgMShad_21.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi51224_1,lyr_ndvi101224_2,lyr_ndvi301224_3,lyr_ndvi040125_4,lyr_ndvi090125_5,lyr_ndvi110125_6,lyr_ndvi140125_7,lyr_ndvi170125_8,lyr_ndvi220125_9,lyr_ndvi010225_10,lyr_TC51224_11,lyr_TC101224_12,lyr_TC3012224_13,lyr_TC040125_14,lyr_TC090125_15,lyr_TC110125_16,lyr_TC140125_17,lyr_TC170125_18,lyr_TC220125_19,lyr_TC010225_20,lyr_ResumenTCpromediokgMShad_21];
lyr_TC51224_11.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '5.12.24_TC': '5.12.24_TC', '5.12.24_Di': '5.12.24_Di', });
lyr_TC101224_12.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '10.12.24_TC (kgMS/ha/d)': '10.12.24_TC (kgMS/ha/d)', '10.12.24_Disponible (kgMS/ha)': '10.12.24_Disponible (kgMS/ha)', });
lyr_TC3012224_13.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_TC040125_14.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '30.12.24_T': '30.12.24_T', '30.12.24_D': '30.12.24_D', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_TC090125_15.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_TC110125_16.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_Disponible (kgMS/ha)': '11.01.25_Disponible (kgMS/ha)', });
lyr_TC140125_17.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_TC170125_18.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Dispnible (kgMS/ha)': '17.01.25_Dispnible (kgMS/ha)', });
lyr_TC220125_19.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (kgMS/ha)': '22.01.25_Disponible (kgMS/ha)', });
lyr_TC010225_20.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (kgMS/ha)': '01.02.25_Disponible (kgMS/ha)', });
lyr_ResumenTCpromediokgMShad_21.set('fieldAliases', {'Cría11.1': 'Cría11.1', 'Recría11.': 'Recría11.', 'Cría14.1': 'Cría14.1', 'Recría14.': 'Recría14.', 'Cría17.01': 'Cría17.01', 'Recría17.': 'Recría17.', 'Cría22.01': 'Cría22.01', 'Recría22.': 'Recría22.', 'Cría01.02': 'Cría01.02', 'Recría01.': 'Recría01.', });
lyr_TC51224_11.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '5.12.24_TC': '', '5.12.24_Di': '', });
lyr_TC101224_12.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '10.12.24_TC (kgMS/ha/d)': 'TextEdit', '10.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC3012224_13.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'TextEdit', '30.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC040125_14.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '30.12.24_T': 'TextEdit', '30.12.24_D': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC090125_15.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC110125_16.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'TextEdit', '11.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC140125_17.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'TextEdit', '14.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC170125_18.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Dispnible (kgMS/ha)': 'TextEdit', });
lyr_TC220125_19.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC010225_20.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'TextEdit', '01.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_ResumenTCpromediokgMShad_21.set('fieldImages', {'Cría11.1': '', 'Recría11.': '', 'Cría14.1': '', 'Recría14.': '', 'Cría17.01': '', 'Recría17.': '', 'Cría22.01': '', 'Recría22.': '', 'Cría01.02': '', 'Recría01.': '', });
lyr_TC51224_11.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '5.12.24_TC': 'inline label - visible with data', '5.12.24_Di': 'inline label - visible with data', });
lyr_TC101224_12.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '10.12.24_TC (kgMS/ha/d)': 'inline label - visible with data', '10.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC3012224_13.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '30.12.24_TC (kgMS/ha/d)': 'inline label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_TC040125_14.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '30.12.24_T': 'hidden field', '30.12.24_D': 'hidden field', '04.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '04.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_TC090125_15.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '09.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '09.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_TC110125_16.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'header label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '11.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '11.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_TC140125_17.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '14.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '14.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_TC170125_18.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '17.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '17.01.25_Dispnible (kgMS/ha)': 'inline label - visible with data', });
lyr_TC220125_19.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '22.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_TC010225_20.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_21.set('fieldLabels', {'Cría11.1': 'inline label - visible with data', 'Recría11.': 'inline label - visible with data', 'Cría14.1': 'inline label - visible with data', 'Recría14.': 'inline label - visible with data', 'Cría17.01': 'inline label - visible with data', 'Recría17.': 'inline label - visible with data', 'Cría22.01': 'inline label - visible with data', 'Recría22.': 'inline label - visible with data', 'Cría01.02': 'inline label - visible with data', 'Recría01.': 'inline label - visible with data', });
lyr_ResumenTCpromediokgMShad_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});