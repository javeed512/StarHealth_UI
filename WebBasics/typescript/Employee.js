var Employee = /** @class */ (function () {
    function Employee(eid, ename, salary) {
        this.salary = salary;
        console.log("Emp obj created...");
        this.eid = eid;
        this.ename = ename;
        this.salary = salary;
    }
    Employee.prototype.m1 = function () {
        console.log("m1() is called");
    };
    return Employee;
}());
var e1 = new Employee(101, 'rahul', 30000);
console.log(e1);
e1.m1();
