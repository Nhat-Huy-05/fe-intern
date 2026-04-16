# CallBack
- Gọi lại
- Là hàm được truyền qua đối số
- Cần thoả mãn 2 điều kiện(Là hàm, được truyền qua đối số)
```javascript
function myFunction(param){
    
    if(typeof param === 'function'){
        param('Học lập trình');
    }
}
function myCallback(value){
    console.log('Value: ', value);
}

myFunction(myCallback);
```
- Ví dụ:
```javascript
function xinChao(ten, callback) {
    console.log("Đang chuẩn bị lời chào...");
    callback(ten); 
}

function hienThi(ten) {
    console.log("Xin chào, " + ten + "!");
}

// Truyền hàm hienThi như một callback vào hàm xinChao
xinChao("Gemini", hienThi);
```
- **Bài tập**:
```javascript
function sumCb(a, b) {
    return a + b;
}
function subCb(a, b){
    return a - b;
}
function multiCb(a, b){
    return a * b;
}
function divCb(a, b){
    return a / b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3

```