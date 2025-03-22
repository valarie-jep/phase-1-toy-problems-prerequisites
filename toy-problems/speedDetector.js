function speedDetector() {
    const speed = parseFloat(prompt("Enter the speed of the car (km/hr): "));

    if (speed < 70) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

console.log(speedDetector());
