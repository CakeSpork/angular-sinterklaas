import { Injectable } from '@angular/core';

@Injectable()
export class SinterkluisApiService {

  constructor() { }

  getSinterkluisEndpoint(): String {
    return "http://192.168.1.9:8080/";
  }
}
