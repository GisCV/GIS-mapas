var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_0106_1 = new ol.layer.Image({
                            opacity: 1,
                            title: '01.06',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0106_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0306_2 = new ol.layer.Image({
                            opacity: 1,
                            title: '03.06',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0306_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0806_3 = new ol.layer.Image({
                            opacity: 1,
                            title: '08.06',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0806_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1006_4 = new ol.layer.Image({
                            opacity: 1,
                            title: '10.06',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1006_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_1106_5 = new ol.layer.Image({
                            opacity: 1,
                            title: '11.06',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/1106_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2106_6 = new ol.layer.Image({
                            opacity: 1,
                            title: '21.06',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2106_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2306_7 = new ol.layer.Image({
                            opacity: 1,
                            title: '23.06',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2306_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2606_8 = new ol.layer.Image({
                            opacity: 1,
                            title: '26.06',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2606_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_2806_9 = new ol.layer.Image({
                            opacity: 1,
                            title: '28.06',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/2806_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0107_10 = new ol.layer.Image({
                            opacity: 1,
                            title: '01.07',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0107_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_0307_11 = new ol.layer.Image({
                            opacity: 1,
                            title: '03.07',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/0307_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var format_010625_12 = new ol.format.GeoJSON();
var features_010625_12 = format_010625_12.readFeatures(json_010625_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010625_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010625_12.addFeatures(features_010625_12);
var lyr_010625_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_010625_12, 
                style: style_010625_12,
                popuplayertitle: '01.06.25',
                interactive: true,
                title: '<img src="styles/legend/010625_12.png" /> 01.06.25'
            });
var format_030625_13 = new ol.format.GeoJSON();
var features_030625_13 = format_030625_13.readFeatures(json_030625_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030625_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030625_13.addFeatures(features_030625_13);
var lyr_030625_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030625_13, 
                style: style_030625_13,
                popuplayertitle: '03.06.25',
                interactive: true,
                title: '<img src="styles/legend/030625_13.png" /> 03.06.25'
            });
var format_080625_14 = new ol.format.GeoJSON();
var features_080625_14 = format_080625_14.readFeatures(json_080625_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_080625_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_080625_14.addFeatures(features_080625_14);
var lyr_080625_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_080625_14, 
                style: style_080625_14,
                popuplayertitle: '08.06.25',
                interactive: true,
                title: '<img src="styles/legend/080625_14.png" /> 08.06.25'
            });
var format_110625_15 = new ol.format.GeoJSON();
var features_110625_15 = format_110625_15.readFeatures(json_110625_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_110625_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110625_15.addFeatures(features_110625_15);
var lyr_110625_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_110625_15, 
                style: style_110625_15,
                popuplayertitle: '11.06.25',
                interactive: true,
                title: '<img src="styles/legend/110625_15.png" /> 11.06.25'
            });
var format_230625_16 = new ol.format.GeoJSON();
var features_230625_16 = format_230625_16.readFeatures(json_230625_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_230625_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230625_16.addFeatures(features_230625_16);
var lyr_230625_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_230625_16, 
                style: style_230625_16,
                popuplayertitle: '23.06.25',
                interactive: true,
                title: '<img src="styles/legend/230625_16.png" /> 23.06.25'
            });
var format_260625_17 = new ol.format.GeoJSON();
var features_260625_17 = format_260625_17.readFeatures(json_260625_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_260625_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_260625_17.addFeatures(features_260625_17);
var lyr_260625_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_260625_17, 
                style: style_260625_17,
                popuplayertitle: '26.06.25',
                interactive: true,
                title: '<img src="styles/legend/260625_17.png" /> 26.06.25'
            });
var format_280625_18 = new ol.format.GeoJSON();
var features_280625_18 = format_280625_18.readFeatures(json_280625_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280625_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280625_18.addFeatures(features_280625_18);
var lyr_280625_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280625_18, 
                style: style_280625_18,
                popuplayertitle: '28.06.25',
                interactive: true,
                title: '<img src="styles/legend/280625_18.png" /> 28.06.25'
            });
var format_030725_19 = new ol.format.GeoJSON();
var features_030725_19 = format_030725_19.readFeatures(json_030725_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_030725_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_030725_19.addFeatures(features_030725_19);
var lyr_030725_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_030725_19, 
                style: style_030725_19,
                popuplayertitle: '03.07.25',
                interactive: true,
                title: '<img src="styles/legend/030725_19.png" /> 03.07.25'
            });
var group_SHP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'SHP'});
var group_NDVI = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'NDVI'});

lyr_GoogleSatellite_0.setVisible(true);lyr_0106_1.setVisible(true);lyr_0306_2.setVisible(true);lyr_0806_3.setVisible(true);lyr_1006_4.setVisible(true);lyr_1106_5.setVisible(true);lyr_2106_6.setVisible(true);lyr_2306_7.setVisible(true);lyr_2606_8.setVisible(true);lyr_2806_9.setVisible(true);lyr_0107_10.setVisible(true);lyr_0307_11.setVisible(true);lyr_010625_12.setVisible(true);lyr_030625_13.setVisible(true);lyr_080625_14.setVisible(true);lyr_110625_15.setVisible(true);lyr_230625_16.setVisible(true);lyr_260625_17.setVisible(true);lyr_280625_18.setVisible(true);lyr_030725_19.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_0106_1,lyr_0306_2,lyr_0806_3,lyr_1006_4,lyr_1106_5,lyr_2106_6,lyr_2306_7,lyr_2606_8,lyr_2806_9,lyr_0107_10,lyr_0307_11,lyr_010625_12,lyr_030625_13,lyr_080625_14,lyr_110625_15,lyr_230625_16,lyr_260625_17,lyr_280625_18,lyr_030725_19];
lyr_010625_12.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '01.06.25_TC (kgMS/ha/d)': '01.06.25_TC (kgMS/ha/d)', '01.06.25_Disponible (kgMS/ha)': '01.06.25_Disponible (kgMS/ha)', });
lyr_030625_13.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '03.06.25_TC (kgMS/ha/d)': '03.06.25_TC (kgMS/ha/d)', '03.06.25_Disponible (kgMS/ha)': '03.06.25_Disponible (kgMS/ha)', });
lyr_080625_14.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '08.06.25_TC (kgMS/ha/d)': '08.06.25_TC (kgMS/ha/d)', '08.06.25_Disponible (kgMS/ha)': '08.06.25_Disponible (kgMS/ha)', });
lyr_110625_15.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '10.06.25_TC (kgMS/ha/d)': '10.06.25_TC (kgMS/ha/d)', '10.06.25_Disponible (kgMS/ha)': '10.06.25_Disponible (kgMS/ha)', '11.06.25_TC (kgMS/ha/d)': '11.06.25_TC (kgMS/ha/d)', '11.06.25_Disponible (kgMS/ha)': '11.06.25_Disponible (kgMS/ha)', });
lyr_230625_16.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '21.06.25_TC (kgMS/ha/d)': '21.06.25_TC (kgMS/ha/d)', '21.06.25_Disponible (kgMS/ha)': '21.06.25_Disponible (kgMS/ha)', '23.06.25_TC (kgMS/ha/d)': '23.06.25_TC (kgMS/ha/d)', '23.06.25_Disponible (kgMS/ha/d)': '23.06.25_Disponible (kgMS/ha/d)', });
lyr_260625_17.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '26.06.25_TC (kgMS/ha/d)': '26.06.25_TC (kgMS/ha/d)', '26.06.25_Disponible (kgMS/ha)': '26.06.25_Disponible (kgMS/ha)', });
lyr_280625_18.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '28.06.25_TC (kgMS/ha/d)': '28.06.25_TC (kgMS/ha/d)', '28.06.25_Disponible (kgMS/ha)': '28.06.25_Disponible (kgMS/ha)', });
lyr_030725_19.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2025': '2025', '01.07.25_TC (kgMS/ha/d)': '01.07.25_TC (kgMS/ha/d)', '01.07.25_Disponible (kgMS/ha)': '01.07.25_Disponible (kgMS/ha)', '03.07.25_TC (kgMS/ha/d)': '03.07.25_TC (kgMS/ha/d)', '03.07.25_Disponible (kgMS/ha)': '03.07.25_Disponible (kgMS/ha)', });
lyr_010625_12.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '01.06.25_TC (kgMS/ha/d)': 'Range', '01.06.25_Disponible (kgMS/ha)': 'Range', });
lyr_030625_13.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '03.06.25_TC (kgMS/ha/d)': 'Range', '03.06.25_Disponible (kgMS/ha)': 'Range', });
lyr_080625_14.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '08.06.25_TC (kgMS/ha/d)': 'Range', '08.06.25_Disponible (kgMS/ha)': 'Range', });
lyr_110625_15.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '10.06.25_TC (kgMS/ha/d)': 'Range', '10.06.25_Disponible (kgMS/ha)': 'Range', '11.06.25_TC (kgMS/ha/d)': 'Range', '11.06.25_Disponible (kgMS/ha)': 'Range', });
lyr_230625_16.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '21.06.25_TC (kgMS/ha/d)': 'Range', '21.06.25_Disponible (kgMS/ha)': 'Range', '23.06.25_TC (kgMS/ha/d)': 'Range', '23.06.25_Disponible (kgMS/ha/d)': 'Range', });
lyr_260625_17.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '26.06.25_TC (kgMS/ha/d)': 'Range', '26.06.25_Disponible (kgMS/ha)': 'Range', });
lyr_280625_18.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '28.06.25_TC (kgMS/ha/d)': 'Range', '28.06.25_Disponible (kgMS/ha)': 'Range', });
lyr_030725_19.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2025': 'TextEdit', '01.07.25_TC (kgMS/ha/d)': 'Range', '01.07.25_Disponible (kgMS/ha)': 'Range', '03.07.25_TC (kgMS/ha/d)': 'Range', '03.07.25_Disponible (kgMS/ha)': 'Range', });
lyr_010625_12.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '01.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_030625_13.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '03.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_080625_14.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '08.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_110625_15.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '10.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.06.25_Disponible (kgMS/ha)': 'inline label - always visible', '11.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '11.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_230625_16.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '21.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.06.25_Disponible (kgMS/ha)': 'inline label - always visible', '23.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '23.06.25_Disponible (kgMS/ha/d)': 'inline label - always visible', });
lyr_260625_17.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '26.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '26.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_280625_18.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '28.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '28.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_030725_19.set('fieldLabels', {'Potrero': 'inline label - always visible', 'has': 'inline label - always visible', '2025': 'inline label - always visible', '01.07.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.07.25_Disponible (kgMS/ha)': 'inline label - always visible', '03.07.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.07.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_030725_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});