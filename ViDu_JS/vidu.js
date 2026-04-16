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