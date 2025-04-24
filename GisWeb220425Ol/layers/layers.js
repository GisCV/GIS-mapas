var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi2102_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2102_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi0503_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0503_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1003_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1003_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1303_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 13.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1303_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1503_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 15.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1503_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1803_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1803_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi2003_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2003_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi3003_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3003_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi0404_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0404_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1404_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1404_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1704_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1704_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1904_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 19.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1904_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi2204_13 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.04',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2204_13.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var format_TC130325_14 = new ol.format.GeoJSON();
var features_TC130325_14 = format_TC130325_14.readFeatures(json_TC130325_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC130325_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC130325_14.addFeatures(features_TC130325_14);
var lyr_TC130325_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC130325_14, 
                style: style_TC130325_14,
                popuplayertitle: 'TC 13.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC130325_14.png" /> TC 13.03.25'
            });
var format_TC150325_15 = new ol.format.GeoJSON();
var features_TC150325_15 = format_TC150325_15.readFeatures(json_TC150325_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC150325_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC150325_15.addFeatures(features_TC150325_15);
var lyr_TC150325_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC150325_15, 
                style: style_TC150325_15,
                popuplayertitle: 'TC 15.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC150325_15.png" /> TC 15.03.25'
            });
var format_TC180325_16 = new ol.format.GeoJSON();
var features_TC180325_16 = format_TC180325_16.readFeatures(json_TC180325_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC180325_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC180325_16.addFeatures(features_TC180325_16);
var lyr_TC180325_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC180325_16, 
                style: style_TC180325_16,
                popuplayertitle: 'TC 18.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC180325_16.png" /> TC 18.03.25'
            });
var format_TC200325_17 = new ol.format.GeoJSON();
var features_TC200325_17 = format_TC200325_17.readFeatures(json_TC200325_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC200325_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC200325_17.addFeatures(features_TC200325_17);
var lyr_TC200325_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC200325_17, 
                style: style_TC200325_17,
                popuplayertitle: 'TC 20.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC200325_17.png" /> TC 20.03.25'
            });
var format_TC300325_18 = new ol.format.GeoJSON();
var features_TC300325_18 = format_TC300325_18.readFeatures(json_TC300325_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC300325_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC300325_18.addFeatures(features_TC300325_18);
var lyr_TC300325_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC300325_18, 
                style: style_TC300325_18,
                popuplayertitle: 'TC 30.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC300325_18.png" /> TC 30.03.25'
            });
var format_TC040425_19 = new ol.format.GeoJSON();
var features_TC040425_19 = format_TC040425_19.readFeatures(json_TC040425_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC040425_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC040425_19.addFeatures(features_TC040425_19);
var lyr_TC040425_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC040425_19, 
                style: style_TC040425_19,
                popuplayertitle: 'TC 04.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC040425_19.png" /> TC 04.04.25'
            });
var format_TC140425_20 = new ol.format.GeoJSON();
var features_TC140425_20 = format_TC140425_20.readFeatures(json_TC140425_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC140425_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC140425_20.addFeatures(features_TC140425_20);
var lyr_TC140425_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC140425_20, 
                style: style_TC140425_20,
                popuplayertitle: 'TC 14.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC140425_20.png" /> TC 14.04.25'
            });
var format_TC170425_21 = new ol.format.GeoJSON();
var features_TC170425_21 = format_TC170425_21.readFeatures(json_TC170425_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC170425_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC170425_21.addFeatures(features_TC170425_21);
var lyr_TC170425_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC170425_21, 
                style: style_TC170425_21,
                popuplayertitle: 'TC 17.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC170425_21.png" /> TC 17.04.25'
            });
var format_TC190425_22 = new ol.format.GeoJSON();
var features_TC190425_22 = format_TC190425_22.readFeatures(json_TC190425_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC190425_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC190425_22.addFeatures(features_TC190425_22);
var lyr_TC190425_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC190425_22, 
                style: style_TC190425_22,
                popuplayertitle: 'TC 19.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC190425_22.png" /> TC 19.04.25'
            });
var format_TC220425_23 = new ol.format.GeoJSON();
var features_TC220425_23 = format_TC220425_23.readFeatures(json_TC220425_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC220425_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC220425_23.addFeatures(features_TC220425_23);
var lyr_TC220425_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC220425_23, 
                style: style_TC220425_23,
                popuplayertitle: 'TC 22.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC220425_23.png" /> TC 22.04.25'
            });
var group_Oliver = new ol.layer.Group({
                                layers: [lyr_ndvi2102_1,lyr_ndvi0503_2,lyr_ndvi1003_3,lyr_ndvi1303_4,lyr_ndvi1503_5,lyr_ndvi1803_6,lyr_ndvi2003_7,lyr_ndvi3003_8,lyr_ndvi0404_9,lyr_ndvi1404_10,lyr_ndvi1704_11,lyr_ndvi1904_12,lyr_ndvi2204_13,lyr_TC130325_14,lyr_TC150325_15,lyr_TC180325_16,lyr_TC200325_17,lyr_TC300325_18,lyr_TC040425_19,lyr_TC140425_20,lyr_TC170425_21,lyr_TC190425_22,lyr_TC220425_23,],
                                fold: "open",
                                title: 'Oliver'});
