var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi040125_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi040125_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi090125_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi090125_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi110125_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 11.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi110125_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi140125_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi140125_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi170125_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi170125_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi220125_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi220125_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi010225_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi010225_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi030225_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi030225_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi080225_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 08.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi080225_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi180225_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi180225_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi210225_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi210225_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi050325_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi050325_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var format_TC040125_13 = new ol.format.GeoJSON();
var features_TC040125_13 = format_TC040125_13.readFeatures(json_TC040125_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC040125_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC040125_13.addFeatures(features_TC040125_13);
var lyr_TC040125_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC040125_13, 
                style: style_TC040125_13,
                popuplayertitle: 'TC 04.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC040125_13.png" /> TC 04.01.25'
            });
var format_TC090125_14 = new ol.format.GeoJSON();
var features_TC090125_14 = format_TC090125_14.readFeatures(json_TC090125_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC090125_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC090125_14.addFeatures(features_TC090125_14);
var lyr_TC090125_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC090125_14, 
                style: style_TC090125_14,
                popuplayertitle: 'TC 09.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC090125_14.png" /> TC 09.01.25'
            });
var format_TC110125_15 = new ol.format.GeoJSON();
var features_TC110125_15 = format_TC110125_15.readFeatures(json_TC110125_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC110125_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC110125_15.addFeatures(features_TC110125_15);
var lyr_TC110125_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC110125_15, 
                style: style_TC110125_15,
                popuplayertitle: 'TC 11.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC110125_15.png" /> TC 11.01.25'
            });
var format_TC140125_16 = new ol.format.GeoJSON();
var features_TC140125_16 = format_TC140125_16.readFeatures(json_TC140125_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC140125_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC140125_16.addFeatures(features_TC140125_16);
var lyr_TC140125_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC140125_16, 
                style: style_TC140125_16,
                popuplayertitle: 'TC 14.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC140125_16.png" /> TC 14.01.25'
            });
var format_TC170125_17 = new ol.format.GeoJSON();
var features_TC170125_17 = format_TC170125_17.readFeatures(json_TC170125_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC170125_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC170125_17.addFeatures(features_TC170125_17);
var lyr_TC170125_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC170125_17, 
                style: style_TC170125_17,
                popuplayertitle: 'TC 17.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC170125_17.png" /> TC 17.01.25'
            });
var format_TC220125_18 = new ol.format.GeoJSON();
var features_TC220125_18 = format_TC220125_18.readFeatures(json_TC220125_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC220125_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC220125_18.addFeatures(features_TC220125_18);
var lyr_TC220125_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC220125_18, 
                style: style_TC220125_18,
                popuplayertitle: 'TC 22.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC220125_18.png" /> TC 22.01.25'
            });
var format_TC010225_19 = new ol.format.GeoJSON();
var features_TC010225_19 = format_TC010225_19.readFeatures(json_TC010225_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC010225_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC010225_19.addFeatures(features_TC010225_19);
var lyr_TC010225_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC010225_19, 
                style: style_TC010225_19,
                popuplayertitle: 'TC 01.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC010225_19.png" /> TC 01.02.25'
            });
var format_TC030225_20 = new ol.format.GeoJSON();
var features_TC030225_20 = format_TC030225_20.readFeatures(json_TC030225_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC030225_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC030225_20.addFeatures(features_TC030225_20);
var lyr_TC030225_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC030225_20, 
                style: style_TC030225_20,
                popuplayertitle: 'TC 03.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC030225_20.png" /> TC 03.02.25'
            });
var format_TC080225_21 = new ol.format.GeoJSON();
var features_TC080225_21 = format_TC080225_21.readFeatures(json_TC080225_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC080225_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC080225_21.addFeatures(features_TC080225_21);
var lyr_TC080225_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC080225_21, 
                style: style_TC080225_21,
                popuplayertitle: 'TC 08.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC080225_21.png" /> TC 08.02.25'
            });
var format_TC180225_22 = new ol.format.GeoJSON();
var features_TC180225_22 = format_TC180225_22.readFeatures(json_TC180225_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC180225_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC180225_22.addFeatures(features_TC180225_22);
var lyr_TC180225_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC180225_22, 
                style: style_TC180225_22,
                popuplayertitle: 'TC 18.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC180225_22.png" /> TC 18.02.25'
            });
var format_TC210225_23 = new ol.format.GeoJSON();
var features_TC210225_23 = format_TC210225_23.readFeatures(json_TC210225_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC210225_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC210225_23.addFeatures(features_TC210225_23);
var lyr_TC210225_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC210225_23, 
                style: style_TC210225_23,
                popuplayertitle: 'TC 21.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC210225_23.png" /> TC 21.02.25'
            });
var format_TC050325_24 = new ol.format.GeoJSON();
var features_TC050325_24 = format_TC050325_24.readFeatures(json_TC050325_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC050325_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC050325_24.addFeatures(features_TC050325_24);
var lyr_TC050325_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC050325_24, 
                style: style_TC050325_24,
                popuplayertitle: 'TC 05.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC050325_24.png" /> TC 05.03.25'
            });
