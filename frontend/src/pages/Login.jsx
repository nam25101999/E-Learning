// Nhập hình ảnh minh họa từ thư mục ảnh
import loginImg from "../assets/Images/login.png";

// Nhập thành phần mẫu (template) dùng chung cho giao diện xác thực
import Template from "../components/core/Auth/Template";

// Component trang Đăng nhập
function Login() {
  return (
    <Template
      title="Chào mừng bạn trở lại"
      description1="Xây dựng kỹ năng cho hôm nay, ngày mai và cả tương lai."
      description2="Giáo dục để bảo vệ sự nghiệp của bạn trước những thay đổi."
      image={loginImg}
      formType="login" // Xác định loại biểu mẫu là đăng nhập
    />
  );
}

// Xuất component để sử dụng ở nơi khác
export default Login;
