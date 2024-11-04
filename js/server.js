const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Giả lập một cơ sở dữ liệu tạm thời
const users = [
    { email: 'test@example.com', password: '123456' }, // Tài khoản mẫu
    { email: 'huy@example.com', password: 'password' }
];

// API xử lý đăng nhập
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;

    // Kiểm tra xem người dùng có tồn tại không
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Đăng nhập thành công!' });
    } else {
        res.json({ success: false, message: 'Sai tài khoản hoặc mật khẩu!' });
    }
});

// Lắng nghe trên cổng 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});