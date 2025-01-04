ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([409430.023435, 6432283.534710, 416325.128327, 6435721.357470]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi81224_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 8.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi81224_1.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi1812_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812_2.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410762.321540, 6432294.034320, 414422.788520, 6435700.419070]
                            })
                        });
var lyr_ndvi2312_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312_3.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410762.321540, 6432294.034320, 414422.788520, 6435700.419070]
                            })
                        });
var lyr_ndvi281224_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 28.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi281224_4.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi020125_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi020125_5.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var format_020125_6 = new ol.format.GeoJSON();
var features_020125_6 = format_020125_6.readFeatures(json_020125_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_020125_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_020125_6.addFeatures(features_020125_6);
var lyr_020125_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_020125_6, 
                style: style_020125_6,
                popuplayertitle: '02.01.25',
                interactive: true,
                title: '<img src="styles/legend/020125_6.png" /> 02.01.25'
            });
var format_281224_7 = new ol.format.GeoJSON();
var features_281224_7 = format_281224_7.readFeatures(json_281224_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_281224_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_281224_7.addFeatures(features_281224_7);
var lyr_281224_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_281224_7, 
                style: style_281224_7,
                popuplayertitle: '28.12.24',
                interactive: true,
                title: '<img src="styles/legend/281224_7.png" /> 28.12.24'
            });
var format_231224_8 = new ol.format.GeoJSON();
var features_231224_8 = format_231224_8.readFeatures(json_231224_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_231224_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224_8.addFeatures(features_231224_8);
var lyr_231224_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224_8, 
                style: style_231224_8,
                popuplayertitle: '23.12.24',
                interactive: true,
                title: '<img src="styles/legend/231224_8.png" /> 23.12.24'
            });
var format_181224_9 = new ol.format.GeoJSON();
var features_181224_9 = format_181224_9.readFeatures(json_181224_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_181224_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224_9.addFeatures(features_181224_9);
var lyr_181224_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224_9, 
                style: style_181224_9,
                popuplayertitle: '18.12.24',
                interactive: true,
                title: '<img src="styles/legend/181224_9.png" /> 18.12.24'
            });
var format_81224_10 = new ol.format.GeoJSON();
var features_81224_10 = format_81224_10.readFeatures(json_81224_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_81224_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_81224_10.addFeatures(features_81224_10);
var lyr_81224_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_81224_10, 
                style: style_81224_10,
                popuplayertitle: '8.12.24',
                interactive: true,
                title: '<img src="styles/legend/81224_10.png" /> 8.12.24'
            });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_ndvi81224_1,lyr_ndvi1812_2,lyr_ndvi2312_3,lyr_ndvi281224_4,lyr_ndvi020125_5,],
                                fold: "open",
                                title: '2024'});

lyr_GoogleHybrid_0.setVisible(true);lyr_ndvi81224_1.setVisible(true);lyr_ndvi1812_2.setVisible(true);lyr_ndvi2312_3.setVisible(true);lyr_ndvi281224_4.setVisible(true);lyr_ndvi020125_5.setVisible(true);lyr_020125_6.setVisible(true);lyr_281224_7.setVisible(true);lyr_231224_8.setVisible(true);lyr_181224_9.setVisible(true);lyr_81224_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_2024,lyr_020125_6,lyr_281224_7,lyr_231224_8,lyr_181224_9,lyr_81224_10];
lyr_020125_6.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '02.01.25_TC (kgMS/ha/d)': '02.01.25_TC (kgMS/ha/d)', '02.01.25_Disponible (kgMS/ha)': '02.01.25_Disponible (kgMS/ha)', });
lyr_281224_7.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '28.12.24_TC (kgMS/ha/d)': '28.12.24_TC (kgMS/ha/d)', '28.12.24_Disponible (kgMS/ha)': '28.12.24_Disponible (kgMS/ha)', });
lyr_231224_8.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_181224_9.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '18.12.24_TC (kgMS/ha/d)': '18.12.24_TC (kgMS/ha/d)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_81224_10.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '8.12.24_TC': '8.12.24_TC', '8.12.24_Di': '8.12.24_Di', });
lyr_020125_6.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '02.01.25_TC (kgMS/ha/d)': 'TextEdit', '02.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_281224_7.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '28.12.24_TC (kgMS/ha/d)': 'TextEdit', '28.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_231224_8.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', '23.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_181224_9.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '18.12.24_TC (kgMS/ha/d)': 'TextEdit', '18.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_81224_10.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '8.12.24_TC': '', '8.12.24_Di': '', });
lyr_020125_6.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '02.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '02.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_281224_7.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '28.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '28.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_231224_8.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '23.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '23.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_181224_9.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '18.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_81224_10.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '8.12.24_TC': 'header label - visible with data', '8.12.24_Di': 'header label - visible with data', });
lyr_81224_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});