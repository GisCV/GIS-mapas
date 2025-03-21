var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi2201_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2201_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi0302_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0302_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1802_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1802_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi2102_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2102_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi0503_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0503_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1003_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1003_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1303_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 13.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1303_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1503_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 15.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1503_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1803_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1803_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi2003_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2003_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var format_TC220125_11 = new ol.format.GeoJSON();
var features_TC220125_11 = format_TC220125_11.readFeatures(json_TC220125_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC220125_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC220125_11.addFeatures(features_TC220125_11);
var lyr_TC220125_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC220125_11, 
                style: style_TC220125_11,
                popuplayertitle: 'TC 22.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC220125_11.png" /> TC 22.01.25'
            });
var format_TC030225_12 = new ol.format.GeoJSON();
var features_TC030225_12 = format_TC030225_12.readFeatures(json_TC030225_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC030225_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC030225_12.addFeatures(features_TC030225_12);
var lyr_TC030225_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC030225_12, 
                style: style_TC030225_12,
                popuplayertitle: 'TC 03.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC030225_12.png" /> TC 03.02.25'
            });
var format_TC180225_13 = new ol.format.GeoJSON();
var features_TC180225_13 = format_TC180225_13.readFeatures(json_TC180225_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC180225_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC180225_13.addFeatures(features_TC180225_13);
var lyr_TC180225_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC180225_13, 
                style: style_TC180225_13,
                popuplayertitle: 'TC 18.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC180225_13.png" /> TC 18.02.25'
            });
var format_TC210225_14 = new ol.format.GeoJSON();
var features_TC210225_14 = format_TC210225_14.readFeatures(json_TC210225_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC210225_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC210225_14.addFeatures(features_TC210225_14);
var lyr_TC210225_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC210225_14, 
                style: style_TC210225_14,
                popuplayertitle: 'TC 21.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC210225_14.png" /> TC 21.02.25'
            });
var format_TC050325_15 = new ol.format.GeoJSON();
var features_TC050325_15 = format_TC050325_15.readFeatures(json_TC050325_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC050325_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC050325_15.addFeatures(features_TC050325_15);
var lyr_TC050325_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC050325_15, 
                style: style_TC050325_15,
                popuplayertitle: 'TC 05.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC050325_15.png" /> TC 05.03.25'
            });
var format_TC100325_16 = new ol.format.GeoJSON();
var features_TC100325_16 = format_TC100325_16.readFeatures(json_TC100325_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC100325_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC100325_16.addFeatures(features_TC100325_16);
var lyr_TC100325_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC100325_16, 
                style: style_TC100325_16,
                popuplayertitle: 'TC 10.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC100325_16.png" /> TC 10.03.25'
            });
var format_TC130325_17 = new ol.format.GeoJSON();
var features_TC130325_17 = format_TC130325_17.readFeatures(json_TC130325_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC130325_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC130325_17.addFeatures(features_TC130325_17);
var lyr_TC130325_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC130325_17, 
                style: style_TC130325_17,
                popuplayertitle: 'TC 13.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC130325_17.png" /> TC 13.03.25'
            });
var format_TC150325_18 = new ol.format.GeoJSON();
var features_TC150325_18 = format_TC150325_18.readFeatures(json_TC150325_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC150325_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC150325_18.addFeatures(features_TC150325_18);
var lyr_TC150325_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC150325_18, 
                style: style_TC150325_18,
                popuplayertitle: 'TC 15.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC150325_18.png" /> TC 15.03.25'
            });
var format_TC180325_19 = new ol.format.GeoJSON();
var features_TC180325_19 = format_TC180325_19.readFeatures(json_TC180325_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC180325_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC180325_19.addFeatures(features_TC180325_19);
var lyr_TC180325_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC180325_19, 
                style: style_TC180325_19,
                popuplayertitle: 'TC 18.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC180325_19.png" /> TC 18.03.25'
            });
var format_TC200325_20 = new ol.format.GeoJSON();
var features_TC200325_20 = format_TC200325_20.readFeatures(json_TC200325_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC200325_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC200325_20.addFeatures(features_TC200325_20);
var lyr_TC200325_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC200325_20, 
                style: style_TC200325_20,
                popuplayertitle: 'TC 20.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC200325_20.png" /> TC 20.03.25'
            });
