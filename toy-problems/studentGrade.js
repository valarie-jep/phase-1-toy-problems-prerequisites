function studentGrade() {
    const marks = parseFloat(prompt("Enter students marks(0-100): "));

    if (marks > 100 || marks < 0) {
        return "Invalid input! Marks should be between 0 and 100.";
    }

    if (marks > 79) {
        return "Grade: A";
    } else if (marks >= 60) {
        return "Grade: B";
    } else if (marks >= 50) {
        return "Grade: C";
    } else if (marks >= 40) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}

console.log(studentGrade());