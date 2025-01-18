ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([409065.012027, 6432256.194602, 416094.638787, 6435761.088471]);
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
var lyr_ndvi181224_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi181224_2.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi231224_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi231224_3.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
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
var lyr_ndvi070125_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 07.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi070125_6.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi120125_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 12.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi120125_7.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi170125p_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01.25 p',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi170125p_8.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var format_170125_9 = new ol.format.GeoJSON();
var features_170125_9 = format_170125_9.readFeatures(json_170125_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_170125_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_170125_9.addFeatures(features_170125_9);
var lyr_170125_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_170125_9, 
                style: style_170125_9,
                popuplayertitle: '17.01.25',
                interactive: true,
                title: '<img src="styles/legend/170125_9.png" /> 17.01.25'
            });
var format_120125_10 = new ol.format.GeoJSON();
var features_120125_10 = format_120125_10.readFeatures(json_120125_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_120125_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_120125_10.addFeatures(features_120125_10);
var lyr_120125_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_120125_10, 
                style: style_120125_10,
                popuplayertitle: '12.01.25',
                interactive: true,
                title: '<img src="styles/legend/120125_10.png" /> 12.01.25'
            });
var format_070125_11 = new ol.format.GeoJSON();
var features_070125_11 = format_070125_11.readFeatures(json_070125_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_070125_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070125_11.addFeatures(features_070125_11);
var lyr_070125_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070125_11, 
                style: style_070125_11,
                popuplayertitle: '07.01.25',
                interactive: true,
                title: '<img src="styles/legend/070125_11.png" /> 07.01.25'
            });
var format_020125_12 = new ol.format.GeoJSON();
var features_020125_12 = format_020125_12.readFeatures(json_020125_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_020125_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_020125_12.addFeatures(features_020125_12);
var lyr_020125_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_020125_12, 
                style: style_020125_12,
                popuplayertitle: '02.01.25',
                interactive: true,
                title: '<img src="styles/legend/020125_12.png" /> 02.01.25'
            });
var format_281224_13 = new ol.format.GeoJSON();
var features_281224_13 = format_281224_13.readFeatures(json_281224_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_281224_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_281224_13.addFeatures(features_281224_13);
var lyr_281224_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_281224_13, 
                style: style_281224_13,
                popuplayertitle: '28.12.24',
                interactive: true,
                title: '<img src="styles/legend/281224_13.png" /> 28.12.24'
            });
var format_231224_14 = new ol.format.GeoJSON();
var features_231224_14 = format_231224_14.readFeatures(json_231224_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_231224_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224_14.addFeatures(features_231224_14);
var lyr_231224_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224_14, 
                style: style_231224_14,
                popuplayertitle: '23.12.24',
                interactive: true,
                title: '<img src="styles/legend/231224_14.png" /> 23.12.24'
            });
var format_181224_15 = new ol.format.GeoJSON();
var features_181224_15 = format_181224_15.readFeatures(json_181224_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_181224_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224_15.addFeatures(features_181224_15);
var lyr_181224_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224_15, 
                style: style_181224_15,
                popuplayertitle: '18.12.24',
                interactive: true,
                title: '<img src="styles/legend/181224_15.png" /> 18.12.24'
            });
var format_81224_16 = new ol.format.GeoJSON();
var features_81224_16 = format_81224_16.readFeatures(json_81224_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_81224_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_81224_16.addFeatures(features_81224_16);
var lyr_81224_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_81224_16, 
                style: style_81224_16,
                popuplayertitle: '8.12.24',
                interactive: true,
                title: '<img src="styles/legend/81224_16.png" /> 8.12.24'
            });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_ndvi81224_1,lyr_ndvi181224_2,lyr_ndvi231224_3,lyr_ndvi281224_4,lyr_ndvi020125_5,lyr_ndvi070125_6,lyr_ndvi120125_7,lyr_ndvi170125p_8,],
                                fold: "open",
                                title: '2024'});

lyr_GoogleHybrid_0.setVisible(true);lyr_ndvi81224_1.setVisible(true);lyr_ndvi181224_2.setVisible(true);lyr_ndvi231224_3.setVisible(true);lyr_ndvi281224_4.setVisible(true);lyr_ndvi020125_5.setVisible(true);lyr_ndvi070125_6.setVisible(true);lyr_ndvi120125_7.setVisible(true);lyr_ndvi170125p_8.setVisible(true);lyr_170125_9.setVisible(true);lyr_120125_10.setVisible(true);lyr_070125_11.setVisible(true);lyr_020125_12.setVisible(true);lyr_281224_13.setVisible(true);lyr_231224_14.setVisible(true);lyr_181224_15.setVisible(true);lyr_81224_16.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_2024,lyr_170125_9,lyr_120125_10,lyr_070125_11,lyr_020125_12,lyr_281224_13,lyr_231224_14,lyr_181224_15,lyr_81224_16];
lyr_170125_9.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Disponible (kgMS/ha)': '17.01.25_Disponible (kgMS/ha)', });
lyr_120125_10.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '12.01.25_TC (kgMS/ha/d)': '12.01.25_TC (kgMS/ha/d)', '12.01.25_Disponible (kgMS/ha)': '12.01.25_Disponible (kgMS/ha)', });
lyr_070125_11.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '07.01.25_TC (kgMS/ha/d)': '07.01.25_TC (kgMS/ha/d)', '07.01.25_Disponibilidad (kgMS/ha)': '07.01.25_Disponibilidad (kgMS/ha)', });
lyr_020125_12.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '02.01.25_TC (kgMS/ha/d)': '02.01.25_TC (kgMS/ha/d)', '02.01.25_Disponible (kgMS/ha)': '02.01.25_Disponible (kgMS/ha)', });
lyr_281224_13.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '28.12.24_TC (kgMS/ha/d)': '28.12.24_TC (kgMS/ha/d)', '28.12.24_Disponible (kgMS/ha)': '28.12.24_Disponible (kgMS/ha)', });
lyr_231224_14.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_181224_15.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '18.12.24_TC (kgMS/ha/d)': '18.12.24_TC (kgMS/ha/d)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_81224_16.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '8.12.24_TC': '8.12.24_TC', '8.12.24_Di': '8.12.24_Di', });
lyr_170125_9.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_120125_10.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '12.01.25_TC (kgMS/ha/d)': 'TextEdit', '12.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070125_11.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '07.01.25_TC (kgMS/ha/d)': 'TextEdit', '07.01.25_Disponibilidad (kgMS/ha)': 'TextEdit', });
lyr_020125_12.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '02.01.25_TC (kgMS/ha/d)': 'TextEdit', '02.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_281224_13.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '28.12.24_TC (kgMS/ha/d)': 'TextEdit', '28.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_231224_14.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', '23.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_181224_15.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '18.12.24_TC (kgMS/ha/d)': 'TextEdit', '18.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_81224_16.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '8.12.24_TC': '', '8.12.24_Di': '', });
lyr_170125_9.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '17.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '17.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_120125_10.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '12.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '12.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_070125_11.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '07.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '07.01.25_Disponibilidad (kgMS/ha)': 'header label - visible with data', });
lyr_020125_12.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '02.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '02.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_281224_13.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '28.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '28.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_231224_14.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '23.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '23.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_181224_15.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '18.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_81224_16.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - visible with data', 'ha': 'inline label - visible with data', '8.12.24_TC': 'header label - visible with data', '8.12.24_Di': 'header label - visible with data', });
lyr_81224_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});