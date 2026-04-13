# Đệ quy
- 1 hàm tự gọi lại chính nó
- 2 phần quan trọng:
1. Điểm dừng(Base case) : Điều kiện để hàm ngừng gọi chính nó.
2. Bước đệ quy(Recursive Step): Phần thân hàm gọi lại chính nó nhưng với 1 giá trị đầu vào nhỏ hơn hoặc đơn giản hơn.

```javascript
function factorical(n){
    if (n === 0 || n === 1){
        //1.Điểm dừng: Nếu n là 0 or 1, kq = 1
        return 1;
    }
    return n * factorical(n - 1);
       //2.Đệ quy: n! = n * (n-1)!
}
console.log(factorical(5)); //kq 120
```

Cơ chế hoạt động:

Khi gọi factorical(3), máy sẽ xử lý:
- factorical(3) gọi 3 * factorical(2)
- factorical(2) gọi 2 * factorical(1)
- factorical(1) chạm điểm dừng và trả về 1
- máy bắt đầu tính ngược lại 2 * 1 = 2, sau đó 3 * 2 = 6
