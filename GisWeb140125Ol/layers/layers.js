var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi1401_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 14.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1401_1.png",
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
var lyr_ndvi0901_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 09.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0901_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi0701_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 07.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0701_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi0401_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0401_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi0201_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0201_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi3012_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3012_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi2312_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi2012_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2012_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399052.873329, -3879145.536477, -6389486.076290, -3866722.834994]
                            })
                        });
var lyr_ndvi1812_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399052.873329, -3879145.536477, -6389486.076290, -3866722.834994]
                            })
                        });
var lyr_ndvi1012_11 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1012_11.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi512_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi512_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
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
var format_TC110125_14 = new ol.format.GeoJSON();
var features_TC110125_14 = format_TC110125_14.readFeatures(json_TC110125_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC110125_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC110125_14.addFeatures(features_TC110125_14);
var lyr_TC110125_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC110125_14, 
                style: style_TC110125_14,
                popuplayertitle: 'TC 11.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC110125_14.png" /> TC 11.01.25'
            });
var format_TC090125_15 = new ol.format.GeoJSON();
var features_TC090125_15 = format_TC090125_15.readFeatures(json_TC090125_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC090125_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC090125_15.addFeatures(features_TC090125_15);
var lyr_TC090125_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC090125_15, 
                style: style_TC090125_15,
                popuplayertitle: 'TC 09.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC090125_15.png" /> TC 09.01.25'
            });
var format_TC070125_16 = new ol.format.GeoJSON();
var features_TC070125_16 = format_TC070125_16.readFeatures(json_TC070125_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC070125_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC070125_16.addFeatures(features_TC070125_16);
var lyr_TC070125_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC070125_16, 
                style: style_TC070125_16,
                popuplayertitle: 'TC 07.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC070125_16.png" /> TC 07.01.25'
            });
var format_TC040125_17 = new ol.format.GeoJSON();
var features_TC040125_17 = format_TC040125_17.readFeatures(json_TC040125_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC040125_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC040125_17.addFeatures(features_TC040125_17);
var lyr_TC040125_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC040125_17, 
                style: style_TC040125_17,
                popuplayertitle: 'TC 04.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC040125_17.png" /> TC 04.01.25'
            });
var format_TC020125_18 = new ol.format.GeoJSON();
var features_TC020125_18 = format_TC020125_18.readFeatures(json_TC020125_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC020125_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC020125_18.addFeatures(features_TC020125_18);
var lyr_TC020125_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC020125_18, 
                style: style_TC020125_18,
                popuplayertitle: 'TC 02.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC020125_18.png" /> TC 02.01.25'
            });
var format_TC301224_19 = new ol.format.GeoJSON();
var features_TC301224_19 = format_TC301224_19.readFeatures(json_TC301224_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC301224_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC301224_19.addFeatures(features_TC301224_19);
var lyr_TC301224_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC301224_19, 
                style: style_TC301224_19,
                popuplayertitle: 'TC 30.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC301224_19.png" /> TC 30.12.24'
            });
var format_TC231224_20 = new ol.format.GeoJSON();
var features_TC231224_20 = format_TC231224_20.readFeatures(json_TC231224_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC231224_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC231224_20.addFeatures(features_TC231224_20);
var lyr_TC231224_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC231224_20, 
                style: style_TC231224_20,
                popuplayertitle: 'TC 23.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC231224_20.png" /> TC 23.12.24'
            });
var format_TC201224_21 = new ol.format.GeoJSON();
var features_TC201224_21 = format_TC201224_21.readFeatures(json_TC201224_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC201224_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC201224_21.addFeatures(features_TC201224_21);
var lyr_TC201224_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC201224_21, 
                style: style_TC201224_21,
                popuplayertitle: 'TC 20.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC201224_21.png" /> TC 20.12.24'
            });
