import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Post } from 'src/datatypes';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAllPosts() {
    let params = new HttpParams();
    params =  params.append('name','parag');
    params = params.append('title','post');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://first-app-f822f-default-rtdb.firebaseio.com/post.json',
        {
          headers: new HttpHeaders({
            'custome-header': 'Content-Type',
          }),
          // params : new HttpParams().set('Content-Type', 'application/json')
          params : params,
          observe : 'body',
        }
      )
      .pipe(
        map((res) => {
          let posts: Post[] = [];
          for (let key in res) {
            // console.log({...res[key],key});
            posts.push({ ...res[key], key });
          }
          return posts;
        })
      );
  }

  createPost(data: Post) {
    return this.http.post<{ key: string }>(
      'https://first-app-f822f-default-rtdb.firebaseio.com/post.json',
      data
    );
  }

  deleteAllPost() {
    return this.http
      .delete('https://first-app-f822f-default-rtdb.firebaseio.com/post.json')
      .subscribe((res) => {
        console.log(res);
      });
  }

  deletePost(data: any) {
    return this.http
      .put(
        `https://first-app-f822f-default-rtdb.firebaseio.com/post/${data.key}.json`,
        data
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  getPost(data: Post) {
    return this.http.get<Post>(
      `https://first-app-f822f-default-rtdb.firebaseio.com/post/${data.key}.json`
    );
  }

  updatePost(id: string | undefined, data: Post) {
    return this.http.put<Post>(
      `https://first-app-f822f-default-rtdb.firebaseio.com/post/${id}.json`,
      data
    );
  }
}
