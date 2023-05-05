import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  params: any;
  page: any;

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) {}

  user!:{ id:number, name:string};

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.route.params.subscribe((data:Params)=>{
      this.user.id = data['id'];
      this.user.name = data['name'];
      // console.log("data",data);
    })

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe((query:object) => {
      console.log("query: ",query);
    })
    this.route.fragment.subscribe((fragment:any) => {
      console.log('fragment: ',fragment);
    })
  }

  getDetails(){
    this.router.navigate(['/users',18,'virat'],{
      queryParams:{
        page:18,
        search:'sportsman',
      },
      fragment:'loading'
    })
  }

  editUser(){
    this.router.navigate(['/users',this.user.id,this.user.name,'edit'],{
      queryParamsHandling:"preserve"
    });
  }
}
