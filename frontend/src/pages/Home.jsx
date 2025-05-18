import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';

import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'
import Course_Slider from '../components/core/Catalog/Course_Slider'

import { getCatalogPageData } from '../services/operations/pageAndComponentData'

import { MdOutlineRateReview } from 'react-icons/md'
import { FaArrowRight } from "react-icons/fa"

import { motion } from 'framer-motion'
import { fadeIn, } from './../components/common/motionFrameVarients';

// background random images
import backgroundImg1 from '../assets/Images/random bg img/coding bg1.jpg'
import backgroundImg2 from '../assets/Images/random bg img/coding bg2.jpg'
import backgroundImg3 from '../assets/Images/random bg img/coding bg3.jpg'
import backgroundImg4 from '../assets/Images/random bg img/coding bg4.jpg'
import backgroundImg5 from '../assets/Images/random bg img/coding bg5.jpg'
import backgroundImg6 from '../assets/Images/random bg img/coding bg6.jpeg'
import backgroundImg7 from '../assets/Images/random bg img/coding bg7.jpg'
import backgroundImg8 from '../assets/Images/random bg img/coding bg8.jpeg'
import backgroundImg9 from '../assets/Images/random bg img/coding bg9.jpg'
import backgroundImg10 from '../assets/Images/random bg img/coding bg10.jpg'
import backgroundImg111 from '../assets/Images/random bg img/coding bg11.jpg'


const randomImges = [
    backgroundImg1,
    backgroundImg2,
    backgroundImg3,
    backgroundImg4,
    backgroundImg5,
    backgroundImg6,
    backgroundImg7,
    backgroundImg8,
    backgroundImg9,
    backgroundImg10,
    backgroundImg111,
];

// hardcoded



