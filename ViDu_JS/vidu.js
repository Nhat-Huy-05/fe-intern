var khoaHoc = ['Toan','Van'];
khoaHoc.length = 10;
for(var index in khoaHoc){
  console.log(index);
  // thay vì trả về độ dài 10, nó sẽ chỉ lặp qua phần tử thực thôi(0, 1)
}