var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi201124_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 20.11.24",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi201124_1.png",
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
var format_ResumenTCpromediokgMShad_3 = new ol.format.GeoJSON();
var features_ResumenTCpromediokgMShad_3 = format_ResumenTCpromediokgMShad_3.readFeatures(json_ResumenTCpromediokgMShad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResumenTCpromediokgMShad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumenTCpromediokgMShad_3.addFeatures(features_ResumenTCpromediokgMShad_3);
var lyr_ResumenTCpromediokgMShad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResumenTCpromediokgMShad_3, 
                style: style_ResumenTCpromediokgMShad_3,
                popuplayertitle: "Resumen TC promedio (kgMS/ha/d)",
                interactive: true,
                title: '<img src="styles/legend/ResumenTCpromediokgMShad_3.png" /> Resumen TC promedio (kgMS/ha/d)'
            });

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi201124_1.setVisible(true);lyr_CNypraderasoct24_2.setVisible(true);lyr_ResumenTCpromediokgMShad_3.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi201124_1,lyr_CNypraderasoct24_2,lyr_ResumenTCpromediokgMShad_3];
lyr_CNypraderasoct24_2.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'Esp_2024': 'Recurso', 'layer': 'layer', 'path': 'path', 'pot imp_Po': 'Potrero', '20.11.24_TC': '20.11.24_TC', '20.11.24_Disponibilidad (kgMS/ha)': '20.11.24_Disponibilidad (kgMS/ha)', });
lyr_ResumenTCpromediokgMShad_3.set('fieldAliases', {'Cría': 'Cría', 'Recría': 'Recría', });
lyr_CNypraderasoct24_2.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'Esp_2024': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'pot imp_Po': 'TextEdit', '20.11.24_TC': 'TextEdit', '20.11.24_Disponibilidad (kgMS/ha)': 'TextEdit', });
lyr_ResumenTCpromediokgMShad_3.set('fieldImages', {'Cría': '', 'Recría': '', });
lyr_CNypraderasoct24_2.set('fieldLabels', {'id': 'header label - visible with data', 'Campo': 'header label - always visible', 'Especie': 'inline label - visible with data', 'Area': 'inline label - always visible', 'Esp_2024': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', 'pot imp_Po': 'header label - always visible', '20.11.24_TC': 'header label - always visible', '20.11.24_Disponibilidad (kgMS/ha)': 'header label - always visible', });
lyr_ResumenTCpromediokgMShad_3.set('fieldLabels', {'Cría': 'inline label - always visible', 'Recría': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});