const Home = () => {

    // get background random images
    const [backgroundImg, setBackgroundImg] = useState(null);

    useEffect(() => {
        const bg = randomImges[Math.floor(Math.random() * randomImges.length)]
        setBackgroundImg(bg);
    }, [])

    // console.log('bg ==== ', backgroundImg)

    // get courses data
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6506c9dff191d7ffdb4a3fe2" // hard coded
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCatalogPageData = async () => {

            const result = await getCatalogPageData(categoryID, dispatch);
            setCatalogPageData(result);
            // console.log("page data ==== ",CatalogPageData);
        }
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID])


    // console.log('================ CatalogPageData?.selectedCourses ================ ', CatalogPageData)


    return (
        <React.Fragment>
            {/* background random image */}
            <div>
                <div className="w-full h-[450px] md:h-[650px] absolute top-0 left-0 opacity-[0.3] overflow-hidden object-cover ">
                    <img src={backgroundImg} alt="Background"
                        className="w-full h-full object-cover "
                    />

                    <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
                </div>
            </div>

            <div className=' '>
                {/*Section1  */}
                <div className='relative h-[450px] md:h-[550px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white '>

                    <Link to={"/signup"}>
                        <div className='z-0 group p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                                        transition-all duration-200 hover:scale-95 w-fit'>
                            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                              transition-all duration-200 group-hover:bg-richblack-900'>
                                <p>Trở thành một giảng viên</p>
                                <FaArrowRight />
                            </div>
                        </div>

                    </Link>

                    <motion.div
                        variants={fadeIn('left', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='text-center text-3xl lg:text-4xl font-semibold mt-7  '
                    >
                        Trao quyền cho tương lai của bạn với
                        <HighlightText text={"Coding Skills"} />
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className=' mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-richblack-300'
                    >
                        Với các khóa học lập trình trực tuyến của chúng tôi, bạn có thể học theo tốc độ của riêng mình, từ bất kỳ đâu trên thế giới và được tiếp cận với nguồn tài nguyên phong phú, bao gồm các dự án thực hành, bài kiểm tra và phản hồi cá nhân từ giảng viên.
                    </motion.div>


                    <div className='flex flex-row gap-7 mt-8'>
                        <CTAButton active={true} linkto={"/signup"}>
                            Xem Thêm
                        </CTAButton>

                        <CTAButton active={false} linkto={"/login"}>
                            Đặt lịch trình demo
                        </CTAButton>
                    </div>
                </div>

                {/* animated code */}
                <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
                    {/* Code block 1 */}
                    <div className=''>
                        <CodeBlocks
                            position={"lg:flex-row"}
                            heading={
                                <div className='text-3xl lg:text-4xl font-semibold'>
                                    Mở khóa của bạn
                                    <HighlightText text={"coding potential "} />
                                    với các khóa học trực tuyến của chúng tôi
                                </div>
                            }
                            subheading={
                                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                            }
                            ctabtn1={
                                {
                                    btnText: "Hãy tự mình thử",
                                    linkto: "/signup",
                                    active: true,
                                }
                            }
                            ctabtn2={
                                {
                                    btnText: "Tìm hiểu thêm",
                                    linkto: "/login",
                                    active: false,
                                }
                            }

                            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                            codeColor={"text-yellow-25"}
                            backgroundGradient={"code-block1-grad"}
                        />
                    </div>


                    {/* Code block 2 */}
                    <div>
                        <CodeBlocks
                            position={"lg:flex-row-reverse"}
                            heading={
                            <div className="w-[100%] text-3xl lg:text-4xl font-semibold lg:w-[50%]">
                                Bắt đầu
                                <HighlightText text={"lập trình trong vài giây"} />
                            </div>
                            }
                            subheading={
                            "Hãy thử ngay! Môi trường học thực hành của chúng tôi giúp bạn viết code thật ngay từ bài học đầu tiên."
                            }
                            ctabtn1={{
                            btnText: "Tiếp tục học",
                            link: "/signup",
                            active: true,
                            }}
                            ctabtn2={{
                            btnText: "Tìm hiểu thêm",
                            link: "/signup",
                            active: false,
                            }}
                            codeColor={"text-white"}
                            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                            backgroundGradient={"code-block2-grad"}
                        />
                    </div>


                    {/* course slider */}
                    <div className='mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
                        <h2 className='text-white mb-6 text-2xl '>
                            Lựa chọn phổ biến dành cho bạn 🏆
                        </h2>
                        <Course_Slider Courses={CatalogPageData?.selectedCategory?.courses} />
                        </div>
                        <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
                        <h2 className='text-white mb-6 text-2xl '>
                            Khóa học đăng ký nhiều nhất hôm nay 🔥
                        </h2>
                        <Course_Slider Courses={CatalogPageData?.mostSellingCourses} />
                        </div>


                    <ExploreMore />
                </div>

                {/*Section 2  */}
                <div className='bg-pure-greys-5 text-richblack-700 '>
                    <div className='homepage_bg h-[310px]'>
                        <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                            <div className='h-[150px]'></div>
                            <div className='flex flex-row gap-7 text-white '>
                                <CTAButton active={true} linkto={"/signup"}>
                                    <div className='flex items-center gap-3' >
                                        Khám phá danh mục đầy đủ
                                        <FaArrowRight />
                                    </div>
                                </CTAButton>
                                <CTAButton active={false} linkto={"/signup"}>
                                    <div>
                                        Tìm hiểu thêm
                                    </div>
                                </CTAButton>
                            </div>
                        </div>
                    </div>

                    <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                        <div className='flex flex-col lg:flex-row gap-5 mb-10 mt-[95px]'>
                            <div className='text-3xl lg:text-4xl font-semibold w-full lg:w-[45%]'>
                            Có được kỹ năng bạn cần cho một
                            <HighlightText text={"Công việc đang được săn đón"} />
                            </div>

                            <div className='flex flex-col gap-10 w-full lg:w-[40%] items-start'>
                            <div className='text-[16px]'>
                                Thời đại TrollCode hiện đại đặt ra những điều kiện riêng. Ngày nay, để trở thành một chuyên gia cạnh tranh, bạn cần nhiều hơn cả kỹ năng chuyên môn.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div>
                                Tìm hiểu thêm
                                </div>
                            </CTAButton>
                            </div>
                        </div>

                        {/* leadership */}
                        <TimelineSection />

                        <LearningLanguageSection />
                    </div>
                </div>


                {/*Section 3 */}
                <div className='mt-14 w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
                    <InstructorSection />

                    {/* Reviws from Other Learner */}
                    <h1 className="text-center text-3xl lg:text-4xl font-semibold mt-8 flex justify-center items-center gap-x-3">
                        Đánh giá từ những người học khác <MdOutlineRateReview className='text-yellow-25' />
                    </h1>
                    <ReviewSlider />
                </div>

                {/*Footer */}
                <Footer />
            </div >
        </React.Fragment>
    )
}

export default Home
