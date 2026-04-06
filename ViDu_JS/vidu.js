function showMessage(){
  function showMessage2(){
    console.log('Mess 2');
  }
  showMessage2(); //showMessage2 đưa ra ngoài không thể gọi được
}
showMessage();
//Định nghĩa 1 fun trong 1 fun(phạm vi sử dụng chỉ trong fun đó)
//Định nghĩa trong 1 hàm được thực thi chỉ khi được gọi hàm đó.