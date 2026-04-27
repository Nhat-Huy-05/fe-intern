# Topic 2: Flexbox & Grid
- Flexbox là gì?

Flexbox giúp sắp xếp các element(phần tử) theo hàng ngang hoặc dọc 1 cách linh hoạt.
```
Không có flex:          Có flex:
[A]                     [A] [B] [C]
[B]
[C]
```
- Các class Flexbox quan trọng
    - Bật flexbox
    ```
    flex          → bật flex, mặc định xếp hàng ngang
    flex-col      → xếp theo chiều dọc
    ```
    - Căn chỉnh ngang(justify)
    ```
    justify-start     → dồn về trái (mặc định)
    justify-center    → căn giữa
    justify-end       → dồn về phải
    justify-between   → đẩy 2 đầu ra 2 bên
    ```
    - Căn chỉnh dọc(items)
    ```
    items-start       → dồn lên trên
    items-center      → căn giữa theo chiều dọc
    items-end         → dồn xuống dưới
    ```
    - Khoảng cách giữa các item
    ```
    gap-4         → khoảng cách đều 4 phía
    gap-x-4       → khoảng cách ngang
    gap-y-4       → khoảng cách dọc
    ```