var format_TC181224_22 = new ol.format.GeoJSON();
var features_TC181224_22 = format_TC181224_22.readFeatures(json_TC181224_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC181224_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC181224_22.addFeatures(features_TC181224_22);
var lyr_TC181224_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC181224_22, 
                style: style_TC181224_22,
                popuplayertitle: 'TC 18.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC181224_22.png" /> TC 18.12.24'
            });
var format_TC101224_23 = new ol.format.GeoJSON();
var features_TC101224_23 = format_TC101224_23.readFeatures(json_TC101224_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC101224_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC101224_23.addFeatures(features_TC101224_23);
var lyr_TC101224_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC101224_23, 
                style: style_TC101224_23,
                popuplayertitle: 'TC 10.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC101224_23.png" /> TC 10.12.24'
            });
var format_TC51224_24 = new ol.format.GeoJSON();
var features_TC51224_24 = format_TC51224_24.readFeatures(json_TC51224_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC51224_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC51224_24.addFeatures(features_TC51224_24);
var lyr_TC51224_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC51224_24, 
                style: style_TC51224_24,
                popuplayertitle: 'TC 5.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC51224_24.png" /> TC 5.12.24'
            });
var group_Oliver = new ol.layer.Group({
                                layers: [lyr_ndvi1401_1,lyr_ndvi1101_2,lyr_ndvi0901_3,lyr_ndvi0701_4,lyr_ndvi0401_5,lyr_ndvi0201_6,lyr_ndvi3012_7,lyr_ndvi2312_8,lyr_ndvi2012_9,lyr_ndvi1812_10,lyr_ndvi1012_11,lyr_ndvi512_12,lyr_TC140125_13,lyr_TC110125_14,lyr_TC090125_15,lyr_TC070125_16,lyr_TC040125_17,lyr_TC020125_18,lyr_TC301224_19,lyr_TC231224_20,lyr_TC201224_21,lyr_TC181224_22,lyr_TC101224_23,lyr_TC51224_24,],
                                fold: "open",
                                title: 'Oliver'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi1401_1.setVisible(true);lyr_ndvi1101_2.setVisible(true);lyr_ndvi0901_3.setVisible(true);lyr_ndvi0701_4.setVisible(true);lyr_ndvi0401_5.setVisible(true);lyr_ndvi0201_6.setVisible(true);lyr_ndvi3012_7.setVisible(true);lyr_ndvi2312_8.setVisible(true);lyr_ndvi2012_9.setVisible(true);lyr_ndvi1812_10.setVisible(true);lyr_ndvi1012_11.setVisible(true);lyr_ndvi512_12.setVisible(true);lyr_TC140125_13.setVisible(true);lyr_TC110125_14.setVisible(true);lyr_TC090125_15.setVisible(true);lyr_TC070125_16.setVisible(true);lyr_TC040125_17.setVisible(true);lyr_TC020125_18.setVisible(true);lyr_TC301224_19.setVisible(true);lyr_TC231224_20.setVisible(true);lyr_TC201224_21.setVisible(true);lyr_TC181224_22.setVisible(true);lyr_TC101224_23.setVisible(true);lyr_TC51224_24.setVisible(true);
var layersList = [lyr_googlesatelite_0,group_Oliver];
lyr_TC140125_13.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '14.01.25_TC (kgMS/ha/d)': '14.01.25_TC (kgMS/ha/d)', '14.01.25_Disponible (kgMS/ha)': '14.01.25_Disponible (kgMS/ha)', });
lyr_TC110125_14.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '11.01.25_TC (kgMS/ha/d)': '11.01.25_TC (kgMS/ha/d)', '11.01.25_disponible (kgMS/ha/d)': '11.01.25_disponible (kgMS/ha/d)', });
lyr_TC090125_15.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '09.01.25_TC (kgMS/ha/d)': '09.01.25_TC (kgMS/ha/d)', '09.01.25_Disponible (kgMS/ha)': '09.01.25_Disponible (kgMS/ha)', });
lyr_TC070125_16.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '07.01.25_TC (kgMS/ha/d)': '07.01.25_TC (kgMS/ha/d)', '07.01.25_Disponible (kgMS/ha)': '07.01.25_Disponible (kgMS/ha)', });
lyr_TC040125_17.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '30.12.24 o': '30.12.24 o', '30.12.24_1': '30.12.24_1', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_TC020125_18.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '02.01.25_TC (kgMS/ha/d)': '02.01.25_TC (kgMS/ha/d)', '02.01.25_Disponible (kgMS/ha)': '02.01.25_Disponible (kgMS/ha)', });
lyr_TC301224_19.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '30.12.24 ol_TC (kgMS/ha/d)': '30.12.24 ol_TC (kgMS/ha/d)', '30.12.24 ol_Disponible (kgMS/ha)': '30.12.24 ol_Disponible (kgMS/ha)', });
lyr_TC231224_20.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_TC201224_21.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '20.12.24_TC (kgMS/h/da)': '20.12.24_TC (kgMS/h/da)', '20.12.24_Disponible (kgMS/ha)': '20.12.24_Disponible (kgMS/ha)', });
lyr_TC181224_22.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '18.12.24_TC (kgMS/h/da)': '18.12.24_TC (kgMS/h/da)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_TC101224_23.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '10.12.24_TC (kgMS/h/da)': '10.12.24_TC (kgMS/h/da)', '10.12.24_Disponible (kgMS/ha)': '10.12.24_Disponible (kgMS/ha)', });
lyr_TC51224_24.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '5.12.24_TC': '5.12.24_TC', '5.12.24_Di': '5.12.24_Di', });
lyr_TC140125_13.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '14.01.25_TC (kgMS/ha/d)': 'TextEdit', '14.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC110125_14.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '11.01.25_TC (kgMS/ha/d)': 'TextEdit', '11.01.25_disponible (kgMS/ha/d)': 'TextEdit', });
lyr_TC090125_15.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '09.01.25_TC (kgMS/ha/d)': 'TextEdit', '09.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC070125_16.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '07.01.25_TC (kgMS/ha/d)': 'TextEdit', '07.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC040125_17.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '30.12.24 o': 'TextEdit', '30.12.24_1': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC020125_18.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '02.01.25_TC (kgMS/ha/d)': 'TextEdit', '02.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC301224_19.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '30.12.24 ol_TC (kgMS/ha/d)': 'TextEdit', '30.12.24 ol_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC231224_20.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', '23.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC201224_21.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '20.12.24_TC (kgMS/h/da)': 'TextEdit', '20.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC181224_22.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '18.12.24_TC (kgMS/h/da)': 'TextEdit', '18.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC101224_23.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '10.12.24_TC (kgMS/h/da)': 'TextEdit', '10.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC51224_24.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '5.12.24_TC': '', '5.12.24_Di': '', });
lyr_TC140125_13.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '14.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '14.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC110125_14.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '11.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '11.01.25_disponible (kgMS/ha/d)': 'header label - visible with data', });
lyr_TC090125_15.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '09.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '09.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC070125_16.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '07.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '07.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC040125_17.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '30.12.24 o': 'hidden field', '30.12.24_1': 'hidden field', '04.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '04.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC020125_18.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '02.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '02.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC301224_19.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '30.12.24 ol_TC (kgMS/ha/d)': 'header label - visible with data', '30.12.24 ol_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC231224_20.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '23.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '23.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC201224_21.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '20.12.24_TC (kgMS/h/da)': 'header label - visible with data', '20.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC181224_22.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '18.12.24_TC (kgMS/h/da)': 'header label - visible with data', '18.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC101224_23.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '10.12.24_TC (kgMS/h/da)': 'header label - visible with data', '10.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC51224_24.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '5.12.24_TC': 'header label - visible with data', '5.12.24_Di': 'header label - visible with data', });
lyr_TC51224_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});