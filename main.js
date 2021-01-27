function calculate(){
    let empName=document.getElementsByClassName('emp-name')[0].value;
    let empId=document.getElementsByClassName('emp-id')[0].value;
    let empDOB=document.getElementsByClassName('date-of-birth')[0].value;
    let empDOJ=document.getElementsByClassName('date-of-join')[0].value;
    let basicPay=document.getElementsByClassName('basic-pay')[0].value;
    let displayNetPay=document.querySelector('.net-pay h2');
    let displayGrossPay=document.querySelector('.gross-pay h2');
    let displayEmpId=document.querySelector('.emp-id-details h2');
    let displayEmpName=document.querySelector('.name-details h2');

    if(empName==""||empId==""||empDOB==""||empDOJ==""||basicPay==""){
        alert("Fields are Empty");
    }
    else{
        if(empName.match(/^[A-za-z]+$/)){
            if(empId.match(/^[A-Za-z0-9]+$/)){
                let floatBP=parseFloat(basicPay);
                let deductions=(floatBP/100)*2;
                let HRA=floatBP*0.20;
                let netPay=floatBP+HRA;
                let grossPay=floatBP+HRA-deductions;
                displayNetPay.textContent=netPay.toFixed(3);
                displayGrossPay.textContent=grossPay.toFixed(3);
                displayEmpId.textContent=empId;
                displayEmpName.textContent=empName;
            }
            else{
                alert("Employee ID is Invalid,Only letters and Numbers are allowed");
            }
        }
        else{
            alert("Employee Name is Invalid");
        }
    }
}