import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Nền tảng học tập đẳng cấp thế giới cho",
    highlightText: "Bất kỳ ai, ở bất kỳ đâu",
    description:
      "TrollCode hợp tác với hơn 275+ trường đại học và công ty hàng đầu để mang đến các khóa học trực tuyến linh hoạt, tiết kiệm và phù hợp với nhu cầu việc làm cho cá nhân và tổ chức trên toàn thế giới.",
    BtnText: "Tìm hiểu thêm",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Chương trình học theo nhu cầu doanh nghiệp",
    description:
      "Tiết kiệm thời gian và chi phí! Chương trình học Belajar được thiết kế dễ hiểu và sát với nhu cầu thực tế của ngành.",
  },
  {
    order: 2,
    heading: "Phương pháp học tập của chúng tôi",
    description:
      "TrollCode hợp tác với hơn 275+ trường đại học và công ty hàng đầu để mang đến trải nghiệm học tập tiên tiến.",
  },
  {
    order: 3,
    heading: "Chứng nhận",
    description:
      "TrollCode hợp tác với hơn 275+ trường đại học và công ty hàng đầu để mang đến chứng nhận giá trị.",
  },
  {
    order: 4,
    heading: `Hệ thống "Tự động chấm điểm"`,
    description:
      "TrollCode hợp tác với hơn 275+ trường đại học và công ty hàng đầu để triển khai hệ thống đánh giá tự động hiệu quả.",
  },
  {
    order: 5,
    heading: "Sẵn sàng đi làm",
    description:
      "TrollCode hợp tác với hơn 275+ trường đại học và công ty hàng đầu để giúp học viên sẵn sàng bước vào môi trường làm việc.",
  },
];


const LearningGrid = () => {

  return (
    <div className="grid mx-auto w-[350px] lg:w-fit grid-cols-1 lg:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "lg:col-span-2 lg:h-[294px]"}  ${card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                  ? "bg-richblack-800 h-[294px]"
                  : "bg-transparent"
              } ${card.order === 3 && "lg:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="lg:w-[90%] flex flex-col gap-3 pb-10 lg:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;