import React from "react";

import FoundingStory from "../assets/Images/FoundingStory.png";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";

import Footer from "../components/common/Footer";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponent from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import Img from "../components/common/Img";
import ReviewSlider from "../components/common/ReviewSlider";

import { motion } from "framer-motion";
import { fadeIn } from "../components/common/motionFrameVarients";

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <motion.header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            <motion.p
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              Đổi mới giáo dục trực tuyến vì một
              <HighlightText text={"Tương Lai Tươi Sáng"} />
            </motion.p>

            <motion.p
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]"
            >
              TrollCode tiên phong trong việc thúc đẩy đổi mới giáo dục trực
              tuyến. Chúng tôi đam mê tạo ra một tương lai tươi sáng bằng cách
              cung cấp các khóa học tiên tiến, ứng dụng công nghệ mới nổi và
              xây dựng cộng đồng học tập năng động.
            </motion.p>
          </motion.header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>

          <div className="absolute bottom-0 left-[50%] grid w-full -translate-x-1/2 translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <Img src={BannerImage1} alt="Ảnh banner 1" />
            <Img src={BannerImage2} alt="Ảnh banner 2" />
            <Img src={BannerImage3} alt="Ảnh banner 3" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px]"></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="my-24 flex lg:w-[50%] flex-col gap-10"
            >
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                Câu Chuyện Thành Lập
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Nền tảng học trực tuyến của chúng tôi được sinh ra từ một tầm
                nhìn và đam mê chung nhằm thay đổi nền giáo dục. Mọi chuyện
                bắt đầu với một nhóm các nhà giáo dục, chuyên gia công nghệ và
                người học suốt đời nhận ra sự cần thiết của những cơ hội học
                tập linh hoạt, chất lượng và dễ tiếp cận trong thế giới số
                ngày càng phát triển nhanh chóng.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Là những nhà giáo dục giàu kinh nghiệm, chúng tôi đã chứng kiến
                trực tiếp những giới hạn và thách thức của hệ thống giáo dục
                truyền thống. Chúng tôi tin rằng giáo dục không nên bị giới
                hạn trong bốn bức tường lớp học hay biên giới địa lý. Chúng tôi
                mơ ước xây dựng một nền tảng có thể xóa nhòa những khoảng cách
                này và giúp mọi người từ khắp mọi nơi khai phá tiềm năng của
                bản thân.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={FoundingStory}
                alt="Ảnh câu chuyện thành lập"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                Tầm Nhìn Của Chúng Tôi
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Với tầm nhìn đó, chúng tôi bắt đầu hành trình tạo ra một nền tảng
                học trực tuyến có khả năng thay đổi cách mọi người học. Đội
                ngũ chuyên gia tận tâm của chúng tôi đã làm việc không ngừng để
                phát triển một nền tảng vững chắc và trực quan, kết hợp công
                nghệ tiên tiến với nội dung hấp dẫn, tạo ra trải nghiệm học
                tập năng động và tương tác.
              </p>
            </div>

            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%]">
                Sứ Mệnh Của Chúng Tôi
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Sứ mệnh của chúng tôi không chỉ đơn thuần là cung cấp các khóa
                học trực tuyến. Chúng tôi muốn tạo dựng một cộng đồng học tập
                sôi nổi, nơi mọi người có thể kết nối, hợp tác và học hỏi lẫn
                nhau. Chúng tôi tin rằng kiến thức phát triển mạnh trong môi
                trường chia sẻ và đối thoại, và chúng tôi thúc đẩy tinh thần
                hợp tác này qua các diễn đàn, buổi học trực tiếp và cơ hội kết
                nối.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponent />

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Đánh giá từ học viên khác */}
      <div className="my-20 px-5 text-white">
        <h1 className="text-center text-4xl font-semibold mt-8">
          Đánh giá từ các học viên khác
        </h1>
        <ReviewSlider />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default About;
