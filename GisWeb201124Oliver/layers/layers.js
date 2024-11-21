var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi1011_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 10.11",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi1011_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.429925, -3879185.809308, -6389439.125122, -3866683.585850]
                            })
                        });
var lyr_ndvi511_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 5.11",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi511_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399052.873329, -3879145.536477, -6389486.076290, -3866722.834994]
                            })
                        });
var lyr_ndvi1311_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 13.11",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi1311_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419156, -3879185.775389, -6389439.118324, -3866683.598846]
                            })
                        });
var lyr_ndvi1511_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 15.11",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi1511_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419156, -3879185.775389, -6389439.118324, -3866683.598846]
                            })
                        });
var lyr_ndvi2011_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 20.11",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi2011_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var format_oliver_6 = new ol.format.GeoJSON();
var features_oliver_6 = format_oliver_6.readFeatures(json_oliver_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oliver_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oliver_6.addFeatures(features_oliver_6);
var lyr_oliver_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_oliver_6, 
                style: style_oliver_6,
                popuplayertitle: "oliver",
                interactive: true,
                title: '<img src="styles/legend/oliver_6.png" /> oliver'
            });
var group_Oliver = new ol.layer.Group({
                                layers: [lyr_ndvi1011_1,lyr_ndvi511_2,lyr_ndvi1311_3,lyr_ndvi1511_4,lyr_ndvi2011_5,lyr_oliver_6,],
                                fold: "open",
                                title: "Oliver"});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: "group1"});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi1011_1.setVisible(true);lyr_ndvi511_2.setVisible(true);lyr_ndvi1311_3.setVisible(true);lyr_ndvi1511_4.setVisible(true);lyr_ndvi2011_5.setVisible(true);lyr_oliver_6.setVisible(true);
var layersList = [group_group1,group_Oliver];
lyr_oliver_6.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '20.11.24_TC': '20.11.24_TC', '20.11.24_Disponible (kgMS/ha)': '20.11.24_Disponible (kgMS/ha)', });
lyr_oliver_6.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '20.11.24_TC': 'TextEdit', '20.11.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_oliver_6.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '20.11.24_TC': 'header label - always visible', '20.11.24_Disponible (kgMS/ha)': 'header label - always visible', });
lyr_oliver_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});