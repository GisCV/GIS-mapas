var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi0401hs_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0401hs_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0701hs_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 07.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0701hs_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0901hs_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0901hs_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1101HS_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 11.01 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1101HS_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1401hs_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1401hs_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1701hs_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1701hs_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2201HS_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2201HS_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0102HS_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0102HS_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0302HS_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0302HS_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0802HS_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 08.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0802HS_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1802HS_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1802HS_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2102HS_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2102HS_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_040125HS_13 = new ol.format.GeoJSON();
var features_040125HS_13 = format_040125HS_13.readFeatures(json_040125HS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040125HS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040125HS_13.addFeatures(features_040125HS_13);
var lyr_040125HS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040125HS_13, 
                style: style_040125HS_13,
                popuplayertitle: '04.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/040125HS_13.png" /> 04.01.25 HS'
            });
var format_070125HS_14 = new ol.format.GeoJSON();
var features_070125HS_14 = format_070125HS_14.readFeatures(json_070125HS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_070125HS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070125HS_14.addFeatures(features_070125HS_14);
var lyr_070125HS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070125HS_14, 
                style: style_070125HS_14,
                popuplayertitle: '07.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/070125HS_14.png" /> 07.01.25 HS'
            });
var format_090125HS_15 = new ol.format.GeoJSON();
var features_090125HS_15 = format_090125HS_15.readFeatures(json_090125HS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_090125HS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_090125HS_15.addFeatures(features_090125HS_15);
var lyr_090125HS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_090125HS_15, 
                style: style_090125HS_15,
                popuplayertitle: '09.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/090125HS_15.png" /> 09.01.25 HS'
            });
var format_110125HS_16 = new ol.format.GeoJSON();
var features_110125HS_16 = format_110125HS_16.readFeatures(json_110125HS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_110125HS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110125HS_16.addFeatures(features_110125HS_16);
var lyr_110125HS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_110125HS_16, 
                style: style_110125HS_16,
                popuplayertitle: '11.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/110125HS_16.png" /> 11.01.25 HS'
            });
var format_140125HS_17 = new ol.format.GeoJSON();
var features_140125HS_17 = format_140125HS_17.readFeatures(json_140125HS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_140125HS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_140125HS_17.addFeatures(features_140125HS_17);
var lyr_140125HS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_140125HS_17, 
                style: style_140125HS_17,
                popuplayertitle: '14.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/140125HS_17.png" /> 14.01.25 HS'
            });
var format_170125HS_18 = new ol.format.GeoJSON();
var features_170125HS_18 = format_170125HS_18.readFeatures(json_170125HS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_170125HS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_170125HS_18.addFeatures(features_170125HS_18);
var lyr_170125HS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_170125HS_18, 
                style: style_170125HS_18,
                popuplayertitle: '17.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/170125HS_18.png" /> 17.01.25 HS'
            });
var format_220125HS_19 = new ol.format.GeoJSON();
var features_220125HS_19 = format_220125HS_19.readFeatures(json_220125HS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220125HS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220125HS_19.addFeatures(features_220125HS_19);
var lyr_220125HS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220125HS_19, 
                style: style_220125HS_19,
                popuplayertitle: '22.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/220125HS_19.png" /> 22.01.25 HS'
            });
var format_010225HS_20 = new ol.format.GeoJSON();
var features_010225HS_20 = format_010225HS_20.readFeatures(json_010225HS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010225HS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010225HS_20.addFeatures(features_010225HS_20);
var lyr_010225HS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010225HS_20, 
                style: style_010225HS_20,
                popuplayertitle: '01.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/010225HS_20.png" /> 01.02.25 HS'
            });
var format_030225HS_21 = new ol.format.GeoJSON();
var features_030225HS_21 = format_030225HS_21.readFeatures(json_030225HS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030225HS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030225HS_21.addFeatures(features_030225HS_21);
var lyr_030225HS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030225HS_21, 
                style: style_030225HS_21,
                popuplayertitle: '03.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/030225HS_21.png" /> 03.02.25 HS'
            });
var format_080225HS_22 = new ol.format.GeoJSON();
var features_080225HS_22 = format_080225HS_22.readFeatures(json_080225HS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_080225HS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_080225HS_22.addFeatures(features_080225HS_22);
var lyr_080225HS_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_080225HS_22, 
                style: style_080225HS_22,
                popuplayertitle: '08.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/080225HS_22.png" /> 08.02.25 HS'
            });
var format_180225HS_23 = new ol.format.GeoJSON();
var features_180225HS_23 = format_180225HS_23.readFeatures(json_180225HS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180225HS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180225HS_23.addFeatures(features_180225HS_23);
var lyr_180225HS_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180225HS_23, 
                style: style_180225HS_23,
                popuplayertitle: '18.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/180225HS_23.png" /> 18.02.25 HS'
            });
