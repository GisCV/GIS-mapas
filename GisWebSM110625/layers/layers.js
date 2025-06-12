var wms_layers = [];


        var lyr_Googlesatelite_0 = new ol.layer.Tile({
            'title': 'Google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi290425_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 29.04.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi290425_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi020525_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 02.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi020525_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi040525_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi040525_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi120525_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 12.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi120525_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi220525_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 22.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi220525_5.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi290525_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 29.05.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi290525_6.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi010625_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 01.06.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi010625_7.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi080625_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 08.06.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi080625_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi100625_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 10.06.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi100625_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var lyr_ndvi110625_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 11.06.25',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi110625_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6419462.220277, -3963752.751085, -6408238.732155, -3947115.193257]
                            })
                        });
var format_TC290425_11 = new ol.format.GeoJSON();
var features_TC290425_11 = format_TC290425_11.readFeatures(json_TC290425_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC290425_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC290425_11.addFeatures(features_TC290425_11);
var lyr_TC290425_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC290425_11, 
                style: style_TC290425_11,
                popuplayertitle: 'TC 29.04.25',
                interactive: true,
                title: '<img src="styles/legend/TC290425_11.png" /> TC 29.04.25'
            });
var format_TC040525_12 = new ol.format.GeoJSON();
var features_TC040525_12 = format_TC040525_12.readFeatures(json_TC040525_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC040525_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC040525_12.addFeatures(features_TC040525_12);
var lyr_TC040525_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC040525_12, 
                style: style_TC040525_12,
                popuplayertitle: 'TC 04.05.25',
                interactive: true,
                title: '<img src="styles/legend/TC040525_12.png" /> TC 04.05.25'
            });
var format_TC120525_13 = new ol.format.GeoJSON();
var features_TC120525_13 = format_TC120525_13.readFeatures(json_TC120525_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC120525_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC120525_13.addFeatures(features_TC120525_13);
var lyr_TC120525_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC120525_13, 
                style: style_TC120525_13,
                popuplayertitle: 'TC 12.05.25',
                interactive: true,
                title: '<img src="styles/legend/TC120525_13.png" /> TC 12.05.25'
            });
var format_TC220525_14 = new ol.format.GeoJSON();
var features_TC220525_14 = format_TC220525_14.readFeatures(json_TC220525_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC220525_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC220525_14.addFeatures(features_TC220525_14);
var lyr_TC220525_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC220525_14, 
                style: style_TC220525_14,
                popuplayertitle: 'TC 22.05.25',
                interactive: true,
                title: '<img src="styles/legend/TC220525_14.png" /> TC 22.05.25'
            });
var format_TC010625_15 = new ol.format.GeoJSON();
var features_TC010625_15 = format_TC010625_15.readFeatures(json_TC010625_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC010625_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC010625_15.addFeatures(features_TC010625_15);
var lyr_TC010625_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC010625_15, 
                style: style_TC010625_15,
                popuplayertitle: 'TC 01.06.25',
                interactive: true,
                title: '<img src="styles/legend/TC010625_15.png" /> TC 01.06.25'
            });
var format_TC080625_16 = new ol.format.GeoJSON();
var features_TC080625_16 = format_TC080625_16.readFeatures(json_TC080625_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC080625_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC080625_16.addFeatures(features_TC080625_16);
var lyr_TC080625_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC080625_16, 
                style: style_TC080625_16,
                popuplayertitle: 'TC 08.06.25',
                interactive: true,
                title: '<img src="styles/legend/TC080625_16.png" /> TC 08.06.25'
            });
var format_TC110625_17 = new ol.format.GeoJSON();
var features_TC110625_17 = format_TC110625_17.readFeatures(json_TC110625_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TC110625_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TC110625_17.addFeatures(features_TC110625_17);
var lyr_TC110625_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TC110625_17, 
                style: style_TC110625_17,
                popuplayertitle: 'TC 11.06.25',
                interactive: true,
                title: '<img src="styles/legend/TC110625_17.png" /> TC 11.06.25'
            });
