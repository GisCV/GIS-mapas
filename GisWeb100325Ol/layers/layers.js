var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi0901_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0901_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1101_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 11.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1101_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1401_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1401_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1701_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 17.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1701_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi2201_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2201_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi0302_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 03.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0302_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1802_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1802_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi2102_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 21.02',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2102_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi0503_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 05.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0503_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1003_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.03',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1003_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var format_TC090125_11 = new ol.format.GeoJSON();
var features_TC090125_11 = format_TC090125_11.readFeatures(json_TC090125_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC090125_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC090125_11.addFeatures(features_TC090125_11);
var lyr_TC090125_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC090125_11, 
                style: style_TC090125_11,
                popuplayertitle: 'TC 09.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC090125_11.png" /> TC 09.01.25'
            });
var format_TC110125_12 = new ol.format.GeoJSON();
var features_TC110125_12 = format_TC110125_12.readFeatures(json_TC110125_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC110125_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC110125_12.addFeatures(features_TC110125_12);
var lyr_TC110125_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC110125_12, 
                style: style_TC110125_12,
                popuplayertitle: 'TC 11.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC110125_12.png" /> TC 11.01.25'
            });
var format_TC140125_13 = new ol.format.GeoJSON();
var features_TC140125_13 = format_TC140125_13.readFeatures(json_TC140125_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC140125_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC140125_13.addFeatures(features_TC140125_13);
var lyr_TC140125_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC140125_13, 
                style: style_TC140125_13,
                popuplayertitle: 'TC 14.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC140125_13.png" /> TC 14.01.25'
            });
var format_TC170125_14 = new ol.format.GeoJSON();
var features_TC170125_14 = format_TC170125_14.readFeatures(json_TC170125_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC170125_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC170125_14.addFeatures(features_TC170125_14);
var lyr_TC170125_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC170125_14, 
                style: style_TC170125_14,
                popuplayertitle: 'TC 17.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC170125_14.png" /> TC 17.01.25'
            });
var format_TC220125_15 = new ol.format.GeoJSON();
var features_TC220125_15 = format_TC220125_15.readFeatures(json_TC220125_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC220125_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC220125_15.addFeatures(features_TC220125_15);
var lyr_TC220125_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC220125_15, 
                style: style_TC220125_15,
                popuplayertitle: 'TC 22.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC220125_15.png" /> TC 22.01.25'
            });
var format_TC030225_16 = new ol.format.GeoJSON();
var features_TC030225_16 = format_TC030225_16.readFeatures(json_TC030225_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC030225_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC030225_16.addFeatures(features_TC030225_16);
var lyr_TC030225_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC030225_16, 
                style: style_TC030225_16,
                popuplayertitle: 'TC 03.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC030225_16.png" /> TC 03.02.25'
            });
var format_TC180225_17 = new ol.format.GeoJSON();
var features_TC180225_17 = format_TC180225_17.readFeatures(json_TC180225_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC180225_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC180225_17.addFeatures(features_TC180225_17);
var lyr_TC180225_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC180225_17, 
                style: style_TC180225_17,
                popuplayertitle: 'TC 18.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC180225_17.png" /> TC 18.02.25'
            });
var format_TC210225_18 = new ol.format.GeoJSON();
var features_TC210225_18 = format_TC210225_18.readFeatures(json_TC210225_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC210225_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC210225_18.addFeatures(features_TC210225_18);
var lyr_TC210225_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC210225_18, 
                style: style_TC210225_18,
                popuplayertitle: 'TC 21.02.25',
                interactive: true,
                title: '<img src="styles/legend/TC210225_18.png" /> TC 21.02.25'
            });
var format_TC050325_19 = new ol.format.GeoJSON();
var features_TC050325_19 = format_TC050325_19.readFeatures(json_TC050325_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC050325_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC050325_19.addFeatures(features_TC050325_19);
var lyr_TC050325_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC050325_19, 
                style: style_TC050325_19,
                popuplayertitle: 'TC 05.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC050325_19.png" /> TC 05.03.25'
            });
var format_TC100325_20 = new ol.format.GeoJSON();
var features_TC100325_20 = format_TC100325_20.readFeatures(json_TC100325_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC100325_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC100325_20.addFeatures(features_TC100325_20);
var lyr_TC100325_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC100325_20, 
                style: style_TC100325_20,
                popuplayertitle: 'TC 10.03.25',
                interactive: true,
                title: '<img src="styles/legend/TC100325_20.png" /> TC 10.03.25'
            });
