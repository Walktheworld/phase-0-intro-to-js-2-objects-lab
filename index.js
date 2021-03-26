const employee = {
    name: 'Sam',
}


function updateEmployeeWithKeyAndValue(employee, streetAddress, value){
    const newEmployee = {...employee};
    newEmployee[streetAddress]= value;
    return newEmployee;
}



function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value2){
    employee[streetAddress]= value2;
    return employee;
}



function deleteFromEmployeeByKey(employee){ 
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}



function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name];
    return employee;
}






