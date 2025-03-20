var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi170125_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi170125_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi220125_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi220125_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi010225_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi010225_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi030225_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi030225_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi080225_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 08.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi080225_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi180225_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi180225_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi210225_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi210225_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi050325_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi050325_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi100325_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi100325_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi150325_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 15.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi150325_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi180325_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi180325_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419459.558272, -3963757.170083, -6408239.534885, -3947110.319662]
                            })
                        });
var format_TC170125_12 = new ol.format.GeoJSON();
var features_TC170125_12 = format_TC170125_12.readFeatures(json_TC170125_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC170125_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC170125_12.addFeatures(features_TC170125_12);
var lyr_TC170125_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC170125_12, 
                style: style_TC170125_12,
                popuplayertitle: 'TC 17.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC170125_12.png" /> TC 17.01.25'
            });
var format_TC220125_13 = new ol.format.GeoJSON();
var features_TC220125_13 = format_TC220125_13.readFeatures(json_TC220125_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC220125_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC220125_13.addFeatures(features_TC220125_13);
var lyr_TC220125_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC220125_13, 
                style: style_TC220125_13,
                popuplayertitle: 'TC 22.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC220125_13.png" /> TC 22.01.25'
            });
var format_TC010225_14 = new ol.format.GeoJSON();
var features_TC010225_14 = format_TC010225_14.readFeatures(json_TC010225_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC010225_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC010225_14.addFeatures(features_TC010225_14);
var lyr_TC010225_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC010225_14, 
                style: style_TC010225_14,
                popuplayertitle: 'TC 01.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC010225_14.png" /> TC 01.02.25'
            });
var format_TC030225_15 = new ol.format.GeoJSON();
var features_TC030225_15 = format_TC030225_15.readFeatures(json_TC030225_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC030225_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC030225_15.addFeatures(features_TC030225_15);
var lyr_TC030225_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC030225_15, 
                style: style_TC030225_15,
                popuplayertitle: 'TC 03.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC030225_15.png" /> TC 03.02.25'
            });
var format_TC080225_16 = new ol.format.GeoJSON();
var features_TC080225_16 = format_TC080225_16.readFeatures(json_TC080225_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC080225_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC080225_16.addFeatures(features_TC080225_16);
var lyr_TC080225_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC080225_16, 
                style: style_TC080225_16,
                popuplayertitle: 'TC 08.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC080225_16.png" /> TC 08.02.25'
            });
var format_TC180225_17 = new ol.format.GeoJSON();
var features_TC180225_17 = format_TC180225_17.readFeatures(json_TC180225_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC180225_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC180225_17.addFeatures(features_TC180225_17);
var lyr_TC180225_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC180225_17, 
                style: style_TC180225_17,
                popuplayertitle: 'TC 18.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC180225_17.png" /> TC 18.02.25'
            });
var format_TC210225_18 = new ol.format.GeoJSON();
var features_TC210225_18 = format_TC210225_18.readFeatures(json_TC210225_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC210225_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC210225_18.addFeatures(features_TC210225_18);
var lyr_TC210225_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC210225_18, 
                style: style_TC210225_18,
                popuplayertitle: 'TC 21.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC210225_18.png" /> TC 21.02.25'
            });
var format_TC050325_19 = new ol.format.GeoJSON();
var features_TC050325_19 = format_TC050325_19.readFeatures(json_TC050325_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC050325_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC050325_19.addFeatures(features_TC050325_19);
var lyr_TC050325_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC050325_19, 
                style: style_TC050325_19,
                popuplayertitle: 'TC 05.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC050325_19.png" /> TC 05.03.25'
            });
var format_TC100325_20 = new ol.format.GeoJSON();
var features_TC100325_20 = format_TC100325_20.readFeatures(json_TC100325_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC100325_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC100325_20.addFeatures(features_TC100325_20);
var lyr_TC100325_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC100325_20, 
                style: style_TC100325_20,
                popuplayertitle: 'TC 10.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC100325_20.png" /> TC 10.03.25'
            });
var format_TC150325_21 = new ol.format.GeoJSON();
var features_TC150325_21 = format_TC150325_21.readFeatures(json_TC150325_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC150325_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC150325_21.addFeatures(features_TC150325_21);
var lyr_TC150325_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC150325_21, 
                style: style_TC150325_21,
                popuplayertitle: 'TC 15.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC150325_21.png" /> TC 15.03.25'
            });
var format_TC180325_22 = new ol.format.GeoJSON();
var features_TC180325_22 = format_TC180325_22.readFeatures(json_TC180325_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC180325_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC180325_22.addFeatures(features_TC180325_22);
var lyr_TC180325_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC180325_22, 
                style: style_TC180325_22,
                popuplayertitle: 'TC 18.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC180325_22.png" /> TC 18.03.25'
            });
