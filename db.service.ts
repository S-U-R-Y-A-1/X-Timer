// Import necessary modules
import { Injectable } from '@angular/core';
import{Firestore,collection, collectionData} from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore/lite';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
        constructor(private fs: Firestore) {}
      
        // Function to store two arrays in Firebase
        get(){
          let notes=collection(this.fs,'app-main');
          return collectionData(notes,{idField:'id'});
        }
        add(desc:string,d:number){
          let data={app:desc,time:d};
          let notes=collection(this.fs,'app-main');
          return addDoc(notes,data);
        }
        
        
}
