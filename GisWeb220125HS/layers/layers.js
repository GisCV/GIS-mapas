var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi2201HS_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01 HS',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2201HS_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1701hs_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1701hs_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1401hs_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1401hs_3.png",
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
var lyr_ndvi0901hs_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0901hs_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0701hs_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 07.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0701hs_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0401hs_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0401hs_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi0201hs_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.01 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0201hs_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi3012hs_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3012hs_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2312hs_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312hs_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi2012hs_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2012hs_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1812hs_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812hs_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi1012hs_13 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12 hs',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1012hs_13.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var lyr_ndvi51224_14 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi51224_14.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_220125HS_15 = new ol.format.GeoJSON();
var features_220125HS_15 = format_220125HS_15.readFeatures(json_220125HS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220125HS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220125HS_15.addFeatures(features_220125HS_15);
var lyr_220125HS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220125HS_15, 
                style: style_220125HS_15,
                popuplayertitle: '22.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/220125HS_15.png" /> 22.01.25 HS'
            });
var format_170125HS_16 = new ol.format.GeoJSON();
var features_170125HS_16 = format_170125HS_16.readFeatures(json_170125HS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_170125HS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_170125HS_16.addFeatures(features_170125HS_16);
var lyr_170125HS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_170125HS_16, 
                style: style_170125HS_16,
                popuplayertitle: '17.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/170125HS_16.png" /> 17.01.25 HS'
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
var format_110125HS_18 = new ol.format.GeoJSON();
var features_110125HS_18 = format_110125HS_18.readFeatures(json_110125HS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_110125HS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110125HS_18.addFeatures(features_110125HS_18);
var lyr_110125HS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_110125HS_18, 
                style: style_110125HS_18,
                popuplayertitle: '11.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/110125HS_18.png" /> 11.01.25 HS'
            });
var format_090125HS_19 = new ol.format.GeoJSON();
var features_090125HS_19 = format_090125HS_19.readFeatures(json_090125HS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_090125HS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_090125HS_19.addFeatures(features_090125HS_19);
var lyr_090125HS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_090125HS_19, 
                style: style_090125HS_19,
                popuplayertitle: '09.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/090125HS_19.png" /> 09.01.25 HS'
            });
var format_070125HS_20 = new ol.format.GeoJSON();
var features_070125HS_20 = format_070125HS_20.readFeatures(json_070125HS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_070125HS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070125HS_20.addFeatures(features_070125HS_20);
var lyr_070125HS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070125HS_20, 
                style: style_070125HS_20,
                popuplayertitle: '07.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/070125HS_20.png" /> 07.01.25 HS'
            });
var format_040125HS_21 = new ol.format.GeoJSON();
var features_040125HS_21 = format_040125HS_21.readFeatures(json_040125HS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040125HS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040125HS_21.addFeatures(features_040125HS_21);
var lyr_040125HS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040125HS_21, 
                style: style_040125HS_21,
                popuplayertitle: '04.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/040125HS_21.png" /> 04.01.25 HS'
            });
var format_020125HS_22 = new ol.format.GeoJSON();
var features_020125HS_22 = format_020125HS_22.readFeatures(json_020125HS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_020125HS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_020125HS_22.addFeatures(features_020125HS_22);
var lyr_020125HS_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_020125HS_22, 
                style: style_020125HS_22,
                popuplayertitle: '02.01.25 HS',
                interactive: true,
                title: '<img src="styles/legend/020125HS_22.png" /> 02.01.25 HS'
            });
var format_301224HS_23 = new ol.format.GeoJSON();
var features_301224HS_23 = format_301224HS_23.readFeatures(json_301224HS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_301224HS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_301224HS_23.addFeatures(features_301224HS_23);
var lyr_301224HS_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_301224HS_23, 
                style: style_301224HS_23,
                popuplayertitle: '30.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/301224HS_23.png" /> 30.12.24 HS'
            });