var format_ResumenTCpromediokgMShad_23 = new ol.format.GeoJSON();
var features_ResumenTCpromediokgMShad_23 = format_ResumenTCpromediokgMShad_23.readFeatures(json_ResumenTCpromediokgMShad_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResumenTCpromediokgMShad_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumenTCpromediokgMShad_23.addFeatures(features_ResumenTCpromediokgMShad_23);
var lyr_ResumenTCpromediokgMShad_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResumenTCpromediokgMShad_23, 
                style: style_ResumenTCpromediokgMShad_23,
                popuplayertitle: 'Resumen TC promedio (kgMS/ha/d)',
                interactive: true,
                title: '<img src="styles/legend/ResumenTCpromediokgMShad_23.png" /> Resumen TC promedio (kgMS/ha/d)'
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

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi170125_1.setVisible(true);lyr_ndvi220125_2.setVisible(true);lyr_ndvi010225_3.setVisible(true);lyr_ndvi030225_4.setVisible(true);lyr_ndvi080225_5.setVisible(true);lyr_ndvi180225_6.setVisible(true);lyr_ndvi210225_7.setVisible(true);lyr_ndvi050325_8.setVisible(true);lyr_ndvi100325_9.setVisible(true);lyr_ndvi150325_10.setVisible(true);lyr_ndvi180325_11.setVisible(true);lyr_TC170125_12.setVisible(true);lyr_TC220125_13.setVisible(true);lyr_TC010225_14.setVisible(true);lyr_TC030225_15.setVisible(true);lyr_TC080225_16.setVisible(true);lyr_TC180225_17.setVisible(true);lyr_TC210225_18.setVisible(true);lyr_TC050325_19.setVisible(true);lyr_TC100325_20.setVisible(true);lyr_TC150325_21.setVisible(true);lyr_TC180325_22.setVisible(true);lyr_ResumenTCpromediokgMShad_23.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi170125_1,lyr_ndvi220125_2,lyr_ndvi010225_3,lyr_ndvi030225_4,lyr_ndvi080225_5,lyr_ndvi180225_6,lyr_ndvi210225_7,lyr_ndvi050325_8,lyr_ndvi100325_9,lyr_ndvi150325_10,lyr_ndvi180325_11,lyr_TC170125_12,lyr_TC220125_13,lyr_TC010225_14,lyr_TC030225_15,lyr_TC080225_16,lyr_TC180225_17,lyr_TC210225_18,lyr_TC050325_19,lyr_TC100325_20,lyr_TC150325_21,lyr_TC180325_22,lyr_ResumenTCpromediokgMShad_23];
lyr_TC170125_12.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Dispnible (kgMS/ha)': '17.01.25_Dispnible (kgMS/ha)', });
lyr_TC220125_13.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (kgMS/ha)': '22.01.25_Disponible (kgMS/ha)', });
lyr_TC010225_14.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (kgMS/ha)': '01.02.25_Disponible (kgMS/ha)', });
lyr_TC030225_15.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (kgMS/ha)': '03.02.25_Disponible (kgMS/ha)', });
lyr_TC080225_16.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '08.02.25_TC (kgMS/ha/d)': '08.02.25_TC (kgMS/ha/d)', '08.02.25_Disponible (kgMS/ha)': '08.02.25_Disponible (kgMS/ha)', });
lyr_TC180225_17.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_TC210225_18.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (kgMS/ha)': '21.02.25_Disponible (kgMS/ha)', });
lyr_TC050325_19.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_TC100325_20.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_TC150325_21.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (kgMS/ha)': '15.03.25_Disponible (kgMS/ha)', });
lyr_TC180325_22.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '18.03.25_TC (kgMS/ha/d)': '18.03.25_TC (kgMS/ha/d)', '18.03.25_Disponible (kgMS/ha)': '18.03.25_Disponible (kgMS/ha)', });
lyr_ResumenTCpromediokgMShad_23.set('fieldAliases', {'SemanaCrí': 'SemanaCrí', 'SemanaRecr': 'SemanaRecr', 'FebreroCr�': 'FebreroCr�', 'FebreroRec': 'FebreroRec', });
lyr_TC170125_12.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Dispnible (kgMS/ha)': 'TextEdit', });
lyr_TC220125_13.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC010225_14.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'TextEdit', '01.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC030225_15.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC080225_16.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '08.02.25_TC (kgMS/ha/d)': 'TextEdit', '08.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC180225_17.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC210225_18.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC050325_19.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'TextEdit', '05.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC100325_20.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'TextEdit', '10.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC150325_21.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'TextEdit', '15.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC180325_22.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '18.03.25_TC (kgMS/ha/d)': 'TextEdit', '18.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_ResumenTCpromediokgMShad_23.set('fieldImages', {'SemanaCrí': 'TextEdit', 'SemanaRecr': 'TextEdit', 'FebreroCr�': '', 'FebreroRec': '', });
lyr_TC170125_12.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '17.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.01.25_Dispnible (kgMS/ha)': 'inline label - always visible', });
lyr_TC220125_13.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC010225_14.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC030225_15.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC080225_16.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '08.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC180225_17.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC210225_18.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - always visible', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC050325_19.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC100325_20.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC150325_21.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC180325_22.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '18.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_23.set('fieldLabels', {'SemanaCrí': 'inline label - always visible', 'SemanaRecr': 'inline label - always visible', 'FebreroCr�': 'inline label - always visible', 'FebreroRec': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});