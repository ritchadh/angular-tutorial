import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'calculateAreaCircle'})
export class CalculateAreaCirclePipe implements PipeTransform {
  transform(value: number): number {
    let sq= Math.pow(value,2);
    return sq*Math.PI;
  }
}

@Pipe({name: 'calculateAreaRectangle'})
export class CalculateAreaRectanglePipe implements PipeTransform {
  transform(length: number,breadth:number): number {
    let sq= length*breadth;
    return sq;
  }
}

@Pipe({name: 'reverseString'})
export class ReverseStringPipe implements PipeTransform {
  transform(str: string): string {
   let revString:string="";

   for(var i=str.length;i>=0;i--)
    revString+=str.charAt(i);  

    return revString;
  }
}
