import { Injectable } from '@angular/core';

@Injectable()
export class MapPopupService {

  constructor() { }

  getPopupContent(popupName: String): String {
    return "<h3 style='text-align: center;'>"+popupName+"</h3>"+
      "<a target='_blank' href='https://www.chasingmeridians.com/?s="+popupName+"'>See Posts Related To "+
      popupName +" </a>";
  }

}
