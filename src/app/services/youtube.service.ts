import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private url:string = "https://www.googleapis.com/youtube/v3";
  private apiKey:string = "AIzaSyCGZhcDzyBjldCkz78TtlC1gjtQ4uf6Q10";
  private playlistId:string = "UUuaPTYj15JSkETGnEseaFFg";

  constructor(public http:Http) {}

  getVideos(){
    let url = `${this.url}/playlistItems`;
    let params =  new URLSearchParams();

    params.set("part", "snipet");
    params.set("maxResults", "10");
    params.set("playlistId", this.playlistId);
    params.set("key", this.apiKey);

    return this.http.get(url, {search:params}).map(resp => {
      console.log(resp.json());
    });
  }

}
