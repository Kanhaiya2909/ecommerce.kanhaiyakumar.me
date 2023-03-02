import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'split'
  })
  export class SplitPipe implements PipeTransform {
    transform(val:string) {
        let first = val.split(" ");
        return first[0];
    
    }
  }