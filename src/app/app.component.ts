import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Crud';
  msg:string='';
  //hide the update form
  hideFlag:boolean=true;

  employees=[
    {'name':'Simón Pintado','position':'Programmer','email':'simon@angular.com'},
    {'name':'Alex Montoya','position':'Manager','email':'alex@angular.com'},
    {'name':'Clarisa Torres','position':'Admin DBA','email':'clarisa@angular.com'}  
  ];
  

  //save the obj data
  model:any={}; 
  model2:any={};

  closeAlert(){
    this.msg='';
    /*
    setTimeout(()=>{
      
    },2000);
    */
  }

  addEmployee():void{
    this.employees.push(this.model);
    this.msg="Registro agregado";
  }

  deleteEmployee(i):void{
    var resp=confirm('Esta seguro que quiere eliminar el registro?');
    if(resp==true){
      this.employees.splice(i,1);
      this.msg="Registro Eliminado";
    }
  }

  currentIndex;
  editEmployee(i):void{
    //save the edited element in a new model
    this.model2.name=this.employees[i].name;
    this.model2.position=this.employees[i].position;
    this.model2.email=this.employees[i].email;
    this.currentIndex=i;
    this.hideFlag=false;
  }

  updateEmployee():void{
    //find the element selected, if is the same of the other model then remplace it
    console.log(this.model);
    let i=this.currentIndex;
    for(let j=0;j<this.employees.length;j++){
      //if index is same of j
      if(i==j){
        this.employees[i]=this.model2;
        this.msg="Registro Actualizado";
        this.hideFlag=true;
        this.model2={};
      }
    }
  }
}
