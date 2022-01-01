var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_ESTACIONAMIENTOS_1 = new ol.format.GeoJSON();
var features_ESTACIONAMIENTOS_1 = format_ESTACIONAMIENTOS_1.readFeatures(json_ESTACIONAMIENTOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONAMIENTOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONAMIENTOS_1.addFeatures(features_ESTACIONAMIENTOS_1);
var lyr_ESTACIONAMIENTOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTACIONAMIENTOS_1, 
                style: style_ESTACIONAMIENTOS_1,
                interactive: true,
                title: '<img src="styles/legend/ESTACIONAMIENTOS_1.png" /> ESTACIONAMIENTOS'
            });
var format_SURTIDORES_2 = new ol.format.GeoJSON();
var features_SURTIDORES_2 = format_SURTIDORES_2.readFeatures(json_SURTIDORES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SURTIDORES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SURTIDORES_2.addFeatures(features_SURTIDORES_2);
var lyr_SURTIDORES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SURTIDORES_2, 
                style: style_SURTIDORES_2,
                interactive: true,
                title: '<img src="styles/legend/SURTIDORES_2.png" /> SURTIDORES'
            });
var format_SUSPENSIONES_3 = new ol.format.GeoJSON();
var features_SUSPENSIONES_3 = format_SUSPENSIONES_3.readFeatures(json_SUSPENSIONES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUSPENSIONES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUSPENSIONES_3.addFeatures(features_SUSPENSIONES_3);
var lyr_SUSPENSIONES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUSPENSIONES_3, 
                style: style_SUSPENSIONES_3,
                interactive: true,
                title: '<img src="styles/legend/SUSPENSIONES_3.png" /> SUSPENSIONES'
            });
var format_ELECTRICOS_4 = new ol.format.GeoJSON();
var features_ELECTRICOS_4 = format_ELECTRICOS_4.readFeatures(json_ELECTRICOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELECTRICOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELECTRICOS_4.addFeatures(features_ELECTRICOS_4);
var lyr_ELECTRICOS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELECTRICOS_4, 
                style: style_ELECTRICOS_4,
                interactive: true,
                title: '<img src="styles/legend/ELECTRICOS_4.png" /> ELECTRICOS'
            });
var format_LAVADO_5 = new ol.format.GeoJSON();
var features_LAVADO_5 = format_LAVADO_5.readFeatures(json_LAVADO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAVADO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAVADO_5.addFeatures(features_LAVADO_5);
var lyr_LAVADO_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAVADO_5, 
                style: style_LAVADO_5,
                interactive: true,
                title: '<img src="styles/legend/LAVADO_5.png" /> LAVADO'
            });
var format_LUBRICANTES_6 = new ol.format.GeoJSON();
var features_LUBRICANTES_6 = format_LUBRICANTES_6.readFeatures(json_LUBRICANTES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUBRICANTES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUBRICANTES_6.addFeatures(features_LUBRICANTES_6);
var lyr_LUBRICANTES_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LUBRICANTES_6, 
                style: style_LUBRICANTES_6,
                interactive: true,
                title: '<img src="styles/legend/LUBRICANTES_6.png" /> LUBRICANTES'
            });
var format_MECANICOS_7 = new ol.format.GeoJSON();
var features_MECANICOS_7 = format_MECANICOS_7.readFeatures(json_MECANICOS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MECANICOS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MECANICOS_7.addFeatures(features_MECANICOS_7);
var lyr_MECANICOS_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MECANICOS_7, 
                style: style_MECANICOS_7,
                interactive: true,
                title: '<img src="styles/legend/MECANICOS_7.png" /> MECANICOS'
            });
var format_LLANTERIA_8 = new ol.format.GeoJSON();
var features_LLANTERIA_8 = format_LLANTERIA_8.readFeatures(json_LLANTERIA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LLANTERIA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LLANTERIA_8.addFeatures(features_LLANTERIA_8);
var lyr_LLANTERIA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LLANTERIA_8, 
                style: style_LLANTERIA_8,
                interactive: true,
                title: '<img src="styles/legend/LLANTERIA_8.png" /> LLANTERIA'
            });
var format_GRUAS_9 = new ol.format.GeoJSON();
var features_GRUAS_9 = format_GRUAS_9.readFeatures(json_GRUAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRUAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRUAS_9.addFeatures(features_GRUAS_9);
var lyr_GRUAS_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRUAS_9, 
                style: style_GRUAS_9,
                interactive: true,
                title: '<img src="styles/legend/GRUAS_9.png" /> GRUAS'
            });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_ESTACIONAMIENTOS_1.setVisible(true);lyr_SURTIDORES_2.setVisible(true);lyr_SUSPENSIONES_3.setVisible(true);lyr_ELECTRICOS_4.setVisible(true);lyr_LAVADO_5.setVisible(true);lyr_LUBRICANTES_6.setVisible(true);lyr_MECANICOS_7.setVisible(true);lyr_LLANTERIA_8.setVisible(true);lyr_GRUAS_9.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_ESTACIONAMIENTOS_1,lyr_SURTIDORES_2,lyr_SUSPENSIONES_3,lyr_ELECTRICOS_4,lyr_LAVADO_5,lyr_LUBRICANTES_6,lyr_MECANICOS_7,lyr_LLANTERIA_8,lyr_GRUAS_9];
lyr_ESTACIONAMIENTOS_1.set('fieldAliases', {'id': 'id', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', });
lyr_SURTIDORES_2.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', 'COMBUST.': 'COMBUST.', });
lyr_SUSPENSIONES_3.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', });
lyr_ELECTRICOS_4.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', });
lyr_LAVADO_5.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', });
lyr_LUBRICANTES_6.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', });
lyr_MECANICOS_7.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', });
lyr_LLANTERIA_8.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', });
lyr_GRUAS_9.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', 'DIRECCION': 'DIRECCION', 'ZONA': 'ZONA', });
lyr_ESTACIONAMIENTOS_1.set('fieldImages', {'id': '', 'DIRECCION': '', 'ZONA': '', });
lyr_SURTIDORES_2.set('fieldImages', {'id': '', 'NOMBRE': '', 'DIRECCION': '', 'ZONA': '', 'COMBUST.': '', });
lyr_SUSPENSIONES_3.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_ELECTRICOS_4.set('fieldImages', {'id': '', 'NOMBRE': '', 'DIRECCION': '', 'ZONA': '', });
lyr_LAVADO_5.set('fieldImages', {'id': '', 'NOMBRE': '', 'DIRECCION': '', 'ZONA': '', });
lyr_LUBRICANTES_6.set('fieldImages', {'id': '', 'NOMBRE': '', 'DIRECCION': '', 'ZONA': '', });
lyr_MECANICOS_7.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_LLANTERIA_8.set('fieldImages', {'id': '', 'NOMBRE': '', 'DIRECCION': '', 'ZONA': '', });
lyr_GRUAS_9.set('fieldImages', {'id': '', 'NOMBRE': '', 'DIRECCION': '', 'ZONA': '', });
lyr_ESTACIONAMIENTOS_1.set('fieldLabels', {'id': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', });
lyr_SURTIDORES_2.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', 'COMBUST.': 'no label', });
lyr_SUSPENSIONES_3.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', });
lyr_ELECTRICOS_4.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', });
lyr_LAVADO_5.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', });
lyr_LUBRICANTES_6.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', });
lyr_MECANICOS_7.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', });
lyr_LLANTERIA_8.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', });
lyr_GRUAS_9.set('fieldLabels', {'id': 'no label', 'NOMBRE': 'no label', 'DIRECCION': 'no label', 'ZONA': 'no label', });
lyr_GRUAS_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});