var group_JULIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'JULIO'});
var group_AGOSTO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'AGOSTO'});
var group_JUNIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'JUNIO'});
var group_2024 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '2024'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi2102_1.setVisible(true);lyr_ndvi0503_2.setVisible(true);lyr_ndvi1003_3.setVisible(true);lyr_ndvi1303_4.setVisible(true);lyr_ndvi1503_5.setVisible(true);lyr_ndvi1803_6.setVisible(true);lyr_ndvi2003_7.setVisible(true);lyr_ndvi3003_8.setVisible(true);lyr_ndvi0404_9.setVisible(true);lyr_ndvi1404_10.setVisible(true);lyr_ndvi1704_11.setVisible(true);lyr_ndvi1904_12.setVisible(true);lyr_ndvi2204_13.setVisible(true);lyr_TC130325_14.setVisible(true);lyr_TC150325_15.setVisible(true);lyr_TC180325_16.setVisible(true);lyr_TC200325_17.setVisible(true);lyr_TC300325_18.setVisible(true);lyr_TC040425_19.setVisible(true);lyr_TC140425_20.setVisible(true);lyr_TC170425_21.setVisible(true);lyr_TC190425_22.setVisible(true);lyr_TC220425_23.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_Oliver];
lyr_TC130325_14.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '13.03.25_TC (kgMS/ha/d)': '13.03.25_TC (kgMS/ha/d)', '13.03.25_Disponible (kgMS/ha)': '13.03.25_Disponible (kgMS/ha)', });
lyr_TC150325_15.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (kgMS/ha)': '15.03.25_Disponible (kgMS/ha)', });
lyr_TC180325_16.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '18.03.25_TC (kgMS/ha/d)': '18.03.25_TC (kgMS/ha/d)', '18.03.25_Disponible (kgMS/ha)': '18.03.25_Disponible (kgMS/ha)', });
lyr_TC200325_17.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '20.03.25_TC (kgMS/ha/d)': '20.03.25_TC (kgMS/ha/d)', '20.03.25_Disponible (kgMS/ha)': '20.03.25_Disponible (kgMS/ha)', });
lyr_TC300325_18.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '30.03.25_TC (kgMS/ha/d)': '30.03.25_TC (kgMS/ha/d)', '30.03.25_Disponible (kgMS/ha)': '30.03.25_Disponible (kgMS/ha)', });
lyr_TC040425_19.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '04.04.25_TC (kgMS/ha/d)': '04.04.25_TC (kgMS/ha/d)', '04.04.25_Disponible (kgMS/ha)': '04.04.25_Disponible (kgMS/ha)', });
lyr_TC140425_20.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '14.04.25_TC (kgMS/ha/d)': '14.04.25_TC (kgMS/ha/d)', '14.04.25_Disponible (kgMS/ha)': '14.04.25_Disponible (kgMS/ha)', });
lyr_TC170425_21.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '17.04.25_TC (kgMS/ha/d)': '17.04.25_TC (kgMS/ha/d)', '17.04.25_Disponible (kgMS/ha)': '17.04.25_Disponible (kgMS/ha)', });
lyr_TC190425_22.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '19.04.25_TC (kgMS/ha/d)': '19.04.25_TC (kgMS/ha/d)', '19.04.25_Disponible (kgMS/ha)': '19.04.25_Disponible (kgMS/ha)', });
lyr_TC220425_23.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '22.04.25_TC (kgMS/ha/d)': '22.04.25_TC (kgMS/ha/d)', '22.04.25_Disponible (kgMS/ha)': '22.04.25_Disponible (kgMS/ha)', });
lyr_TC130325_14.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '13.03.25_TC (kgMS/ha/d)': 'TextEdit', '13.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC150325_15.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'TextEdit', '15.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC180325_16.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '18.03.25_TC (kgMS/ha/d)': 'TextEdit', '18.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC200325_17.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '20.03.25_TC (kgMS/ha/d)': 'TextEdit', '20.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC300325_18.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '30.03.25_TC (kgMS/ha/d)': 'TextEdit', '30.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC040425_19.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '04.04.25_TC (kgMS/ha/d)': 'TextEdit', '04.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC140425_20.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '14.04.25_TC (kgMS/ha/d)': 'TextEdit', '14.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC170425_21.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '17.04.25_TC (kgMS/ha/d)': 'TextEdit', '17.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC190425_22.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '19.04.25_TC (kgMS/ha/d)': 'TextEdit', '19.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC220425_23.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '22.04.25_TC (kgMS/ha/d)': 'TextEdit', '22.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC130325_14.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '13.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '13.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC150325_15.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC180325_16.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '18.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC200325_17.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '20.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC300325_18.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '30.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '30.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC040425_19.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '04.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '04.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC140425_20.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '14.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC170425_21.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '17.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC190425_22.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '19.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '19.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC220425_23.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '22.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC220425_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});