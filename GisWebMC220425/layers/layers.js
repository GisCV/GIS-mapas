var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_2802_1 = new ol.layer.Image({
                            opacity: 1,
                            title: '28.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2802_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0503_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '05.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0503_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1003_3 = new ol.layer.Image({
                            opacity: 1,
                            title: '10.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1003_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1503_4 = new ol.layer.Image({
                            opacity: 1,
                            title: '15.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1503_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1803_5 = new ol.layer.Image({
                            opacity: 1,
                            title: '18.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1803_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.136048, -3934047.941968, -6405011.505827, -3931377.283330]
                            })
                        });
var lyr_2003_6 = new ol.layer.Image({
                            opacity: 1,
                            title: '20.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2003_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_3003_7 = new ol.layer.Image({
                            opacity: 1,
                            title: '30.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/3003_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0404_8 = new ol.layer.Image({
                            opacity: 1,
                            title: '04.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0404_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1404_9 = new ol.layer.Image({
                            opacity: 1,
                            title: '14.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1404_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1904_10 = new ol.layer.Image({
                            opacity: 1,
                            title: '19.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1904_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2204_11 = new ol.layer.Image({
                            opacity: 1,
                            title: '22.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2204_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var format_280225_12 = new ol.format.GeoJSON();
var features_280225_12 = format_280225_12.readFeatures(json_280225_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280225_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280225_12.addFeatures(features_280225_12);
var lyr_280225_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280225_12, 
                style: style_280225_12,
                popuplayertitle: '28.02.25',
                interactive: true,
                title: '<img src="styles/legend/280225_12.png" /> 28.02.25'
            });
var format_050325_13 = new ol.format.GeoJSON();
var features_050325_13 = format_050325_13.readFeatures(json_050325_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_050325_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_050325_13.addFeatures(features_050325_13);
var lyr_050325_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_050325_13, 
                style: style_050325_13,
                popuplayertitle: '05.03.25',
                interactive: true,
                title: '<img src="styles/legend/050325_13.png" /> 05.03.25'
            });
var format_100325_14 = new ol.format.GeoJSON();
var features_100325_14 = format_100325_14.readFeatures(json_100325_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100325_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100325_14.addFeatures(features_100325_14);
var lyr_100325_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100325_14, 
                style: style_100325_14,
                popuplayertitle: '10.03.25',
                interactive: true,
                title: '<img src="styles/legend/100325_14.png" /> 10.03.25'
            });
var format_150325_15 = new ol.format.GeoJSON();
var features_150325_15 = format_150325_15.readFeatures(json_150325_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_150325_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_150325_15.addFeatures(features_150325_15);
var lyr_150325_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_150325_15, 
                style: style_150325_15,
                popuplayertitle: '15.03.25',
                interactive: true,
                title: '<img src="styles/legend/150325_15.png" /> 15.03.25'
            });
var format_180325_16 = new ol.format.GeoJSON();
var features_180325_16 = format_180325_16.readFeatures(json_180325_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180325_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180325_16.addFeatures(features_180325_16);
var lyr_180325_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180325_16, 
                style: style_180325_16,
                popuplayertitle: '18.03.25',
                interactive: true,
                title: '<img src="styles/legend/180325_16.png" /> 18.03.25'
            });
var format_200325_17 = new ol.format.GeoJSON();
var features_200325_17 = format_200325_17.readFeatures(json_200325_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200325_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200325_17.addFeatures(features_200325_17);
var lyr_200325_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200325_17, 
                style: style_200325_17,
                popuplayertitle: '20.03.25',
                interactive: true,
                title: '<img src="styles/legend/200325_17.png" /> 20.03.25'
            });
var format_300325_18 = new ol.format.GeoJSON();
var features_300325_18 = format_300325_18.readFeatures(json_300325_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_300325_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_300325_18.addFeatures(features_300325_18);
var lyr_300325_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_300325_18, 
                style: style_300325_18,
                popuplayertitle: '30.03.25',
                interactive: true,
                title: '<img src="styles/legend/300325_18.png" /> 30.03.25'
            });
var format_040425_19 = new ol.format.GeoJSON();
var features_040425_19 = format_040425_19.readFeatures(json_040425_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040425_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040425_19.addFeatures(features_040425_19);
var lyr_040425_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040425_19, 
                style: style_040425_19,
                popuplayertitle: '04.04.25',
                interactive: true,
                title: '<img src="styles/legend/040425_19.png" /> 04.04.25'
            });
var format_140425_20 = new ol.format.GeoJSON();
var features_140425_20 = format_140425_20.readFeatures(json_140425_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_140425_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_140425_20.addFeatures(features_140425_20);
var lyr_140425_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_140425_20, 
                style: style_140425_20,
                popuplayertitle: '14.04.25',
                interactive: true,
                title: '<img src="styles/legend/140425_20.png" /> 14.04.25'
            });
var format_190425_21 = new ol.format.GeoJSON();
var features_190425_21 = format_190425_21.readFeatures(json_190425_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_190425_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_190425_21.addFeatures(features_190425_21);
var lyr_190425_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_190425_21, 
                style: style_190425_21,
                popuplayertitle: '19.04.25',
                interactive: true,
                title: '<img src="styles/legend/190425_21.png" /> 19.04.25'
            });
