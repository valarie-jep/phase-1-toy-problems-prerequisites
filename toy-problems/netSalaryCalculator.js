function calculatePayee(taxableIncome) {
    if (taxableIncome <= 24000) {
        return taxableIncome * 0.10;
    } else if (taxableIncome <= 32333) {
        return 2400 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
        return 4483.25 + (taxableIncome - 32333) * 0.30;
    } else if (taxableIncome <= 800000) {
        return 144783.25 + (taxableIncome - 500000) * 0.325;
    } else {
        return 242283.25 + (taxableIncome - 800000) * 0.35;
    }
}

function calculateNHIF(grossSalary) {
    //NHIF rates as per 2025
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700;
}

function calculateNSSF(grossSalary) {
    //NSSF rates as per 2025
    const tierIILimit = 72000;
    return 0.06 * Math.min(grossSalary, tierIILimit);
}

function calculateSHIF(grossSalary) {
    //SHIF rates as per 2025
    return 0.0275 * grossSalary;
}

function calculateHousingLevy(grossSalary) {
    //Housing Levy rate as per 2025
    return 0.015 * grossSalary;
}

function netSalaryCalculator() {
    //Prompt user for imputs
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));

    //Calculate gross salary
    const grossSalary = basicSalary + benefits;

    //Calculate deductions
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const shif = calculateSHIF(grossSalary);
    const housingLevy = calculateHousingLevy(grossSalary);

    //Calculate total deductions and net salary
    const totalDeductions = payee + nhif + nssf + shif + housingLevy;
    const netSalary = grossSalary - totalDeductions;

    //Return results as an object
    return {
        "Gross Salary": grossSalary,
        "PAYE (Tax)": payee,
        "NHIF Deductions": nhif,
        "NSSF Deductions": nssf,
        "SHIF Deductions": shif,
        "Housing Levy": housingLevy,
        "Net Salary": netSalary,
    };
}

// Example usage
console.log(netSalaryCalculator());
