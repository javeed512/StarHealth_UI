

class Employee{

    eid:number;
    ename:string;


    
        constructor(eid:number,ename:string , private salary:number){
                console.log("Emp obj created...")

                this.eid = eid;
                this.ename = ename;

                this.salary = salary;

        }


    m1(){

        console.log("m1() is called")

    }





}

var  e1 = new Employee(101,'rahul',30000);

console.log(e1)

e1.m1()