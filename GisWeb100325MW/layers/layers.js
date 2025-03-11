var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi0901MW_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0901MW_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1101mw_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 11.01 mw',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1101mw_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1401MW_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1401MW_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1701MW_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1701MW_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2201MW_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2201MW_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0102MW_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0102MW_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0302MW_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0302MW_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0802MW_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 08.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0802MW_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1802MW_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1802MW_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2102MW_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2102MW_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0503MW_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0503MW_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1003MW_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1003MW_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var format_090125MW_13 = new ol.format.GeoJSON();
var features_090125MW_13 = format_090125MW_13.readFeatures(json_090125MW_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_090125MW_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_090125MW_13.addFeatures(features_090125MW_13);
var lyr_090125MW_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_090125MW_13, 
                style: style_090125MW_13,
                popuplayertitle: '09.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/090125MW_13.png" /> 09.01.25 MW'
            });
var format_110125MW_14 = new ol.format.GeoJSON();
var features_110125MW_14 = format_110125MW_14.readFeatures(json_110125MW_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_110125MW_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110125MW_14.addFeatures(features_110125MW_14);
var lyr_110125MW_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_110125MW_14, 
                style: style_110125MW_14,
                popuplayertitle: '11.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/110125MW_14.png" /> 11.01.25 MW'
            });
var format_140125MW_15 = new ol.format.GeoJSON();
var features_140125MW_15 = format_140125MW_15.readFeatures(json_140125MW_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_140125MW_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_140125MW_15.addFeatures(features_140125MW_15);
var lyr_140125MW_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_140125MW_15, 
                style: style_140125MW_15,
                popuplayertitle: '14.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/140125MW_15.png" /> 14.01.25 MW'
            });
var format_170125MW_16 = new ol.format.GeoJSON();
var features_170125MW_16 = format_170125MW_16.readFeatures(json_170125MW_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_170125MW_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_170125MW_16.addFeatures(features_170125MW_16);
var lyr_170125MW_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_170125MW_16, 
                style: style_170125MW_16,
                popuplayertitle: '17.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/170125MW_16.png" /> 17.01.25 MW'
            });
var format_220125MW_17 = new ol.format.GeoJSON();
var features_220125MW_17 = format_220125MW_17.readFeatures(json_220125MW_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220125MW_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220125MW_17.addFeatures(features_220125MW_17);
var lyr_220125MW_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220125MW_17, 
                style: style_220125MW_17,
                popuplayertitle: '22.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/220125MW_17.png" /> 22.01.25 MW'
            });
var format_010225MW_18 = new ol.format.GeoJSON();
var features_010225MW_18 = format_010225MW_18.readFeatures(json_010225MW_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010225MW_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010225MW_18.addFeatures(features_010225MW_18);
var lyr_010225MW_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010225MW_18, 
                style: style_010225MW_18,
                popuplayertitle: '01.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/010225MW_18.png" /> 01.02.25 MW'
            });
var format_030225MW_19 = new ol.format.GeoJSON();
var features_030225MW_19 = format_030225MW_19.readFeatures(json_030225MW_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030225MW_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030225MW_19.addFeatures(features_030225MW_19);
var lyr_030225MW_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030225MW_19, 
                style: style_030225MW_19,
                popuplayertitle: '03.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/030225MW_19.png" /> 03.02.25 MW'
            });
var format_080225MW_20 = new ol.format.GeoJSON();
var features_080225MW_20 = format_080225MW_20.readFeatures(json_080225MW_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_080225MW_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_080225MW_20.addFeatures(features_080225MW_20);
var lyr_080225MW_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_080225MW_20, 
                style: style_080225MW_20,
                popuplayertitle: '08.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/080225MW_20.png" /> 08.02.25 MW'
            });
var format_180225MW_21 = new ol.format.GeoJSON();
var features_180225MW_21 = format_180225MW_21.readFeatures(json_180225MW_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180225MW_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180225MW_21.addFeatures(features_180225MW_21);
var lyr_180225MW_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180225MW_21, 
                style: style_180225MW_21,
                popuplayertitle: '18.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/180225MW_21.png" /> 18.02.25 MW'
            });
var format_210225MW_22 = new ol.format.GeoJSON();
var features_210225MW_22 = format_210225MW_22.readFeatures(json_210225MW_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210225MW_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210225MW_22.addFeatures(features_210225MW_22);
var lyr_210225MW_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_210225MW_22, 
                style: style_210225MW_22,
                popuplayertitle: '21.02.25 MW',
                interactive: true,
                title: '<img src="styles/legend/210225MW_22.png" /> 21.02.25 MW'
            });
var format_050325MW_23 = new ol.format.GeoJSON();
var features_050325MW_23 = format_050325MW_23.readFeatures(json_050325MW_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_050325MW_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_050325MW_23.addFeatures(features_050325MW_23);
var lyr_050325MW_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_050325MW_23, 
                style: style_050325MW_23,
                popuplayertitle: '05.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/050325MW_23.png" /> 05.03.25 MW'
            });
