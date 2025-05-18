import { useEffect } from "react";
import RenderSteps from "./RenderSteps"

export default function AddCourse() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="flex w-full items-start gap-x-6">

      <div className="flex flex-1 flex-col">
        <h1 className="mb-14 text-3xl font-medium text-richblack-5 font-boogaloo text-center lg:text-left">
          Thêm Khóa Học
        </h1>

        <div className="flex-1">
          <RenderSteps />
        </div>
      </div>

      {/* Course Upload Tips */}
      <div className="sticky top-10 hidden lg:block max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 ">
        <p className="mb-8 text-lg text-richblack-5">⚡ Mẹo khi tải khóa học lên</p>

        <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
          <li>Chọn tùy chọn giá khóa học hoặc đặt miễn phí.</li>
          <li>Kích thước tiêu chuẩn cho ảnh thumbnail khóa học là 1024x576.</li>
          <li>Phần video kiểm soát video giới thiệu khóa học.</li>
          <li>Course Builder là nơi bạn tạo và tổ chức khóa học.</li>
          <li>Thêm Chủ đề trong phần Course Builder để tạo bài học, bài kiểm tra và bài tập.</li>
          <li>Thông tin trong phần Dữ liệu bổ sung sẽ hiển thị trên trang chi tiết khóa học.</li>
          <li>Tạo thông báo để gửi tới tất cả học viên đã đăng ký.</li>
          <li>Ghi chú gửi đến tất cả học viên cùng lúc.</li>
        </ul>
      </div>
    </div>
  )
}
