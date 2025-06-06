var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_2312_1 = new ol.layer.Image({
                            opacity: 1,
                            title: '23.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2312_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_3012_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '30.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/3012_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0401_3 = new ol.layer.Image({
                            opacity: 1,
                            title: '04.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0401_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0901_4 = new ol.layer.Image({
                            opacity: 1,
                            title: '09.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0901_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1101_5 = new ol.layer.Image({
                            opacity: 1,
                            title: '11.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1101_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1401_6 = new ol.layer.Image({
                            opacity: 1,
                            title: '14.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1401_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1701_7 = new ol.layer.Image({
                            opacity: 1,
                            title: '17.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1701_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2201_8 = new ol.layer.Image({
                            opacity: 1,
                            title: '22.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2201_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0102_9 = new ol.layer.Image({
                            opacity: 1,
                            title: '01.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0102_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0302_10 = new ol.layer.Image({
                            opacity: 1,
                            title: '03.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0302_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var format_231224_11 = new ol.format.GeoJSON();
var features_231224_11 = format_231224_11.readFeatures(json_231224_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_231224_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224_11.addFeatures(features_231224_11);
var lyr_231224_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224_11, 
                style: style_231224_11,
                popuplayertitle: '23.12.24',
                interactive: true,
                title: '<img src="styles/legend/231224_11.png" /> 23.12.24'
            });
var format_301224_12 = new ol.format.GeoJSON();
var features_301224_12 = format_301224_12.readFeatures(json_301224_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_301224_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_301224_12.addFeatures(features_301224_12);
var lyr_301224_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_301224_12, 
                style: style_301224_12,
                popuplayertitle: '30.12.24',
                interactive: true,
                title: '<img src="styles/legend/301224_12.png" /> 30.12.24'
            });
var format_040125_13 = new ol.format.GeoJSON();
var features_040125_13 = format_040125_13.readFeatures(json_040125_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040125_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040125_13.addFeatures(features_040125_13);
var lyr_040125_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040125_13, 
                style: style_040125_13,
                popuplayertitle: '04.01.25',
                interactive: true,
                title: '<img src="styles/legend/040125_13.png" /> 04.01.25'
            });
var format_090125_14 = new ol.format.GeoJSON();
var features_090125_14 = format_090125_14.readFeatures(json_090125_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_090125_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_090125_14.addFeatures(features_090125_14);
var lyr_090125_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_090125_14, 
                style: style_090125_14,
                popuplayertitle: '09.01.25',
                interactive: true,
                title: '<img src="styles/legend/090125_14.png" /> 09.01.25'
            });
var format_110125_15 = new ol.format.GeoJSON();
var features_110125_15 = format_110125_15.readFeatures(json_110125_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_110125_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110125_15.addFeatures(features_110125_15);
var lyr_110125_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_110125_15, 
                style: style_110125_15,
                popuplayertitle: '11.01.25',
                interactive: true,
                title: '<img src="styles/legend/110125_15.png" /> 11.01.25'
            });
var format_140125_16 = new ol.format.GeoJSON();
var features_140125_16 = format_140125_16.readFeatures(json_140125_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_140125_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_140125_16.addFeatures(features_140125_16);
var lyr_140125_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_140125_16, 
                style: style_140125_16,
                popuplayertitle: '14.01.25',
                interactive: true,
                title: '<img src="styles/legend/140125_16.png" /> 14.01.25'
            });
var format_170125_17 = new ol.format.GeoJSON();
var features_170125_17 = format_170125_17.readFeatures(json_170125_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_170125_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_170125_17.addFeatures(features_170125_17);
var lyr_170125_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_170125_17, 
                style: style_170125_17,
                popuplayertitle: '17.01.25',
                interactive: true,
                title: '<img src="styles/legend/170125_17.png" /> 17.01.25'
            });
var format_220125_18 = new ol.format.GeoJSON();
var features_220125_18 = format_220125_18.readFeatures(json_220125_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220125_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220125_18.addFeatures(features_220125_18);
var lyr_220125_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220125_18, 
                style: style_220125_18,
                popuplayertitle: '22.01.25',
                interactive: true,
                title: '<img src="styles/legend/220125_18.png" /> 22.01.25'
            });
