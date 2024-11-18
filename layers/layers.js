var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi151124potreros_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 15.11.24 potreros",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi151124potreros_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var format_CNypraderasoct24_2 = new ol.format.GeoJSON();
var features_CNypraderasoct24_2 = format_CNypraderasoct24_2.readFeatures(json_CNypraderasoct24_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CNypraderasoct24_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CNypraderasoct24_2.addFeatures(features_CNypraderasoct24_2);
var lyr_CNypraderasoct24_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CNypraderasoct24_2, 
                style: style_CNypraderasoct24_2,
                popuplayertitle: "CN y praderas oct 24",
                interactive: true,
                title: '<img src="styles/legend/CNypraderasoct24_2.png" /> CN y praderas oct 24'
            });

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi151124potreros_1.setVisible(true);lyr_CNypraderasoct24_2.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi151124potreros_1,lyr_CNypraderasoct24_2];
lyr_CNypraderasoct24_2.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'Esp_2024': 'Recurso', 'layer': 'layer', 'path': 'path', 'pot imp_Po': 'Potrero', '15.11.24_TC': '15.11.24_TC', });
lyr_CNypraderasoct24_2.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'Esp_2024': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'pot imp_Po': 'TextEdit', '15.11.24_TC': 'TextEdit', });
lyr_CNypraderasoct24_2.set('fieldLabels', {'id': 'hidden field', 'Campo': 'header label - always visible', 'Especie': 'inline label - visible with data', 'Area': 'inline label - always visible', 'Esp_2024': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', 'pot imp_Po': 'header label - always visible', '15.11.24_TC': 'header label - always visible', });
lyr_CNypraderasoct24_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});