var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi1101mw_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 11.01 mw',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1101mw_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0901MW_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0901MW_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0701MW_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 07.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0701MW_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0401MW_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0401MW_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0201MW_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0201MW_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi3012MW_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3012MW_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2312MW_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312MW_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2012MW_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.12 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2012MW_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1812mw_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12 mw',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812mw_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1012mw_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12 mw',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1012mw_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi51224_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi51224_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var format_110125MW_12 = new ol.format.GeoJSON();
var features_110125MW_12 = format_110125MW_12.readFeatures(json_110125MW_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_110125MW_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110125MW_12.addFeatures(features_110125MW_12);
var lyr_110125MW_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_110125MW_12, 
                style: style_110125MW_12,
                popuplayertitle: '11.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/110125MW_12.png" /> 11.01.25 MW'
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
var format_070125MW_14 = new ol.format.GeoJSON();
var features_070125MW_14 = format_070125MW_14.readFeatures(json_070125MW_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_070125MW_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070125MW_14.addFeatures(features_070125MW_14);
var lyr_070125MW_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070125MW_14, 
                style: style_070125MW_14,
                popuplayertitle: '07.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/070125MW_14.png" /> 07.01.25 MW'
            });
var format_040125MW_15 = new ol.format.GeoJSON();
var features_040125MW_15 = format_040125MW_15.readFeatures(json_040125MW_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040125MW_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040125MW_15.addFeatures(features_040125MW_15);
var lyr_040125MW_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040125MW_15, 
                style: style_040125MW_15,
                popuplayertitle: '04.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/040125MW_15.png" /> 04.01.25 MW'
            });
var format_020125MW_16 = new ol.format.GeoJSON();
var features_020125MW_16 = format_020125MW_16.readFeatures(json_020125MW_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_020125MW_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_020125MW_16.addFeatures(features_020125MW_16);
var lyr_020125MW_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_020125MW_16, 
                style: style_020125MW_16,
                popuplayertitle: '02.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/020125MW_16.png" /> 02.01.25 MW'
            });
var format_301224MW_17 = new ol.format.GeoJSON();
var features_301224MW_17 = format_301224MW_17.readFeatures(json_301224MW_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_301224MW_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_301224MW_17.addFeatures(features_301224MW_17);
var lyr_301224MW_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_301224MW_17, 
                style: style_301224MW_17,
                popuplayertitle: '30.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/301224MW_17.png" /> 30.12.24 MW'
            });
var format_231224MW_18 = new ol.format.GeoJSON();
var features_231224MW_18 = format_231224MW_18.readFeatures(json_231224MW_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_231224MW_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224MW_18.addFeatures(features_231224MW_18);
var lyr_231224MW_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224MW_18, 
                style: style_231224MW_18,
                popuplayertitle: '23.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/231224MW_18.png" /> 23.12.24 MW'
            });
var format_201224MW_19 = new ol.format.GeoJSON();
var features_201224MW_19 = format_201224MW_19.readFeatures(json_201224MW_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201224MW_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201224MW_19.addFeatures(features_201224MW_19);
var lyr_201224MW_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201224MW_19, 
                style: style_201224MW_19,
                popuplayertitle: '20.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/201224MW_19.png" /> 20.12.24 MW'
            });
var format_181224MW_20 = new ol.format.GeoJSON();
var features_181224MW_20 = format_181224MW_20.readFeatures(json_181224MW_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_181224MW_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224MW_20.addFeatures(features_181224MW_20);
var lyr_181224MW_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224MW_20, 
                style: style_181224MW_20,
                popuplayertitle: '18.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/181224MW_20.png" /> 18.12.24 MW'
            });
var format_101224MW_21 = new ol.format.GeoJSON();
var features_101224MW_21 = format_101224MW_21.readFeatures(json_101224MW_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101224MW_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101224MW_21.addFeatures(features_101224MW_21);
var lyr_101224MW_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_101224MW_21, 
                style: style_101224MW_21,
                popuplayertitle: '10.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/101224MW_21.png" /> 10.12.24 MW'
            });
var format_51224MW_22 = new ol.format.GeoJSON();
var features_51224MW_22 = format_51224MW_22.readFeatures(json_51224MW_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51224MW_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51224MW_22.addFeatures(features_51224MW_22);
var lyr_51224MW_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_51224MW_22, 
                style: style_51224MW_22,
                popuplayertitle: '5.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/51224MW_22.png" /> 5.12.24 MW'
            });