var format_010225_19 = new ol.format.GeoJSON();
var features_010225_19 = format_010225_19.readFeatures(json_010225_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010225_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010225_19.addFeatures(features_010225_19);
var lyr_010225_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010225_19, 
                style: style_010225_19,
                popuplayertitle: '01.02.25',
                interactive: true,
                title: '<img src="styles/legend/010225_19.png" /> 01.02.25'
            });
var format_030225_20 = new ol.format.GeoJSON();
var features_030225_20 = format_030225_20.readFeatures(json_030225_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030225_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030225_20.addFeatures(features_030225_20);
var lyr_030225_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030225_20, 
                style: style_030225_20,
                popuplayertitle: '03.02.25',
                interactive: true,
                title: '<img src="styles/legend/030225_20.png" /> 03.02.25'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_2312_1.setVisible(true);lyr_3012_2.setVisible(true);lyr_0401_3.setVisible(true);lyr_0901_4.setVisible(true);lyr_1101_5.setVisible(true);lyr_1401_6.setVisible(true);lyr_1701_7.setVisible(true);lyr_2201_8.setVisible(true);lyr_0102_9.setVisible(true);lyr_0302_10.setVisible(true);lyr_231224_11.setVisible(true);lyr_301224_12.setVisible(true);lyr_040125_13.setVisible(true);lyr_090125_14.setVisible(true);lyr_110125_15.setVisible(true);lyr_140125_16.setVisible(true);lyr_170125_17.setVisible(true);lyr_220125_18.setVisible(true);lyr_010225_19.setVisible(true);lyr_030225_20.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_2312_1,lyr_3012_2,lyr_0401_3,lyr_0901_4,lyr_1101_5,lyr_1401_6,lyr_1701_7,lyr_2201_8,lyr_0102_9,lyr_0302_10,lyr_231224_11,lyr_301224_12,lyr_040125_13,lyr_090125_14,lyr_110125_15,lyr_140125_16,lyr_170125_17,lyr_220125_18,lyr_010225_19,lyr_030225_20];
lyr_231224_11.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_301224_12.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_040125_13.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_090125_14.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '04.01.25_V': '04.01.25_V', '04.01.25_T': '04.01.25_T', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_110125_15.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_Disponible (kgMS/ha)': '11.01.25_Disponible (kgMS/ha)', });
lyr_140125_16.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '11.01.25_V': '11.01.25_V', '11.01.25_T': '11.01.25_T', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_170125_17.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Disponible (kgMS/ha)': '17.01.25_Disponible (kgMS/ha)', });
lyr_220125_18.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (kgMS/ha)': '22.01.25_Disponible (kgMS/ha)', });
lyr_010225_19.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (kgMS/ha)': '01.02.25_Disponible (kgMS/ha)', });
lyr_030225_20.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (kgMS/ha)': '03.02.25_Disponible (kgMS/ha)', });
lyr_231224_11.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'Range', '23.12.24_Disponible (kgMS/ha)': 'Range', });
lyr_301224_12.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'Range', '30.12.24_Disponible (kgMS/ha)': 'Range', });
lyr_040125_13.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'Range', '04.01.25_Disponible (kgMS/ha)': 'Range', });
lyr_090125_14.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '04.01.25_V': 'TextEdit', '04.01.25_T': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'Range', '09.01.25_Disponible (kgMS/ha)': 'Range', });
lyr_110125_15.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'Range', '11.01.25_Disponible (kgMS/ha)': 'Range', });
lyr_140125_16.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '11.01.25_V': 'TextEdit', '11.01.25_T': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'Range', '14.01.25_Disponible (kgMS/ha)': 'Range', });
lyr_170125_17.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'Range', '17.01.25_Disponible (kgMS/ha)': 'Range', });
lyr_220125_18.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'Range', '22.01.25_Disponible (kgMS/ha)': 'Range', });
lyr_010225_19.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'Range', '01.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_030225_20.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'Range', '03.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_231224_11.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '23.12.24_TC (kgMS/ha/d)': 'inline label - always visible', '23.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_301224_12.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '30.12.24_TC (kgMS/ha/d)': 'inline label - always visible', '30.12.24_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_040125_13.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '04.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '04.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_090125_14.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '04.01.25_V': 'no label', '04.01.25_T': 'no label', '09.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '09.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_110125_15.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '11.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '11.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_140125_16.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '11.01.25_V': 'no label', '11.01.25_T': 'no label', '14.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_170125_17.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '17.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_220125_18.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_010225_19.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_030225_20.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_030225_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});