var group_Oliver = new ol.layer.Group({
                                layers: [lyr_ndvi0901_1,lyr_ndvi1101_2,lyr_ndvi1401_3,lyr_ndvi1701_4,lyr_ndvi2201_5,lyr_ndvi0302_6,lyr_ndvi1802_7,lyr_ndvi2102_8,lyr_ndvi0503_9,lyr_ndvi1003_10,lyr_TC090125_11,lyr_TC110125_12,lyr_TC140125_13,lyr_TC170125_14,lyr_TC220125_15,lyr_TC030225_16,lyr_TC180225_17,lyr_TC210225_18,lyr_TC050325_19,lyr_TC100325_20,],
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

lyr_googlesatelite_0.setVisible(true);lyr_ndvi0901_1.setVisible(true);lyr_ndvi1101_2.setVisible(true);lyr_ndvi1401_3.setVisible(true);lyr_ndvi1701_4.setVisible(true);lyr_ndvi2201_5.setVisible(true);lyr_ndvi0302_6.setVisible(true);lyr_ndvi1802_7.setVisible(true);lyr_ndvi2102_8.setVisible(true);lyr_ndvi0503_9.setVisible(true);lyr_ndvi1003_10.setVisible(true);lyr_TC090125_11.setVisible(true);lyr_TC110125_12.setVisible(true);lyr_TC140125_13.setVisible(true);lyr_TC170125_14.setVisible(true);lyr_TC220125_15.setVisible(true);lyr_TC030225_16.setVisible(true);lyr_TC180225_17.setVisible(true);lyr_TC210225_18.setVisible(true);lyr_TC050325_19.setVisible(true);lyr_TC100325_20.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_Oliver];
lyr_TC090125_11.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_TC110125_12.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_disponible (kgMS/ha/d)': '11.01.25_disponible (kgMS/ha/d)', });
lyr_TC140125_13.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_TC170125_14.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '17.01.25_TC (kgMS/ha/d)': '17.01.25_TC (kgMS/ha/d)', '17.01.25_Disponible (kgMS/ha)': '17.01.25_Disponible (kgMS/ha)', });
lyr_TC220125_15.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '22.01.25_TC (kgMS/ha/d)': '22.01.25_TC (kgMS/ha/d)', '22.01.25_Disponible (kgMS/ha)': '22.01.25_Disponible (kgMS/ha)', });
lyr_TC030225_16.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '03.02.25_TC (kgMS/ha/d)': '03.02.25_TC (kgMS/ha/d)', '03.02.25_Disponible (kgMS/ha)': '03.02.25_Disponible (kgMS/ha)', });
lyr_TC180225_17.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '18.02.25_TC (kgMS/ha/d)': '18.02.25_TC (kgMS/ha/d)', '18.02.25_Disponible (kgMS/ha)': '18.02.25_Disponible (kgMS/ha)', });
lyr_TC210225_18.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '21.02.25_TC (kgMS/ha/d)': '21.02.25_TC (kgMS/ha/d)', '21.02.25_Disponible (kgMS/ha)': '21.02.25_Disponible (kgMS/ha)', });
lyr_TC050325_19.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '05.03.25_TC (kgMS/ha/d)': '05.03.25_TC (kgMS/ha/d)', '05.03.25_Disponible (kgMS/ha)': '05.03.25_Disponible (kgMS/ha)', });
lyr_TC100325_20.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '10.03.25_TC (kgMS/ha/d)': '10.03.25_TC (kgMS/ha/d)', '10.03.25_Disponible (kgMS/ha)': '10.03.25_Disponible (kgMS/ha)', });
lyr_TC090125_11.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC110125_12.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'TextEdit', '11.01.25_disponible (kgMS/ha/d)': 'TextEdit', });
lyr_TC140125_13.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'TextEdit', '14.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC170125_14.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '17.01.25_TC (kgMS/ha/d)': 'TextEdit', '17.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC220125_15.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '22.01.25_TC (kgMS/ha/d)': 'TextEdit', '22.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC030225_16.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '03.02.25_TC (kgMS/ha/d)': 'TextEdit', '03.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC180225_17.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '18.02.25_TC (kgMS/ha/d)': 'TextEdit', '18.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC210225_18.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '21.02.25_TC (kgMS/ha/d)': 'TextEdit', '21.02.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC050325_19.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '05.03.25_TC (kgMS/ha/d)': 'TextEdit', '05.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC100325_20.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '10.03.25_TC (kgMS/ha/d)': 'TextEdit', '10.03.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC090125_11.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '09.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '09.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC110125_12.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '11.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '11.01.25_disponible (kgMS/ha/d)': 'inline label - always visible', });
lyr_TC140125_13.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '14.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '14.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC170125_14.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '17.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '17.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC220125_15.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '22.01.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.01.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC030225_16.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '03.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '03.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC180225_17.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '18.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '18.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC210225_18.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '21.02.25_TC (kgMS/ha/d)': 'inline label - always visible', '21.02.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC050325_19.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '05.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '05.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC100325_20.set('fieldLabels', {'Especie': 'inline label - always visible', 'id': 'hidden field', 'Potrero': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Area': 'inline label - always visible', '10.03.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.03.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC100325_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});