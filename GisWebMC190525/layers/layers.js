var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_3003_1 = new ol.layer.Image({
                            opacity: 1,
                            title: '30.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/3003_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0404_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '04.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0404_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1404_3 = new ol.layer.Image({
                            opacity: 1,
                            title: '14.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1404_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1904_4 = new ol.layer.Image({
                            opacity: 1,
                            title: '19.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1904_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2204_5 = new ol.layer.Image({
                            opacity: 1,
                            title: '22.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2204_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2904_6 = new ol.layer.Image({
                            opacity: 1,
                            title: '29.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2904_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0205_7 = new ol.layer.Image({
                            opacity: 1,
                            title: '02.05',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0205_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0405_8 = new ol.layer.Image({
                            opacity: 1,
                            title: '04.05',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0405_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0905_9 = new ol.layer.Image({
                            opacity: 1,
                            title: '09.05',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0905_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1205_10 = new ol.layer.Image({
                            opacity: 1,
                            title: '12.05',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1205_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1905_11 = new ol.layer.Image({
                            opacity: 1,
                            title: '19.05',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1905_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var format_300325_12 = new ol.format.GeoJSON();
var features_300325_12 = format_300325_12.readFeatures(json_300325_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_300325_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_300325_12.addFeatures(features_300325_12);
var lyr_300325_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_300325_12, 
                style: style_300325_12,
                popuplayertitle: '30.03.25',
                interactive: true,
                title: '<img src="styles/legend/300325_12.png" /> 30.03.25'
            });
var format_040425_13 = new ol.format.GeoJSON();
var features_040425_13 = format_040425_13.readFeatures(json_040425_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040425_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040425_13.addFeatures(features_040425_13);
var lyr_040425_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040425_13, 
                style: style_040425_13,
                popuplayertitle: '04.04.25',
                interactive: true,
                title: '<img src="styles/legend/040425_13.png" /> 04.04.25'
            });
var format_140425_14 = new ol.format.GeoJSON();
var features_140425_14 = format_140425_14.readFeatures(json_140425_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_140425_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_140425_14.addFeatures(features_140425_14);
var lyr_140425_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_140425_14, 
                style: style_140425_14,
                popuplayertitle: '14.04.25',
                interactive: true,
                title: '<img src="styles/legend/140425_14.png" /> 14.04.25'
            });
var format_190425_15 = new ol.format.GeoJSON();
var features_190425_15 = format_190425_15.readFeatures(json_190425_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_190425_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_190425_15.addFeatures(features_190425_15);
var lyr_190425_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_190425_15, 
                style: style_190425_15,
                popuplayertitle: '19.04.25',
                interactive: true,
                title: '<img src="styles/legend/190425_15.png" /> 19.04.25'
            });
var format_220425_16 = new ol.format.GeoJSON();
var features_220425_16 = format_220425_16.readFeatures(json_220425_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220425_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220425_16.addFeatures(features_220425_16);
var lyr_220425_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220425_16, 
                style: style_220425_16,
                popuplayertitle: '22.04.25',
                interactive: true,
                title: '<img src="styles/legend/220425_16.png" /> 22.04.25'
            });
var format_290425_17 = new ol.format.GeoJSON();
var features_290425_17 = format_290425_17.readFeatures(json_290425_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_290425_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_290425_17.addFeatures(features_290425_17);
var lyr_290425_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_290425_17, 
                style: style_290425_17,
                popuplayertitle: '29.04.25',
                interactive: true,
                title: '<img src="styles/legend/290425_17.png" /> 29.04.25'
            });
var format_040525_18 = new ol.format.GeoJSON();
var features_040525_18 = format_040525_18.readFeatures(json_040525_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040525_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040525_18.addFeatures(features_040525_18);
var lyr_040525_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040525_18, 
                style: style_040525_18,
                popuplayertitle: '04.05.25',
                interactive: true,
                title: '<img src="styles/legend/040525_18.png" /> 04.05.25'
            });
var format_120525_19 = new ol.format.GeoJSON();
var features_120525_19 = format_120525_19.readFeatures(json_120525_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_120525_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_120525_19.addFeatures(features_120525_19);
var lyr_120525_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_120525_19, 
                style: style_120525_19,
                popuplayertitle: '12.05.25',
                interactive: true,
                title: '<img src="styles/legend/120525_19.png" /> 12.05.25'
            });
var format_190525_20 = new ol.format.GeoJSON();
var features_190525_20 = format_190525_20.readFeatures(json_190525_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_190525_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_190525_20.addFeatures(features_190525_20);
var lyr_190525_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_190525_20, 
                style: style_190525_20,
                popuplayertitle: '19.05.25',
                interactive: true,
                title: '<img src="styles/legend/190525_20.png" /> 19.05.25'
            });
var group_SHP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'SHP'});
var group_NDVI = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'NDVI'});

