let chieuCao = 176;
console.log("Chiều cao của bạn là: " + chieuCao + " cm"); // a. khai báo chiều cao của bạn
//console.log (chieuCao); // a. khai báo chiều cao của bạn 
let soLeChieuCao = chieuCao % 100; // Lấy 2 chữ số cuối

// Tính số cân 
let canLyTuong = (soLeChieuCao * 9) / 10;
let canToiDa = soLeChieuCao; 
let canToiThieu = (soLeChieuCao * 8) / 10; 

//b. In ra kết quả trên cùng một dòng
const str1 = "Cân nặng lý tưởng của bạn là : "+ canLyTuong + " kg. ";
const str2 = "Cân nặng tối đa của bạn là : "+ canToiDa + " kg. ";
const str3 = "Cân nặng tối thiểu của bạn là : " + canToiThieu + " kg. ";
console.log (str1 + str2 + str3); 