var format_210225HS_24 = new ol.format.GeoJSON();
var features_210225HS_24 = format_210225HS_24.readFeatures(json_210225HS_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210225HS_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210225HS_24.addFeatures(features_210225HS_24);
var lyr_210225HS_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_210225HS_24, 
                style: style_210225HS_24,
                popuplayertitle: '21.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/210225HS_24.png" /> 21.02.25 HS'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_ndvi0401hs_1,lyr_ndvi0701hs_2,lyr_ndvi0901hs_3,lyr_ndvi1101HS_4,lyr_ndvi1401hs_5,lyr_ndvi1701hs_6,lyr_ndvi2201HS_7,lyr_ndvi0102HS_8,lyr_ndvi0302HS_9,lyr_ndvi0802HS_10,lyr_ndvi1802HS_11,lyr_ndvi2102HS_12,lyr_040125HS_13,lyr_070125HS_14,lyr_090125HS_15,lyr_110125HS_16,lyr_140125HS_17,lyr_170125HS_18,lyr_220125HS_19,lyr_010225HS_20,lyr_030225HS_21,lyr_080225HS_22,lyr_180225HS_23,lyr_210225HS_24,],
                                fold: "open",
                                title: 'H.S'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi0401hs_1.setVisible(true);lyr_ndvi0701hs_2.setVisible(true);lyr_ndvi0901hs_3.setVisible(true);lyr_ndvi1101HS_4.setVisible(true);lyr_ndvi1401hs_5.setVisible(true);lyr_ndvi1701hs_6.setVisible(true);lyr_ndvi2201HS_7.setVisible(true);lyr_ndvi0102HS_8.setVisible(true);lyr_ndvi0302HS_9.setVisible(true);lyr_ndvi0802HS_10.setVisible(true);lyr_ndvi1802HS_11.setVisible(true);lyr_ndvi2102HS_12.setVisible(true);lyr_040125HS_13.setVisible(true);lyr_070125HS_14.setVisible(true);lyr_090125HS_15.setVisible(true);lyr_110125HS_16.setVisible(true);lyr_140125HS_17.setVisible(true);lyr_170125HS_18.setVisible(true);lyr_220125HS_19.setVisible(true);lyr_010225HS_20.setVisible(true);lyr_030225HS_21.setVisible(true);lyr_080225HS_22.setVisible(true);lyr_180225HS_23.setVisible(true);lyr_210225HS_24.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_HS];
lyr_040125HS_13.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_070125HS_14.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '07.01.25_TC (kgMS/ha/d)': '07.01.25_TC (kgMS/ha/d)', '07.01.25_Disponible (kgMS/ha)': '07.01.25_Disponible (kgMS/ha)', });
lyr_090125HS_15.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_110125HS_16.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_Disponible (kgMS/ha)': '11.01.25_Disponible (kgMS/ha)', });
lyr_140125HS_17.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_170125HS_18.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '14.01.25_T': '14.01.25_T', '14.01.25_D': '14.01.25_D', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Disponible (kgMS/ha)': '17.01.25_Disponible (kgMS/ha)', });
lyr_220125HS_19.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (KgMS/ha)': '22.01.25_Disponible (KgMS/ha)', });
lyr_010225HS_20.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (KgMS/ha)': '01.02.25_Disponible (KgMS/ha)', });
lyr_030225HS_21.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (KgMS/ha)': '03.02.25_Disponible (KgMS/ha)', });
lyr_080225HS_22.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '08.02.25_TC (kgMS/ha/d)': '08.02.25_TC (kgMS/ha/d)', '08.02.25_Disponible (KgMS/ha)': '08.02.25_Disponible (KgMS/ha)', });
lyr_180225HS_23.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (KgMS/ha)': '18.02.25_Disponible (KgMS/ha)', });
lyr_210225HS_24.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (KgMS/ha)': '21.02.25_Disponible (KgMS/ha)', });
lyr_040125HS_13.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070125HS_14.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '07.01.25_TC (kgMS/ha/d)': 'TextEdit', '07.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_090125HS_15.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_110125HS_16.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'TextEdit', '11.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_140125HS_17.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'TextEdit', '14.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_170125HS_18.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '14.01.25_T': 'TextEdit', '14.01.25_D': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_220125HS_19.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_010225HS_20.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'TextEdit', '01.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_030225HS_21.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_080225HS_22.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '08.02.25_TC (kgMS/ha/d)': 'TextEdit', '08.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_180225HS_23.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_210225HS_24.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_040125HS_13.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '04.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '04.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_070125HS_14.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '07.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '07.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_090125HS_15.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '09.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '09.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_110125HS_16.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '11.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '11.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_140125HS_17.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '14.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '14.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_170125HS_18.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '14.01.25_T': 'hidden field', '14.01.25_D': 'hidden field', '17.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '17.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_220125HS_19.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '22.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '22.01.25_Disponible (KgMS/ha)': 'inline label - visible with data', });
lyr_010225HS_20.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_030225HS_21.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_080225HS_22.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '08.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_180225HS_23.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_210225HS_24.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_210225HS_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});