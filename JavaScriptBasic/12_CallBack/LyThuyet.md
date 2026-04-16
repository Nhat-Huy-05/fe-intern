# CallBack
- Gọi lại
- Là hàm được truyền qua đối số
- Cần thoả mãn 3 điều kiện(Là hàm, được truyền qua đối số, được gọi lại)
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
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3
```

```javascript
var khoaHoc =['Toán','Văn', 'Anh'];
khoaHoc.map(function(khoaHoc){
    console.log(khoaHoc);
    //Là hàm
    //Được truyền qua đối số(khoaHoc)
    //Được gọi lại
});
```
- Lưu ý: CallBack trong xử lý bất đồng bộ
```javascript
console.log("1. Bắt đầu nấu ăn");

setTimeout(function() {
    console.log("2. Món ăn đã xong!"); // Đây là callback, chạy sau 2 giây
}, 2000);

console.log("3. Trong lúc đợi, đi quét nhà");
//KQ in ra: 1 -> 3 -> 2(mã k dừng lại đợi 2)
```

```javascript
Array.prototype.map2 = function(callback){
    var arrayLength = this.length;

    for(let i = 0; i < this.length; ++i){
        callback(this[i], i);
    }
}

var khoaHoc =['Toán',
                'Văn',
                'Anh'];

 khoaHoc.map2(function(khoaHoc, index){
    console.log(index, khoaHoc);
 });
```
## Giải thích:
1. callback: Đây là điểm mấu chốt bạn thiếu lúc nãy. Khi bạn gọi khoaHoc.map2(function(){...}), cái hàm bên trong ngoặc chính là "đối số". Bạn phải đặt tên cho nó (ở đây đặt là callback) để bên trong thân hàm map2 có cái mà dùng.
2. Từ khóa this:

Bên trong hàm map2, từ khóa this đại diện cho đối tượng đang gọi hàm.

Ví dụ: Khi bạn gọi khoaHoc.map2(...), thì this chính là mảng ['Toán', 'Văn', 'Anh'].

Vì vậy, this.length là độ dài mảng, và this[i] là giá trị của từng phần tử tại vị trí i.
3. Vòng lặp for và việc thực thi Callback
```JavaScript
for (let i = 0; i < arrayLength; ++i) {
    callback(this[i], i); 
}
```
Vòng lặp này chạy qua từng index của mảng (0, 1, 2...).

Tại mỗi vòng lặp, nó nhấc điện thoại lên và gọi cái hàm callback mà bạn đã truyền vào lúc đầu.

Nó truyền vào 2 thứ:

this[i]: Giá trị phần tử hiện tại (ví dụ: 'Toán').

i: Vị trí của phần tử đó (ví dụ: 0).

4. Khi bạn thực thi:
```JavaScript
khoaHoc.map2(function(tenMonHoc, index) {
    console.log(index, tenMonHoc);
});
```
Lúc này, tenMonHoc sẽ nhận giá trị từ this[i].

index sẽ nhận giá trị từ i.

Lệnh console.log sẽ in ra kết quả cuối cùng mà bạn thấy.