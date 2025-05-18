import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className="text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
      Chúng tôi đam mê việc cách mạng hóa cách con người học tập. Nền tảng đổi mới của chúng tôi 
      <HighlightText text={"kết hợp công nghệ"} />,{" "}
      <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        chuyên môn
      </span>
      , và cộng đồng để tạo ra một trải nghiệm giáo dục
        
      <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        {" "}
        chưa từng có.
      </span> 
    </div>
  )
}

export default Quote
