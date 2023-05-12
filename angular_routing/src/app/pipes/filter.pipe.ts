import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterValue:string){
    if(value.length === 0 || filterValue === ''){
      return value;
    }
    const users = [];
    for(let user of value){
      if(user['name'] === filterValue){
        users.push(user);
      }
    }
    return users;
  }
}

