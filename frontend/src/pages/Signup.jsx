// Nhập hình ảnh minh họa cho trang đăng ký
import signupImg from "../assets/Images/signup.png";

// Nhập thành phần giao diện mẫu cho phần xác thực người dùng
import Template from "../components/core/Auth/Template";

// Component trang Đăng ký
function Signup() {
  return (
    <Template
      title="Tham gia cùng hàng triệu người đang học lập trình miễn phí với TrollCode"
      description1="Xây dựng kỹ năng cho hôm nay, ngày mai và cả tương lai."
      description2="Giáo dục để bảo vệ sự nghiệp của bạn trước những thay đổi."
      image={signupImg}
      formType="signup" // Biểu mẫu dạng đăng ký
    />
  );
}

// Xuất component để sử dụng trong ứng dụng
export default Signup;
