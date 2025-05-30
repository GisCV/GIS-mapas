var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi51224_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 5.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi51224_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi101224_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi101224_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi301224_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12.24',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi301224_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
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
                popuplayertitle: 'TC 5.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC51224_4.png" /> TC 5.12.24'
            });
var format_TC101224_5 = new ol.format.GeoJSON();
var features_TC101224_5 = format_TC101224_5.readFeatures(json_TC101224_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC101224_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC101224_5.addFeatures(features_TC101224_5);
var lyr_TC101224_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC101224_5, 
                style: style_TC101224_5,
                popuplayertitle: 'TC 10.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC101224_5.png" /> TC 10.12.24'
            });
var format_TC3012224_6 = new ol.format.GeoJSON();
var features_TC3012224_6 = format_TC3012224_6.readFeatures(json_TC3012224_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC3012224_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC3012224_6.addFeatures(features_TC3012224_6);
var lyr_TC3012224_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC3012224_6, 
                style: style_TC3012224_6,
                popuplayertitle: 'TC 30.12.224',
                interactive: true,
                title: '<img src="styles/legend/TC3012224_6.png" /> TC 30.12.224'
            });
var format_ResumenTCpromediokgMShad_7 = new ol.format.GeoJSON();
var features_ResumenTCpromediokgMShad_7 = format_ResumenTCpromediokgMShad_7.readFeatures(json_ResumenTCpromediokgMShad_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResumenTCpromediokgMShad_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumenTCpromediokgMShad_7.addFeatures(features_ResumenTCpromediokgMShad_7);
var lyr_ResumenTCpromediokgMShad_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResumenTCpromediokgMShad_7, 
                style: style_ResumenTCpromediokgMShad_7,
                popuplayertitle: 'Resumen TC promedio (kgMS/ha/d)',
                interactive: true,
                title: '<img src="styles/legend/ResumenTCpromediokgMShad_7.png" /> Resumen TC promedio (kgMS/ha/d)'
            });

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi51224_1.setVisible(true);lyr_ndvi101224_2.setVisible(true);lyr_ndvi301224_3.setVisible(true);lyr_TC51224_4.setVisible(true);lyr_TC101224_5.setVisible(true);lyr_TC3012224_6.setVisible(true);lyr_ResumenTCpromediokgMShad_7.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi51224_1,lyr_ndvi101224_2,lyr_ndvi301224_3,lyr_TC51224_4,lyr_TC101224_5,lyr_TC3012224_6,lyr_ResumenTCpromediokgMShad_7];
lyr_TC51224_4.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '5.12.24_TC': '5.12.24_TC', '5.12.24_Di': '5.12.24_Di', });
lyr_TC101224_5.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '10.12.24_TC (kgMS/ha/d)': '10.12.24_TC (kgMS/ha/d)', '10.12.24_Disponible (kgMS/ha)': '10.12.24_Disponible (kgMS/ha)', });
lyr_TC3012224_6.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_ResumenTCpromediokgMShad_7.set('fieldAliases', {'Cría 5.12': 'Cría 5.12', 'Recría 5.': 'Recría 5.', 'Cría 10.1': 'Cría 10.1', 'Recría 10': 'Recría 10', 'Cría 30.1': 'Cría 30.1', 'Recría301': 'Recría301', });
lyr_TC51224_4.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '5.12.24_TC': '', '5.12.24_Di': '', });
lyr_TC101224_5.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '10.12.24_TC (kgMS/ha/d)': 'TextEdit', '10.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC3012224_6.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'TextEdit', '30.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_ResumenTCpromediokgMShad_7.set('fieldImages', {'Cría 5.12': '', 'Recría 5.': '', 'Cría 10.1': '', 'Recría 10': '', 'Cría 30.1': '', 'Recría301': '', });
lyr_TC51224_4.set('fieldLabels', {'id': 'hidden field', 'Campo': 'header label - always visible', 'Especie': 'inline label - visible with data', 'Area': 'inline label - always visible', 'pot imp_Po': 'header label - always visible', '5.12.24_TC': 'header label - visible with data', '5.12.24_Di': 'header label - visible with data', });
lyr_TC101224_5.set('fieldLabels', {'id': 'hidden field', 'Campo': 'header label - always visible', 'Especie': 'inline label - visible with data', 'Area': 'inline label - always visible', 'pot imp_Po': 'header label - always visible', '10.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '10.12.24_Disponible (kgMS/ha)': 'header label - always visible', });
lyr_TC3012224_6.set('fieldLabels', {'id': 'hidden field', 'Campo': 'header label - always visible', 'Especie': 'inline label - visible with data', 'Area': 'inline label - always visible', 'pot imp_Po': 'header label - always visible', '30.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_ResumenTCpromediokgMShad_7.set('fieldLabels', {'Cría 5.12': 'inline label - visible with data', 'Recría 5.': 'inline label - visible with data', 'Cría 10.1': 'inline label - visible with data', 'Recría 10': 'inline label - visible with data', 'Cría 30.1': 'inline label - visible with data', 'Recría301': 'inline label - visible with data', });
lyr_ResumenTCpromediokgMShad_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});