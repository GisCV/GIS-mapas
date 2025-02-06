var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi2312hs_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312hs_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi3012hs_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3012hs_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0201hs_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0201hs_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0401hs_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0401hs_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0701hs_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 07.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0701hs_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0901hs_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0901hs_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1101HS_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 11.01 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1101HS_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1401hs_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1401hs_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1701hs_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1701hs_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2201HS_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2201HS_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0102HS_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0102HS_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0302HS_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0302HS_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_231224HS_13 = new ol.format.GeoJSON();
var features_231224HS_13 = format_231224HS_13.readFeatures(json_231224HS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_231224HS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224HS_13.addFeatures(features_231224HS_13);
var lyr_231224HS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224HS_13, 
                style: style_231224HS_13,
                popuplayertitle: '23.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/231224HS_13.png" /> 23.12.24 HS'
            });
var format_301224HS_14 = new ol.format.GeoJSON();
var features_301224HS_14 = format_301224HS_14.readFeatures(json_301224HS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_301224HS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_301224HS_14.addFeatures(features_301224HS_14);
var lyr_301224HS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_301224HS_14, 
                style: style_301224HS_14,
                popuplayertitle: '30.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/301224HS_14.png" /> 30.12.24 HS'
            });
var format_020125HS_15 = new ol.format.GeoJSON();
var features_020125HS_15 = format_020125HS_15.readFeatures(json_020125HS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_020125HS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_020125HS_15.addFeatures(features_020125HS_15);
var lyr_020125HS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_020125HS_15, 
                style: style_020125HS_15,
                popuplayertitle: '02.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/020125HS_15.png" /> 02.01.25 HS'
            });
var format_040125HS_16 = new ol.format.GeoJSON();
var features_040125HS_16 = format_040125HS_16.readFeatures(json_040125HS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040125HS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040125HS_16.addFeatures(features_040125HS_16);
var lyr_040125HS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040125HS_16, 
                style: style_040125HS_16,
                popuplayertitle: '04.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/040125HS_16.png" /> 04.01.25 HS'
            });
var format_070125HS_17 = new ol.format.GeoJSON();
var features_070125HS_17 = format_070125HS_17.readFeatures(json_070125HS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_070125HS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070125HS_17.addFeatures(features_070125HS_17);
var lyr_070125HS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070125HS_17, 
                style: style_070125HS_17,
                popuplayertitle: '07.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/070125HS_17.png" /> 07.01.25 HS'
            });
var format_090125HS_18 = new ol.format.GeoJSON();
var features_090125HS_18 = format_090125HS_18.readFeatures(json_090125HS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_090125HS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_090125HS_18.addFeatures(features_090125HS_18);
var lyr_090125HS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_090125HS_18, 
                style: style_090125HS_18,
                popuplayertitle: '09.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/090125HS_18.png" /> 09.01.25 HS'
            });
var format_110125HS_19 = new ol.format.GeoJSON();
var features_110125HS_19 = format_110125HS_19.readFeatures(json_110125HS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_110125HS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110125HS_19.addFeatures(features_110125HS_19);
var lyr_110125HS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_110125HS_19, 
                style: style_110125HS_19,
                popuplayertitle: '11.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/110125HS_19.png" /> 11.01.25 HS'
            });
var format_140125HS_20 = new ol.format.GeoJSON();
var features_140125HS_20 = format_140125HS_20.readFeatures(json_140125HS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_140125HS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_140125HS_20.addFeatures(features_140125HS_20);
var lyr_140125HS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_140125HS_20, 
                style: style_140125HS_20,
                popuplayertitle: '14.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/140125HS_20.png" /> 14.01.25 HS'
            });
var format_170125HS_21 = new ol.format.GeoJSON();
var features_170125HS_21 = format_170125HS_21.readFeatures(json_170125HS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_170125HS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_170125HS_21.addFeatures(features_170125HS_21);
var lyr_170125HS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_170125HS_21, 
                style: style_170125HS_21,
                popuplayertitle: '17.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/170125HS_21.png" /> 17.01.25 HS'
            });
var format_220125HS_22 = new ol.format.GeoJSON();
var features_220125HS_22 = format_220125HS_22.readFeatures(json_220125HS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220125HS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220125HS_22.addFeatures(features_220125HS_22);
var lyr_220125HS_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220125HS_22, 
                style: style_220125HS_22,
                popuplayertitle: '22.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/220125HS_22.png" /> 22.01.25 HS'
            });
var format_010225HS_23 = new ol.format.GeoJSON();
var features_010225HS_23 = format_010225HS_23.readFeatures(json_010225HS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010225HS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010225HS_23.addFeatures(features_010225HS_23);
var lyr_010225HS_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010225HS_23, 
                style: style_010225HS_23,
                popuplayertitle: '01.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/010225HS_23.png" /> 01.02.25 HS'
            });
