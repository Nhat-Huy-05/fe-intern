const btn = document.getElementById('btn');
const tieuDe = document.getElementById('tieu-de');
const moTa = document.getElementById('mo-ta');

btn.addEventListener('click', function() {
  tieuDe.innerHTML = 'Đã thay đổi! 🎉';
  moTa.textContent = 'innerHTML và textContent hoạt động rồi.';
});