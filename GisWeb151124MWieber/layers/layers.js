var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi151124pot_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 15.11.24 pot",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi151124pot_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6393488.459852, -3876631.053644, -6392266.292856, -3874522.261435]
                            })
                        });
var format_MartinWiebe_2 = new ol.format.GeoJSON();
var features_MartinWiebe_2 = format_MartinWiebe_2.readFeatures(json_MartinWiebe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MartinWiebe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MartinWiebe_2.addFeatures(features_MartinWiebe_2);
var lyr_MartinWiebe_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MartinWiebe_2, 
                style: style_MartinWiebe_2,
                popuplayertitle: "Martin Wiebe",
                interactive: true,
                title: '<img src="styles/legend/MartinWiebe_2.png" /> Martin Wiebe'
            });
var group_MW = new ol.layer.Group({
                                layers: [lyr_ndvi151124pot_1,lyr_MartinWiebe_2,],
                                fold: "open",
                                title: "M.W"});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: "group1"});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi151124pot_1.setVisible(true);lyr_MartinWiebe_2.setVisible(true);
var layersList = [group_group1,group_MW];
lyr_MartinWiebe_2.set('fieldAliases', {'id': 'id', 'Especie': 'Especie', 'Pot': 'Pot', 'Area': 'Area', '15.11.24_TC': '15.11.24_TC', });
lyr_MartinWiebe_2.set('fieldImages', {'id': 'TextEdit', 'Especie': 'TextEdit', 'Pot': 'TextEdit', 'Area': 'TextEdit', '15.11.24_TC': 'TextEdit', });
lyr_MartinWiebe_2.set('fieldLabels', {'id': 'hidden field', 'Especie': 'header label - always visible', 'Pot': 'header label - always visible', 'Area': 'header label - always visible', '15.11.24_TC': 'header label - always visible', });
lyr_MartinWiebe_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});