var format_231224HS_24 = new ol.format.GeoJSON();
var features_231224HS_24 = format_231224HS_24.readFeatures(json_231224HS_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_231224HS_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224HS_24.addFeatures(features_231224HS_24);
var lyr_231224HS_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224HS_24, 
                style: style_231224HS_24,
                popuplayertitle: '23.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/231224HS_24.png" /> 23.12.24 HS'
            });
var format_201224HS_25 = new ol.format.GeoJSON();
var features_201224HS_25 = format_201224HS_25.readFeatures(json_201224HS_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201224HS_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201224HS_25.addFeatures(features_201224HS_25);
var lyr_201224HS_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201224HS_25, 
                style: style_201224HS_25,
                popuplayertitle: '20.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/201224HS_25.png" /> 20.12.24 HS'
            });
var format_181224HS_26 = new ol.format.GeoJSON();
var features_181224HS_26 = format_181224HS_26.readFeatures(json_181224HS_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_181224HS_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224HS_26.addFeatures(features_181224HS_26);
var lyr_181224HS_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224HS_26, 
                style: style_181224HS_26,
                popuplayertitle: '18.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/181224HS_26.png" /> 18.12.24 HS'
            });
var format_101224HS_27 = new ol.format.GeoJSON();
var features_101224HS_27 = format_101224HS_27.readFeatures(json_101224HS_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101224HS_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101224HS_27.addFeatures(features_101224HS_27);
var lyr_101224HS_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_101224HS_27, 
                style: style_101224HS_27,
                popuplayertitle: '10.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/101224HS_27.png" /> 10.12.24 HS'
            });
var format_51224HS_28 = new ol.format.GeoJSON();
var features_51224HS_28 = format_51224HS_28.readFeatures(json_51224HS_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51224HS_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51224HS_28.addFeatures(features_51224HS_28);
var lyr_51224HS_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_51224HS_28, 
                style: style_51224HS_28,
                popuplayertitle: '5.12.24 HS',
                interactive: true,
                title: '<img src="styles/legend/51224HS_28.png" /> 5.12.24 HS'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_ndvi2201HS_1,lyr_ndvi1701hs_2,lyr_ndvi1401hs_3,lyr_ndvi1101HS_4,lyr_ndvi0901hs_5,lyr_ndvi0701hs_6,lyr_ndvi0401hs_7,lyr_ndvi0201hs_8,lyr_ndvi3012hs_9,lyr_ndvi2312hs_10,lyr_ndvi2012hs_11,lyr_ndvi1812hs_12,lyr_ndvi1012hs_13,lyr_ndvi51224_14,lyr_220125HS_15,lyr_170125HS_16,lyr_140125HS_17,lyr_110125HS_18,lyr_090125HS_19,lyr_070125HS_20,lyr_040125HS_21,lyr_020125HS_22,lyr_301224HS_23,lyr_231224HS_24,lyr_201224HS_25,lyr_181224HS_26,lyr_101224HS_27,lyr_51224HS_28,],
                                fold: "open",
                                title: 'H.S'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi2201HS_1.setVisible(true);lyr_ndvi1701hs_2.setVisible(true);lyr_ndvi1401hs_3.setVisible(true);lyr_ndvi1101HS_4.setVisible(true);lyr_ndvi0901hs_5.setVisible(true);lyr_ndvi0701hs_6.setVisible(true);lyr_ndvi0401hs_7.setVisible(true);lyr_ndvi0201hs_8.setVisible(true);lyr_ndvi3012hs_9.setVisible(true);lyr_ndvi2312hs_10.setVisible(true);lyr_ndvi2012hs_11.setVisible(true);lyr_ndvi1812hs_12.setVisible(true);lyr_ndvi1012hs_13.setVisible(true);lyr_ndvi51224_14.setVisible(true);lyr_220125HS_15.setVisible(true);lyr_170125HS_16.setVisible(true);lyr_140125HS_17.setVisible(true);lyr_110125HS_18.setVisible(true);lyr_090125HS_19.setVisible(true);lyr_070125HS_20.setVisible(true);lyr_040125HS_21.setVisible(true);lyr_020125HS_22.setVisible(true);lyr_301224HS_23.setVisible(true);lyr_231224HS_24.setVisible(true);lyr_201224HS_25.setVisible(true);lyr_181224HS_26.setVisible(true);lyr_101224HS_27.setVisible(true);lyr_51224HS_28.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_HS];