var format_ResumenTCpromediokgMShad_25 = new ol.format.GeoJSON();
var features_ResumenTCpromediokgMShad_25 = format_ResumenTCpromediokgMShad_25.readFeatures(json_ResumenTCpromediokgMShad_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResumenTCpromediokgMShad_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumenTCpromediokgMShad_25.addFeatures(features_ResumenTCpromediokgMShad_25);
var lyr_ResumenTCpromediokgMShad_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResumenTCpromediokgMShad_25, 
                style: style_ResumenTCpromediokgMShad_25,
                popuplayertitle: 'Resumen TC promedio (kgMS/ha/d)',
                interactive: true,
                title: '<img src="styles/legend/ResumenTCpromediokgMShad_25.png" /> Resumen TC promedio (kgMS/ha/d)'
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

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi040125_1.setVisible(true);lyr_ndvi090125_2.setVisible(true);lyr_ndvi110125_3.setVisible(true);lyr_ndvi140125_4.setVisible(true);lyr_ndvi170125_5.setVisible(true);lyr_ndvi220125_6.setVisible(true);lyr_ndvi010225_7.setVisible(true);lyr_ndvi030225_8.setVisible(true);lyr_ndvi080225_9.setVisible(true);lyr_ndvi180225_10.setVisible(true);lyr_ndvi210225_11.setVisible(true);lyr_ndvi050325_12.setVisible(true);lyr_TC040125_13.setVisible(true);lyr_TC090125_14.setVisible(true);lyr_TC110125_15.setVisible(true);lyr_TC140125_16.setVisible(true);lyr_TC170125_17.setVisible(true);lyr_TC220125_18.setVisible(true);lyr_TC010225_19.setVisible(true);lyr_TC030225_20.setVisible(true);lyr_TC080225_21.setVisible(true);lyr_TC180225_22.setVisible(true);lyr_TC210225_23.setVisible(true);lyr_TC050325_24.setVisible(true);lyr_ResumenTCpromediokgMShad_25.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi040125_1,lyr_ndvi090125_2,lyr_ndvi110125_3,lyr_ndvi140125_4,lyr_ndvi170125_5,lyr_ndvi220125_6,lyr_ndvi010225_7,lyr_ndvi030225_8,lyr_ndvi080225_9,lyr_ndvi180225_10,lyr_ndvi210225_11,lyr_ndvi050325_12,lyr_TC040125_13,lyr_TC090125_14,lyr_TC110125_15,lyr_TC140125_16,lyr_TC170125_17,lyr_TC220125_18,lyr_TC010225_19,lyr_TC030225_20,lyr_TC080225_21,lyr_TC180225_22,lyr_TC210225_23,lyr_TC050325_24,lyr_ResumenTCpromediokgMShad_25];
lyr_TC040125_13.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '30.12.24_T': '30.12.24_T', '30.12.24_D': '30.12.24_D', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_TC090125_14.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_TC110125_15.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_Disponible (kgMS/ha)': '11.01.25_Disponible (kgMS/ha)', });
lyr_TC140125_16.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_TC170125_17.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Dispnible (kgMS/ha)': '17.01.25_Dispnible (kgMS/ha)', });
lyr_TC220125_18.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (kgMS/ha)': '22.01.25_Disponible (kgMS/ha)', });
lyr_TC010225_19.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (kgMS/ha)': '01.02.25_Disponible (kgMS/ha)', });
lyr_TC030225_20.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (kgMS/ha)': '03.02.25_Disponible (kgMS/ha)', });
lyr_TC080225_21.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '08.02.25_TC (kgMS/ha/d)': '08.02.25_TC (kgMS/ha/d)', '08.02.25_Disponible (kgMS/ha)': '08.02.25_Disponible (kgMS/ha)', });
lyr_TC180225_22.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_TC210225_23.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (kgMS/ha)': '21.02.25_Disponible (kgMS/ha)', });
lyr_TC050325_24.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_ResumenTCpromediokgMShad_25.set('fieldAliases', {'SemanaCrí': 'SemanaCrí', 'SemanaRecr': 'SemanaRecr', 'FebreroCría': 'FebreroCría', 'FebreroRecr�': 'FebreroRecr�', });
lyr_TC040125_13.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '30.12.24_T': 'TextEdit', '30.12.24_D': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC090125_14.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC110125_15.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'TextEdit', '11.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC140125_16.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'TextEdit', '14.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC170125_17.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Dispnible (kgMS/ha)': 'TextEdit', });
lyr_TC220125_18.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC010225_19.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'TextEdit', '01.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC030225_20.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC080225_21.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '08.02.25_TC (kgMS/ha/d)': 'TextEdit', '08.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC180225_22.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC210225_23.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC050325_24.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'TextEdit', '05.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_ResumenTCpromediokgMShad_25.set('fieldImages', {'SemanaCrí': 'TextEdit', 'SemanaRecr': 'TextEdit', 'FebreroCría': '', 'FebreroRecr�': '', });
lyr_TC040125_13.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '30.12.24_T': 'hidden field', '30.12.24_D': 'hidden field', '04.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '04.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC090125_14.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '09.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '09.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC110125_15.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '11.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '11.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC140125_16.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '14.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC170125_17.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '17.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.01.25_Dispnible (kgMS/ha)': 'inline label - always visible', });
lyr_TC220125_18.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC010225_19.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC030225_20.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC080225_21.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '08.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC180225_22.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC210225_23.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC050325_24.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_25.set('fieldLabels', {'SemanaCrí': 'inline label - always visible', 'SemanaRecr': 'inline label - always visible', 'FebreroCría': 'inline label - always visible', 'FebreroRecr�': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});