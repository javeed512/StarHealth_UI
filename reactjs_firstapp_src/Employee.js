import { Component } from "react";



class Employee extends Component{


        render(props)
        {

                return <div>
                    <h1>HI THIS IS EMPLOYEE COMP</h1>
                    <h1>ENAME : {this.props.ename}</h1>
                    <h2>SALARY : {this.props.salary} </h2>
                    
                    </div>


        }



}

export default Employee;