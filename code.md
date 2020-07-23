```typescript
import { Injectable } from '@angular/core';
import { from , of} from 'rxjs';
import { environment } from "../environments/environment";
declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  ajax(method,namespace,parameters){
    if(environment.production == true){
      return new Promise((rev,rej)=>{
        $.cordys.ajax({
          method:method,
          namespace:namespace,
          dataType: "* json",
          parameters: parameters,
          success: function success(resp) {
             rev(resp);
          },
          error:function error(e1,e2,e3){
             rej([e1,e2,e3]);
          }
        })
      })
    }else{
      return new Promise((rev,rej)=>{
        $.cordys.ngajax({
          method:method,
          namespace:namespace,
          dataType: "* json",
          parameters: parameters,
          success: function success(resp) {
            rev(resp);
         },
         error:function error(e1,e2,e3){
            rej([e1,e2,e3]);
         }
        })
      })
    }
    
  }
  
}
```
