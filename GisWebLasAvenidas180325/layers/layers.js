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
var lyr_ndvi181224_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi181224_1.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi231224_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi231224_2.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi281224_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 28.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi281224_3.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi020125_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi020125_4.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi070125_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 07.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi070125_5.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi120125_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 12.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi120125_6.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi170125_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01.25 ',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi170125_7.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi220125_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01.25 ',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi220125_8.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi010225_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.02.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi010225_9.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi030325_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi030325_10.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi130325_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 13.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi130325_11.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_ndvi180325_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.03.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi180325_12.png",
                                attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410781.920000, 6432345.390000, 414375.496800, 6435675.607700]
                            })
                        });
var format_81224_13 = new ol.format.GeoJSON();
var features_81224_13 = format_81224_13.readFeatures(json_81224_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_81224_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_81224_13.addFeatures(features_81224_13);
var lyr_81224_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_81224_13, 
                style: style_81224_13,
                popuplayertitle: '8.12.24',
                interactive: true,
                title: '<img src="styles/legend/81224_13.png" /> 8.12.24'
            });
var format_181224_14 = new ol.format.GeoJSON();
var features_181224_14 = format_181224_14.readFeatures(json_181224_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_181224_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224_14.addFeatures(features_181224_14);
var lyr_181224_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224_14, 
                style: style_181224_14,
                popuplayertitle: '18.12.24',
                interactive: true,
                title: '<img src="styles/legend/181224_14.png" /> 18.12.24'
            });
var format_231224_15 = new ol.format.GeoJSON();
var features_231224_15 = format_231224_15.readFeatures(json_231224_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_231224_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224_15.addFeatures(features_231224_15);
var lyr_231224_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224_15, 
                style: style_231224_15,
                popuplayertitle: '23.12.24',
                interactive: true,
                title: '<img src="styles/legend/231224_15.png" /> 23.12.24'
            });
var format_281224_16 = new ol.format.GeoJSON();
var features_281224_16 = format_281224_16.readFeatures(json_281224_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_281224_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_281224_16.addFeatures(features_281224_16);
var lyr_281224_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_281224_16, 
                style: style_281224_16,
                popuplayertitle: '28.12.24',
                interactive: true,
                title: '<img src="styles/legend/281224_16.png" /> 28.12.24'
            });
var format_020125_17 = new ol.format.GeoJSON();
var features_020125_17 = format_020125_17.readFeatures(json_020125_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_020125_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_020125_17.addFeatures(features_020125_17);
var lyr_020125_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_020125_17, 
                style: style_020125_17,
                popuplayertitle: '02.01.25',
                interactive: true,
                title: '<img src="styles/legend/020125_17.png" /> 02.01.25'
            });
var format_070125_18 = new ol.format.GeoJSON();
var features_070125_18 = format_070125_18.readFeatures(json_070125_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_070125_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_070125_18.addFeatures(features_070125_18);
var lyr_070125_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_070125_18, 
                style: style_070125_18,
                popuplayertitle: '07.01.25',
                interactive: true,
                title: '<img src="styles/legend/070125_18.png" /> 07.01.25'
            });
var format_120125_19 = new ol.format.GeoJSON();
var features_120125_19 = format_120125_19.readFeatures(json_120125_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_120125_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_120125_19.addFeatures(features_120125_19);
var lyr_120125_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_120125_19, 
                style: style_120125_19,
                popuplayertitle: '12.01.25',
                interactive: true,
                title: '<img src="styles/legend/120125_19.png" /> 12.01.25'
            });
var format_170125_20 = new ol.format.GeoJSON();
var features_170125_20 = format_170125_20.readFeatures(json_170125_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_170125_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_170125_20.addFeatures(features_170125_20);
var lyr_170125_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_170125_20, 
                style: style_170125_20,
                popuplayertitle: '17.01.25',
                interactive: true,
                title: '<img src="styles/legend/170125_20.png" /> 17.01.25'
            });
var format_220125_21 = new ol.format.GeoJSON();
var features_220125_21 = format_220125_21.readFeatures(json_220125_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_220125_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220125_21.addFeatures(features_220125_21);
var lyr_220125_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220125_21, 
                style: style_220125_21,
                popuplayertitle: '22.01.25',
                interactive: true,
                title: '<img src="styles/legend/220125_21.png" /> 22.01.25'
            });
