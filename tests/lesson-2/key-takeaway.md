# 1. Version control System
1. Local : lưu ở máy cá nhân
2. Centralize : lưu ở máy chủ tập trung
3. Distributed : lưu ở nhiều máy khác nhau

# 2. Git
## Three state
### Working Directory
- Các file mới hoặc file có thay đổi 
### Staging Area

- Các file đưa vào vùng chuẩn bị commit < Tạo ra các phiên bản>
### Repository

- Các commit (phiên bản)

## Câu lệnh phổ biến
- git init : khởi tạo thư mục được quản lý bởi Git
### cấu hình cho 1 repo
- git config user.name "name"
- git config user.name "email"
### cấu hình cho toàn bộ máy tính (default)
- git config --global user.name "name"
- git config --global user.email "email"
### thêm file vào vùng staging:
- git add <file_name> : thêm 1 file
- git add . : thêm toàn bộ git
### xem trạng thái file
- git status
### comit 
- git commit -m"message"
### kiểm tra lịch sử commit
- git log
## 3. Convention: chore, feat, fix


# 3. Javascript basic
## 1. Variables 
-  var : khai báo lại được, phạm vi toàn cục (global), dùng khi biến sẽ gán lại 
- let : không khai báo lại được, phạm vi trong cặp ngoặc {}, dùng khi biến sẽ gán lại 
== > nên dùng let vì dễ kiểm soát phạm vi cuả biến. 
- constant: hằng số dùng để khai báo các giá trị không thể thay đổi, dùng khi biến KHÔNG GÁN LẠI 

## 2. Data type : kiểu dữ liệu 
Có 8 kiểu dữ liệu: string, number, bigint, boolean, undefined, null, symbol, object. 

## 3. Comparison Operator : toán tử so sánh 
- so sánh hơn kém >,<
- so sánh bằng ==, ===, !=, !==, >=, <=

## 4. Unary operator: toán tử một ngôi 
- dùng để tăng hoặc giảm giá trị
- i++ bằng i=i+1
- i-- bằng i=i-1

## 5. Arithmetic operator
- Toán tử số học ( +,-, */)
## 6. Conditional 
- điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không
## 7. Loops : 
- vòng lặp 
- dùng để thực hiện một đoạn logic một số lần nhất định