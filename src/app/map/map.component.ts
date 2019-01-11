import { Component, AfterViewInit, OnInit } from '@angular/core';
import 'leaflet';
import {MapTravelIconService} from './services/map.travelicon.service';
import {MapPopupService} from './services/map.popup.service';
import {Feature} from 'geojson';
import * as Rainbow from 'rainbowvis.js';
import 'leaflet-polylineDecorator/dist/leaflet.polylineDecorator.js';
import * as locations from '../../assets/locations.json';

declare let L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit, OnInit {

  myMap: any;

  travelMarkersLayer: L.FeatureGroup;
  travelCircleMarkersLayer: L.FeatureGroup;
  carRightIconLg: L.Icon;
  carLeftIconLg: L.Icon;
  carRightIconSm: L.Icon;
  carLeftIconSm: L.Icon;
  planeRightIconLg: L.Icon;
  planeLeftIconLg: L.Icon;
  planeRightIconSm: L.Icon;
  planeLeftIconSm: L.Icon;
  trainRightIconLg: L.Icon;
  trainLeftIconLg: L.Icon;
  trainRightIconSm: L.Icon;
  trainLeftIconSm: L.Icon;
  busRightIconLg: L.Icon;
  busLeftIconLg: L.Icon;
  busRightIconSm: L.Icon;
  busLeftIconSm: L.Icon;
  walkRightIconLg: L.Icon;
  walkLeftIconLg: L.Icon;
  walkRightIconSm: L.Icon;
  walkLeftIconSm: L.Icon;
  locationMarkers: Array<any>;
  rainbow: Rainbow = new Rainbow();

  constructor(private mapTravelIconService: MapTravelIconService, private mapPopupService: MapPopupService) { }

  ngOnInit(){
    this.carRightIconLg = L.icon(this.mapTravelIconService.getCarIcon(false,true));
    this.carLeftIconLg = L.icon(this.mapTravelIconService.getCarIcon(true,true));
    this.carRightIconSm = L.icon(this.mapTravelIconService.getCarIcon(false,false));
    this.carLeftIconSm = L.icon(this.mapTravelIconService.getCarIcon(true,false));

    this.planeRightIconLg = L.icon(this.mapTravelIconService.getPlaneIcon(false,true));
    this.planeLeftIconLg = L.icon(this.mapTravelIconService.getPlaneIcon(true,true));
    this.planeRightIconSm = L.icon(this.mapTravelIconService.getPlaneIcon(false,false));
    this.planeLeftIconSm = L.icon(this.mapTravelIconService.getPlaneIcon(true,false));

    this.trainRightIconLg = L.icon(this.mapTravelIconService.getTrainIcon(false,true));
    this.trainLeftIconLg = L.icon(this.mapTravelIconService.getTrainIcon(true,true));
    this.trainRightIconSm = L.icon(this.mapTravelIconService.getTrainIcon(false,false));
    this.trainLeftIconSm = L.icon(this.mapTravelIconService.getTrainIcon(true,false));

    this.busRightIconLg = L.icon(this.mapTravelIconService.getBusIcon(false,true));
    this.busLeftIconLg = L.icon(this.mapTravelIconService.getBusIcon(true,true));
    this.busRightIconSm = L.icon(this.mapTravelIconService.getBusIcon(false,false));
    this.busLeftIconSm = L.icon(this.mapTravelIconService.getBusIcon(true,false));

    this.walkRightIconLg = L.icon(this.mapTravelIconService.getWalkIcon(false,true));
    this.walkLeftIconLg = L.icon(this.mapTravelIconService.getWalkIcon(true,true));
    this.walkRightIconSm = L.icon(this.mapTravelIconService.getWalkIcon(false,false));
    this.walkLeftIconSm = L.icon(this.mapTravelIconService.getWalkIcon(true,false));

    this.travelMarkersLayer = new L.FeatureGroup();
    this.travelCircleMarkersLayer = new L.FeatureGroup();
    this.locationMarkers = <Array<any>> <any> locations;
  }

  ngAfterViewInit() {
    this.myMap = L.map('mapid').setView([38, -78],5);

    let esriTiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
    {
    	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    	maxZoom: 16,
    }).addTo(this.myMap);

    let topoTiles = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
     	maxZoom: 17,
     	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    let osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    let recentLocations: L.FeatureGroup = new L.FeatureGroup;
    let travelPathLayer: L.LayerGroup = new L.LayerGroup();
    let travelIcon: L.Icon = this.carLeftIconLg;
    let numberOfStops: number = this.locationMarkers.length;
    let origColor = '#cb6969';
    let recentColor = '#f9f983';
    let travelPathsToColor = 7;
    this.rainbow.setSpectrum(origColor,recentColor);
    this.rainbow.setNumberRange(0,travelPathsToColor);

    //add all travel and circle markers
    for(let i = 0; i < numberOfStops-1; i++){
      //determine path color for this stop
      let currPathColor = i < numberOfStops-travelPathsToColor-1 ? origColor: '#'+this.rainbow.colorAt(i-(numberOfStops-travelPathsToColor-2));

      //determine east/west direction from current location to next location and icon type
      let travelIconLeft = this.locationMarkers[i][2] > this.locationMarkers[i+1][2] ? true : false;
      switch(this.locationMarkers[i][3]){
        case 'car':
          travelIcon = travelIconLeft ? this.carLeftIconLg : this.carRightIconLg;
          break;
        case 'plane':
          travelIcon = travelIconLeft ? this.planeLeftIconLg : this.planeRightIconLg;
          break;
        case 'train':
          travelIcon = travelIconLeft ? this.trainLeftIconLg : this.trainRightIconLg;
          break;
        case 'bus':
          travelIcon = travelIconLeft ? this.busLeftIconLg : this.busRightIconLg;
          break;
        case 'walk':
          travelIcon = travelIconLeft ? this.walkLeftIconLg : this.walkRightIconLg;
          break;
        default:
          travelIcon = this.planeRightIconLg;
      }

      //add correctly pointing icon to map
      let tempMarker = L.marker(L.latLng([this.locationMarkers[i][1],this.locationMarkers[i][2]], false),
        {icon: travelIcon})
        .bindPopup(this.mapPopupService.getPopupContent(this.locationMarkers[i][0]))
        .addTo(this.travelMarkersLayer);

      //add circle marker background to map
      L.circleMarker(L.latLng([this.locationMarkers[i][1],this.locationMarkers[i][2]]),
        {radius: 15, fillColor: currPathColor,stroke: false, fillOpacity: 0.7})
        .bindPopup(this.mapPopupService.getPopupContent(this.locationMarkers[i][0]))
        .addTo(this.travelCircleMarkersLayer);
      this.locationMarkers[i].splice(0,1);

      //we want to focus in on the most recent 5 destinations, so only show those in recent locations
      if(i >= numberOfStops - 5){
        tempMarker.addTo(recentLocations);
      }

      //get travel path segment
      let currPoint = L.latLng([this.locationMarkers[i][0],this.locationMarkers[i][1]], false);
      let nextPoint = L.latLng([this.locationMarkers[i+1][1],this.locationMarkers[i+1][2]], false);
      let travelPath = L.polyline([currPoint,nextPoint], {color: currPathColor, weight: 3}).addTo(travelPathLayer);

      //add travel path between points
      L.polylineDecorator(travelPath, {
        patterns: [
          {offset: 0, repeat: 70, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true, weight: 3, color: currPathColor}})},
        ]
      }).addTo(travelPathLayer);
    }

    //determine east/west direction from second to last location to last location and icon type
    let travelIconLeft = this.locationMarkers[numberOfStops-2][2] > this.locationMarkers[numberOfStops-1][2] ? true : false;
    switch(this.locationMarkers[numberOfStops-1][3]){
      case 'car':
        travelIcon = travelIconLeft ? this.carLeftIconLg : this.carRightIconLg;
        break;
      case 'plane':
        travelIcon = travelIconLeft ? this.planeLeftIconLg : this.planeRightIconLg;
        break;
      case 'train':
        travelIcon = travelIconLeft ? this.trainLeftIconLg : this.trainRightIconLg;
        break;
      case 'bus':
        travelIcon = travelIconLeft ? this.busLeftIconLg : this.busRightIconLg;
        break;
      case 'walk':
        travelIcon = travelIconLeft ? this.walkLeftIconLg : this.walkRightIconLg;
        break;
      default:
        travelIcon = this.planeRightIconLg;
    }

    //add most recent marker separately so it can be highlighted
    L.marker(L.latLng([this.locationMarkers[numberOfStops-1][1],this.locationMarkers[numberOfStops-1][2]]),
      {icon: travelIcon})
      .bindPopup(this.mapPopupService.getPopupContent(this.locationMarkers[numberOfStops-1][0]))
      .addTo(this.travelMarkersLayer)
      .addTo(recentLocations);
    L.circleMarker(L.latLng([this.locationMarkers[numberOfStops-1][1],this.locationMarkers[numberOfStops-1][2]]),
      {radius: 15, fillColor: 'yellow', color: 'gold', fillOpacity: 1.0})
      .bindPopup(this.mapPopupService.getPopupContent(this.locationMarkers[numberOfStops-1][0]))
      .addTo(this.travelCircleMarkersLayer)
      .addTo(recentLocations);
    this.locationMarkers[numberOfStops-1].splice(0,1);

    L.control.layers({'Streets': osmTiles, 'Landscape': esriTiles, 'Topographic': topoTiles},{'Travel Paths': travelPathLayer}).addTo(this.myMap);

    this.myMap.addLayer(travelPathLayer);
    this.myMap.addLayer(this.travelMarkersLayer);
    this.myMap.addLayer(this.travelCircleMarkersLayer);

    //fit map to only show most recent locations visited
    this.myMap.fitBounds(recentLocations.getBounds());
    this.addMapZoomListeners();
  }

  //when zooming, we want to enlarge and shrink icons
  addMapZoomListeners(){
    this.myMap.on('zoomend', ()=>{
      let currZoom = this.myMap.getZoom();
      //if current zoom level is zoomed out
      if(currZoom < 6) {
        //make each marker the small version
        this.travelMarkersLayer.eachLayer((layer: L.Marker)=>{
          let iconUrlString = layer.options.icon.options.iconUrl;
          if(-1 != iconUrlString.indexOf('left')){
            switch(this.getTravelTypeFromIconUrl(iconUrlString)){
              case 'car':
                layer.setIcon(this.carLeftIconSm);
                break;
              case 'plane':
                layer.setIcon(this.planeLeftIconSm);
                break;
              case 'bus':
                layer.setIcon(this.busLeftIconSm);
                break;
              case 'train':
                layer.setIcon(this.trainLeftIconSm);
                break;
              case 'walk':
                layer.setIcon(this.walkLeftIconSm);
                break;
              default:
                layer.setIcon(this.planeLeftIconSm);
            }
          } else {
            switch(this.getTravelTypeFromIconUrl(iconUrlString)){
              case 'car':
                layer.setIcon(this.carRightIconSm);
                break;
              case 'plane':
                layer.setIcon(this.planeRightIconSm);
                break;
              case 'bus':
                layer.setIcon(this.busRightIconSm);
                break;
              case 'train':
                layer.setIcon(this.trainRightIconSm);
                break;
              case 'walk':
                layer.setIcon(this.walkRightIconSm);
                break;
              default:
                layer.setIcon(this.planeRightIconSm);
            }
          }
        })
        this.travelCircleMarkersLayer.eachLayer((layer: L.CircleMarker)=>{
          layer.setRadius(5);
        })
      } else {
        //make each marker the large version
        this.travelMarkersLayer.eachLayer((layer: L.Marker)=>{
          let iconUrlString = layer.options.icon.options.iconUrl;
          if(-1 != iconUrlString.indexOf('left')){
            switch(this.getTravelTypeFromIconUrl(iconUrlString)){
              case 'car':
                layer.setIcon(this.carLeftIconLg);
                break;
              case 'plane':
                layer.setIcon(this.planeLeftIconLg);
                break;
              case 'bus':
                layer.setIcon(this.busLeftIconLg);
                break;
              case 'train':
                layer.setIcon(this.trainLeftIconLg);
                break;
              case 'walk':
                layer.setIcon(this.walkLeftIconLg);
                break;
              default:
                layer.setIcon(this.planeLeftIconLg);
            }
          } else {
            switch(this.getTravelTypeFromIconUrl(iconUrlString)){
              case 'car':
                layer.setIcon(this.carRightIconLg);
                break;
              case 'plane':
                layer.setIcon(this.planeRightIconLg);
                break;
                case 'bus':
                  layer.setIcon(this.busRightIconLg);
                  break;
                case 'train':
                  layer.setIcon(this.trainRightIconLg);
                  break;
                case 'walk':
                  layer.setIcon(this.walkRightIconLg);
                  break;
              default:
                layer.setIcon(this.planeRightIconLg);
            }
          }
        })
        this.travelCircleMarkersLayer.eachLayer((layer: L.CircleMarker)=>{
          layer.setRadius(15);
        })
      }
    });
  }

  //get travel icon type from icon url string
  getTravelTypeFromIconUrl(urlString: String): String{
    if(-1 != urlString.indexOf('car')){
      return 'car';
    } else if (-1 != urlString.indexOf('plane')){
      return 'plane';
    } else if (-1 != urlString.indexOf('train')){
      return 'train';
    } else if (-1 != urlString.indexOf('bus')){
      return 'bus';
    } else if (-1 != urlString.indexOf('walk')){
      return 'walk';
    }else {
      return 'plane';
    }
  }

}
