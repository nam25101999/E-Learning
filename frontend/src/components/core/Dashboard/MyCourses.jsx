import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../common/IconBtn"
import CoursesTable from "./InstructorCourses/CoursesTable"

export default function MyCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)

  // Khi component mount, gọi API lấy danh sách khóa học của giảng viên
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      const result = await fetchInstructorCourses(token)
      setLoading(false)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
  }, [token]) // Thêm token vào dependency để khi token thay đổi thì fetch lại

  // Tự động scroll lên đầu trang khi component được hiển thị
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className="mb-14 flex justify-between items-center">
        {/* Tiêu đề trang */}
        <h1 className="text-4xl font-medium text-richblack-5 font-boogaloo text-center lg:text-left">
          Khóa học của tôi
        </h1>

        {/* Nút thêm khóa học mới */}
        <IconBtn
          text="Thêm khóa học"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>

      {/* Bảng danh sách khóa học */}
      {courses && (
        <CoursesTable
          courses={courses}
          setCourses={setCourses}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </div>
  )
}