lyr_220125HS_15.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (KgMS/ha)': '22.01.25_Disponible (KgMS/ha)', });
lyr_170125HS_16.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '14.01.25_T': '14.01.25_T', '14.01.25_D': '14.01.25_D', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Disponible (kgMS/ha)': '17.01.25_Disponible (kgMS/ha)', });
lyr_140125HS_17.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_110125HS_18.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_Disponible (kgMS/ha)': '11.01.25_Disponible (kgMS/ha)', });
lyr_090125HS_19.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_070125HS_20.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '07.01.25_TC (kgMS/ha/d)': '07.01.25_TC (kgMS/ha/d)', '07.01.25_Disponible (kgMS/ha)': '07.01.25_Disponible (kgMS/ha)', });
lyr_040125HS_21.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_020125HS_22.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '02.01.25_TC (kgMS/ha/d)': '02.01.25_TC (kgMS/ha/d)', '02.01.25_Disponible (kgMS/ha)': '02.01.25_Disponible (kgMS/ha)', });
lyr_301224HS_23.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_231224HS_24.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_201224HS_25.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'ndvi 20.12.24 hs_TC (kgMS/ha/d)', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'ndvi 20.12.24 hs_Disponible (kgMS/ha)', });
lyr_181224HS_26.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '18.12.24 hs_TC (kgMS/ha/d)': '18.12.24 hs_TC (kgMS/ha/d)', '18.12.24 hs_Disponible (kgMS/ha)': '18.12.24 hs_Disponible (kgMS/ha)', });
lyr_101224HS_27.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '10.12.24 hs_TC (kgMS/ha/d)': '10.12.24 hs_TC (kgMS/ha/d)', '10.12.24 hs_Disponible (kgMS/ha)': '10.12.24 hs_Disponible (kgMS/ha)', });
lyr_51224HS_28.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '5.12.24 hs': '5.12.24 hs', '5.12.24 _1': '5.12.24 _1', });
lyr_220125HS_15.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (KgMS/ha)': 'TextEdit', });
lyr_170125HS_16.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '14.01.25_T': 'TextEdit', '14.01.25_D': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_140125HS_17.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'TextEdit', '14.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_110125HS_18.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'TextEdit', '11.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_090125HS_19.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070125HS_20.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '07.01.25_TC (kgMS/ha/d)': 'TextEdit', '07.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_040125HS_21.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_020125HS_22.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '02.01.25_TC (kgMS/ha/d)': 'TextEdit', '02.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_301224HS_23.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'TextEdit', '30.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_231224HS_24.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', '23.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_201224HS_25.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_181224HS_26.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '18.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '18.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_101224HS_27.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '10.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '10.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_51224HS_28.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '5.12.24 hs': 'TextEdit', '5.12.24 _1': 'TextEdit', });
lyr_220125HS_15.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '22.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '22.01.25_Disponible (KgMS/ha)': 'header label - visible with data', });
lyr_170125HS_16.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '14.01.25_T': 'hidden field', '14.01.25_D': 'hidden field', '17.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '17.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_140125HS_17.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '14.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '14.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_110125HS_18.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '11.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '11.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_090125HS_19.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '09.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '09.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_070125HS_20.set('fieldLabels', {'id': 'header label - always visible', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '07.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '07.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_040125HS_21.set('fieldLabels', {'id': 'header label - always visible', 'Potrero': 'header label - visible with data', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '04.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '04.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_020125HS_22.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - visible with data', '02.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '02.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_301224HS_23.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '30.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_231224HS_24.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '23.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '23.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_201224HS_25.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', 'ndvi 20.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', 'ndvi 20.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_181224HS_26.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '18.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_101224HS_27.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '10.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '10.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_51224HS_28.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '5.12.24 hs': 'header label - always visible', '5.12.24 _1': 'header label - visible with data', });
lyr_51224HS_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});