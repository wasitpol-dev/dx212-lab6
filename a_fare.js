/*// Prompt A1 — แย่
const calcFare = (distanceKm) => {
	if (!Number.isFinite(distanceKm) || distanceKm < 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

console.log(calcFare(2));
console.log(calcFare(2.1));
console.log(calcFare(5));
*/

/*// Prompt A2 — ดี
// คิดเศษกิโลเมตรเป็นกิโลเมตรเต็ม
const calcFare = (distanceKm) => {
    if (!Number.isFinite(distanceKm) || distanceKm < 0) {
        return 0;
    }

    const roundedDistance = Math.ceil(distanceKm);
    return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

console.log(calcFare(1.5)); // 10
console.log(calcFare(2));   // 10
console.log(calcFare(7.2)); // 22
*/

