"use Strict";

var EmployeeInfo={names:"",payRate:0,workingHours:0};

function makeEmployee(name,hourlyWage,hoursWorked)
{

    var employeeName;
    var employeehourlyWage;
    var employeeHoursWorked;
    var Employee={employeeName:name,employeehourlyWage:hourlyWage,employeeHoursWorked:hoursWorked};
    return Employee;   
}

function setEmployeeInfo(name,hourlyWage,hoursWorked)
{
    /*var theName;
    var theHourlyPay;
    var theHoursWorked;*/

    name=prompt("what is the employee's name?");
    hourlyWage=prompt("How much does the employee make an hour?");
    hoursWorked=prompt("how many hours did the employee work this week?");
    makeEmployee(name,hourlyWage,hoursWorked);
    
}

function calcRegWage(hours,wage)
{
    var totalIncome;
    totalIncome=hours*wage;
    return totalIncome;
}
function calcOT(Othours,Otwage)
{

    var totalIncome;
    totalIncome=Othours*Otwage;
    
}


console.log(makeEmployee());

/*function payMe(ClockedInTime,HourlyPay,EmployeeName)
{
	var hours=ClockedInTime;
    var wage=HourlyPay;
    var name=EmployeeName;
    var totalIncome;
    var overtimeHours;
    var overtimeWage;
    var overtimeMoney;

    totalIncome=hours*wage
    overtimeWage=1.5*wage

    if(hours>40)
    {
	    overtimeHours=hours-40;
	    overtimeMoney=overtimeHours*overtimeWage;
	    totalIncome=overtimeMoney+totalIncome-overtimeHours*wage;
    }
    else if(hours<40)
    {
        totalIncome=hours*wage;
    }   

    return name+" made "+totalIncome+" on last pay check";
     
}
console.log(payMe(17.24,34,"Adam"));*/