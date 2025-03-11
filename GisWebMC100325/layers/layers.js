var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_1401_1 = new ol.layer.Image({
                            opacity: 1,
                            title: '14.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1401_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1701_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '17.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1701_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2201_3 = new ol.layer.Image({
                            opacity: 1,
                            title: '22.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2201_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0102_4 = new ol.layer.Image({
                            opacity: 1,
                            title: '01.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0102_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_0302_5 = new ol.layer.Image({
                            opacity: 1,
                            title: '03.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0302_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0802_6 = new ol.layer.Image({
                            opacity: 1,
                            title: '08.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0802_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1302_7 = new ol.layer.Image({
                            opacity: 1,
                            title: '13.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1302_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1802_8 = new ol.layer.Image({
                            opacity: 1,
                            title: '18.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1802_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2102_9 = new ol.layer.Image({
                            opacity: 1,
                            title: '21.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2102_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2802_10 = new ol.layer.Image({
                            opacity: 1,
                            title: '28.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2802_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0503_11 = new ol.layer.Image({
                            opacity: 1,
                            title: '05.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0503_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1003_12 = new ol.layer.Image({
                            opacity: 1,
                            title: '10.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1003_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var format_140125_13 = new ol.format.GeoJSON();
var features_140125_13 = format_140125_13.readFeatures(json_140125_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_140125_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_140125_13.addFeatures(features_140125_13);
var lyr_140125_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_140125_13, 
                style: style_140125_13,
                popuplayertitle: '14.01.25',
                interactive: true,
                title: '<img src="styles/legend/140125_13.png" /> 14.01.25'
            });
var format_170125_14 = new ol.format.GeoJSON();
var features_170125_14 = format_170125_14.readFeatures(json_170125_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_170125_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_170125_14.addFeatures(features_170125_14);
var lyr_170125_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_170125_14, 
                style: style_170125_14,
                popuplayertitle: '17.01.25',
                interactive: true,
                title: '<img src="styles/legend/170125_14.png" /> 17.01.25'
            });
var format_220125_15 = new ol.format.GeoJSON();
var features_220125_15 = format_220125_15.readFeatures(json_220125_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_220125_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_220125_15.addFeatures(features_220125_15);
var lyr_220125_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_220125_15, 
                style: style_220125_15,
                popuplayertitle: '22.01.25',
                interactive: true,
                title: '<img src="styles/legend/220125_15.png" /> 22.01.25'
            });
var format_010225_16 = new ol.format.GeoJSON();
var features_010225_16 = format_010225_16.readFeatures(json_010225_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010225_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010225_16.addFeatures(features_010225_16);
var lyr_010225_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010225_16, 
                style: style_010225_16,
                popuplayertitle: '01.02.25',
                interactive: true,
                title: '<img src="styles/legend/010225_16.png" /> 01.02.25'
            });
var format_030225_17 = new ol.format.GeoJSON();
var features_030225_17 = format_030225_17.readFeatures(json_030225_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030225_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030225_17.addFeatures(features_030225_17);
var lyr_030225_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030225_17, 
                style: style_030225_17,
                popuplayertitle: '03.02.25',
                interactive: true,
                title: '<img src="styles/legend/030225_17.png" /> 03.02.25'
            });
var format_080225_18 = new ol.format.GeoJSON();
var features_080225_18 = format_080225_18.readFeatures(json_080225_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_080225_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_080225_18.addFeatures(features_080225_18);
var lyr_080225_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_080225_18, 
                style: style_080225_18,
                popuplayertitle: '08.02.25',
                interactive: true,
                title: '<img src="styles/legend/080225_18.png" /> 08.02.25'
            });
var format_130225_19 = new ol.format.GeoJSON();
var features_130225_19 = format_130225_19.readFeatures(json_130225_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_130225_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_130225_19.addFeatures(features_130225_19);
var lyr_130225_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_130225_19, 
                style: style_130225_19,
                popuplayertitle: '13.02.25',
                interactive: true,
                title: '<img src="styles/legend/130225_19.png" /> 13.02.25'
            });
var format_180225_20 = new ol.format.GeoJSON();
var features_180225_20 = format_180225_20.readFeatures(json_180225_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180225_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180225_20.addFeatures(features_180225_20);
var lyr_180225_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180225_20, 
                style: style_180225_20,
                popuplayertitle: '18.02.25',
                interactive: true,
                title: '<img src="styles/legend/180225_20.png" /> 18.02.25'
            });
var format_210225_21 = new ol.format.GeoJSON();
var features_210225_21 = format_210225_21.readFeatures(json_210225_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210225_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210225_21.addFeatures(features_210225_21);
var lyr_210225_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_210225_21, 
                style: style_210225_21,
                popuplayertitle: '21.02.25',
                interactive: true,
                title: '<img src="styles/legend/210225_21.png" /> 21.02.25'
            });
var format_280225_22 = new ol.format.GeoJSON();
var features_280225_22 = format_280225_22.readFeatures(json_280225_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280225_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280225_22.addFeatures(features_280225_22);
var lyr_280225_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280225_22, 
                style: style_280225_22,
                popuplayertitle: '28.02.25',
                interactive: true,
                title: '<img src="styles/legend/280225_22.png" /> 28.02.25'
            });
