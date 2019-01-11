import { Injectable } from '@angular/core';

@Injectable()
export class MapTravelIconService {

  //car icon options
  carRightLgInfo: Object = {
        iconUrl: './assets/car-right.png',
        iconSize:     [30, 15], // size of the icon
        iconAnchor:   [15, 7.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  carLeftLgInfo: Object = {
        iconUrl: './assets/car-left.png',
        iconSize:     [30, 15], // size of the icon
        iconAnchor:   [15, 7.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  carRightSmInfo: Object = {
        iconUrl: './assets/car-right.png',
        iconSize:     [10, 5], // size of the icon
        iconAnchor:   [5, 2.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
      };
  carLeftSmInfo: Object = {
        iconUrl: './assets/car-left.png',
        iconSize:     [10, 5], // size of the icon
        iconAnchor:   [5, 2.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
      };

  //plane icon options
  planeRightLgInfo: Object = {
        iconUrl: './assets/plane-right.png',
        iconSize:     [30, 30], // size of the icon
        iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  planeLeftLgInfo: Object = {
        iconUrl: './assets/plane-left.png',
        iconSize:     [30, 30], // size of the icon
        iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  planeRightSmInfo: Object = {
        iconUrl: './assets/plane-right.png',
        iconSize:     [10, 10], // size of the icon
        iconAnchor:   [5, 5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
      };
  planeLeftSmInfo: Object = {
        iconUrl: './assets/plane-left.png',
        iconSize:     [10, 10], // size of the icon
        iconAnchor:   [5, 5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
      };

  //train icon options
  trainRightLgInfo: Object = {
        iconUrl: './assets/train-right.png',
        iconSize:     [30, 15], // size of the icon
        iconAnchor:   [15, 7.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  trainLeftLgInfo: Object = {
        iconUrl: './assets/train-left.png',
        iconSize:     [30, 15], // size of the icon
        iconAnchor:   [15, 7.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  trainRightSmInfo: Object = {
        iconUrl: './assets/train-right.png',
        iconSize:     [10, 5], // size of the icon
        iconAnchor:   [5, 2.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
      };
  trainLeftSmInfo: Object = {
        iconUrl: './assets/train-left.png',
        iconSize:     [10, 5], // size of the icon
        iconAnchor:   [5, 2.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
      };

  //bus icon options
  busRightLgInfo: Object = {
        iconUrl: './assets/bus-right.png',
        iconSize:     [30, 15], // size of the icon
        iconAnchor:   [15, 7.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  busLeftLgInfo: Object = {
        iconUrl: './assets/bus-left.png',
        iconSize:     [30, 15], // size of the icon
        iconAnchor:   [15, 7.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  busRightSmInfo: Object = {
        iconUrl: './assets/bus-right.png',
        iconSize:     [10, 5], // size of the icon
        iconAnchor:   [5, 2.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
      };
  busLeftSmInfo: Object = {
        iconUrl: './assets/bus-left.png',
        iconSize:     [10, 5], // size of the icon
        iconAnchor:   [5, 2.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
      };

  //walking icon options
  walkRightLgInfo: Object = {
        iconUrl: './assets/walk-right.png',
        iconSize:     [20, 30], // size of the icon
        iconAnchor:   [10, 15], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  walkLeftLgInfo: Object = {
        iconUrl: './assets/walk-left.png',
        iconSize:     [20, 30], // size of the icon
        iconAnchor:   [10, 15], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  walkRightSmInfo: Object = {
        iconUrl: './assets/walk-right.png',
        iconSize:     [10, 15], // size of the icon
        iconAnchor:   [5, 7.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };
  walkLeftSmInfo: Object = {
        iconUrl: './assets/walk-left.png',
        iconSize:     [10, 15], // size of the icon
        iconAnchor:   [5, 7.5], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
      };

  constructor() { }

  getCarIcon(leftFacing: Boolean, largeIcon: Boolean): Object {
    if(leftFacing){
      if(largeIcon){
        return this.carLeftLgInfo;
      } else {
        return this.carLeftSmInfo;
      }
    } else {
      if(largeIcon){
        return this.carRightLgInfo;
      } else {
        return this.carRightSmInfo;
      }
    }
  }

  getPlaneIcon(leftFacing: Boolean, largeIcon: Boolean): Object {
    if(leftFacing){
      if(largeIcon){
        return this.planeLeftLgInfo;
      } else {
        return this.planeLeftSmInfo;
      }
    } else {
      if(largeIcon){
        return this.planeRightLgInfo;
      } else {
        return this.planeRightSmInfo;
      }
    }
  }

  getTrainIcon(leftFacing: Boolean, largeIcon: Boolean): Object {
    if(leftFacing){
      if(largeIcon){
        return this.trainLeftLgInfo;
      } else {
        return this.trainLeftSmInfo;
      }
    } else {
      if(largeIcon){
        return this.trainRightLgInfo;
      } else {
        return this.trainRightSmInfo;
      }
    }
  }

  getBusIcon(leftFacing: Boolean, largeIcon: Boolean): Object {
    if(leftFacing){
      if(largeIcon){
        return this.busLeftLgInfo;
      } else {
        return this.busLeftSmInfo;
      }
    } else {
      if(largeIcon){
        return this.busRightLgInfo;
      } else {
        return this.busRightSmInfo;
      }
    }
  }

  getWalkIcon(leftFacing: Boolean, largeIcon: Boolean): Object {
    if(leftFacing){
      if(largeIcon){
        return this.walkLeftLgInfo;
      } else {
        return this.walkLeftSmInfo;
      }
    } else {
      if(largeIcon){
        return this.walkRightLgInfo;
      } else {
        return this.walkRightSmInfo;
      }
    }
  }
}
