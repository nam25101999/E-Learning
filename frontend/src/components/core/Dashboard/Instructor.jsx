import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import { getInstructorData } from "../../../services/operations/profileAPI"
import InstructorChart from "./InstructorDashboard/InstructorChart"
import Img from './../../common/Img';

export default function Instructor() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)

  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState(null)
  const [courses, setCourses] = useState([])

  // Lấy dữ liệu giảng viên và khóa học khi component mount hoặc token thay đổi
  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const instructorApiData = await getInstructorData(token)
        const result = await fetchInstructorCourses(token)

        // Kiểm tra kỹ dữ liệu trả về là mảng và có phần tử
        if (Array.isArray(instructorApiData) && instructorApiData.length > 0) {
          setInstructorData(instructorApiData)
        }
        if (result) {
          setCourses(result)
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu giảng viên hoặc khóa học:", error)
      } finally {
        setLoading(false)
      }
    })()
  }, [token])

  // Tổng thu nhập từ tất cả các khóa học
  const totalAmount = instructorData?.reduce((acc, curr) => acc + curr.totalAmountGenerated, 0) ?? 0

  // Tổng số học viên đăng ký tất cả các khóa học
  const totalStudents = instructorData?.reduce((acc, curr) => acc + curr.totalStudentsEnrolled, 0) ?? 0

  // Giao diện chờ (skeleton) khi đang tải dữ liệu
  const skItem = () => {
    return (
      <div className="mt-5 w-full flex flex-col justify-between  rounded-xl ">
        <div className="flex border p-4 border-richblack-600 ">
          <div className="w-full">
            <p className="w-[100px] h-4 rounded-xl skeleton"></p>
            <div className="mt-3 flex gap-x-5">
              <p className="w-[200px] h-4 rounded-xl skeleton"></p>
              <p className="w-[100px] h-4 rounded-xl skeleton"></p>
            </div>

            <div className="flex justify-center items-center flex-col">
              <div className="w-[80%] h-24 rounded-xl mt-5 skeleton"></div>
              {/* Hình tròn */}
              <div className="w-60 h-60 rounded-full  mt-4 grid place-items-center skeleton"></div>
            </div>
          </div>
          {/* Cột bên phải */}
          <div className="sm:flex hidden min-w-[250px] flex-col rounded-xl p-6 skeleton"></div>
        </div>

        {/* Dòng dưới cùng */}
        <div className="flex flex-col gap-y-6  mt-5">
          <div className="flex justify-between">
            <p className="text-lg font-bold text-richblack-5 pl-5">Khóa học của bạn</p>
            <Link to="/dashboard/my-courses">
              <p className="text-xs font-semibold text-yellow-50 hover:underline pr-5">Xem tất cả</p>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row  gap-6 ">
            <p className=" h-[201px] w-full rounded-xl  skeleton"></p>
            <p className=" h-[201px] w-full rounded-xl  skeleton"></p>
            <p className=" h-[201px] w-full rounded-xl  skeleton"></p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-richblack-5 text-center sm:text-left">
          Xin chào {user?.firstName} 👋
        </h1>
        <p className="font-medium text-richblack-200 text-center sm:text-left">
          Bắt đầu một điều mới nào
        </p>
      </div>

      {loading ? (
        <div>{skItem()}</div>
      ) : courses.length > 0 ? (
        <div>
          <div className="my-4 flex h-[450px] space-x-4">
            {/* Hiển thị biểu đồ */}
            {totalAmount > 0 || totalStudents > 0 ? (
              <InstructorChart courses={instructorData} />
            ) : (
              <div className="flex-1 rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold text-richblack-5">Biểu đồ</p>
                <p className="mt-4 text-xl font-medium text-richblack-50">
                  Không đủ dữ liệu để hiển thị
                </p>
              </div>
            )}

            {/* Cột thống kê bên trái */}
            <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
              <p className="text-lg font-bold text-richblack-5">Thống kê</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-lg text-richblack-200">Tổng số khóa học</p>
                  <p className="text-3xl font-semibold text-richblack-50">{courses.length}</p>
                </div>
                <div>
                  <p className="text-lg text-richblack-200">Tổng số học viên</p>
                  <p className="text-3xl font-semibold text-richblack-50">{totalStudents}</p>
                </div>
                <div>
                  <p className="text-lg text-richblack-200">Tổng doanh thu</p>
                  <p className="text-3xl font-semibold text-richblack-50">Rs. {totalAmount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hiển thị 3 khóa học đầu tiên */}
          <div className="rounded-md bg-richblack-800 p-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-richblack-5">Khóa học của bạn</p>
              <Link to="/dashboard/my-courses">
                <p className="text-xs font-semibold text-yellow-50 hover:underline">Xem tất cả</p>
              </Link>
            </div>

            <div className="my-4 flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 ">
              {courses.slice(0, 3).map((course) => (
                <div
                  key={course._id}
                  className="sm:w-1/3 flex flex-col items-center justify-center"
                >
                  <Img
                    src={course.thumbnail}
                    alt={course.courseName}
                    className="h-[201px] w-full rounded-2xl object-cover"
                  />

                  <div className="mt-3 w-full">
                    <p className="text-sm font-medium text-richblack-50">{course.courseName}</p>
                    <div className="mt-1 flex items-center space-x-2">
                      <p className="text-xs font-medium text-richblack-300">
                        {course.studentsEnrolled.length} học viên
                      </p>
                      <p className="text-xs font-medium text-richblack-300">|</p>
                      <p className="text-xs font-medium text-richblack-300">Rs. {course.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
          <p className="text-center text-2xl font-bold text-richblack-5">
            Bạn chưa tạo khóa học nào
          </p>

          <Link to="/dashboard/add-course">
            <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
              Tạo khóa học ngay
            </p>
          </Link>
        </div>
      )}
    </div>
  )
}
