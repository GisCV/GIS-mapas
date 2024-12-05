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
var format_oliver_2 = new ol.format.GeoJSON();
var features_oliver_2 = format_oliver_2.readFeatures(json_oliver_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oliver_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oliver_2.addFeatures(features_oliver_2);
var lyr_oliver_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_oliver_2, 
                style: style_oliver_2,
                popuplayertitle: "oliver",
                interactive: true,
                title: '<img src="styles/legend/oliver_2.png" /> oliver'
            });
var group_Oliver = new ol.layer.Group({
                                layers: [lyr_ndvi512_1,lyr_oliver_2,],
                                fold: "open",
                                title: "Oliver"});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_googlesatelite_0,],
                                fold: "open",
                                title: "group1"});

lyr_googlesatelite_0.setVisible(true);lyr_ndvi512_1.setVisible(true);lyr_oliver_2.setVisible(true);
var layersList = [group_group1,group_Oliver];
lyr_oliver_2.set('fieldAliases', {'Especie': 'Especie', 'id': 'id', 'Potrero': 'Potrero', 'Campo': 'Campo', 'Area': 'Area', '5.12.24_TC (kgMS/h/da)': '5.12.24_TC (kgMS/h/da)', '5.12.24_Disponible (kgMS/ha)': '5.12.24_Disponible (kgMS/ha)', });
lyr_oliver_2.set('fieldImages', {'Especie': 'TextEdit', 'id': 'TextEdit', 'Potrero': 'TextEdit', 'Campo': 'TextEdit', 'Area': 'TextEdit', '5.12.24_TC (kgMS/h/da)': 'TextEdit', '5.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_oliver_2.set('fieldLabels', {'Especie': 'header label - always visible', 'id': 'hidden field', 'Potrero': 'header label - always visible', 'Campo': 'inline label - visible with data', 'Area': 'header label - always visible', '5.12.24_TC (kgMS/h/da)': 'header label - visible with data', '5.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_oliver_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});