//1.Phương thức forEach2
Array.prototype.forEach2 = function(callback){
    for(let index in this){
        if (this.property(index)){
            callback(this[index], index, this);
        }
    }
}
var khoaHoc= ['Toán',
    'Văn',
    'Anh'
]
khoaHoc.forEach(function(khoaHoc, index){
    console.log(index, khoaHoc);
})
/*
- for(var index in this):vòng lặp for..in duyệt qua các index mảng.
- this.property(index): đảm bảo index đó thuộc mảng khoaHoc chứ không phải là các phương thức
vừa định nghĩa thêm vào prototype(như forEach2)
- callback(this[index], index, this): gọi lại hàm mình truyền vào với 3 đối số chuẩn:
Gtri ptu, chỉ số(index) và chính mảng gốc.
- outp: In ra từng cặp index và tên môn học.
*/

//2.Phương thức filter2(lọc các ptu thoả mãn đk và trả về 1 mảng mới)
Array.prototype.filter2 = function(callback){
    let output = [];//mảng rỗng chứa kq lọc
    for (var index in this){
        if(this.hasOwnProperty(index)){
            //nếu callback trả về true
            if(callback(this[index], index, this)){
                output.push(this[index]); //đẩy ptu đó vào mảng output
            }
        }
    }
    return output; //trả về mảng mới sau khi lọc
}

var number = [1, 2, 3, 4, 5, 6]
var soChan = number.filter2(function(number){
    return number % 2 == 0;//dk số chẵn
});
console.log(soChan);

//3.Phương thức reduce2: gom mảng về 1 giá trị duy nhất(tổng, tích, gộp object)
Array.prototype.reduce2 = function(callback, initialValue){
    let i = 0;
    let accumulator = initialValue;

    //nếu không truyền gtri khởi tạo, lấy ptu đầu tiên làm accumulator
    if(arguments.length < 2){
        accumulator = this[0];
        i = 1; //bắt đầu vòng lặp ptu thứ 2
    }
    for(i = 0 ;i < this.length;i++){
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

var so = [1, 2, 3, 4];
var tong = so.reduce2(function(tong, so){
    return tong + so;
}, 0)
console.log(tong);
/*
arguments.length < 2: Kiểm tra xem người dùng có truyền vào initialValue hay không. Nếu không, reduce sẽ tự lấy số đầu tiên của mảng làm điểm bắt đầu và bỏ qua lượt chạy đầu tiên.

accumulator: Biến tích trữ. Mỗi vòng lặp, kết quả trả về của callback sẽ được gán ngược lại vào biến này để dùng cho vòng tiếp theo.

accumulator = callback(...): Đây là cốt lõi của reduce. Nó cộng dồn/gộp dữ liệu qua từng bước.

Output: 10 (Vì 0 + 1 + 2 + 3 + 4).
*/

//Phương thức map2(): tạo 1 mảng mới dựa trên kq trả về của callback
Array.prototype.map2 = function(callback){
    var output = []
    var arrayLength = this.length;

    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this)
                output.push(result);
        }
    }
    return output;
}
var khoaHoc = ['Sử',
    'Địa',
    'Hoá'
]
var htmlResult = khoaHoc.map2(function(khoaHoc,index){
    return `<li>${index} - ${khoaHoc}</li>`;
})
console.log(htmlResult.join(''));

//tạo 1 phương thức myMap hoạt động tương tự map2
Array.prototype.myMap = function(cb){
let output =[]
var ArrayLength = this.length;
for(var index in this){
    if(this.hasOwnProperty(index)){
        var result = cb(this[index],index, this)
        output.push(result);
    }
}
return output;
}
const number = [1, 2, 3];
const result = number.myMap(function(number){
    return number * 2;
})
console.log(result);