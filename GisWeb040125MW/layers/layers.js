var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi0401MW_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0401MW_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi0201MW_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.01 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0201MW_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi3012MW_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3012MW_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2312MW_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312MW_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi2012MW_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.12 MW',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2012MW_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1812mw_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12 mw',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812mw_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1012mw_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12 mw',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1012mw_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi51224_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi51224_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var format_040125MW_9 = new ol.format.GeoJSON();
var features_040125MW_9 = format_040125MW_9.readFeatures(json_040125MW_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040125MW_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040125MW_9.addFeatures(features_040125MW_9);
var lyr_040125MW_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040125MW_9, 
                style: style_040125MW_9,
                popuplayertitle: '04.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/040125MW_9.png" /> 04.01.25 MW'
            });
var format_020125MW_10 = new ol.format.GeoJSON();
var features_020125MW_10 = format_020125MW_10.readFeatures(json_020125MW_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_020125MW_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_020125MW_10.addFeatures(features_020125MW_10);
var lyr_020125MW_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_020125MW_10, 
                style: style_020125MW_10,
                popuplayertitle: '02.01.25 MW',
                interactive: true,
                title: '<img src="styles/legend/020125MW_10.png" /> 02.01.25 MW'
            });
var format_301224MW_11 = new ol.format.GeoJSON();
var features_301224MW_11 = format_301224MW_11.readFeatures(json_301224MW_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_301224MW_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_301224MW_11.addFeatures(features_301224MW_11);
var lyr_301224MW_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_301224MW_11, 
                style: style_301224MW_11,
                popuplayertitle: '30.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/301224MW_11.png" /> 30.12.24 MW'
            });
var format_231224MW_12 = new ol.format.GeoJSON();
var features_231224MW_12 = format_231224MW_12.readFeatures(json_231224MW_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_231224MW_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224MW_12.addFeatures(features_231224MW_12);
var lyr_231224MW_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224MW_12, 
                style: style_231224MW_12,
                popuplayertitle: '23.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/231224MW_12.png" /> 23.12.24 MW'
            });
var format_201224MW_13 = new ol.format.GeoJSON();
var features_201224MW_13 = format_201224MW_13.readFeatures(json_201224MW_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_201224MW_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_201224MW_13.addFeatures(features_201224MW_13);
var lyr_201224MW_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_201224MW_13, 
                style: style_201224MW_13,
                popuplayertitle: '20.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/201224MW_13.png" /> 20.12.24 MW'
            });
var format_181224MW_14 = new ol.format.GeoJSON();
var features_181224MW_14 = format_181224MW_14.readFeatures(json_181224MW_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_181224MW_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224MW_14.addFeatures(features_181224MW_14);
var lyr_181224MW_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224MW_14, 
                style: style_181224MW_14,
                popuplayertitle: '18.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/181224MW_14.png" /> 18.12.24 MW'
            });
var format_101224MW_15 = new ol.format.GeoJSON();
var features_101224MW_15 = format_101224MW_15.readFeatures(json_101224MW_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101224MW_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101224MW_15.addFeatures(features_101224MW_15);
var lyr_101224MW_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_101224MW_15, 
                style: style_101224MW_15,
                popuplayertitle: '10.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/101224MW_15.png" /> 10.12.24 MW'
            });
var format_51224MW_16 = new ol.format.GeoJSON();
var features_51224MW_16 = format_51224MW_16.readFeatures(json_51224MW_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51224MW_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51224MW_16.addFeatures(features_51224MW_16);
var lyr_51224MW_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_51224MW_16, 
                style: style_51224MW_16,
                popuplayertitle: '5.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/51224MW_16.png" /> 5.12.24 MW'
            });
var group_MW = new ol.layer.Group({
                                layers: [lyr_ndvi0401MW_1,lyr_ndvi0201MW_2,lyr_ndvi3012MW_3,lyr_ndvi2312MW_4,lyr_ndvi2012MW_5,lyr_ndvi1812mw_6,lyr_ndvi1012mw_7,lyr_ndvi51224_8,lyr_040125MW_9,lyr_020125MW_10,lyr_301224MW_11,lyr_231224MW_12,lyr_201224MW_13,lyr_181224MW_14,lyr_101224MW_15,lyr_51224MW_16,],
                                fold: "open",
                                title: 'M.W'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi0401MW_1.setVisible(true);lyr_ndvi0201MW_2.setVisible(true);lyr_ndvi3012MW_3.setVisible(true);lyr_ndvi2312MW_4.setVisible(true);lyr_ndvi2012MW_5.setVisible(true);lyr_ndvi1812mw_6.setVisible(true);lyr_ndvi1012mw_7.setVisible(true);lyr_ndvi51224_8.setVisible(true);lyr_040125MW_9.setVisible(true);lyr_020125MW_10.setVisible(true);lyr_301224MW_11.setVisible(true);lyr_231224MW_12.setVisible(true);lyr_201224MW_13.setVisible(true);lyr_181224MW_14.setVisible(true);lyr_101224MW_15.setVisible(true);lyr_51224MW_16.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_MW];
lyr_040125MW_9.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_020125MW_10.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '02.01.25_TC (kgMS/ha/d)': '02.01.25_TC (kgMS/ha/d)', '02.01.25_Disponible (kgMS/ha)': '02.01.25_Disponible (kgMS/ha)', });
lyr_301224MW_11.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_231224MW_12.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '23.12.24_VALUE_mean': '23.12.24_VALUE_mean', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', });
lyr_201224MW_13.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '20.12.24_TC (kgMS/ha/d)': '20.12.24_TC (kgMS/ha/d)', '20.12.24_Disponible (kgMS/ha)': '20.12.24_Disponible (kgMS/ha)', });
lyr_181224MW_14.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '18.12.24_TC (kgMS/ha/d)': '18.12.24_TC (kgMS/ha/d)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_101224MW_15.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '10.12.24_TC (kgMS/ha/d)': '10.12.24_TC (kgMS/ha/d)', '10.12.24_Disponible (kgMS/ha)': '10.12.24_Disponible (kgMS/ha)', });
lyr_51224MW_16.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '5.12.24_TC': '5.12.24_TC', '5.12.24_Di': '5.12.24_Di', });
lyr_040125MW_9.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_020125MW_10.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '02.01.25_TC (kgMS/ha/d)': 'TextEdit', '02.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_301224MW_11.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'TextEdit', '30.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_231224MW_12.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '23.12.24_VALUE_mean': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', });
lyr_201224MW_13.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '20.12.24_TC (kgMS/ha/d)': 'TextEdit', '20.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_181224MW_14.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '18.12.24_TC (kgMS/ha/d)': 'TextEdit', '18.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_101224MW_15.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '10.12.24_TC (kgMS/ha/d)': 'TextEdit', '10.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_51224MW_16.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '5.12.24_TC': '', '5.12.24_Di': '', });
lyr_040125MW_9.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '04.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '04.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_020125MW_10.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '02.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '02.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_301224MW_11.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '30.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_231224MW_12.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '23.12.24_VALUE_mean': 'header label - visible with data', '23.12.24_TC (kgMS/ha/d)': 'header label - visible with data', });
lyr_201224MW_13.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '20.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '20.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_181224MW_14.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '18.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_101224MW_15.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '10.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '10.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_51224MW_16.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '5.12.24_TC': 'header label - visible with data', '5.12.24_Di': 'header label - visible with data', });
lyr_51224MW_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});