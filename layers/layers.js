ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([22.794175, -23.878342, 37.808374, -15.507731]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NationalProvincialboundaries_1 = new ol.format.GeoJSON();
var features_NationalProvincialboundaries_1 = format_NationalProvincialboundaries_1.readFeatures(json_NationalProvincialboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NationalProvincialboundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalProvincialboundaries_1.addFeatures(features_NationalProvincialboundaries_1);
var lyr_NationalProvincialboundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalProvincialboundaries_1, 
                style: style_NationalProvincialboundaries_1,
                popuplayertitle: 'National Provincial boundaries',
                interactive: false,
                title: '<img src="styles/legend/NationalProvincialboundaries_1.png" /> National Provincial boundaries'
            });
var format_GCFDistrics_2 = new ol.format.GeoJSON();
var features_GCFDistrics_2 = format_GCFDistrics_2.readFeatures(json_GCFDistrics_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GCFDistrics_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCFDistrics_2.addFeatures(features_GCFDistrics_2);
var lyr_GCFDistrics_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCFDistrics_2, 
                style: style_GCFDistrics_2,
                popuplayertitle: 'GCF Districs',
                interactive: true,
                title: '<img src="styles/legend/GCFDistrics_2.png" /> GCF Districs'
            });
var format_InnovationPlatforms_3 = new ol.format.GeoJSON();
var features_InnovationPlatforms_3 = format_InnovationPlatforms_3.readFeatures(json_InnovationPlatforms_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InnovationPlatforms_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InnovationPlatforms_3.addFeatures(features_InnovationPlatforms_3);
var lyr_InnovationPlatforms_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InnovationPlatforms_3, 
                style: style_InnovationPlatforms_3,
                popuplayertitle: 'Innovation Platforms',
                interactive: true,
    title: 'Innovation Platforms<br />\
    <img src="styles/legend/InnovationPlatforms_3_0.png" /> Chiredzi Research Centre<br />\
    <img src="styles/legend/InnovationPlatforms_3_1.png" /> Chisumbanje Research Centre<br />\
    <img src="styles/legend/InnovationPlatforms_3_2.png" /> Esigodini Agricultural Centre<br />\
    <img src="styles/legend/InnovationPlatforms_3_3.png" /> Makoholi Research Centre<br />\
    <img src="styles/legend/InnovationPlatforms_3_4.png" /> Matopos Research Centre<br />' });
var format_HydrometInfrastructure_4 = new ol.format.GeoJSON();
var features_HydrometInfrastructure_4 = format_HydrometInfrastructure_4.readFeatures(json_HydrometInfrastructure_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HydrometInfrastructure_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HydrometInfrastructure_4.addFeatures(features_HydrometInfrastructure_4);
var lyr_HydrometInfrastructure_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HydrometInfrastructure_4, 
                style: style_HydrometInfrastructure_4,
                popuplayertitle: 'Hydromet Infrastructure',
                interactive: true,
    title: 'Hydromet Infrastructure<br />\
    <img src="styles/legend/HydrometInfrastructure_4_0.png" /> ARG<br />\
    <img src="styles/legend/HydrometInfrastructure_4_1.png" /> AWS<br />\
    <img src="styles/legend/HydrometInfrastructure_4_2.png" /> Radar system<br />\
    <img src="styles/legend/HydrometInfrastructure_4_3.png" /> Shaft encoder-Near Real Time Data loggers<br />' });
var format_IrrigationSchemeSites_5 = new ol.format.GeoJSON();
var features_IrrigationSchemeSites_5 = format_IrrigationSchemeSites_5.readFeatures(json_IrrigationSchemeSites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IrrigationSchemeSites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrrigationSchemeSites_5.addFeatures(features_IrrigationSchemeSites_5);
var lyr_IrrigationSchemeSites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrrigationSchemeSites_5, 
                style: style_IrrigationSchemeSites_5,
                popuplayertitle: 'Irrigation Scheme Sites',
                interactive: true,
    title: 'Irrigation Scheme Sites<br />\
    <img src="styles/legend/IrrigationSchemeSites_5_0.png" /> Completed<br />\
    <img src="styles/legend/IrrigationSchemeSites_5_1.png" /> On-going civil works<br />\
    <img src="styles/legend/IrrigationSchemeSites_5_2.png" /> Scheduled<br />' });
