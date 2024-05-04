import { format, getMonth } from "date-fns";
import React, { useEffect, useState } from "react";
import DayPicker from "../DatePicker/DatePicker";

export default function DashboardMenu() {
 

  // useEffect(()=>{
  // let monthOfYear = [
  //   {ind:0,mon:'January'},
  //   {ind:1,mon:'February'},
  //   {ind:2,mon:'March'},
  //   {ind:3,mon:'April'},
  //   {ind:4,mon:'May'},
  //   {ind:5,mon:'June'},
  //   {ind:6,mon:'July'},
  //   {ind:7,mon:'August'},
  //   {ind:8,mon:'September'},
  //   {ind:9,mon:'October'},
  //   {ind:10,mon:'November'},
  //   {ind:11,mon:'December'}
  // ]

  // let indexOfMonth = monthOfYear.findIndex(obj=>{
  //   return obj.ind===value.getMonth()
  // })

  // console.log(monthOfYear[indexOfMonth].mon);

  // })

  return (
    <div className="main-menu relative w-full xlarge:max-w-[1378px] 3xl:max-w-[1172.55px] xlarge:overflow-y-auto xlarge:overflow-x-hidden xlarge:h-[872px] xlarge:mt-5 xlarge:pr-[9px] xlarge:pl-5">
      <section className=" dashboard-menu-headers w-full  h-full">
        {/* Top header of dashboardMenu */}
        <div className=" w-full md:h-14 py-[5px] md:py-2.5 xlarge:hidden px-4 flex items-center justify-between ">
          <h2 className="top-header-title hidden md:inline-block font-PoppinsSemiBold text-lg">
            Dashboard
          </h2>
          {/* left part of header dashboardMenu */}
          <div className=" flex items-center ">
            <button className="prev-btn flex items-center justify-between w-12 h-4 text-xs">
              <svg className=" w-3 h-2.5 rotate-180">
                <use href="#arrow-left"></use>
              </svg>
              PREV
            </button>
            <div className="w-[152px] h-8">
              <input type="date" />
            </div>

            <button className="next-btn flex items-center  justify-between w-12 h-4 text-xs">
              NEXT
              <svg className=" w-3 h-2.5">
                <use href="#arrow-left"></use>
              </svg>
            </button>
          </div>
          {/* right side of header dashboardMenu */}
          <button className="activity-btn w-9 md:w-[50px] h-[33.12px] flex items-center justify-center rounded">
            <svg className="w-6 h-6 text-white md:mr-1">
              <use href="#Activity"></use>
            </svg>
            <svg className=" hidden md:inline-block w-2.5 h-2.5 text-white">
              <use href="#right-arrow"></use>
            </svg>
          </button>
        </div>

        {/* header of dashboardMenu */}
        <div className="dashboard-header w-full h-[70px] md:h-[88px] xlarge:h-[116px] xlarge:min-w-[1051px]  rounded sticky top-0 z-10 ">
          {/* top part */}
          <div className=" flex md:h-[42px] xlarge:h-[58px] items-center justify-between text-white pr-9 pl-7 md:pr-[42px] md:pl-4 blg:pr-9 blg:pl-[18px] xlarge:pr-[15px] xlarge:pl-5">
            <h2 className=" font-PoppinsSemiBold text-sm xlarge:hidden">
              Daily Progress
            </h2>
            <div className="hidden xlarge:flex-center xlarge:h-[58px]">
              <h2 className=" font-PoppinsBold  text-xl/5 w-[113.55px]">Dashboard</h2>
              <div className=" w-0.5 h-7 mr-[26px] ml-6 bg-white"></div>
              <div className=" flex items-center xlarge:w-[320px] ">
                <button className="prev-btn flex items-center justify-between w-12 h-4 text-xs font-PoppinsSemiBold text-white">
                  <svg className=" w-3 h-2.5 rotate-180 text-white">
                    <use href="#arrow-left"></use>
                  </svg>
                  PREV
                </button>
                <button className="w-[152px] h-8 xlarge:w-[200px] xlarge:h-9 xlarge:mx-3">
                  <input type="date" className=" text-black xlarge:w-[193px] h-full rounded"/>
                </button>

                <button className="next-btn flex items-center  justify-between w-12 h-4 text-xs text-white opacity-50" disabled>
                  NEXT
                  <svg className=" w-3 h-2.5">
                    <use href="#arrow-left"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div className=" flex md:hidden w-[88px] h-7 items-center font-PoppinsMedium">
              <div className=" flex items-center justify-center font-PoppinsSemiBold  w-11 h-7 text-xxs">
                7 Sun
              </div>
              <div className="average-percent w-11 h-8 flex items-center font-PoppinsSemiBold">
                <div className=" w-11 h-4 flex items-center justify-evenly text-xxxs">
                  <span className=" inline-block">Avg %</span>
                  <div className=" w-4 h-4 flex items-center justify-center">
                    <svg className=" w-[8.5px] h-1 ">
                      <use href="#arrow-down"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden md:flex w-[501.75px] blg:w-[588.75px] blg:h-[42px] xlarge:w-[526px] xlarge:h-[58px]  h-7 items-center font-PoppinsSemiBold">
              <div className=" flex items-center justify-center mr-[12.25px] xlarge:mx-[7px]  w-[52px] xlarge:w-12  blg:w-[59px] h-5 text-xxs xlarge:text-sm xlarge:font-PoppinsSemiBold">
                7 Sun
              </div>
              <div className=" flex items-center justify-center mr-[12.25px] xlarge:mx-[7px]  w-[52px] blg:w-[59px] xlarge:w-12  h-5 text-xxs xlarge:text-sm xlarge:font-PoppinsSemiBold">
                7 Sun
              </div>
              <div className=" flex items-center justify-center mr-[12.25px] xlarge:mx-[7px]  w-[52px] blg:w-[59px] xlarge:w-12  h-5 text-xxs xlarge:text-sm xlarge:font-PoppinsSemiBold">
                7 Sun
              </div>
              <div className=" flex items-center justify-center mr-[12.25px] xlarge:mx-[7px]  w-[52px] blg:w-[59px] xlarge:w-12  h-5 text-xxs xlarge:text-sm xlarge:font-PoppinsSemiBold">
                7 Sun
              </div>
              <div className=" flex items-center justify-center mr-[12.25px] xlarge:mx-[7px]  w-[52px] blg:w-[59px] xlarge:w-12  h-5 text-xxs xlarge:text-sm xlarge:font-PoppinsSemiBold">
                7 Sun
              </div>
              <div className=" flex items-center justify-center mr-[12.25px] xlarge:mx-[7px]  w-[52px] blg:w-[59px] xlarge:w-12  h-5 text-xxs xlarge:text-sm xlarge:font-PoppinsSemiBold">
                7 Sun
              </div>
              <div className=" flex items-center justify-center mr-[12.25px] xlarge:mx-[7px]  w-[52px] blg:w-[59px] xlarge:w-12  h-5 text-xxs xlarge:text-sm xlarge:font-PoppinsSemiBold">
                7 Sun
              </div>
              <div className="average-percent w-[52px] blg:w-[78px] blg:mx-1.5 h-[42px] xlarge:h-[58px] flex items-center justify-center ">
                <div className=" w-[46.05px] xlarge:w-[52.06px] h-4 flex items-center text-xxs xlarge:text-xs xlarge:font-PoppinsSemiBold">
                  <span className="">Avg%</span>
                  <div className=" w-4 h-4 flex items-center justify-center">
                    <svg className=" w-[8.5px] h-1 ">
                      <use href="#arrow-down"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bottom part */}
          <div className="flex w-full h-[42px] md:h-[46px] xlarge:h-[58px]  items-start justify-between pr-9 pl-7 md:pr-9 md:pl-4 xlarge:pr-3.5 xlarge:pl-[15px]">
            <div className=" w-[223px] md:w-[250.25px] xlarge:w-[386.18px] xlarge:mt-[5px] blg:w-[320px] h-9 flex items-center mt-[1px]">
              <button className="plus-btn w-9 md:w-[120px] h-9 flex items-center justify-center mr-3 md:mr-3.5 md:py-[1px] md:px-1.5 pl-[3px] rounded">
                <svg className=" w-4 h-4">
                  <use href="#plus"></use>
                </svg>
                <button className=" hidden md:flex xlarge:w-[120px] xlarge:h-9 md:items-center md:justify-center font-PoppinsSemiBold text-xs text-white">
                  ADD NEW
                  <div>
                    <svg className="w-4 h-4 ml-1">
                      <use href="#down-arrow"></use>
                    </svg>
                  </div>
                </button>
              </button>
              <button className=" w-[108px] xlarge:w-[106px] h-9 xlarge:mr-4.5 text-white flex-center py-[1px] px-1.5 border border-white rounded font-PoppinsSemiBold text-xs uppercase">
                Modify view
              </button>
              <span className="hidden xlarge:inline-block text-nowrap w-[128.18px] h-5 font-PoppinsSemiBold text-lg/5 text-white">Daily Progress</span>
            </div>
            <div className=" w-[88px]  h-[46px] flex md:hidden items-center">
              <div className=" w-9 h-[42px] mx-1 pb-2.5 flex-center">
                <svg className=" w-9 h-9">
                  <use href="#circle"></use>
                </svg>
              </div>
              <div className="circle-2 w-11 h-[42px] flex-center  pb-2.5">
                <svg className=" w-9 h-9">
                  <use href="#circle"></use>
                </svg>
              </div>
            </div>
            <div className=" w-[507.75px] blg:w-[597.5px] xlarge:w-[526px] xlarge:h-[58px]  h-[46px] hidden md:flex items-center">
              <div className=" w-[52px]  blg:w-12 blg:mx-[12.25px]  h-[46px] xlarge:h-[58px] mr-[12.25px] xlarge:mx-[7px] pb-2.5 flex-center">
                <svg className="hidden xlarge:block xlarge:w-12 xlarge:h-12">
                  <use href="#big-circle"></use>
                </svg>
                <svg className=" w-9 h-9 xlarge:hidden">
                  <use href="#circle"></use>
                </svg>
              </div>
              <div className=" w-[52px]  blg:w-12 blg:mx-[12.25px]  h-[46px] xlarge:h-[58px] mr-[12.25px] xlarge:mx-[7px] pb-2.5 flex-center">
              <svg className="hidden xlarge:block xlarge:w-12 xlarge:h-12">
                  <use href="#big-circle"></use>
                </svg>
                <svg className=" w-9 h-9 xlarge:hidden">
                  <use href="#circle"></use>
                </svg>
              </div>
              <div className=" w-[52px]  blg:w-12 blg:mx-[12.25px]  h-[46px] xlarge:h-[58px] mr-[12.25px] xlarge:mx-[7px] pb-2.5 flex-center">
              <svg className="hidden xlarge:block xlarge:w-12 xlarge:h-12">
                  <use href="#big-circle"></use>
                </svg>
                <svg className=" w-9 h-9 xlarge:hidden">
                  <use href="#circle"></use>
                </svg>
              </div>
              <div className=" w-[52px]  blg:w-12 blg:mx-[12.25px]  h-[46px] xlarge:h-[58px] mr-[12.25px] xlarge:mx-[7px] pb-2.5 flex-center">
              <svg className="hidden xlarge:block xlarge:w-12 xlarge:h-12">
                  <use href="#big-circle"></use>
                </svg>
                <svg className=" w-9 h-9 xlarge:hidden">
                  <use href="#circle"></use>
                </svg>
              </div>
              <div className=" w-[52px]  blg:w-12 blg:mx-[12.25px]  h-[46px] xlarge:h-[58px] mr-[12.25px] xlarge:mx-[7px] pb-2.5 flex-center">
              <svg className="hidden xlarge:block xlarge:w-12 xlarge:h-12">
                  <use href="#big-circle"></use>
                </svg>
                <svg className=" w-9 h-9 xlarge:hidden">
                  <use href="#circle"></use>
                </svg>
              </div>
              <div className=" w-[52px]  blg:w-12 blg:mx-[12.25px]  h-[46px] xlarge:h-[58px] mr-[12.25px] xlarge:mx-[7px] pb-2.5 flex-center">
              <svg className="hidden xlarge:block xlarge:w-12 xlarge:h-12">
                  <use href="#big-circle"></use>
                </svg>
                <svg className=" w-9 h-9 xlarge:hidden">
                  <use href="#circle"></use>
                </svg>
              </div>
              <div className=" w-[52px]  blg:w-12 blg:mx-[12.25px]  h-[46px] xlarge:h-[58px] mr-[12.25px] xlarge:mx-[7px] pb-2.5 flex-center">
              <svg className="hidden xlarge:block xlarge:w-12 xlarge:h-12">
                  <use href="#big-circle"></use>
                </svg>
                <svg className=" w-9 h-9 xlarge:hidden">
                  <use href="#circle"></use>
                </svg>
              </div>
              <div className="circle-2 w-[52px] blg:w-[78px] blg:mx-1.5 h-[46px] xlarge:h-[58px] mr-1.5 flex-center  pb-2.5">
              <svg className="hidden xlarge:block xlarge:w-12 xlarge:h-12">
                  <use href="#big-circle"></use>
                </svg>
                <svg className=" w-9 h-9 xlarge:hidden">
                  <use href="#circle"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-main-part xlarge:hidden min-w-[375px] h-[510px] px-4">
        <div className=" min-w-[343px] h-[510px] bg-white ">
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-hgreen">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex flex-col items-center justify-center">
              <div className="w-full">
                <img
                  className=" object-cover w-full h-4.5"
                  src="https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Health_A24RrKF.png"
                  alt=""
                />
              </div>
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  10
                </div>
                <div className=" w-[45.34px] h-5 flex-center mr-3">
                  <span className=" text-sm font-PoppinsExtraBold text-light-black">
                    Health
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-gorange">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex-center">
              <img
                className=" w-[18px] h-[18px]"
                src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Growth_B9HMPD8.png"
                alt=""
              />
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  9
                </div>
                <div className=" w-[52.83px] h-5 flex-center mr-3">
                  <span className=" text-sm font-PoppinsExtraBold text-light-black">
                    Growth
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-fsky">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex-center">
              <img
                className=" w-[18px] h-[18px]"
                src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Family_WFV8uTn.png"
                alt=""
              />
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  8
                </div>
                <div className=" w-[49.1px] h-5 flex-center mr-3">
                  <span className=" text-sm font-PoppinsExtraBold text-light-black">
                    Family
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-pred">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex-center">
              <img
                className=" w-[18px] h-[18px]"
                src="https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Partner_uPBiGDQ.png"
                alt=""
              />
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  7
                </div>
                <div className=" w-[53.98px] h-5 flex-center mr-3">
                  <span className=" text-sm font-PoppinsExtraBold text-light-black">
                    Partner
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-cblue">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex-center">
              <img
                className=" w-[18px] h-[18px]"
                src="https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Career_YgBbaAJ.png"
                alt=""
              />
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  6
                </div>
                <div className=" w-[49.41px] h-5 flex-center mr-3">
                  <span className=" text-sm font-PoppinsExtraBold text-light-black">
                    Career
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-cgreen">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex-center">
              <img
                className=" w-[18px] h-[18px]"
                src="https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Contribution_ExyHNXn.png"
                alt=""
              />
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  5
                </div>
                <div className=" w-[91.95px] h-5 flex-center mr-3">
                  <span className=" text-sm font-PoppinsExtraBold text-light-black">
                    Contribution
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9  blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-fblue">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex-center">
              <img
                className=" w-[18px] h-[18px]"
                src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Finance_ebAyJ4a.png"
                alt=""
              />
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  4
                </div>
                <div className=" w-[65.08px] h-5 flex-center mr-3">
                  <span className=" text-sm font-PoppinsExtraBold text-light-black">
                    Finances
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-spurple">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex-center">
              <img
                className=" w-[18px] h-[18px]"
                src="https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Finance_ebAyJ4a.png"
                alt=""
              />
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  3
                </div>
                <div className=" w-[42.03px] h-5 flex-center mr-3">
                  <span className=" text-sm  font-PoppinsExtraBold text-light-black">
                    Social
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-lpink">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex-center">
              <img
                className=" w-[18px] h-[18px]"
                src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Leisure_wQmafwQ.png"
                alt=""
              />
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  2
                </div>
                <div className=" w-[51.3px] h-5 flex-center mr-3">
                  <span className=" text-sm font-PoppinsExtraBold text-light-black">
                    Leisure
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[51px] flex items-center pt-[5px]  border-l-4 border-ebrown">
            {/* left part */}
            <button className=" w-[34px] h-[46px] px-2 flex-center">
              <img
                className=" w-[18px] h-[18px]"
                src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Environment_s3aq62F.png"
                alt=""
              />
            </button>
            {/* right part */}
            <div className=" w-full h-[46px] flex items-center justify-between py-[5px] pr-[5px] pl-[9px]">
              {/* title part */}
              <div className=" flex-center">
                <div className=" flex-center w-4.5 h-4.5 mr-3  rounded-full bg-num-purple text-white text-[9px] font-InterMedium">
                  1
                </div>
                <div className=" w-[92.82px] h-5 flex-center mr-3">
                  <span className=" text-sm font-PoppinsExtraBold text-light-black">
                    Environment
                  </span>
                </div>
                <div className=" w-[24.75px] h-[15px] flex-center bg-light-white rounded-[20px]">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-main-part absolute top-[116px]  xlarge:min-w-[1128.55px]">
        <div className="  w-full h-[730px] ">
          <div className="w-full h-[73px] flex items-center pt-[5px]   group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center text-hgreen bg-lGreen rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Health_A24RrKF.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5 bg-white ">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  10
                </div>
               
                  <span className=" inline-block  h-5 mr-[15px] text-lg/5 font-PoppinsExtraBold text-light-black">
                    Health
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[73px] flex items-center pt-[5px] group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center text-gorange bg-lOrange rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Growth_B9HMPD8.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5  bg-white ">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  9
                </div>
               
                  <span className=" inline-block h-5 mr-[15px] text-lg/5 font-PoppinsExtraBold text-light-black">
                    Growth
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[73px] flex items-center pt-[5px]   group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center text-fsky bg-lSky rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Family_WFV8uTn.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5 bg-white">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  8
                </div>
               
                  <span className=" inline-block  h-5 mr-[15px] text-lg/5 font-PoppinsExtraBold text-light-black">
                    Family
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[73px] flex items-center pt-[5px]   group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center text-pred bg-lRed rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Partner_uPBiGDQ.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5 bg-white">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  7
                </div>
               
                  <span className=" inline-block  h-5 mr-[15px] text-lg/5 font-PoppinsExtraBold text-light-black">
                    Partner
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[73px] flex items-center pt-[5px]   group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center text-cblue bg-lBlue rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Career_YgBbaAJ.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5 bg-white">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  6
                </div>
               
                  <span className=" inline-block  h-5 mr-[15px] text-lg/5 font-PoppinsExtraBold text-light-black">
                    Career
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[73px] flex items-center pt-[5px]  group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center text-cgreen bg-llGreen rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Contribution_ExyHNXn.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5 bg-white">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  5
                </div>
               
                  <span className=" inline-block  h-5 mr-[15px] text-lg/5 font-PoppinsExtraBold text-light-black">
                  Contribution
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[73px] flex items-center pt-[5px]   group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center text-fblue bg-llBlue rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Finance_ebAyJ4a.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5 bg-white">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  4
                </div>
               
                  <span className=" inline-block  h-5 mr-[15px] text-lg/5 font-PoppinsExtraBold text-light-black">
                  Finances
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[73px] flex items-center pt-[5px]    group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center  bg-lGreen rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Health_A24RrKF.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5 bg-white">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  3
                </div>
               
                  <span className=" inline-block  h-5 mr-[15px] text-lg/5 font-PoppinsRegular text-light-black">
                  Social
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[73px] flex items-center pt-[5px]   group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center text-lpink bg-llpink rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Leisure_wQmafwQ.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5 bg-white">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  2
                </div>
               
                  <span className=" inline-block h-5 mr-[15px] text-lg/5 font-PoppinsExtraBold text-light-black">
                  Leisure
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[73px] flex items-center pt-[5px]    group">
            {/* left part */}
            <button className=" w-[65px] h-[68px] mr-[5px] py-[1px] px-1.5 flex flex-col items-center justify-center text-ebrown bg-lBrown rounded">  
                <img
                  className=" object-cover w-7 h-7 mb-2"
                  src="	https://hat-arootah-web-24408.s3.amazonaws.com/media/area_icons/Property_1Environment_s3aq62F.png"
                  alt=""
                />
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6.666a1.147 1.147 0 01-.886-.427L.307 2.84a1.4 1.4 0 01-.173-1.473 1.173 1.173 0 011.06-.7h5.613a1.173 1.173 0 011.06.7 1.4 1.4 0 01-.173 1.473l-2.807 3.4a1.147 1.147 0 01-.886.427z" fill="currentColor"></path></svg>
            </button>
            {/* right part */}
            <div className=" w-[1058.55px] h-[68px] flex items-center justify-between py-4 pl-5 bg-white">
              {/* title part */}
              <div className=" flex-center min-w-[150.97px] h-6">
                <div className=" flex-center w-6 h-6 mr-4  rounded-full bg-num-purple text-white text-xs font-InterMedium">
                  1
                </div>
               
                  <span className=" inline-block  h-5 mr-[15px] text-lg/5 font-PoppinsExtraBold text-light-black">
                  Environment
                  </span>
               
                <div className=" w-[34.75px] h-5 py-1 px-2 flex-center bg-light-white rounded-[20px] mr-5">
                  <span className=" font-PoppinsMedium text-xxxs text-light-black">
                    Area
                  </span>
                </div>
 
              {/* Add Habit */}
              <div className="add-new-btn hidden group-hover:block">
                  <button className=" flex items-center">
                  <svg width="16" height="16" viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.667 5.333h-4v-4a.667.667 0 00-1.333 0v4h-4a.667.667 0 000 1.333h4v4a.667.667 0 101.333 0v-4h4a.667.667 0 100-1.333z" fill="#1689CA"></path></svg>
                  <div className=" text-xs font-PoppinsSemiBold text-bluegaz">ADD HABIT</div>
                  </button>
                </div>
              </div>
              {/* circle part */}
              <div className=" w-[103px] md:w-[522.75px] blg:w-[612.5px] h-9 flex items-center">
                <div className=" flex md:hidden items-center">
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-11 h-9 flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:items-center ">
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-12 blg:mx-[12.25px] h-9 mr-[12.25px] flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9 ">
                        <use href="#circle-gray"></use>
                      </svg>
                    </div>
                  </div>
                  <div className=" w-[52px] blg:w-[78px] blg:mx-1.5 h-9  flex-center">
                    <div className=" w-9 h-9 ">
                      <svg className="w-9 h-9">
                        <use href="#circle-white"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" w-[15px] h-9 blg:-ml-2 flex items-center justify-end ">
                  <div className=" w-5 h-6 flex items-center justify-end px-2">
                    <svg className=" w-1 h-3">
                      <use href="#three-dot"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        {/* xlarge footer */}
        <div className=" w-full h-[75.12px] py-[25px] flex items-center justify-between">
          {/* left part */}
          <div className=" flex items-center gap-x-5">
            <span className=" text-bluegaz text-sm/4 font-PoppinsSemiBold">Follow us @arootahcoach</span>
            <ul className=" flex gap-x-[15px]">
              <li><a href="https://www.instagram.com/arootahcoach/" target="_blank" rel="nofollow" title="Instagram"><img src="	https://app.arootah.com/static/media/instagram.891868946062539f8261908255003a1c.svg" width="24" height="24" alt="Instagram"/></a></li>
              <li><a href="https://www.facebook.com/arootahcoach" target="_blank" rel="nofollow" title="Facebook"><img src="https://app.arootah.com/static/media/facebook.ffcc87f05a59ac299d075804150aa684.svg" width="24" height="24" alt="Facebook"/></a></li>
              <li><a href="https://twitter.com/arootahcoach" target="_blank" rel="nofollow" title="Twitter"><img src="https://app.arootah.com/static/media/twitter.367a03870e6680d2a3e6aae226b7b311.svg" width="24" height="24" alt="Twitter"/></a></li>
              <li><a href="https://www.youtube.com/channel/UCq5fhJkfKRUGmjzTvMsFU-w" target="_blank" rel="nofollow" title="Youtube"><img src="https://app.arootah.com/static/media/youtube.da2687b7bac73264a131f7f6a92aca28.svg" width="24" height="24" alt="Youtube"/></a></li>
              <li><a href="https://www.linkedin.com/company/arootahcoaching/?ref=website" target="_blank" rel="nofollow" title="LinkedIn"><img src="https://app.arootah.com/static/media/linkedin.69e317dc4fc513d2d3c29d2cdba63828.svg" width="24" height="24" alt="LinkedIn"/></a></li>
              <li><a href="https://www.tiktok.com/@arootahcoach" target="_blank" rel="nofollow" title="Tiktok"><img src="https://app.arootah.com/static/media/tiktok.627941ede324bb1eeaa9f9341b5d8349.svg" width="24" height="24" alt="Tiktok"/></a></li>
              <li><a href="https://pinterest.com/arootahcoach/" target="_blank" rel="nofollow" title="Pinterest"><img src="	https://app.arootah.com/static/media/pinterest.67544698a8b7dea8f264d745680c1e00.svg" width="24" height="24" alt="Pinterest"/></a></li>            
            </ul>
          </div>
          {/* Right part */}
          <div>
            <p className="text-bluegaz text-xs/4 font-PoppinsRegular">© Arootah Visit arootah.com</p>
          </div>
        </div>
      </section>

      <section className="menu-footer-part xlarge:hidden px-4 mt-[90px]">
        <div className=" flex items-center justify-end">
          <button className="arrow-up-btn rounded flex items-center justify-center w-8 h-8">
            <svg className=" w-6 h-6 text-white">
              <use href="#arrow-up"></use>
            </svg>
          </button>
        </div>
      </section>
      <p className=" font-PoppinsMedium text-xs text-center text-bluegaz xlarge:hidden ">
        © Arootah Visit arootah.com
      </p>
      <div className=" ml-5 mt-3 md:-mt-4 xlarge:hidden">
        <div className="suport-chat-circle w-12 h-12 rounded-full flex items-center justify-center">
          <svg className="w-[22.45px] h-[24.77px]">
            <use href="#suport-chat"></use>
          </svg>
        </div>
      </div>

      {/* rate part */}
      <div className=" rate-part">
        <div className=" w-[260px] h-10">
          <button className=" w-full h-6 mb-4 group">
            <span className=" flex items-start w-full h-6">
              <span className=" inline-block  w-[236px] h-[21px] truncate flex-1 not-italic font-RobotoBold  text-lwhite">
                How would you rate your experience with this tool?
              </span>
              <svg className=" w-6 h-6 rotate-180 text-lwhite transition-all delay-75 group-hover:text-Gray">
                <use href="#mini-arrow-up"></use>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
