const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById("Sign_in").addEventListener("click", function (event) {
    event.preventDefault();

    // Lấy giá trị từ form
    const email = document.querySelector(".sign-in input[type='email']").value;
    const password = document.querySelector(".sign-in input[type='password']").value;

    // Gửi yêu cầu POST tới API
    fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Đăng nhập thành công!');
                window.location.href = "../HTML/index.html"; // Chuyển hướng sang trang home
            } else {
                alert('Sai tài khoản hoặc mật khẩu!');
            }
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });

    app.get('/home', (req, res) => {
        res.sendFile(__dirname + '../HTML/index.html');  // Ensure this path points to your homepage file
    });
});