var format_ResumenTCpromediokgMShad_18 = new ol.format.GeoJSON();
var features_ResumenTCpromediokgMShad_18 = format_ResumenTCpromediokgMShad_18.readFeatures(json_ResumenTCpromediokgMShad_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResumenTCpromediokgMShad_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumenTCpromediokgMShad_18.addFeatures(features_ResumenTCpromediokgMShad_18);
var lyr_ResumenTCpromediokgMShad_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResumenTCpromediokgMShad_18, 
                style: style_ResumenTCpromediokgMShad_18,
                popuplayertitle: 'Resumen TC promedio (kgMS/ha/d)',
                interactive: true,
                title: '<img src="styles/legend/ResumenTCpromediokgMShad_18.png" /> Resumen TC promedio (kgMS/ha/d)'
            });
var group_TC2025 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'TC 2025'});
var group_2025 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '2025'});
var group_2024 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '2024'});
var group_Octubre = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Octubre '});
var group_Nouso = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'No uso'});

lyr_Googlesatelite_0.setVisible(true);lyr_ndvi290425_1.setVisible(true);lyr_ndvi020525_2.setVisible(true);lyr_ndvi040525_3.setVisible(true);lyr_ndvi120525_4.setVisible(true);lyr_ndvi220525_5.setVisible(true);lyr_ndvi290525_6.setVisible(true);lyr_ndvi010625_7.setVisible(true);lyr_ndvi080625_8.setVisible(true);lyr_ndvi100625_9.setVisible(true);lyr_ndvi110625_10.setVisible(true);lyr_TC290425_11.setVisible(true);lyr_TC040525_12.setVisible(true);lyr_TC120525_13.setVisible(true);lyr_TC220525_14.setVisible(true);lyr_TC010625_15.setVisible(true);lyr_TC080625_16.setVisible(true);lyr_TC110625_17.setVisible(true);lyr_ResumenTCpromediokgMShad_18.setVisible(true);
var layersList = [lyr_Googlesatelite_0,lyr_ndvi290425_1,lyr_ndvi020525_2,lyr_ndvi040525_3,lyr_ndvi120525_4,lyr_ndvi220525_5,lyr_ndvi290525_6,lyr_ndvi010625_7,lyr_ndvi080625_8,lyr_ndvi100625_9,lyr_ndvi110625_10,lyr_TC290425_11,lyr_TC040525_12,lyr_TC120525_13,lyr_TC220525_14,lyr_TC010625_15,lyr_TC080625_16,lyr_TC110625_17,lyr_ResumenTCpromediokgMShad_18];
lyr_TC290425_11.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '29.04.25_TC (kgMS/ha/d)': '29.04.25_TC (kgMS/ha/d)', '29.04.25_Disponible (kgMS/ha)': '29.04.25_Disponible (kgMS/ha)', });
lyr_TC040525_12.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '02.05_TC (kgMS/ha/d)': '02.05_TC (kgMS/ha/d)', '02.05_Disponible (kgMS/ha)': '02.05_Disponible (kgMS/ha)', '04.05_TC (kgMS/ha/d)': '04.05_TC (kgMS/ha/d)', '04.05_Disponible (kgMS/ha)': '04.05_Disponible (kgMS/ha)', });
lyr_TC120525_13.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '12.05.25_TC (kgMS/ha/d)': '12.05.25_TC (kgMS/ha/d)', '12.05.25_Disponible (kgMS/ha)': '12.05.25_Disponible (kgMS/ha)', });
lyr_TC220525_14.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '22.05.25_TC (kgMS/ha/d)': '22.05.25_TC (kgMS/ha/d)', '22.05.25_Disponible (kgMS/ha)': '22.05.25_Disponible (kgMS/ha)', });
lyr_TC010625_15.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '29.05.25_TC (kgMS/ha/d)': '29.05.25_TC (kgMS/ha/d)', '29.05.25_Disponible (kgMS/ha)': '29.05.25_Disponible (kgMS/ha)', '01.06.25_TC (kgMS/ha/d)': '01.06.25_TC (kgMS/ha/d)', '01.06.25_Disponible (kgMS/ha)': '01.06.25_Disponible (kgMS/ha)', });
lyr_TC080625_16.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '08.06.25_TC (kgMS/ha/d)': '08.06.25_TC (kgMS/ha/d)', '08.06.25_Disponible (kgMS/ha)': '08.06.25_Disponible (kgMS/ha)', });
lyr_TC110625_17.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Especie': 'Recurso', 'Area': 'Area', 'pot imp_Po': 'Potrero', '10.06.25_TC (kgMS/ha/d)': '10.06.25_TC (kgMS/ha/d)', '10.06.25_Disponible (kgMS/ha)': '10.06.25_Disponible (kgMS/ha)', '11.06.25_TC (kgMS/ha/d)': '11.06.25_TC (kgMS/ha/d)', '11.06.25_Disponible (kgMS/ha)': '11.06.25_Disponible (kgMS/ha)', });
lyr_ResumenTCpromediokgMShad_18.set('fieldAliases', {'SemanaCrí': 'SemanaCrí', 'SemanaRecr': 'SemanaRecr', 'MayoCr�': 'MayoCr�', 'MayoRec': 'MayoRec', });
lyr_TC290425_11.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '29.04.25_TC (kgMS/ha/d)': 'TextEdit', '29.04.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC040525_12.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '02.05_TC (kgMS/ha/d)': 'TextEdit', '02.05_Disponible (kgMS/ha)': 'TextEdit', '04.05_TC (kgMS/ha/d)': 'TextEdit', '04.05_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC120525_13.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '12.05.25_TC (kgMS/ha/d)': 'TextEdit', '12.05.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC220525_14.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '22.05.25_TC (kgMS/ha/d)': 'TextEdit', '22.05.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC010625_15.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '29.05.25_TC (kgMS/ha/d)': 'TextEdit', '29.05.25_Disponible (kgMS/ha)': 'TextEdit', '01.06.25_TC (kgMS/ha/d)': 'TextEdit', '01.06.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC080625_16.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '08.06.25_TC (kgMS/ha/d)': 'TextEdit', '08.06.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_TC110625_17.set('fieldImages', {'id': 'TextEdit', 'Campo': 'TextEdit', 'Especie': 'TextEdit', 'Area': 'TextEdit', 'pot imp_Po': 'TextEdit', '10.06.25_TC (kgMS/ha/d)': 'TextEdit', '10.06.25_Disponible (kgMS/ha)': 'TextEdit', '11.06.25_TC (kgMS/ha/d)': 'TextEdit', '11.06.25_Disponible (kgMS/ha)': 'TextEdit', });
lyr_ResumenTCpromediokgMShad_18.set('fieldImages', {'SemanaCrí': 'TextEdit', 'SemanaRecr': 'TextEdit', 'MayoCr�': '', 'MayoRec': '', });
lyr_TC290425_11.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '29.04.25_TC (kgMS/ha/d)': 'inline label - always visible', '29.04.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC040525_12.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '02.05_TC (kgMS/ha/d)': 'inline label - always visible', '02.05_Disponible (kgMS/ha)': 'inline label - always visible', '04.05_TC (kgMS/ha/d)': 'inline label - always visible', '04.05_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC120525_13.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '12.05.25_TC (kgMS/ha/d)': 'inline label - always visible', '12.05.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC220525_14.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '22.05.25_TC (kgMS/ha/d)': 'inline label - always visible', '22.05.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC010625_15.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '29.05.25_TC (kgMS/ha/d)': 'inline label - always visible', '29.05.25_Disponible (kgMS/ha)': 'inline label - always visible', '01.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '01.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC080625_16.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '08.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '08.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_TC110625_17.set('fieldLabels', {'id': 'hidden field', 'Campo': 'inline label - always visible', 'Especie': 'inline label - always visible', 'Area': 'inline label - always visible', 'pot imp_Po': 'inline label - visible with data', '10.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '10.06.25_Disponible (kgMS/ha)': 'inline label - always visible', '11.06.25_TC (kgMS/ha/d)': 'inline label - always visible', '11.06.25_Disponible (kgMS/ha)': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_18.set('fieldLabels', {'SemanaCrí': 'inline label - always visible', 'SemanaRecr': 'inline label - always visible', 'MayoCr�': 'inline label - always visible', 'MayoRec': 'inline label - always visible', });
lyr_ResumenTCpromediokgMShad_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});