lyr_GoogleSatellite_0.setVisible(true);lyr_3003_1.setVisible(true);lyr_0404_2.setVisible(true);lyr_1404_3.setVisible(true);lyr_1904_4.setVisible(true);lyr_2204_5.setVisible(true);lyr_2904_6.setVisible(true);lyr_0205_7.setVisible(true);lyr_0405_8.setVisible(true);lyr_0905_9.setVisible(true);lyr_1205_10.setVisible(true);lyr_1905_11.setVisible(true);lyr_300325_12.setVisible(true);lyr_040425_13.setVisible(true);lyr_140425_14.setVisible(true);lyr_190425_15.setVisible(true);lyr_220425_16.setVisible(true);lyr_290425_17.setVisible(true);lyr_040525_18.setVisible(true);lyr_120525_19.setVisible(true);lyr_190525_20.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_3003_1,lyr_0404_2,lyr_1404_3,lyr_1904_4,lyr_2204_5,lyr_2904_6,lyr_0205_7,lyr_0405_8,lyr_0905_9,lyr_1205_10,lyr_1905_11,lyr_300325_12,lyr_040425_13,lyr_140425_14,lyr_190425_15,lyr_220425_16,lyr_290425_17,lyr_040525_18,lyr_120525_19,lyr_190525_20];
lyr_300325_12.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', });
lyr_040425_13.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', });
lyr_140425_14.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', });
lyr_190425_15.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', });
lyr_220425_16.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', });
lyr_290425_17.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', });
lyr_040525_18.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '04.05_TC (kgMS/ha/d)': '04.05_TC (kgMS/ha/d)', '04.05_Disponible (kgMS/ha)': '04.05_Disponible (kgMS/ha)', '02.05_TC (kgMS/ha/d)': '02.05_TC (kgMS/ha/d)', '02.05_Disponible (kgMS/ha)': '02.05_Disponible (kgMS/ha)', });
lyr_120525_19.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '09.05_TC (kgMS/ha/d)': '09.05_TC (kgMS/ha/d)', '09.05_Disponible (kgMS/ha)': '09.05_Disponible (kgMS/ha)', '12.05_TC (kgMS/ha/d)': '12.05_TC (kgMS/ha/d)', '12.05_Disponible (kgMS/ha)': '12.05_Disponible (kgMS/ha)', });
lyr_190525_20.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '19.05_TC (kgMS/ha/d)': '19.05_TC (kgMS/ha/d)', '19.05_Disponible (kgMS/ha)': '19.05_Disponible (kgMS/ha)', });
lyr_300325_12.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', });
lyr_040425_13.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', });
lyr_140425_14.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', });
lyr_190425_15.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', });
lyr_220425_16.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', });
lyr_290425_17.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': '', });
lyr_040525_18.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '04.05_TC (kgMS/ha/d)': 'Range', '04.05_Disponible (kgMS/ha)': 'Range', '02.05_TC (kgMS/ha/d)': 'Range', '02.05_Disponible (kgMS/ha)': 'Range', });
lyr_120525_19.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '09.05_TC (kgMS/ha/d)': 'Range', '09.05_Disponible (kgMS/ha)': 'Range', '12.05_TC (kgMS/ha/d)': 'Range', '12.05_Disponible (kgMS/ha)': 'Range', });
lyr_190525_20.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '19.05_TC (kgMS/ha/d)': 'Range', '19.05_Disponible (kgMS/ha)': 'Range', });
lyr_300325_12.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', });
lyr_040425_13.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', });
lyr_140425_14.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', });
lyr_190425_15.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', });
lyr_220425_16.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', });
lyr_290425_17.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', });
lyr_040525_18.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '04.05_TC (kgMS/ha/d)': 'inline label - always visible', '04.05_Disponible (kgMS/ha)': 'inline label - always visible', '02.05_TC (kgMS/ha/d)': 'inline label - always visible', '02.05_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_120525_19.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '09.05_TC (kgMS/ha/d)': 'inline label - always visible', '09.05_Disponible (kgMS/ha)': 'inline label - always visible', '12.05_TC (kgMS/ha/d)': 'inline label - always visible', '12.05_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_190525_20.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '19.05_TC (kgMS/ha/d)': 'inline label - always visible', '19.05_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_190525_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});