var format_FarmerFieldSchoolsFFS_6 = new ol.format.GeoJSON();
var features_FarmerFieldSchoolsFFS_6 = format_FarmerFieldSchoolsFFS_6.readFeatures(json_FarmerFieldSchoolsFFS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FarmerFieldSchoolsFFS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FarmerFieldSchoolsFFS_6.addFeatures(features_FarmerFieldSchoolsFFS_6);
var lyr_FarmerFieldSchoolsFFS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FarmerFieldSchoolsFFS_6, 
                style: style_FarmerFieldSchoolsFFS_6,
                popuplayertitle: 'Farmer Field Schools (FFS)',
                interactive: true,
                title: '<img src="styles/legend/FarmerFieldSchoolsFFS_6.png" /> Farmer Field Schools (FFS)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_NationalProvincialboundaries_1.setVisible(true);lyr_GCFDistrics_2.setVisible(true);lyr_InnovationPlatforms_3.setVisible(true);lyr_HydrometInfrastructure_4.setVisible(true);lyr_IrrigationSchemeSites_5.setVisible(true);lyr_FarmerFieldSchoolsFFS_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NationalProvincialboundaries_1,lyr_GCFDistrics_2,lyr_InnovationPlatforms_3,lyr_HydrometInfrastructure_4,lyr_IrrigationSchemeSites_5,lyr_FarmerFieldSchoolsFFS_6];
lyr_NationalProvincialboundaries_1.set('fieldAliases', {'ID': 'ID', 'PROVINCE_N': 'PROVINCE_N', 'AREA': 'AREA', 'POPULATION': 'POPULATION', 'POPU_M': 'POPU_M', 'POPU_F': 'POPU_F', 'PERIMETER': 'PERIMETER', });
lyr_GCFDistrics_2.set('fieldAliases', {'fid': 'fid', 'NAME1_': 'District', 'NAME2_': 'Province', 'area': 'area', 'DISTRICT': 'DISTRICT', 'layer': 'layer', 'path': 'path', });
lyr_InnovationPlatforms_3.set('fieldAliases', {'fid': 'fid', 'IP_Name': 'IP Name', 'Lat': 'Lat', 'Lon': 'Lon', 'Services': 'Services Offered', });
lyr_HydrometInfrastructure_4.set('fieldAliases', {'fid': 'fid', 'District': 'District', 'Ward': 'Ward', 'Station_Na': 'Station Name', 'River': 'River', 'Type_of_st': 'Type of station', 'Latitude__': 'Latitude__', 'Longitude': 'Longitude', 'Definition': 'Definition', 'Definiti_1': 'Definiti_1', });
lyr_IrrigationSchemeSites_5.set('fieldAliases', {'fid': 'fid', 'Scheme': 'Scheme', 'Province': 'Province', 'District': 'District', 'Ward': 'Ward', 'Water_Sour': 'Water Source', 'Status': 'Status', 'Total_ha_': 'Total Area (Ha)', 'html_exp': 'Photos', 'scheme-sta': 'Status of irrigation scheme', 'System': 'Irrigation System', 'Power Sour': 'Source of power', 'Bneficiari': 'Number of beneficiary housholds', 'report': 'GCF Irrigation Schemes Summary Report', 'photo-html': 'photo-html', });
lyr_FarmerFieldSchoolsFFS_6.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'District': 'District', 'Ward': 'Ward', 'Beneficiary Category': 'Beneficiary Category', });
lyr_NationalProvincialboundaries_1.set('fieldImages', {'ID': 'Hidden', 'PROVINCE_N': 'Hidden', 'AREA': 'Hidden', 'POPULATION': 'Hidden', 'POPU_M': 'TextEdit', 'POPU_F': 'TextEdit', 'PERIMETER': 'Hidden', });
lyr_GCFDistrics_2.set('fieldImages', {'fid': 'Hidden', 'NAME1_': 'TextEdit', 'NAME2_': 'TextEdit', 'area': 'Hidden', 'DISTRICT': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_InnovationPlatforms_3.set('fieldImages', {'fid': 'Hidden', 'IP_Name': 'TextEdit', 'Lat': 'Hidden', 'Lon': 'Hidden', 'Services': 'TextEdit', });
lyr_HydrometInfrastructure_4.set('fieldImages', {'fid': 'Hidden', 'District': 'TextEdit', 'Ward': 'TextEdit', 'Station_Na': 'TextEdit', 'River': 'TextEdit', 'Type_of_st': 'TextEdit', 'Latitude__': 'Hidden', 'Longitude': 'Hidden', 'Definition': 'Hidden', 'Definiti_1': 'Hidden', });
lyr_IrrigationSchemeSites_5.set('fieldImages', {'fid': 'Hidden', 'Scheme': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'Ward': 'TextEdit', 'Water_Sour': 'TextEdit', 'Status': 'Hidden', 'Total_ha_': 'TextEdit', 'html_exp': 'ExternalResource', 'scheme-sta': 'TextEdit', 'System': 'TextEdit', 'Power Sour': 'TextEdit', 'Bneficiari': 'TextEdit', 'report': 'ExternalResource', 'photo-html': 'Hidden', });
lyr_FarmerFieldSchoolsFFS_6.set('fieldImages', {'fid': 'Hidden', 'Province': 'TextEdit', 'District': 'TextEdit', 'Ward': 'Range', 'Beneficiary Category': 'TextEdit', });
lyr_NationalProvincialboundaries_1.set('fieldLabels', {'POPU_M': 'hidden field', 'POPU_F': 'hidden field', });
lyr_GCFDistrics_2.set('fieldLabels', {'NAME1_': 'inline label - visible with data', 'NAME2_': 'inline label - visible with data', });
lyr_InnovationPlatforms_3.set('fieldLabels', {'IP_Name': 'header label - visible with data', 'Services': 'header label - visible with data', });
lyr_HydrometInfrastructure_4.set('fieldLabels', {'District': 'header label - visible with data', 'Ward': 'header label - visible with data', 'Station_Na': 'header label - visible with data', 'River': 'header label - visible with data', 'Type_of_st': 'header label - visible with data', });
lyr_IrrigationSchemeSites_5.set('fieldLabels', {'Scheme': 'header label - visible with data', 'Province': 'header label - visible with data', 'District': 'header label - visible with data', 'Ward': 'header label - visible with data', 'Water_Sour': 'header label - visible with data', 'Total_ha_': 'header label - visible with data', 'html_exp': 'header label - visible with data', 'scheme-sta': 'header label - visible with data', 'System': 'header label - visible with data', 'Power Sour': 'header label - visible with data', 'Bneficiari': 'header label - visible with data', 'report': 'header label - visible with data', });
lyr_FarmerFieldSchoolsFFS_6.set('fieldLabels', {'Province': 'header label - visible with data', 'District': 'header label - visible with data', 'Ward': 'header label - visible with data', 'Beneficiary Category': 'header label - visible with data', });
lyr_FarmerFieldSchoolsFFS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});