/*const buses = [  //โค้ดเดิม
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];

const lateRoutes = buses.filter(b => { b.late }).map(b => b.route);
const total = buses.reduce((sum, b) => sum + b.passengers);

console.log("สายที่มาสาย:", lateRoutes); // ควรได้ ["NGV-2", "NGV-3"]
console.log("ผู้โดยสารรวม:", total);      // ควรได้ 145
*/

const buses = [ //โค้ดแก้แล้ว
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];

const lateRoutes = buses.filter(b => b.late).map(b => b.route);
const total = buses.reduce((sum, b) => sum + b.passengers, 0);

console.log("สายที่มาสาย:", lateRoutes);
console.log("ผู้โดยสารรวม:", total);

//Comment ดาว่าบั๊กน่าจะอยู่ตรง filter กับ reduce เพราะ filter อาจจะเขียนเงื่อนไขไม่ถูก 
// ทำให้ไม่สามารถเลือกสายที่มาสายได้ และ reduce อาจจะลืมใส่ค่าเริ่มต้น 
//ทำให้คำนวณจำนวนผู้โดยสารรวมผิด

//หลังจากแก้แล้ว หลังจากแก้แล้วลองรันใหม่ ผลลัพธ์ตรงตามที่กำหนดทั้ง 2 จุด คือสายที่มาสายได้ NGV-2, NGV-3 
// และผู้โดยสารรวมได้ 145 ที่เดาไว้ตอนแรกว่าบั๊กอยู่ที่ filter กับ reduce ก็ถูกทั้ง 2 จุด