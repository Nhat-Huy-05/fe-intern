// 1. Export lẻ (Named Export)
export const PI = 3.14159; 

export function sum(a, b) {
    return a + b;
}

// 2. Export mặc định (Default Export) - mỗi file chỉ có duy nhất 1 cái này
const multiply = (a, b) => a * b;
export default multiply;
console.log(multiply);