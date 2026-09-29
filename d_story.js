const rooms = [
  { room: "301", available: true },
  { room: "404", available: false },
  { room: "501", available: true },
  { room: "502", available: false },
  { room: "503", available: true },
];

function getAvailableRooms(roomList) {
  return roomList.filter((room) => room.available);
}

function bookRoom(roomList, roomNumber) {
  const selectedRoom = roomList.find((room) => room.room === roomNumber);

  if (!selectedRoom) {
    return `ไม่พบห้อง ${roomNumber}`;
  }

  if (!selectedRoom.available) {
    return `ห้อง ${roomNumber} ถูกจองแล้ว`;
  }

  selectedRoom.available = false;
  return `จองห้อง ${roomNumber} สำเร็จ`;
}

// กรณีที่ 1: แสดงเฉพาะห้องที่ว่าง
console.log("1. ห้องที่ว่าง:", getAvailableRooms(rooms));

// กรณีที่ 2: จองห้องที่ว่าง
console.log("2.", bookRoom(rooms, "301"));
console.log("   สถานะห้อง 301:", rooms.find((room) => room.room === "301"));

// กรณีที่ 3: ลองจองห้องที่ไม่ว่าง และห้องที่ไม่มีอยู่ (edge case)
console.log("3a.", bookRoom(rooms, "301"));
console.log("3b.", bookRoom(rooms, "กรุณากรอกข้อมูลใหม่"));