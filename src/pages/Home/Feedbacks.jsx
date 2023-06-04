import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const Feedbacks = () => {
  const clients = [
    {
      name: "Emily",
      comment:
        "My kids absolutely love the educational toys from your website! They are learning while having fun.",
      photoURL:
        "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82MjVjN2U2NmFlOGEwYjFjMWExMjI2YjljNGI0OTFmOT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.v7t4aCvW46UOL4S1tvh4VkSsb9LJIHQ5pf2xQMPlnp8",
    },
    {
      name: "John",
      comment:
        "I'm impressed with the quality and educational value of the toys I purchased. Highly recommended!",
      photoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZecrUDghuIi1Dz8qkzjjAeiZY2uXmLfASA&usqp=CAU",
    },
    {
      name: "Sarah",
      comment:
        "The educational toys I bought for my classroom have been a hit with the students. Thank you!",
      photoURL:
        "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82MjVjN2U2NmFlOGEwYjFjMWExMjI2YjljNGI0OTFmOT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.v7t4aCvW46UOL4S1tvh4VkSsb9LJIHQ5pf2xQMPlnp8",
    },
    {
      name: "Michael",
      comment:
        "As a parent, I appreciate the focus on educational toys. My child is learning and having a great time!",
      photoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSS6x4VCXCqlqSd-1E_fdjl_SseV70wqqEA&usqp=CAU",
    },
    {
      name: "Lisa",
      comment:
        "The educational toys from your website have made learning fun for my children. Thank you for the great selection!",
      photoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1HMRHMOLHS_OhVihk9dF1O3uMS6Jj-qfCA&usqp=CAU",
    },
  ];

  return (
    <section>
      <div className="my-container lg:grid grid-cols-12 gap-5 satisfied-people overflow-hidden">
        <div
          className="col-span-4 flex justify-center items-center text-center p-5"
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
        >
          <h2 className="my-title text-5xl ">
            Satisfied People from{" "}
            <span className="font-mono text-red-300">Toyland Toyshop</span>
          </h2>
        </div>
        <div
          className="col-span-8"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {clients.map((client) => {
              return (
                <SwiperSlide key={client.name}>
                  <div className="shadow shadow-slate-500 mb-12 mt-5 rounded p-1 sm:p-5 text-center">
                    <img
                      className="h-20 w-20 mx-auto rounded-full"
                      src={client.photoURL}
                      alt=""
                    />
                    <div className="p-1 sm:p-5 min-h-[200px] md:min-h-[120px]">
                      <h2 className="my-title">{client.name}</h2>
                      <p>"{client.comment}"</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