var format_220425_22 = new ol.format.GeoJSON();
var features_220425_22 = format_220425_22.readFeatures(json_220425_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220425_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220425_22.addFeatures(features_220425_22);
var lyr_220425_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220425_22, 
                style: style_220425_22,
                popuplayertitle: '22.04.25',
                interactive: true,
                title: '<img src="styles/legend/220425_22.png" /> 22.04.25'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_2802_1.setVisible(true);lyr_0503_2.setVisible(true);lyr_1003_3.setVisible(true);lyr_1503_4.setVisible(true);lyr_1803_5.setVisible(true);lyr_2003_6.setVisible(true);lyr_3003_7.setVisible(true);lyr_0404_8.setVisible(true);lyr_1404_9.setVisible(true);lyr_1904_10.setVisible(true);lyr_2204_11.setVisible(true);lyr_280225_12.setVisible(true);lyr_050325_13.setVisible(true);lyr_100325_14.setVisible(true);lyr_150325_15.setVisible(true);lyr_180325_16.setVisible(true);lyr_200325_17.setVisible(true);lyr_300325_18.setVisible(true);lyr_040425_19.setVisible(true);lyr_140425_20.setVisible(true);lyr_190425_21.setVisible(true);lyr_220425_22.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_2802_1,lyr_0503_2,lyr_1003_3,lyr_1503_4,lyr_1803_5,lyr_2003_6,lyr_3003_7,lyr_0404_8,lyr_1404_9,lyr_1904_10,lyr_2204_11,lyr_280225_12,lyr_050325_13,lyr_100325_14,lyr_150325_15,lyr_180325_16,lyr_200325_17,lyr_300325_18,lyr_040425_19,lyr_140425_20,lyr_190425_21,lyr_220425_22];
lyr_280225_12.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '28.02.25_TC (kgMS/ha/d)': '28.02.25_TC (kgMS/ha/d)', '28.02.25_Disponible (kgMS/ha)': '28.02.25_Disponible (kgMS/ha)', });
lyr_050325_13.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_100325_14.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_150325_15.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (kgMS/ha)': '15.03.25_Disponible (kgMS/ha)', });
lyr_180325_16.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '18.03.25_TC (kgMS/ha/d)': '18.03.25_TC (kgMS/ha/d)', '18.03.25_Disponible (kgMS/ha)': '18.03.25_Disponible (kgMS/ha)', });
lyr_200325_17.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '20.03.25_TC (kgMS/ha/d)': '20.03.25_TC (kgMS/ha/d)', '20.03.25_Disponible (kgMS/ha)': '20.03.25_Disponible (kgMS/ha)', });
lyr_300325_18.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '30.03.25_TC (kgMS/ha/d)': '30.03.25_TC (kgMS/ha/d)', '30.03.25_Disponible (kgMS/ha)': '30.03.25_Disponible (kgMS/ha)', });
lyr_040425_19.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '04.04.25_TC (kgMS/ha/d)': '04.04.25_TC (kgMS/ha/d)', '04.04.25_Disponible (kgMS/ha)': '04.04.25_Disponible (kgMS/ha)', });
lyr_140425_20.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '14.04.25_TC (kgMS/ha/d)': '14.04.25_TC (kgMS/ha/d)', '14.04.25_Disponible (kgMS/ha)': '14.04.25_Disponible (kgMS/ha)', });
lyr_190425_21.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '19.04.25_TC (kgMS/ha/d)': '19.04.25_TC (kgMS/ha/d)', '19.04.25_Disponible (kgMS/ha)': '19.04.25_Disponible (kgMS/ha)', });
lyr_220425_22.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '22.04.25_TC (kgMS/ha/d)': '22.04.25_TC (kgMS/ha/d)', '22.04.25_Disponible (kgMS/ha)': '22.04.25_Disponible (kgMS/ha)', });
lyr_280225_12.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '28.02.25_TC (kgMS/ha/d)': 'Range', '28.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_050325_13.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'Range', '05.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_100325_14.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'Range', '10.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_150325_15.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'Range', '15.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_180325_16.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '18.03.25_TC (kgMS/ha/d)': 'Range', '18.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_200325_17.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '20.03.25_TC (kgMS/ha/d)': 'Range', '20.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_300325_18.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '30.03.25_TC (kgMS/ha/d)': 'Range', '30.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_040425_19.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '04.04.25_TC (kgMS/ha/d)': 'Range', '04.04.25_Disponible (kgMS/ha)': 'Range', });
lyr_140425_20.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '14.04.25_TC (kgMS/ha/d)': 'Range', '14.04.25_Disponible (kgMS/ha)': 'Range', });
lyr_190425_21.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '19.04.25_TC (kgMS/ha/d)': 'Range', '19.04.25_Disponible (kgMS/ha)': 'Range', });
lyr_220425_22.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '22.04.25_TC (kgMS/ha/d)': 'Range', '22.04.25_Disponible (kgMS/ha)': 'Range', });
lyr_280225_12.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '28.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '28.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_050325_13.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_100325_14.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_150325_15.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_180325_16.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '18.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_200325_17.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '20.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_300325_18.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '30.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '30.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_040425_19.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '04.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '04.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_140425_20.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '14.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_190425_21.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '19.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '19.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_220425_22.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '22.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_220425_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});