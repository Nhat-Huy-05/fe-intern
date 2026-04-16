//Phương thức forEach2
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