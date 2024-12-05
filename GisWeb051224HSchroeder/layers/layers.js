var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi51224_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 5.12.24",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi51224_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6397617.010243, -3876803.113215, -6395370.113178, -3875069.250742]
                            })
                        });
var format_HenrySchrder_2 = new ol.format.GeoJSON();
var features_HenrySchrder_2 = format_HenrySchrder_2.readFeatures(json_HenrySchrder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HenrySchrder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HenrySchrder_2.addFeatures(features_HenrySchrder_2);
var lyr_HenrySchrder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HenrySchrder_2, 
                style: style_HenrySchrder_2,
                popuplayertitle: "Henry Schröder",
                interactive: true,
                title: '<img src="styles/legend/HenrySchrder_2.png" /> Henry Schröder'
            });
var group_HS = new ol.layer.Group({
                                layers: [lyr_HenrySchrder_2,],
                                fold: "open",
                                title: "H.S"});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: "group1"});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi51224_1.setVisible(true);lyr_HenrySchrder_2.setVisible(true);
var layersList = [group_group1,lyr_ndvi51224_1,group_HS];
lyr_HenrySchrder_2.set('fieldAliases', {'id': 'id', 'Potrero': 'Potrero', 'Especie': 'Especie', 'Area': 'Area', '5.12.24 hs_TC (kgMS/ha/d)': '5.12.24 hs_TC (kgMS/ha/d)', '5.12.24 hs_Disponible (kgMS/ha)': '5.12.24 hs_Disponible (kgMS/ha)', });
lyr_HenrySchrder_2.set('fieldImages', {'id': 'TextEdit', 'Potrero': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', '5.12.24 hs_TC (kgMS/ha/d)': 'TextEdit', '5.12.24 hs_Disponible (kgMS/ha)': 'TextEdit', });
lyr_HenrySchrder_2.set('fieldLabels', {'id': 'hidden field', 'Potrero': 'header label - always visible', 'Especie': 'header label - always visible', 'Area': 'header label - always visible', '5.12.24 hs_TC (kgMS/ha/d)': 'header label - visible with data', '5.12.24 hs_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_HenrySchrder_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});