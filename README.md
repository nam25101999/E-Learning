# TrollStudy 📝

TrollStudy là một nền tảng giáo dục trực tuyến (ed-tech) đầy đủ chức năng, cho phép người dùng tạo, học tập và đánh giá các nội dung giáo dục.  
Nền tảng được xây dựng trên **MERN stack** gồm ReactJS, NodeJS, MongoDB và ExpressJS.

## Mục Lục

| Section                  | Mô tả                                                |
|--------------------------|-----------------------------------------------------|
| [TrollStudy Aim](#TrollStudy-aim)             | 📚 Mục tiêu và định hướng của TrollStudy             |
| [Tech Stack](#tech-stack)                 | 💻🔧 Các công nghệ sử dụng                         |
| [System Architecture](#system-architecture)     | 🏰 Tổng quan kiến trúc hệ thống                    |
| [Architecture Diagram](#architecture-diagram)     | 🏗️ Sơ đồ kiến trúc                                 |
| [Schema](#schema)                         | 🗂 Giải thích các schema dữ liệu                   |
| [React Hooks](#react-hooks)               | 🎣 Các React Hooks sử dụng                          |
| [React Library](#react-library)           | ⚛️📚 Các thư viện React được dùng                   |
| [Screen Preview](#screen-preview)         | 🖥️ Xem trước các màn hình ứng dụng                  |

---

## TrollStudy Aim 📚

1️⃣ Tạo trải nghiệm học tập liền mạch và tương tác, giúp học sinh tiếp cận giáo dục dễ dàng và thú vị hơn.  
2️⃣ Cung cấp nền tảng cho giảng viên thể hiện chuyên môn và kết nối với người học trên toàn cầu.

---

## Tech Stack 💻🔧

- **Frontend:** ReactJS, Redux, React Router, Axios, React Hook Form  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Cloud Storage:** Cloudinary (quản lý media)  

---

## System Architecture 🏰

TrollStudy gồm 3 thành phần chính:

### 🎨 Frontend

- Xây dựng bằng ReactJS, tạo giao diện người dùng động và tương tác cao.  
- Sử dụng kỹ thuật **Loading Skeleton** giúp trải nghiệm người dùng mượt mà.  
- Giao tiếp với backend qua các RESTful API.

### ⚙️ Backend

- Sử dụng Node.js và Express.js xây dựng server, cung cấp API cho frontend.  
- Xử lý logic như xác thực người dùng, quản lý khóa học, lưu trữ và xử lý dữ liệu.  
- Tích hợp thanh toán qua Razorpay và lưu trữ media bằng Cloudinary.

### 🛢️ Database

- MongoDB cung cấp lưu trữ dữ liệu linh hoạt, phù hợp với dữ liệu phi cấu trúc như video, ảnh, tài liệu.  
- Lưu trữ thông tin khóa học, người dùng, và các dữ liệu liên quan khác.

---

## Architecture Diagram 🏗️

Sơ đồ tổng quan hệ thống TrollStudy gồm frontend, backend và database với luồng dữ liệu tương tác qua API REST.

---

## Các Trang chính của TrollStudy

### Dành cho học viên:

- **Homepage 🏠:** Giới thiệu chung, link danh sách khóa học, thông tin cá nhân, nền động.  
- **Course List 📚:** Danh sách tất cả khóa học, mô tả và đánh giá.  
- **Wishlist 💡:** Khóa học được yêu thích và lưu lại.  
- **Cart Checkout 🛒:** Thanh toán và hoàn tất đăng ký khóa học.  
- **Course Content 🎓:** Nội dung khóa học, video và tài liệu liên quan.  
- **User Details 👤:** Thông tin tài khoản học viên.  
- **User Edit Details ✏️:** Cho phép học viên chỉnh sửa thông tin cá nhân.

### Dành cho giảng viên:

- **Dashboard 📊:** Tổng quan khóa học, đánh giá, phản hồi.  
- **Insights 📈:** Thống kê lượt xem, lượt nhấp và các chỉ số khác.  
- **Course Management 🛠️:** Tạo, chỉnh sửa, xóa khóa học và nội dung.  
- **View and Edit Profile Details 👀:** Quản lý thông tin cá nhân giảng viên.

---

## Backend Features ⚙️

- **Xác thực & phân quyền 🔐:** Đăng ký, đăng nhập, xác thực OTP, quên mật khẩu.  
- **Quản lý khóa học 🛠️:** CRUD khóa học và nội dung, đánh giá khóa học.  
- **Thanh toán 💳:** Học viên thanh toán qua Razorpay để đăng ký khóa học.  
- **Quản lý media ☁️:** Sử dụng Cloudinary để lưu trữ ảnh, video, tài liệu.  
- **Định dạng Markdown ✍️:** Nội dung tài liệu khóa học được lưu dưới dạng Markdown, dễ hiển thị trên frontend.

---

## Data Models & Database Schema 📋

- **Student Schema 🧑‍🎓:** Thông tin học viên (tên, email, mật khẩu, khóa học).  
- **Instructor Schema 👩‍🏫:** Thông tin giảng viên (tên, email, mật khẩu, khóa học).  
- **Course Schema 📚:** Thông tin khóa học (tên, mô tả, giảng viên, media).

---

## React Hooks 🎣

Sử dụng các hooks phổ biến để quản lý trạng thái và hiệu ứng:

- `useState`, `useEffect`, `useDispatch`, `useSelector`, `useNavigate`, `useParams`, `useLocation`, `useRef`  
- Hooks tùy chỉnh và các thư viện hỗ trợ như `useForm`, `useDropzone`.

---

## React Libraries 📚

- **React Lazy Load Image:** Tăng hiệu suất tải ảnh.  
- **Chart.js:** Biểu đồ tương tác.  
- **Framer Motion:** Hiệu ứng hoạt hình.  
- **React Dropzone:** Upload file kéo thả.  
- **React Hot Toast:** Thông báo toast đẹp mắt.  
- **React OTP Input:** Nhập mã OTP.  
- **React Super Responsive Table:** Bảng dữ liệu responsive.  
- **Swiper:** Slider tương tác.  
- **React Type Animation:** Hiệu ứng gõ chữ.  
- **Video React:** Trình phát video.

---

## API Design

Các API được thiết kế theo RESTful chuẩn, sử dụng JSON, với các phương thức GET, POST, PUT, DELETE:

| Endpoint                      | Mô tả                                    |
|------------------------------|-----------------------------------------|
| POST `/api/auth/signup`       | Đăng ký người dùng (học viên hoặc giảng viên) |
| POST `/api/auth/login`        | Đăng nhập, tạo JWT token                 |
| POST `/api/auth/verify-otp`   | Xác thực mã OTP gửi qua email            |
| POST `/api/auth/forgot-password` | Gửi email đặt lại mật khẩu             |
| GET `/api/courses`            | Lấy danh sách tất cả khóa học            |
| GET `/api/courses/:id`        | Lấy chi tiết khóa học theo ID             |
| POST `/api/courses`           | Tạo mới khóa học                         |
| PUT `/api/courses/:id`        | Cập nhật khóa học theo ID                 |
| DELETE `/api/courses/:id`     | Xóa khóa học theo ID                      |
| POST `/api/courses/:id/rate` | Đánh giá khóa học                         |

---

## Screen Preview 🖥️

### Homepage 🏠  
Trang giới thiệu nền tảng, các khóa học nổi bật và thông tin người dùng.

### About Page  
Giới thiệu chi tiết về TrollStudy và mục tiêu.

### Contact Page  
Thông tin liên hệ hỗ trợ.

### AI Content Page  
Trang hỗ trợ nội dung tạo bởi AI.

### Footer  
Thông tin bản quyền và liên kết.

### 404 Page  
Trang báo lỗi khi truy cập URL không hợp lệ.

---

Cảm ơn bạn đã quan tâm và trải nghiệm TrollStudy!  
Nếu có thắc mắc hoặc góp ý, hãy liên hệ với chúng tôi.

---

*TrollStudy Team*  
