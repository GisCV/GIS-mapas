ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([410339.629332, 6432174.859430, 416451.998029, 6436209.410242]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ndvi131124pot_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ndvi 13.11.24 pot",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndvi131124pot_1.png",
    attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var lyr_tc131124_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "tc 13.11.24",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/tc131124_2.png",
    attributions: ' ',
                                projection: 'EPSG:32721',
                                alwaysInRange: true,
                                imageExtent: [410787.682700, 6432345.002700, 414372.066100, 6435674.934900]
                            })
                        });
var format_LasAvenidascheck_3 = new ol.format.GeoJSON();
var features_LasAvenidascheck_3 = format_LasAvenidascheck_3.readFeatures(json_LasAvenidascheck_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_LasAvenidascheck_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LasAvenidascheck_3.addFeatures(features_LasAvenidascheck_3);
var lyr_LasAvenidascheck_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LasAvenidascheck_3, 
                style: style_LasAvenidascheck_3,
                popuplayertitle: "Las Avenidas check",
                interactive: true,
                title: '<img src="styles/legend/LasAvenidascheck_3.png" /> Las Avenidas check'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ndvi131124pot_1.setVisible(true);lyr_tc131124_2.setVisible(true);lyr_LasAvenidascheck_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ndvi131124pot_1,lyr_tc131124_2,lyr_LasAvenidascheck_3];
lyr_LasAvenidascheck_3.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'has': 'has', 'PPN 13.11.24_PPN 13.11.24': 'PPN 13.11.24_PPN 13.11.24', });
lyr_LasAvenidascheck_3.set('fieldImages', {'Name': 'TextEdit', 'Especie': 'TextEdit', 'has': 'TextEdit', 'PPN 13.11.24_PPN 13.11.24': 'TextEdit', });
lyr_LasAvenidascheck_3.set('fieldLabels', {'Name': 'header label - always visible', 'Especie': 'header label - always visible', 'has': 'no label', 'PPN 13.11.24_PPN 13.11.24': 'header label - always visible', });
lyr_LasAvenidascheck_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});