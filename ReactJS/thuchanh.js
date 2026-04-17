/*Bai1:
Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
Gợi ý: Sử dụng phương thức reduce
 */
const arrToObj = arr => arr.reduce((obj, [key, value]) =>
     ({ ...obj, [key]: value }), {});
