import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Post } from 'src/datatypes';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postForm!: FormGroup;
  posts:Post[] = [];
  showUpdate: boolean = false;
  updateId:string | undefined = '';

  constructor(private _post: PostService) {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.getPost();
  }

  get title() {
    return this.postForm.get('title');
  }
  get content() {
    return this.postForm.get('content');
  }

  getPost() {
    this._post.getAllPosts().subscribe((res) => {
      console.log("post data: ",res);
      this.posts = res;
      this.filterPost();
      }, (error:any)=>{
        alert(error.error.error);
        // console.log(error.message);
      });
  }

  addPost() {
    if (this.postForm.value.title && this.postForm.value.content) {
      console.log('post added data: ', this.postForm.value);
      const postData = this.postForm.value;
      const postBody:Post = {
        title: postData.title,
        content: postData.content,
        isDeleted : false
      }
      if(!this.showUpdate){
      this._post.createPost(postBody).subscribe((res) => {
              // console.log(res);
              this.getPost();
            });
      }
      else{
      console.log(postData);
        this._post.updatePost(this.updateId,postData).subscribe((res) => {
          console.log(res);
          const editedPosts = this.posts.filter(post => {
            if(post.key === this.updateId){
              post.content = postData.content;
              post.title= postData.title;
            }
            this.posts = editedPosts;
          });
        });
      }

      this.postForm.reset();
    }
    else {
      this.postForm.markAllAsTouched();
    }
  }

  deleteAllPost(){
    if(confirm('Are you sure you want to delete all posts!!')){
      this._post.deleteAllPost();
      this.posts = [];
    }
  }

  deletePost(post:Post){
    if(confirm('Are you sure you want to delete all posts!!')){
      const newPost = post
      newPost.isDeleted = true
      console.log("new post ", newPost);
      this._post.deletePost(newPost);
      console.log(post.key);
      const postId = post.key;
      const updatedPosts =  this.posts.filter(post => post.key !== postId);
      this.posts = updatedPosts;
    }
  }

  editPost(post:Post){
    console.log("post: ",post);
    this.updateId = post.key;


    this._post.getPost(post).subscribe((res)=>{
          console.log("post: ",res);
          this.postForm.setValue({
            title: res.title,
            content: res.content,
          })
          this.showUpdate = true
    })
  }

  filterPost(){
    const newPost = this.posts.filter(post => !post.isDeleted)
    this.posts = newPost;
    return this.posts
  }
}
