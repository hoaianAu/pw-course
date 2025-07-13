let student = {
    name: "Nguyễn Văn A",
    class: "K16",
    address: {
        street: "123 Đường ABC",
        city: "Hà Nội",
        country: "Việt Nam"
    },
       age: 20,
       phone : "0123456789",
}
console.log(student);
console.log(student.name);
console.log(student.address.city);

console.log(student["class"]);

student.name = "Nguyễn Văn B";
console.log(student.name);