var format_100325MW_24 = new ol.format.GeoJSON();
var features_100325MW_24 = format_100325MW_24.readFeatures(json_100325MW_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100325MW_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100325MW_24.addFeatures(features_100325MW_24);
var lyr_100325MW_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100325MW_24, 
                style: style_100325MW_24,
                popuplayertitle: '10.03.25 MW',
                interactive: true,
                title: '<img src="styles/legend/100325MW_24.png" /> 10.03.25 MW'
            });
var group_MW = new ol.layer.Group({
                                layers: [lyr_ndvi0901MW_1,lyr_ndvi1101mw_2,lyr_ndvi1401MW_3,lyr_ndvi1701MW_4,lyr_ndvi2201MW_5,lyr_ndvi0102MW_6,lyr_ndvi0302MW_7,lyr_ndvi0802MW_8,lyr_ndvi1802MW_9,lyr_ndvi2102MW_10,lyr_ndvi0503MW_11,lyr_ndvi1003MW_12,lyr_090125MW_13,lyr_110125MW_14,lyr_140125MW_15,lyr_170125MW_16,lyr_220125MW_17,lyr_010225MW_18,lyr_030225MW_19,lyr_080225MW_20,lyr_180225MW_21,lyr_210225MW_22,lyr_050325MW_23,lyr_100325MW_24,],
                                fold: "open",
                                title: 'M.W'});
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

lyr_googlesatelite_0.setVisible(true);lyr_ndvi0901MW_1.setVisible(true);lyr_ndvi1101mw_2.setVisible(true);lyr_ndvi1401MW_3.setVisible(true);lyr_ndvi1701MW_4.setVisible(true);lyr_ndvi2201MW_5.setVisible(true);lyr_ndvi0102MW_6.setVisible(true);lyr_ndvi0302MW_7.setVisible(true);lyr_ndvi0802MW_8.setVisible(true);lyr_ndvi1802MW_9.setVisible(true);lyr_ndvi2102MW_10.setVisible(true);lyr_ndvi0503MW_11.setVisible(true);lyr_ndvi1003MW_12.setVisible(true);lyr_090125MW_13.setVisible(true);lyr_110125MW_14.setVisible(true);lyr_140125MW_15.setVisible(true);lyr_170125MW_16.setVisible(true);lyr_220125MW_17.setVisible(true);lyr_010225MW_18.setVisible(true);lyr_030225MW_19.setVisible(true);lyr_080225MW_20.setVisible(true);lyr_180225MW_21.setVisible(true);lyr_210225MW_22.setVisible(true);lyr_050325MW_23.setVisible(true);lyr_100325MW_24.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_MW];
lyr_090125MW_13.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_110125MW_14.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_Disponible (kgMS/ha)': '11.01.25_Disponible (kgMS/ha)', });
lyr_140125MW_15.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_170125MW_16.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Disponible (kgMS/ha)': '17.01.25_Disponible (kgMS/ha)', });
lyr_220125MW_17.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (kgMS/ha)': '22.01.25_Disponible (kgMS/ha)', });
lyr_010225MW_18.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (kgMS/ha)': '01.02.25_Disponible (kgMS/ha)', });
lyr_030225MW_19.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '01.02.25_T': '01.02.25_T', '01.02.25_D': '01.02.25_D', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (kgMS/ha)': '03.02.25_Disponible (kgMS/ha)', });
lyr_080225MW_20.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '08.02.25_TC (kgMS/ha/d)': '08.02.25_TC (kgMS/ha/d)', '08.02.25_Disponible (kgMS/ha)': '08.02.25_Disponible (kgMS/ha)', });
lyr_180225MW_21.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_210225MW_22.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (kgMS/ha)': '21.02.25_Disponible (kgMS/ha)', });
lyr_050325MW_23.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_100325MW_24.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_090125MW_13.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_110125MW_14.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'TextEdit', '11.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_140125MW_15.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'TextEdit', '14.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_170125MW_16.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_220125MW_17.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_010225MW_18.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'TextEdit', '01.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_030225MW_19.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '01.02.25_T': 'TextEdit', '01.02.25_D': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_080225MW_20.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '08.02.25_TC (kgMS/ha/d)': 'TextEdit', '08.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_180225MW_21.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_210225MW_22.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_050325MW_23.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'TextEdit', '05.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_100325MW_24.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'TextEdit', '10.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_090125MW_13.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '09.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '09.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_110125MW_14.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '11.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '11.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_140125MW_15.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '14.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_170125MW_16.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '17.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_220125MW_17.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_010225MW_18.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_030225MW_19.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '01.02.25_T': 'hidden field', '01.02.25_D': 'hidden field', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_080225MW_20.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '08.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_180225MW_21.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_210225MW_22.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_050325MW_23.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_100325MW_24.set('fieldLabels', {'id': 'hidden field', 'Especie': 'inline label - always visible', 'Pot': 'inline label - always visible', 'Area': 'inline label - always visible', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_100325MW_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});