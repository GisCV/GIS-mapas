var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi512_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 5.12",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi512_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var lyr_ndvi1012_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 10.12",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi1012_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6399053.419152, -3879759.467633, -6389436.968908, -3866683.610838]
                            })
                        });
var format_TC101224_3 = new ol.format.GeoJSON();
var features_TC101224_3 = format_TC101224_3.readFeatures(json_TC101224_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC101224_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC101224_3.addFeatures(features_TC101224_3);
var lyr_TC101224_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC101224_3, 
                style: style_TC101224_3,
                popuplayertitle: "TC 10.12.24",
                interactive: true,
                title: '<img src="styles/legend/TC101224_3.png" /> TC 10.12.24'
            });
var format_TC51224_4 = new ol.format.GeoJSON();
var features_TC51224_4 = format_TC51224_4.readFeatures(json_TC51224_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC51224_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC51224_4.addFeatures(features_TC51224_4);
var lyr_TC51224_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC51224_4, 
                style: style_TC51224_4,
                popuplayertitle: "TC 5.12.24",
                interactive: true,
                title: '<img src="styles/legend/TC51224_4.png" /> TC 5.12.24'
            });
var group_Oliver = new ol.layer.Group({
                                layers: [lyr_ndvi512_1,lyr_ndvi1012_2,lyr_TC101224_3,lyr_TC51224_4,],
                                fold: "open",
                                title: "Oliver"});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: "group1"});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi512_1.setVisible(true);lyr_ndvi1012_2.setVisible(true);lyr_TC101224_3.setVisible(true);lyr_TC51224_4.setVisible(true);
var layersList = [group_group1,group_Oliver];
lyr_TC101224_3.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '10.12.24_TC (kgMS/h/da)': '10.12.24_TC (kgMS/h/da)', '10.12.24_Disponible (kgMS/ha)': '10.12.24_Disponible (kgMS/ha)', });
lyr_TC51224_4.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '5.12.24_TC': '5.12.24_TC', '5.12.24_Di': '5.12.24_Di', });
lyr_TC101224_3.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '10.12.24_TC (kgMS/h/da)': 'TextEdit', '10.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC51224_4.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '5.12.24_TC': '', '5.12.24_Di': '', });
lyr_TC101224_3.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '10.12.24_TC (kgMS/h/da)': 'header label - visible with data', '10.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC51224_4.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '5.12.24_TC': 'header label - visible with data', '5.12.24_Di': 'header label - visible with data', });
lyr_TC51224_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});