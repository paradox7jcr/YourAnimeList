import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnimeService {
  public http: HttpClient;
  public anime: Anime;
  public topAnime: TopAnime[];

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  async getAnime(id: number): Promise<Anime> {
    this.http.get<Anime>('https://api.jikan.moe/v3/anime/1')
      .subscribe(data => {
          this.anime = data;
          console.log(data);
        }
    );
    return this.anime;
  }

  async getTopAnime(): Promise<TopAnime[]> {
    this.http.get<JikanApiResponse>('https://api.jikan.moe/v3/top/anime/1')
      .subscribe(data => {
          this.topAnime = data.top;
          console.log(this.topAnime);
        }
    );
    return this.topAnime;
  }

}

interface Anime {
  airing: boolean,
  background: string,
  episodes: number,
  mal_id: number,
  popularity: number,
  premiered: string,
  rank: number,
  score: number,
  title: string,
  title_english: string,
  title_japanese: string,
  url: string
}

interface JikanApiResponse {
  request_cache_expiry: number,
  request_cached: true,
  request_hash: string,
  top: TopAnime[];
}

interface TopAnime {
  end_date: string,
  episodes: number,
  image_url: string,
  mal_id: 0,
  members: 0,
  rank: 0,
  score: 0.0,
  start_date: string,
  title: string,
  type: string,
  url: string;
}