var format_050325_23 = new ol.format.GeoJSON();
var features_050325_23 = format_050325_23.readFeatures(json_050325_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_050325_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_050325_23.addFeatures(features_050325_23);
var lyr_050325_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_050325_23, 
                style: style_050325_23,
                popuplayertitle: '05.03.25',
                interactive: true,
                title: '<img src="styles/legend/050325_23.png" /> 05.03.25'
            });
var format_100325_24 = new ol.format.GeoJSON();
var features_100325_24 = format_100325_24.readFeatures(json_100325_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100325_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100325_24.addFeatures(features_100325_24);
var lyr_100325_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100325_24, 
                style: style_100325_24,
                popuplayertitle: '10.03.25',
                interactive: true,
                title: '<img src="styles/legend/100325_24.png" /> 10.03.25'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1401_1.setVisible(true);lyr_1701_2.setVisible(true);lyr_2201_3.setVisible(true);lyr_0102_4.setVisible(true);lyr_0302_5.setVisible(true);lyr_0802_6.setVisible(true);lyr_1302_7.setVisible(true);lyr_1802_8.setVisible(true);lyr_2102_9.setVisible(true);lyr_2802_10.setVisible(true);lyr_0503_11.setVisible(true);lyr_1003_12.setVisible(true);lyr_140125_13.setVisible(true);lyr_170125_14.setVisible(true);lyr_220125_15.setVisible(true);lyr_010225_16.setVisible(true);lyr_030225_17.setVisible(true);lyr_080225_18.setVisible(true);lyr_130225_19.setVisible(true);lyr_180225_20.setVisible(true);lyr_210225_21.setVisible(true);lyr_280225_22.setVisible(true);lyr_050325_23.setVisible(true);lyr_100325_24.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1401_1,lyr_1701_2,lyr_2201_3,lyr_0102_4,lyr_0302_5,lyr_0802_6,lyr_1302_7,lyr_1802_8,lyr_2102_9,lyr_2802_10,lyr_0503_11,lyr_1003_12,lyr_140125_13,lyr_170125_14,lyr_220125_15,lyr_010225_16,lyr_030225_17,lyr_080225_18,lyr_130225_19,lyr_180225_20,lyr_210225_21,lyr_280225_22,lyr_050325_23,lyr_100325_24];
lyr_140125_13.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '11.01.25_V': '11.01.25_V', '11.01.25_T': '11.01.25_T', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_170125_14.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Disponible (kgMS/ha)': '17.01.25_Disponible (kgMS/ha)', });
lyr_220125_15.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (kgMS/ha)': '22.01.25_Disponible (kgMS/ha)', });
lyr_010225_16.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '01.02.25_TC (kgMS/ha/d)': '01.02.25_TC (kgMS/ha/d)', '01.02.25_Disponible (kgMS/ha)': '01.02.25_Disponible (kgMS/ha)', });
lyr_030225_17.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (kgMS/ha)': '03.02.25_Disponible (kgMS/ha)', });
lyr_080225_18.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '08.02.25_TC (kgMS/ha/d)': '08.02.25_TC (kgMS/ha/d)', '08.02.25_Disponible (kgMS/ha)': '08.02.25_Disponible (kgMS/ha)', });
lyr_130225_19.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '13.02.25_TC (kgMS/ha/d)': '13.02.25_TC (kgMS/ha/d)', '13.02.25_Disponible (kgMS/ha)': '13.02.25_Disponible (kgMS/ha)', });
lyr_180225_20.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_210225_21.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '20.02.25_TC (kgMS/ha/d)': '20.02.25_TC (kgMS/ha/d)', '20.02.25_Disponible (kgMS/ha)': '20.02.25_Disponible (kgMS/ha)', });
lyr_280225_22.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '28.02.25_TC (kgMS/ha/d)': '28.02.25_TC (kgMS/ha/d)', '28.02.25_Disponible (kgMS/ha)': '28.02.25_Disponible (kgMS/ha)', });
lyr_050325_23.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_100325_24.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_140125_13.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '11.01.25_V': 'TextEdit', '11.01.25_T': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'Range', '14.01.25_Disponible (kgMS/ha)': 'Range', });
lyr_170125_14.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'Range', '17.01.25_Disponible (kgMS/ha)': 'Range', });
lyr_220125_15.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'Range', '22.01.25_Disponible (kgMS/ha)': 'Range', });
lyr_010225_16.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '01.02.25_TC (kgMS/ha/d)': 'Range', '01.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_030225_17.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'Range', '03.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_080225_18.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '08.02.25_TC (kgMS/ha/d)': 'Range', '08.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_130225_19.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '13.02.25_TC (kgMS/ha/d)': 'Range', '13.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_180225_20.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'Range', '18.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_210225_21.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '20.02.25_TC (kgMS/ha/d)': 'Range', '20.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_280225_22.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '28.02.25_TC (kgMS/ha/d)': 'Range', '28.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_050325_23.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'Range', '05.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_100325_24.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'Range', '10.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_140125_13.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '11.01.25_V': 'hidden field', '11.01.25_T': 'hidden field', '14.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_170125_14.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '17.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_220125_15.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_010225_16.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '01.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_030225_17.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_080225_18.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '08.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_130225_19.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '13.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '13.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_180225_20.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_210225_21.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '20.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_280225_22.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '28.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '28.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_050325_23.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_100325_24.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_100325_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});