var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi1812mw_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12 mw',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812mw_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi1012mw_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12 mw',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1012mw_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var lyr_ndvi51224_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi51224_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393498.532075, -3876641.113269, -6392256.183595, -3874502.185161]
                            })
                        });
var format_181224MW_4 = new ol.format.GeoJSON();
var features_181224MW_4 = format_181224MW_4.readFeatures(json_181224MW_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_181224MW_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224MW_4.addFeatures(features_181224MW_4);
var lyr_181224MW_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224MW_4, 
                style: style_181224MW_4,
                popuplayertitle: '18.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/181224MW_4.png" /> 18.12.24 MW'
            });
var format_101224MW_5 = new ol.format.GeoJSON();
var features_101224MW_5 = format_101224MW_5.readFeatures(json_101224MW_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_101224MW_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_101224MW_5.addFeatures(features_101224MW_5);
var lyr_101224MW_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_101224MW_5, 
                style: style_101224MW_5,
                popuplayertitle: '10.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/101224MW_5.png" /> 10.12.24 MW'
            });
var format_51224MW_6 = new ol.format.GeoJSON();
var features_51224MW_6 = format_51224MW_6.readFeatures(json_51224MW_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51224MW_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51224MW_6.addFeatures(features_51224MW_6);
var lyr_51224MW_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_51224MW_6, 
                style: style_51224MW_6,
                popuplayertitle: '5.12.24 MW',
                interactive: true,
                title: '<img src="styles/legend/51224MW_6.png" /> 5.12.24 MW'
            });
var group_HS = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'H.S'});
var group_MW = new ol.layer.Group({
                                layers: [lyr_ndvi1812mw_1,lyr_ndvi1012mw_2,lyr_ndvi51224_3,lyr_181224MW_4,lyr_101224MW_5,lyr_51224MW_6,],
                                fold: "open",
                                title: 'M.W'});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: 'group1'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi1812mw_1.setVisible(true);lyr_ndvi1012mw_2.setVisible(true);lyr_ndvi51224_3.setVisible(true);lyr_181224MW_4.setVisible(true);lyr_101224MW_5.setVisible(true);lyr_51224MW_6.setVisible(true);
var layersList = [group_group1,group_MW];
lyr_181224MW_4.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '18.12.24_TC (kgMS/ha/d)': '18.12.24_TC (kgMS/ha/d)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_101224MW_5.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '10.12.24_TC (kgMS/ha/d)': '10.12.24_TC (kgMS/ha/d)', '10.12.24_Disponible (kgMS/ha)': '10.12.24_Disponible (kgMS/ha)', });
lyr_51224MW_6.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '5.12.24_TC': '5.12.24_TC', '5.12.24_Di': '5.12.24_Di', });
lyr_181224MW_4.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '18.12.24_TC (kgMS/ha/d)': 'TextEdit', '18.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_101224MW_5.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '10.12.24_TC (kgMS/ha/d)': 'TextEdit', '10.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_51224MW_6.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '5.12.24_TC': '', '5.12.24_Di': '', });
lyr_181224MW_4.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '18.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_101224MW_5.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '10.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '10.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_51224MW_6.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - visible with data', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '5.12.24_TC': 'header label - visible with data', '5.12.24_Di': 'header label - visible with data', });
lyr_51224MW_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});