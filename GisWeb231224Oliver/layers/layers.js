var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi2312_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi2012_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 20.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2012_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399052.873329, -3879145.536477, -6389486.076290, -3866722.834994]
                            })
                        });
var lyr_ndvi1812_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399052.873329, -3879145.536477, -6389486.076290, -3866722.834994]
                            })
                        });
var lyr_ndvi1012_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1012_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi512_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi512_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var format_TC231224_6 = new ol.format.GeoJSON();
var features_TC231224_6 = format_TC231224_6.readFeatures(json_TC231224_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC231224_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC231224_6.addFeatures(features_TC231224_6);
var lyr_TC231224_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC231224_6, 
                style: style_TC231224_6,
                popuplayertitle: 'TC 23.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC231224_6.png" /> TC 23.12.24'
            });
var format_TC201224_7 = new ol.format.GeoJSON();
var features_TC201224_7 = format_TC201224_7.readFeatures(json_TC201224_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC201224_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC201224_7.addFeatures(features_TC201224_7);
var lyr_TC201224_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC201224_7, 
                style: style_TC201224_7,
                popuplayertitle: 'TC 20.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC201224_7.png" /> TC 20.12.24'
            });
var format_TC181224_8 = new ol.format.GeoJSON();
var features_TC181224_8 = format_TC181224_8.readFeatures(json_TC181224_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC181224_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC181224_8.addFeatures(features_TC181224_8);
var lyr_TC181224_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC181224_8, 
                style: style_TC181224_8,
                popuplayertitle: 'TC 18.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC181224_8.png" /> TC 18.12.24'
            });
var format_TC101224_9 = new ol.format.GeoJSON();
var features_TC101224_9 = format_TC101224_9.readFeatures(json_TC101224_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC101224_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC101224_9.addFeatures(features_TC101224_9);
var lyr_TC101224_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC101224_9, 
                style: style_TC101224_9,
                popuplayertitle: 'TC 10.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC101224_9.png" /> TC 10.12.24'
            });
var format_TC51224_10 = new ol.format.GeoJSON();
var features_TC51224_10 = format_TC51224_10.readFeatures(json_TC51224_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC51224_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC51224_10.addFeatures(features_TC51224_10);
var lyr_TC51224_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC51224_10, 
                style: style_TC51224_10,
                popuplayertitle: 'TC 5.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC51224_10.png" /> TC 5.12.24'
            });
var group_Oliver = new ol.layer.Group({
                                layers: [lyr_ndvi2312_1,lyr_ndvi2012_2,lyr_ndvi1812_3,lyr_ndvi1012_4,lyr_ndvi512_5,lyr_TC231224_6,lyr_TC201224_7,lyr_TC181224_8,lyr_TC101224_9,lyr_TC51224_10,],
                                fold: "open",
                                title: 'Oliver'});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: 'group1'});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi2312_1.setVisible(true);lyr_ndvi2012_2.setVisible(true);lyr_ndvi1812_3.setVisible(true);lyr_ndvi1012_4.setVisible(true);lyr_ndvi512_5.setVisible(true);lyr_TC231224_6.setVisible(true);lyr_TC201224_7.setVisible(true);lyr_TC181224_8.setVisible(true);lyr_TC101224_9.setVisible(true);lyr_TC51224_10.setVisible(true);
var layersList = [group_group1,group_Oliver];
lyr_TC231224_6.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_TC201224_7.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '20.12.24_TC (kgMS/h/da)': '20.12.24_TC (kgMS/h/da)', '20.12.24_Disponible (kgMS/ha)': '20.12.24_Disponible (kgMS/ha)', });
lyr_TC181224_8.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '18.12.24_TC (kgMS/h/da)': '18.12.24_TC (kgMS/h/da)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_TC101224_9.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '10.12.24_TC (kgMS/h/da)': '10.12.24_TC (kgMS/h/da)', '10.12.24_Disponible (kgMS/ha)': '10.12.24_Disponible (kgMS/ha)', });
lyr_TC51224_10.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '5.12.24_TC': '5.12.24_TC', '5.12.24_Di': '5.12.24_Di', });
lyr_TC231224_6.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'TextEdit', '23.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC201224_7.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '20.12.24_TC (kgMS/h/da)': 'TextEdit', '20.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC181224_8.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '18.12.24_TC (kgMS/h/da)': 'TextEdit', '18.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC101224_9.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '10.12.24_TC (kgMS/h/da)': 'TextEdit', '10.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC51224_10.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '5.12.24_TC': '', '5.12.24_Di': '', });
lyr_TC231224_6.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '23.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '23.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC201224_7.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '20.12.24_TC (kgMS/h/da)': 'header label - visible with data', '20.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC181224_8.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '18.12.24_TC (kgMS/h/da)': 'header label - visible with data', '18.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC101224_9.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '10.12.24_TC (kgMS/h/da)': 'header label - visible with data', '10.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC51224_10.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '5.12.24_TC': 'header label - visible with data', '5.12.24_Di': 'header label - visible with data', });
lyr_TC51224_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});