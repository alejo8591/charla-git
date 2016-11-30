import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {replaceTemplateUrl} from "@ionic/app-scripts/dist/template";

@Injectable()
export class StorageService {

  constructor(public storage: Storage) {
  }

  save(data: any) {
    this.storage.set(data.key, data.value);
  }

  get(key: any) {

    let data;

    this.storage.get(key).then(res => data = res );
    console.log(data);
  }

}
