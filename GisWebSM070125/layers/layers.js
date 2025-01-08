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
var lyr_ndvi040125_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi040125_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var format_TC51224_5 = new ol.format.GeoJSON();
var features_TC51224_5 = format_TC51224_5.readFeatures(json_TC51224_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC51224_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC51224_5.addFeatures(features_TC51224_5);
var lyr_TC51224_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC51224_5, 
                style: style_TC51224_5,
                popuplayertitle: 'TC 5.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC51224_5.png" /> TC 5.12.24'
            });
var format_TC101224_6 = new ol.format.GeoJSON();
var features_TC101224_6 = format_TC101224_6.readFeatures(json_TC101224_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC101224_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC101224_6.addFeatures(features_TC101224_6);
var lyr_TC101224_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC101224_6, 
                style: style_TC101224_6,
                popuplayertitle: 'TC 10.12.24',
                interactive: true,
                title: '<img src="styles/legend/TC101224_6.png" /> TC 10.12.24'
            });
var format_TC3012224_7 = new ol.format.GeoJSON();
var features_TC3012224_7 = format_TC3012224_7.readFeatures(json_TC3012224_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC3012224_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC3012224_7.addFeatures(features_TC3012224_7);
var lyr_TC3012224_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC3012224_7, 
                style: style_TC3012224_7,
                popuplayertitle: 'TC 30.12.224',
                interactive: true,
                title: '<img src="styles/legend/TC3012224_7.png" /> TC 30.12.224'
            });
var format_TC040125_8 = new ol.format.GeoJSON();
var features_TC040125_8 = format_TC040125_8.readFeatures(json_TC040125_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC040125_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC040125_8.addFeatures(features_TC040125_8);
var lyr_TC040125_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC040125_8, 
                style: style_TC040125_8,
                popuplayertitle: 'TC 04.01.25',
                interactive: true,
                title: '<img src="styles/legend/TC040125_8.png" /> TC 04.01.25'
            });
var format_ResumenTCpromediokgMShad_9 = new ol.format.GeoJSON();
var features_ResumenTCpromediokgMShad_9 = format_ResumenTCpromediokgMShad_9.readFeatures(json_ResumenTCpromediokgMShad_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResumenTCpromediokgMShad_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumenTCpromediokgMShad_9.addFeatures(features_ResumenTCpromediokgMShad_9);
var lyr_ResumenTCpromediokgMShad_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResumenTCpromediokgMShad_9, 
                style: style_ResumenTCpromediokgMShad_9,
                popuplayertitle: 'Resumen TC promedio (kgMS/ha/d)',
                interactive: true,
                title: '<img src="styles/legend/ResumenTCpromediokgMShad_9.png" /> Resumen TC promedio (kgMS/ha/d)'
            });
var group_Nouso = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'No uso'});

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi51224_1.setVisible(true);lyr_ndvi101224_2.setVisible(true);lyr_ndvi301224_3.setVisible(true);lyr_ndvi040125_4.setVisible(true);lyr_TC51224_5.setVisible(true);lyr_TC101224_6.setVisible(true);lyr_TC3012224_7.setVisible(true);lyr_TC040125_8.setVisible(true);lyr_ResumenTCpromediokgMShad_9.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi51224_1,lyr_ndvi101224_2,lyr_ndvi301224_3,lyr_ndvi040125_4,lyr_TC51224_5,lyr_TC101224_6,lyr_TC3012224_7,lyr_TC040125_8,lyr_ResumenTCpromediokgMShad_9];
lyr_TC51224_5.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '5.12.24_TC': '5.12.24_TC', '5.12.24_Di': '5.12.24_Di', });
lyr_TC101224_6.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '10.12.24_TC (kgMS/ha/d)': '10.12.24_TC (kgMS/ha/d)', '10.12.24_Disponible (kgMS/ha)': '10.12.24_Disponible (kgMS/ha)', });
lyr_TC3012224_7.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_TC040125_8.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '30.12.24_T': '30.12.24_T', '30.12.24_D': '30.12.24_D', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', '04.01.25_Disponible (kgMS/ha)': '04.01.25_Disponible (kgMS/ha)', });
lyr_ResumenTCpromediokgMShad_9.set('fieldAliases', {'Cría 5.12': 'Cría 5.12', 'Recría 5.': 'Recría 5.', 'Cría 10.1': 'Cría 10.1', 'Recría 10': 'Recría 10', 'Cría 30.1': 'Cría 30.1', 'Recría301': 'Recría301', 'Cría7.1.2': 'Cría7.1.2', 'Recría7.1': 'Recría7.1', });
lyr_TC51224_5.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '5.12.24_TC': '', '5.12.24_Di': '', });
lyr_TC101224_6.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '10.12.24_TC (kgMS/ha/d)': 'TextEdit', '10.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC3012224_7.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'TextEdit', '30.12.24_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC040125_8.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '30.12.24_T': 'TextEdit', '30.12.24_D': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'TextEdit', '04.01.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_ResumenTCpromediokgMShad_9.set('fieldImages', {'Cría 5.12': '', 'Recría 5.': '', 'Cría 10.1': '', 'Recría 10': '', 'Cría 30.1': '', 'Recría301': '', 'Cría7.1.2': '', 'Recría7.1': '', });
lyr_TC51224_5.set('fieldLabels', {'id': 'hidden field', 'Campo': 'header label - always visible', 'Especie': 'inline label - visible with data', 'Area': 'inline label - always visible', 'pot imp_Po': 'header label - always visible', '5.12.24_TC': 'header label - visible with data', '5.12.24_Di': 'header label - visible with data', });
lyr_TC101224_6.set('fieldLabels', {'id': 'hidden field', 'Campo': 'header label - always visible', 'Especie': 'inline label - visible with data', 'Area': 'inline label - always visible', 'pot imp_Po': 'header label - always visible', '10.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '10.12.24_Disponible (kgMS/ha)': 'header label - always visible', });
lyr_TC3012224_7.set('fieldLabels', {'id': 'hidden field', 'Campo': 'header label - always visible', 'Especie': 'inline label - visible with data', 'Area': 'inline label - always visible', 'pot imp_Po': 'header label - always visible', '30.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_TC040125_8.set('fieldLabels', {'id': 'hidden field', 'Campo': 'header label - always visible', 'Especie': 'inline label - visible with data', 'Area': 'inline label - always visible', 'pot imp_Po': 'header label - always visible', '30.12.24_T': 'no label', '30.12.24_D': 'no label', '04.01.25_TC (kgMS/ha/d)': 'header label - visible with data', '04.01.25_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_ResumenTCpromediokgMShad_9.set('fieldLabels', {'Cría 5.12': 'inline label - visible with data', 'Recría 5.': 'inline label - visible with data', 'Cría 10.1': 'inline label - visible with data', 'Recría 10': 'inline label - visible with data', 'Cría 30.1': 'inline label - visible with data', 'Recría301': 'inline label - visible with data', 'Cría7.1.2': 'inline label - visible with data', 'Recría7.1': 'inline label - visible with data', });
lyr_ResumenTCpromediokgMShad_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});