var format_010225_22 = new ol.format.GeoJSON();
var features_010225_22 = format_010225_22.readFeatures(json_010225_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_010225_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010225_22.addFeatures(features_010225_22);
var lyr_010225_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010225_22, 
                style: style_010225_22,
                popuplayertitle: '01.02.25',
                interactive: true,
                title: '<img src="styles/legend/010225_22.png" /> 01.02.25'
            });
var format_030325_23 = new ol.format.GeoJSON();
var features_030325_23 = format_030325_23.readFeatures(json_030325_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_030325_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030325_23.addFeatures(features_030325_23);
var lyr_030325_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030325_23, 
                style: style_030325_23,
                popuplayertitle: '03.03.25',
                interactive: true,
                title: '<img src="styles/legend/030325_23.png" /> 03.03.25'
            });
var format_130325_24 = new ol.format.GeoJSON();
var features_130325_24 = format_130325_24.readFeatures(json_130325_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_130325_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_130325_24.addFeatures(features_130325_24);
var lyr_130325_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_130325_24, 
                style: style_130325_24,
                popuplayertitle: '13.03.25',
                interactive: true,
                title: '<img src="styles/legend/130325_24.png" /> 13.03.25'
            });
var format_180325_25 = new ol.format.GeoJSON();
var features_180325_25 = format_180325_25.readFeatures(json_180325_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_180325_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180325_25.addFeatures(features_180325_25);
var lyr_180325_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180325_25, 
                style: style_180325_25,
                popuplayertitle: '18.03.25',
                interactive: true,
                title: '<img src="styles/legend/180325_25.png" /> 18.03.25'
            });
var group_2025 = new ol.layer.Group({
                                layers: [lyr_ndvi070125_5,lyr_ndvi120125_6,lyr_ndvi170125_7,lyr_ndvi220125_8,lyr_ndvi010225_9,lyr_ndvi030325_10,lyr_ndvi130325_11,lyr_ndvi180325_12,],
                                fold: "open",
                                title: '2025'});
var group_2024 = new ol.layer.Group({
                                layers: [lyr_ndvi181224_1,lyr_ndvi231224_2,lyr_ndvi281224_3,],
                                fold: "open",
                                title: '2024'});