var group_MW = new ol.layer.Group({
                                layers: [lyr_ndvi1101mw_1,lyr_ndvi0901MW_2,lyr_ndvi0701MW_3,lyr_ndvi0401MW_4,lyr_ndvi0201MW_5,lyr_ndvi3012MW_6,lyr_ndvi2312MW_7,lyr_ndvi2012MW_8,lyr_ndvi1812mw_9,lyr_ndvi1012mw_10,lyr_ndvi51224_11,lyr_110125MW_12,lyr_090125MW_13,lyr_070125MW_14,lyr_040125MW_15,lyr_020125MW_16,lyr_301224MW_17,lyr_231224MW_18,lyr_201224MW_19,lyr_181224MW_20,lyr_101224MW_21,lyr_51224MW_22,],
                                fold: "open",
                                title: 'M.W'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi1101mw_1.setVisible(true);lyr_ndvi0901MW_2.setVisible(true);lyr_ndvi0701MW_3.setVisible(true);lyr_ndvi0401MW_4.setVisible(true);lyr_ndvi0201MW_5.setVisible(true);lyr_ndvi3012MW_6.setVisible(true);lyr_ndvi2312MW_7.setVisible(true);lyr_ndvi2012MW_8.setVisible(true);lyr_ndvi1812mw_9.setVisible(true);lyr_ndvi1012mw_10.setVisible(true);lyr_ndvi51224_11.setVisible(true);lyr_110125MW_12.setVisible(true);lyr_090125MW_13.setVisible(true);lyr_070125MW_14.setVisible(true);lyr_040125MW_15.setVisible(true);lyr_020125MW_16.setVisible(true);lyr_301224MW_17.setVisible(true);lyr_231224MW_18.setVisible(true);lyr_201224MW_19.setVisible(true);lyr_181224MW_20.setVisible(true);lyr_101224MW_21.setVisible(true);lyr_51224MW_22.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_MW];
lyr_110125MW_12.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_Disponible (kgMS/ha)': '11.01.25_Disponible (kgMS/ha)', });
lyr_090125MW_13.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_070125MW_14.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '07.01.25_TC (kgMS/ha/d)': '07.01.25_TC (kgMS/ha/d)', '07.01.25_Disponible (kgMS/ha)': '07.01.25_Disponible (kgMS/ha)', });
lyr_040125MW_15.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_020125MW_16.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '02.01.25_TC (kgMS/ha/d)': '02.01.25_TC (kgMS/ha/d)', '02.01.25_Disponible (kgMS/ha)': '02.01.25_Disponible (kgMS/ha)', });
lyr_301224MW_17.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_231224MW_18.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '23.12.24_VALUE_mean': '23.12.24_VALUE_mean', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', });
lyr_201224MW_19.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '20.12.24_TC (kgMS/ha/d)': '20.12.24_TC (kgMS/ha/d)', '20.12.24_Disponible (kgMS/ha)': '20.12.24_Disponible (kgMS/ha)', });
lyr_181224MW_20.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '18.12.24_(kgMS/ha/d)': '18.12.24_(kgMS/ha/d)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_101224MW_21.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '10.12.24_TC (kgMS/ha/d)': '10.12.24_TC (kgMS/ha/d)', '10.12.24_Disponible (kgMS/ha)': '10.12.24_Disponible (kgMS/ha)', });
lyr_51224MW_22.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '5.12.24_TC': '5.12.24_TC', '5.12.24_Di': '5.12.24_Di', });
lyr_110125MW_12.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'TextEdit', '11.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_090125MW_13.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070125MW_14.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '07.01.25_TC (kgMS/ha/d)': 'TextEdit', '07.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_040125MW_15.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_020125MW_16.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '02.01.25_TC (kgMS/ha/d)': 'TextEdit', '02.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_301224MW_17.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'TextEdit', '30.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_231224MW_18.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '23.12.24_VALUE_mean': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', });
lyr_201224MW_19.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '20.12.24_TC (kgMS/ha/d)': 'TextEdit', '20.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_181224MW_20.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '18.12.24_(kgMS/ha/d)': 'TextEdit', '18.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_101224MW_21.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '10.12.24_TC (kgMS/ha/d)': 'TextEdit', '10.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_51224MW_22.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '5.12.24_TC': '', '5.12.24_Di': '', });
lyr_110125MW_12.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '11.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '11.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_090125MW_13.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '09.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '09.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_070125MW_14.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '07.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '07.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_040125MW_15.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '04.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '04.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_020125MW_16.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '02.01.25_TC (kgMS/ha/d)': 'inline label - visible with data', '02.01.25_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_301224MW_17.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '30.12.24_TC (kgMS/ha/d)': 'inline label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_231224MW_18.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '23.12.24_VALUE_mean': 'inline label - visible with data', '23.12.24_TC (kgMS/ha/d)': 'inline label - visible with data', });
lyr_201224MW_19.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - visible with data', 'Area': 'header label - always visible', '20.12.24_TC (kgMS/ha/d)': 'inline label - visible with data', '20.12.24_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_181224MW_20.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '18.12.24_(kgMS/ha/d)': 'inline label - visible with data', '18.12.24_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_101224MW_21.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '10.12.24_TC (kgMS/ha/d)': 'inline label - visible with data', '10.12.24_Disponible (kgMS/ha)': 'inline label - visible with data', });
lyr_51224MW_22.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '5.12.24_TC': 'inline label - visible with data', '5.12.24_Di': 'inline label - visible with data', });
lyr_51224MW_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});