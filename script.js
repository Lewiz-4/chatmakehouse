document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn không cho form tự động gửi dữ liệu

  // Lấy giá trị từ các ô input
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Kiểm tra các điều kiện nhập liệu
  if (username === '' || password === '' || confirmPassword === '') {
    document.getElementById('error-message').textContent = 'Vui lòng điền đầy đủ thông tin!';
    return;
  }

  if (password !== confirmPassword) {
    document.getElementById('error-message').textContent = 'Mật khẩu và xác nhận mật khẩu không khớp!';
    return;
  }

  // Kiểm tra độ dài mật khẩu (ví dụ: ít nhất 6 ký tự)
  if (password.length < 6) {
    document.getElementById('error-message').textContent = 'Mật khẩu phải có ít nhất 6 ký tự!';
    return;
  }

  // Giả sử việc đăng ký thành công
  document.getElementById('error-message').textContent = '';
  alert('Đăng ký thành công!');

  // Nếu bạn muốn lưu thông tin người dùng vào localStorage (cho demo), bạn có thể làm như sau:
  const userData = {
    username: username,
    password: password // Lưu mật khẩu ở đây chỉ để demo, nhưng trong thực tế cần mã hóa
  };
  
  localStorage.setItem('user', JSON.stringify(userData));

  // Sau khi đăng ký thành công, có thể chuyển hướng người dùng đến trang đăng nhập hoặc trang chủ
  // window.location.href = "login.html"; // Chuyển hướng đến trang đăng nhập (nếu có)
});