var format_030225HS_24 = new ol.format.GeoJSON();
var features_030225HS_24 = format_030225HS_24.readFeatures(json_030225HS_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030225HS_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030225HS_24.addFeatures(features_030225HS_24);
var lyr_030225HS_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030225HS_24, 
                style: style_030225HS_24,
                popuplayertitle: '03.02.25 HS',
                interactive: true,
                title: '<img src="styles/legend/030225HS_24.png" /> 03.02.25 HS'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_ndvi2312hs_1,lyr_ndvi3012hs_2,lyr_ndvi0201hs_3,lyr_ndvi0401hs_4,lyr_ndvi0701hs_5,lyr_ndvi0901hs_6,lyr_ndvi1101HS_7,lyr_ndvi1401hs_8,lyr_ndvi1701hs_9,lyr_ndvi2201HS_10,lyr_ndvi0102HS_11,lyr_ndvi0302HS_12,lyr_231224HS_13,lyr_301224HS_14,lyr_020125HS_15,lyr_040125HS_16,lyr_070125HS_17,lyr_090125HS_18,lyr_110125HS_19,lyr_140125HS_20,lyr_170125HS_21,lyr_220125HS_22,lyr_010225HS_23,lyr_030225HS_24,],
                                fold: "open",
                                title: 'H.S'});
var group_MW = new ol.layer.Group({
                                layers: [],
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

lyr_googlesatelite_0.setVisible(true);lyr_ndvi2312hs_1.setVisible(true);lyr_ndvi3012hs_2.setVisible(true);lyr_ndvi0201hs_3.setVisible(true);lyr_ndvi0401hs_4.setVisible(true);lyr_ndvi0701hs_5.setVisible(true);lyr_ndvi0901hs_6.setVisible(true);lyr_ndvi1101HS_7.setVisible(true);lyr_ndvi1401hs_8.setVisible(true);lyr_ndvi1701hs_9.setVisible(true);lyr_ndvi2201HS_10.setVisible(true);lyr_ndvi0102HS_11.setVisible(true);lyr_ndvi0302HS_12.setVisible(true);lyr_231224HS_13.setVisible(true);lyr_301224HS_14.setVisible(true);lyr_020125HS_15.setVisible(true);lyr_040125HS_16.setVisible(true);lyr_070125HS_17.setVisible(true);lyr_090125HS_18.setVisible(true);lyr_110125HS_19.setVisible(true);lyr_140125HS_20.setVisible(true);lyr_170125HS_21.setVisible(true);lyr_220125HS_22.setVisible(true);lyr_010225HS_23.setVisible(true);lyr_030225HS_24.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_HS];
lyr_231224HS_13.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_301224HS_14.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_020125HS_15.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '02.01.25_TC (kgMS/ha/d)': '02.01.25_TC (kgMS/ha/d)', '02.01.25_Disponible (kgMS/ha)': '02.01.25_Disponible (kgMS/ha)', });
lyr_040125HS_16.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_070125HS_17.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '07.01.25_TC (kgMS/ha/d)': '07.01.25_TC (kgMS/ha/d)', '07.01.25_Disponible (kgMS/ha)': '07.01.25_Disponible (kgMS/ha)', });
lyr_090125HS_18.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_110125HS_19.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_Disponible (kgMS/ha)': '11.01.25_Disponible (kgMS/ha)', });
lyr_140125HS_20.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_170125HS_21.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '14.01.25_T': '14.01.25_T', '14.01.25_D': '14.01.25_D', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Disponible (kgMS/ha)': '17.01.25_Disponible (kgMS/ha)', });
lyr_220125HS_22.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (KgMS/ha)': '22.01.25_Disponible (KgMS/ha)', });
lyr_010225HS_23.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (KgMS/ha)': '01.02.25_Disponible (KgMS/ha)', });
lyr_030225HS_24.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (KgMS/ha)': '03.02.25_Disponible (KgMS/ha)', });
lyr_231224HS_13.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', '23.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_301224HS_14.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'TextEdit', '30.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_020125HS_15.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '02.01.25_TC (kgMS/ha/d)': 'TextEdit', '02.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_040125HS_16.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070125HS_17.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '07.01.25_TC (kgMS/ha/d)': 'TextEdit', '07.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_090125HS_18.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_110125HS_19.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'TextEdit', '11.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_140125HS_20.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'TextEdit', '14.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_170125HS_21.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '14.01.25_T': 'TextEdit', '14.01.25_D': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_220125HS_22.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_010225HS_23.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'TextEdit', '01.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_030225HS_24.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.02.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_231224HS_13.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '23.12.24_TC (kgMS/ha/d)': 'inline label - visible with data', '23.12.24_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_301224HS_14.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '30.12.24_TC (kgMS/ha/d)': 'inline label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_020125HS_15.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '02.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '02.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_040125HS_16.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '04.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '04.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_070125HS_17.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '07.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '07.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_090125HS_18.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '09.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '09.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_110125HS_19.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '11.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '11.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_140125HS_20.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '14.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '14.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_170125HS_21.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '14.01.25_T': 'hidden field', '14.01.25_D': 'hidden field', '17.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '17.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_220125HS_22.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '22.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '22.01.25_Disponible (KgMS/ha)': 'inline label - visible with data', });
lyr_010225HS_23.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_030225HS_24.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Especie': 'inline label - visible with data', 'Area': 'inline label - visible with data', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (KgMS/ha)': 'inline label - always visible', });
lyr_030225HS_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});