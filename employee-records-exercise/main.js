const employees = []

function Employee (name, title, salary, status ) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        console.log("Name: " + this.name, "Title: " + this.title,"Salary: " + this.salary, "Status: " + this.status)
    }
}

const kelly = new Employee("Kelly Kapur", "Customer Service Representative", "$68,000")
const jimmer = new Employee("Jimmer Negamanee from Menominee ", "Salesman", "$64,000")
const david = new Employee("David Wallace", "CFO", "$12,000")

david.status = "part time"

employees.push(kelly, jimmer, david)

kelly.printEmployeeForm()
jimmer.printEmployeeForm()
david.printEmployeeForm()

console.log (employees)