var group_Oliver = new ol.layer.Group({
                                layers: [lyr_ndvi2201_1,lyr_ndvi0302_2,lyr_ndvi1802_3,lyr_ndvi2102_4,lyr_ndvi0503_5,lyr_ndvi1003_6,lyr_ndvi1303_7,lyr_ndvi1503_8,lyr_ndvi1803_9,lyr_ndvi2003_10,lyr_TC220125_11,lyr_TC030225_12,lyr_TC180225_13,lyr_TC210225_14,lyr_TC050325_15,lyr_TC100325_16,lyr_TC130325_17,lyr_TC150325_18,lyr_TC180325_19,lyr_TC200325_20,],
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

lyr_googlesatelite_0.setVisible(true);lyr_ndvi2201_1.setVisible(true);lyr_ndvi0302_2.setVisible(true);lyr_ndvi1802_3.setVisible(true);lyr_ndvi2102_4.setVisible(true);lyr_ndvi0503_5.setVisible(true);lyr_ndvi1003_6.setVisible(true);lyr_ndvi1303_7.setVisible(true);lyr_ndvi1503_8.setVisible(true);lyr_ndvi1803_9.setVisible(true);lyr_ndvi2003_10.setVisible(true);lyr_TC220125_11.setVisible(true);lyr_TC030225_12.setVisible(true);lyr_TC180225_13.setVisible(true);lyr_TC210225_14.setVisible(true);lyr_TC050325_15.setVisible(true);lyr_TC100325_16.setVisible(true);lyr_TC130325_17.setVisible(true);lyr_TC150325_18.setVisible(true);lyr_TC180325_19.setVisible(true);lyr_TC200325_20.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_Oliver];
lyr_TC220125_11.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (kgMS/ha)': '22.01.25_Disponible (kgMS/ha)', });
lyr_TC030225_12.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (kgMS/ha)': '03.02.25_Disponible (kgMS/ha)', });
lyr_TC180225_13.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_TC210225_14.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (kgMS/ha)': '21.02.25_Disponible (kgMS/ha)', });
lyr_TC050325_15.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_TC100325_16.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_TC130325_17.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '13.03.25_TC (kgMS/ha/d)': '13.03.25_TC (kgMS/ha/d)', '13.03.25_Disponible (kgMS/ha)': '13.03.25_Disponible (kgMS/ha)', });
lyr_TC150325_18.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '15.03.25_TC (kgMS/ha/d)': '15.03.25_TC (kgMS/ha/d)', '15.03.25_Disponible (kgMS/ha)': '15.03.25_Disponible (kgMS/ha)', });
lyr_TC180325_19.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '18.03.25_TC (kgMS/ha/d)': '18.03.25_TC (kgMS/ha/d)', '18.03.25_Disponible (kgMS/ha)': '18.03.25_Disponible (kgMS/ha)', });
lyr_TC200325_20.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '20.03.25_TC (kgMS/ha/d)': '20.03.25_TC (kgMS/ha/d)', '20.03.25_Disponible (kgMS/ha)': '20.03.25_Disponible (kgMS/ha)', });
lyr_TC220125_11.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC030225_12.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC180225_13.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC210225_14.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC050325_15.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'TextEdit', '05.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC100325_16.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'TextEdit', '10.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC130325_17.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '13.03.25_TC (kgMS/ha/d)': 'TextEdit', '13.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC150325_18.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '15.03.25_TC (kgMS/ha/d)': 'TextEdit', '15.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC180325_19.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '18.03.25_TC (kgMS/ha/d)': 'TextEdit', '18.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC200325_20.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '20.03.25_TC (kgMS/ha/d)': 'TextEdit', '20.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC220125_11.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC030225_12.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC180225_13.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC210225_14.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC050325_15.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC100325_16.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC130325_17.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '13.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '13.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC150325_18.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '15.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '15.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC180325_19.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '18.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC200325_20.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - visible with data', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '20.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '20.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC200325_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});