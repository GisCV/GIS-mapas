var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi1812_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 18.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi1812_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_ndvi2312_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 23.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi2312_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_ndvi3012_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 30.12',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi3012_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var lyr_ndvi0401_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'ndvi 04.01',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/ndvi0401_4.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6406645.325084, -3934045.577220, -6404921.637667, -3931371.547827]
                            })
                        });
var format_181224_5 = new ol.format.GeoJSON();
var features_181224_5 = format_181224_5.readFeatures(json_181224_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_181224_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_181224_5.addFeatures(features_181224_5);
var lyr_181224_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_181224_5, 
                style: style_181224_5,
                popuplayertitle: '18.12.24',
                interactive: true,
                title: '<img src="styles/legend/181224_5.png" /> 18.12.24'
            });
var format_231224_6 = new ol.format.GeoJSON();
var features_231224_6 = format_231224_6.readFeatures(json_231224_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_231224_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_231224_6.addFeatures(features_231224_6);
var lyr_231224_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_231224_6, 
                style: style_231224_6,
                popuplayertitle: '23.12.24',
                interactive: true,
                title: '<img src="styles/legend/231224_6.png" /> 23.12.24'
            });
var format_301224_7 = new ol.format.GeoJSON();
var features_301224_7 = format_301224_7.readFeatures(json_301224_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_301224_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_301224_7.addFeatures(features_301224_7);
var lyr_301224_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_301224_7, 
                style: style_301224_7,
                popuplayertitle: '30.12.24',
                interactive: true,
                title: '<img src="styles/legend/301224_7.png" /> 30.12.24'
            });
var format_040125_8 = new ol.format.GeoJSON();
var features_040125_8 = format_040125_8.readFeatures(json_040125_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_040125_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_040125_8.addFeatures(features_040125_8);
var lyr_040125_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_040125_8, 
                style: style_040125_8,
                popuplayertitle: '04.01.25',
                interactive: true,
                title: '<img src="styles/legend/040125_8.png" /> 04.01.25'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ndvi1812_1.setVisible(true);lyr_ndvi2312_2.setVisible(true);lyr_ndvi3012_3.setVisible(true);lyr_ndvi0401_4.setVisible(true);lyr_181224_5.setVisible(true);lyr_231224_6.setVisible(true);lyr_301224_7.setVisible(true);lyr_040125_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ndvi1812_1,lyr_ndvi2312_2,lyr_ndvi3012_3,lyr_ndvi0401_4,lyr_181224_5,lyr_231224_6,lyr_301224_7,lyr_040125_8];
lyr_181224_5.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '18.12.24_TC (kgMS/ha/d)': '18.12.24_TC (kgMS/ha/d)', '18.12.24_Disponible (kgMS/ha)': '18.12.24_Disponible (kgMS/ha)', });
lyr_231224_6.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '23.12.24_TC (kgMS/ha/d)': '23.12.24_TC (kgMS/ha/d)', '23.12.24_Disponible (kgMS/ha)': '23.12.24_Disponible (kgMS/ha)', });
lyr_301224_7.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '30.12.24_TC (kgMS/ha/d)': '30.12.24_TC (kgMS/ha/d)', '30.12.24_Disponible (kgMS/ha)': '30.12.24_Disponible (kgMS/ha)', });
lyr_040125_8.set('fieldAliases', {'Potrero': 'Potrero', 'has': 'has', '2024': '2024', '04.01.25_VALUE_mean': '04.01.25_VALUE_mean', '04.01.25_TC (kgMS/ha/d)': '04.01.25_TC (kgMS/ha/d)', });
lyr_181224_5.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '18.12.24_TC (kgMS/ha/d)': 'Range', '18.12.24_Disponible (kgMS/ha)': 'Range', });
lyr_231224_6.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '23.12.24_TC (kgMS/ha/d)': 'Range', '23.12.24_Disponible (kgMS/ha)': 'Range', });
lyr_301224_7.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '30.12.24_TC (kgMS/ha/d)': 'Range', '30.12.24_Disponible (kgMS/ha)': 'Range', });
lyr_040125_8.set('fieldImages', {'Potrero': 'TextEdit', 'has': 'TextEdit', '2024': 'TextEdit', '04.01.25_VALUE_mean': 'TextEdit', '04.01.25_TC (kgMS/ha/d)': 'Range', });
lyr_181224_5.set('fieldLabels', {'Potrero': 'header label - visible with data', 'has': 'header label - visible with data', '2024': 'header label - visible with data', '18.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '18.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_231224_6.set('fieldLabels', {'Potrero': 'header label - visible with data', 'has': 'header label - visible with data', '2024': 'header label - visible with data', '23.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '23.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_301224_7.set('fieldLabels', {'Potrero': 'header label - visible with data', 'has': 'header label - visible with data', '2024': 'header label - visible with data', '30.12.24_TC (kgMS/ha/d)': 'header label - visible with data', '30.12.24_Disponible (kgMS/ha)': 'header label - visible with data', });
lyr_040125_8.set('fieldLabels', {'Potrero': 'header label - visible with data', 'has': 'header label - visible with data', '2024': 'header label - visible with data', '04.01.25_VALUE_mean': 'header label - visible with data', '04.01.25_TC (kgMS/ha/d)': 'header label - visible with data', });
lyr_040125_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});