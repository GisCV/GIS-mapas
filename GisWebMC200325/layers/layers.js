var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_0302_1 = new ol.layer.Image({
                            opacity: 1,
                            title: '03.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0302_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0802_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '08.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0802_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1302_3 = new ol.layer.Image({
                            opacity: 1,
                            title: '13.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1302_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1802_4 = new ol.layer.Image({
                            opacity: 1,
                            title: '18.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1802_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2102_5 = new ol.layer.Image({
                            opacity: 1,
                            title: '21.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2102_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2802_6 = new ol.layer.Image({
                            opacity: 1,
                            title: '28.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2802_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0503_7 = new ol.layer.Image({
                            opacity: 1,
                            title: '05.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0503_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1003_8 = new ol.layer.Image({
                            opacity: 1,
                            title: '10.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1003_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1503_9 = new ol.layer.Image({
                            opacity: 1,
                            title: '15.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1503_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1803_10 = new ol.layer.Image({
                            opacity: 1,
                            title: '18.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1803_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.136048, -3934047.941968, -6405011.505827, -3931377.283330]
                            })
                        });
var lyr_2003_11 = new ol.layer.Image({
                            opacity: 1,
                            title: '20.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2003_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var format_030225_12 = new ol.format.GeoJSON();
var features_030225_12 = format_030225_12.readFeatures(json_030225_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030225_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030225_12.addFeatures(features_030225_12);
var lyr_030225_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030225_12, 
                style: style_030225_12,
                popuplayertitle: '03.02.25',
                interactive: true,
                title: '<img src="styles/legend/030225_12.png" /> 03.02.25'
            });
var format_080225_13 = new ol.format.GeoJSON();
var features_080225_13 = format_080225_13.readFeatures(json_080225_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_080225_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_080225_13.addFeatures(features_080225_13);
var lyr_080225_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_080225_13, 
                style: style_080225_13,
                popuplayertitle: '08.02.25',
                interactive: true,
                title: '<img src="styles/legend/080225_13.png" /> 08.02.25'
            });
var format_130225_14 = new ol.format.GeoJSON();
var features_130225_14 = format_130225_14.readFeatures(json_130225_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_130225_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_130225_14.addFeatures(features_130225_14);
var lyr_130225_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_130225_14, 
                style: style_130225_14,
                popuplayertitle: '13.02.25',
                interactive: true,
                title: '<img src="styles/legend/130225_14.png" /> 13.02.25'
            });
var format_180225_15 = new ol.format.GeoJSON();
var features_180225_15 = format_180225_15.readFeatures(json_180225_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180225_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180225_15.addFeatures(features_180225_15);
var lyr_180225_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180225_15, 
                style: style_180225_15,
                popuplayertitle: '18.02.25',
                interactive: true,
                title: '<img src="styles/legend/180225_15.png" /> 18.02.25'
            });
var format_210225_16 = new ol.format.GeoJSON();
var features_210225_16 = format_210225_16.readFeatures(json_210225_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210225_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210225_16.addFeatures(features_210225_16);
var lyr_210225_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_210225_16, 
                style: style_210225_16,
                popuplayertitle: '21.02.25',
                interactive: true,
                title: '<img src="styles/legend/210225_16.png" /> 21.02.25'
            });
var format_280225_17 = new ol.format.GeoJSON();
var features_280225_17 = format_280225_17.readFeatures(json_280225_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280225_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280225_17.addFeatures(features_280225_17);
var lyr_280225_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280225_17, 
                style: style_280225_17,
                popuplayertitle: '28.02.25',
                interactive: true,
                title: '<img src="styles/legend/280225_17.png" /> 28.02.25'
            });
var format_050325_18 = new ol.format.GeoJSON();
var features_050325_18 = format_050325_18.readFeatures(json_050325_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_050325_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_050325_18.addFeatures(features_050325_18);
var lyr_050325_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_050325_18, 
                style: style_050325_18,
                popuplayertitle: '05.03.25',
                interactive: true,
                title: '<img src="styles/legend/050325_18.png" /> 05.03.25'
            });
var format_100325_19 = new ol.format.GeoJSON();
var features_100325_19 = format_100325_19.readFeatures(json_100325_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100325_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100325_19.addFeatures(features_100325_19);
var lyr_100325_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100325_19, 
                style: style_100325_19,
                popuplayertitle: '10.03.25',
                interactive: true,
                title: '<img src="styles/legend/100325_19.png" /> 10.03.25'
            });
var format_150325_20 = new ol.format.GeoJSON();
var features_150325_20 = format_150325_20.readFeatures(json_150325_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_150325_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_150325_20.addFeatures(features_150325_20);
var lyr_150325_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_150325_20, 
                style: style_150325_20,
                popuplayertitle: '15.03.25',
                interactive: true,
                title: '<img src="styles/legend/150325_20.png" /> 15.03.25'
            });
