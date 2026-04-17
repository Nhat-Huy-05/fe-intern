
import { PI, sum } from './math.js';

// 2. Import Default Export (không dùng { }, có thể đổi tên tùy ý)
import nhanHaiSo from './math.js';

console.log(PI);            // Kết quả: 3.14159
console.log(sum(5, 10));    // Kết quả: 15
console.log(nhanHaiSo(2, 3)); // Kết quả: 6 (đây chính là hàm multiply)