lyr_GoogleHybrid_0.setVisible(true);lyr_ndvi181224_1.setVisible(true);lyr_ndvi231224_2.setVisible(true);lyr_ndvi281224_3.setVisible(true);lyr_ndvi020125_4.setVisible(true);lyr_ndvi070125_5.setVisible(true);lyr_ndvi120125_6.setVisible(true);lyr_ndvi170125_7.setVisible(true);lyr_ndvi220125_8.setVisible(true);lyr_ndvi010225_9.setVisible(true);lyr_ndvi030325_10.setVisible(true);lyr_ndvi130325_11.setVisible(true);lyr_ndvi180325_12.setVisible(true);lyr_81224_13.setVisible(true);lyr_181224_14.setVisible(true);lyr_231224_15.setVisible(true);lyr_281224_16.setVisible(true);lyr_020125_17.setVisible(true);lyr_070125_18.setVisible(true);lyr_120125_19.setVisible(true);lyr_170125_20.setVisible(true);lyr_220125_21.setVisible(true);lyr_010225_22.setVisible(true);lyr_030325_23.setVisible(true);lyr_130325_24.setVisible(true);lyr_180325_25.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_2024,lyr_ndvi020125_4,group_2025,lyr_81224_13,lyr_181224_14,lyr_231224_15,lyr_281224_16,lyr_020125_17,lyr_070125_18,lyr_120125_19,lyr_170125_20,lyr_220125_21,lyr_010225_22,lyr_030325_23,lyr_130325_24,lyr_180325_25];
lyr_81224_13.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '8.12.24_TC': '8.12.24_TC', '8.12.24_Di': '8.12.24_Di', });
lyr_181224_14.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '18.12.24_TC (kgMS/ha/d)': '18.12.24_TC (kgMS/ha/d)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_231224_15.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_281224_16.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '28.12.24_TC (kgMS/ha/d)': '28.12.24_TC (kgMS/ha/d)', '28.12.24_Disponible (kgMS/ha)': '28.12.24_Disponible (kgMS/ha)', });
lyr_020125_17.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '02.01.25_TC (kgMS/ha/d)': '02.01.25_TC (kgMS/ha/d)', '02.01.25_Disponible (kgMS/ha)': '02.01.25_Disponible (kgMS/ha)', });
lyr_070125_18.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '07.01.25_TC (kgMS/ha/d)': '07.01.25_TC (kgMS/ha/d)', '07.01.25_Disponibilidad (kgMS/ha)': '07.01.25_Disponibilidad (kgMS/ha)', });
lyr_120125_19.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '12.01.25_TC (kgMS/ha/d)': '12.01.25_TC (kgMS/ha/d)', '12.01.25_Disponible (kgMS/ha)': '12.01.25_Disponible (kgMS/ha)', });
lyr_170125_20.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Disponible (kgMS/ha)': '17.01.25_Disponible (kgMS/ha)', });
lyr_220125_21.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (kgMS/ha/d)': '22.01.25_Disponible (kgMS/ha/d)', });
lyr_010225_22.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (kgMS/ha)': '01.02.25_Disponible (kgMS/ha)', });
lyr_030325_23.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '03.02.25_TC (kgMs/ha/d)': '03.02.25_TC (kgMs/ha/d)', '03.02.25_Disponible (kgMs/ha)': '03.02.25_Disponible (kgMs/ha)', });
lyr_130325_24.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '13.03.25_TC (kgMs/ha/d)': '13.03.25_TC (kgMs/ha/d)', '13.03.25_Disponible (kgMs/ha)': '13.03.25_Disponible (kgMs/ha)', });
lyr_180325_25.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'ha': 'ha', '18.03.25_TC (kgMs/ha/d)': '18.03.25_TC (kgMs/ha/d)', '18.03.25_Disponible (kgMs/ha)': '18.03.25_Disponible (kgMs/ha)', });
lyr_81224_13.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '8.12.24_TC': '', '8.12.24_Di': '', });
lyr_181224_14.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '18.12.24_TC (kgMS/ha/d)': 'TextEdit', '18.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_231224_15.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', '23.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_281224_16.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '28.12.24_TC (kgMS/ha/d)': 'TextEdit', '28.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_020125_17.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '02.01.25_TC (kgMS/ha/d)': 'TextEdit', '02.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_070125_18.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '07.01.25_TC (kgMS/ha/d)': 'TextEdit', '07.01.25_Disponibilidad (kgMS/ha)': 'TextEdit', });
lyr_120125_19.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '12.01.25_TC (kgMS/ha/d)': 'TextEdit', '12.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_170125_20.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_220125_21.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (kgMS/ha/d)': 'TextEdit', });
lyr_010225_22.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'TextEdit', '01.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_030325_23.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '03.02.25_TC (kgMs/ha/d)': 'TextEdit', '03.02.25_Disponible (kgMs/ha)': 'TextEdit', });
lyr_130325_24.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '13.03.25_TC (kgMs/ha/d)': 'TextEdit', '13.03.25_Disponible (kgMs/ha)': 'TextEdit', });
lyr_180325_25.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'ha': 'TextEdit', '18.03.25_TC (kgMs/ha/d)': 'TextEdit', '18.03.25_Disponible (kgMs/ha)': 'TextEdit', });
lyr_81224_13.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '8.12.24_TC': 'inline label - always visible', '8.12.24_Di': 'inline label - always visible', });
lyr_181224_14.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '18.12.24_TC (kgMS/ha/d)': 'inline label - always visible', '18.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_231224_15.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '23.12.24_TC (kgMS/ha/d)': 'inline label - always visible', '23.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_281224_16.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '28.12.24_TC (kgMS/ha/d)': 'inline label - always visible', '28.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_020125_17.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '02.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '02.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_070125_18.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '07.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '07.01.25_Disponibilidad (kgMS/ha)': 'inline label - always visible', });
lyr_120125_19.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '12.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '12.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_170125_20.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '17.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_220125_21.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.01.25_Disponible (kgMS/ha/d)': 'inline label - always visible', });
lyr_010225_22.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_030325_23.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '03.02.25_TC (kgMs/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMs/ha)': 'inline label - always visible', });
lyr_130325_24.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '13.03.25_TC (kgMs/ha/d)': 'inline label - always visible', '13.03.25_Disponible (kgMs/ha)': 'inline label - always visible', });
lyr_180325_25.set('fieldLabels', {'Name': 'inline label - always visible', 'Especie': 'inline label - always visible', 'ha': 'inline label - always visible', '18.03.25_TC (kgMs/ha/d)': 'inline label - always visible', '18.03.25_Disponible (kgMs/ha)': 'inline label - always visible', });
lyr_180325_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});