var format_180325_21 = new ol.format.GeoJSON();
var features_180325_21 = format_180325_21.readFeatures(json_180325_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180325_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180325_21.addFeatures(features_180325_21);
var lyr_180325_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_180325_21, 
                style: style_180325_21,
                popuplayertitle: '18.03.25',
                interactive: true,
                title: '<img src="styles/legend/180325_21.png" /> 18.03.25'
            });
var format_200325_22 = new ol.format.GeoJSON();
var features_200325_22 = format_200325_22.readFeatures(json_200325_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200325_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200325_22.addFeatures(features_200325_22);
var lyr_200325_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200325_22, 
                style: style_200325_22,
                popuplayertitle: '20.03.25',
                interactive: true,
                title: '<img src="styles/legend/200325_22.png" /> 20.03.25'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_0302_1.setVisible(true);lyr_0802_2.setVisible(true);lyr_1302_3.setVisible(true);lyr_1802_4.setVisible(true);lyr_2102_5.setVisible(true);lyr_2802_6.setVisible(true);lyr_0503_7.setVisible(true);lyr_1003_8.setVisible(true);lyr_1503_9.setVisible(true);lyr_1803_10.setVisible(true);lyr_2003_11.setVisible(true);lyr_030225_12.setVisible(true);lyr_080225_13.setVisible(true);lyr_130225_14.setVisible(true);lyr_180225_15.setVisible(true);lyr_210225_16.setVisible(true);lyr_280225_17.setVisible(true);lyr_050325_18.setVisible(true);lyr_100325_19.setVisible(true);lyr_150325_20.setVisible(true);lyr_180325_21.setVisible(true);lyr_200325_22.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_0302_1,lyr_0802_2,lyr_1302_3,lyr_1802_4,lyr_2102_5,lyr_2802_6,lyr_0503_7,lyr_1003_8,lyr_1503_9,lyr_1803_10,lyr_2003_11,lyr_030225_12,lyr_080225_13,lyr_130225_14,lyr_180225_15,lyr_210225_16,lyr_280225_17,lyr_050325_18,lyr_100325_19,lyr_150325_20,lyr_180325_21,lyr_200325_22];
lyr_030225_12.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (kgMS/ha)': '03.02.25_Disponible (kgMS/ha)', });
lyr_080225_13.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '08.02.25_TC (kgMS/ha/d)': '08.02.25_TC (kgMS/ha/d)', '08.02.25_Disponible (kgMS/ha)': '08.02.25_Disponible (kgMS/ha)', });
lyr_130225_14.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '13.02.25_TC (kgMS/ha/d)': '13.02.25_TC (kgMS/ha/d)', '13.02.25_Disponible (kgMS/ha)': '13.02.25_Disponible (kgMS/ha)', });
lyr_180225_15.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_210225_16.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '20.02.25_TC (kgMS/ha/d)': '20.02.25_TC (kgMS/ha/d)', '20.02.25_Disponible (kgMS/ha)': '20.02.25_Disponible (kgMS/ha)', });
lyr_280225_17.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '28.02.25_TC (kgMS/ha/d)': '28.02.25_TC (kgMS/ha/d)', '28.02.25_Disponible (kgMS/ha)': '28.02.25_Disponible (kgMS/ha)', });
lyr_050325_18.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_100325_19.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_150325_20.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (kgMS/ha)': '15.03.25_Disponible (kgMS/ha)', });
lyr_180325_21.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '18.03.25_TC (kgMS/ha/d)': '18.03.25_TC (kgMS/ha/d)', '18.03.25_Disponible (kgMS/ha)': '18.03.25_Disponible (kgMS/ha)', });
lyr_200325_22.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '20.03.25_TC (kgMS/ha/d)': '20.03.25_TC (kgMS/ha/d)', '20.03.25_Disponible (kgMS/ha)': '20.03.25_Disponible (kgMS/ha)', });
lyr_030225_12.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'Range', '03.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_080225_13.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '08.02.25_TC (kgMS/ha/d)': 'Range', '08.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_130225_14.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '13.02.25_TC (kgMS/ha/d)': 'Range', '13.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_180225_15.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'Range', '18.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_210225_16.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '20.02.25_TC (kgMS/ha/d)': 'Range', '20.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_280225_17.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '28.02.25_TC (kgMS/ha/d)': 'Range', '28.02.25_Disponible (kgMS/ha)': 'Range', });
lyr_050325_18.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'Range', '05.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_100325_19.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'Range', '10.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_150325_20.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'Range', '15.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_180325_21.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '18.03.25_TC (kgMS/ha/d)': 'Range', '18.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_200325_22.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '20.03.25_TC (kgMS/ha/d)': 'Range', '20.03.25_Disponible (kgMS/ha)': 'Range', });
lyr_030225_12.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_080225_13.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '08.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_130225_14.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '13.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '13.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_180225_15.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_210225_16.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '20.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_280225_17.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '28.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '28.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_050325_18.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_100325_19.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_150325_20.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_180325_21.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '18.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_200325_22.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2024': 'inline label - always visible', '20.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_200325_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});