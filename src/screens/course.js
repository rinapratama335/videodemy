import React, { useState } from "react";

import Course1 from "../ui/illustrator.jpg";
import Course2 from "../ui/course1.jpg";

function CoursePage() {
  const [course, setCourse] = useState({
    ID: 1,
    title:
      "Learning How to Create Beautiful Scenes in Illustrator in 60 minutes",
    about:
      "Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.",
    tutor: {
      ID: 1,
      name: "Rina Pratama",
      username: "@rinapratama",
      dp: "http://placeimg.com/100/100/people?tutor-" + 1,
    },
    duration: "120 min",
    poster: Course2,

    videos: [
      {
        ID: 1,
        title: "Introduction",
        duration: "03 mins 24 secs",
      },
      {
        ID: 2,
        title: "Getting Started",
        duration: "09 mins 55 secs",
      },
      {
        ID: 3,
        title: "The Illustration",
        duration: "62 mins 48 secs",
      },
    ],
  });

  var courseVideos = [];
  for (let i = 0; i < course.videos.length; i++) {
    courseVideos.push(
      <a href="#" key={"course-video-" + i} className="noul aic rel flex">
        <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
        <div className="meta rel">
          <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
          <h1 className="s13 dur fontn c777">{course.videos[i].duration}</h1>
        </div>
      </a>
    );
  }

  return (
    <div className="course-page rel flex">
      <div className="course-info rel">
        <div className="tutor rel aic flex">
          <div className="pic">
            <img src={course.tutor.dp} className="bl" />
          </div>

          <div className="meta rel">
            <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
            <h2 className="s13 uname fontn c777">Course Tutor</h2>
          </div>
        </div>

        <div className="course-meta">
          <h2 className="s24 title fontb c333">{course.title}</h2>
          <p
            className="about s18 fontn c777"
            dangerouslySetInnerHTML={{ __html: course.about }}
          />

          <div className="section section-b rel">
            <h2 className="title s24 fontb">
              Course <span className="fontn">Achievements</span>
            </h2>

            <div className="course-stats flex aic">
              <div className="stats-box flex">
                <div className="ico ico-bullhorn s24 lnr lnr-bullhorn" />
                <h2 className="val s15 c333 fontb">1800</h2>
                <h2 className="lbl s13 c777">points</h2>
              </div>

              <div className="stats-box flex aic jic">
                <div className="ico ico-hand s24 lnr lnr-hand" />
                <h2 className="val s15 c333 fontb">45.3%</h2>
                <h2 className="lbl s13 c777">complete</h2>
              </div>

              <div className="stats-box flex aic jic">
                <div className="ico ico-hand s24 lnr lnr-hand" />
                <h2 className="val s15 c333 fontb">+26</h2>
                <h2 className="lbl s13 c777">level</h2>
              </div>
            </div>
          </div>

          <div className="section section-b rel">
            <h2 className="title s24 fontb">
              Course <span className="fontn">Details</span>
            </h2>

            <div className="course-videos flex aic">{courseVideos}</div>
          </div>
        </div>
      </div>

      <div className="course-preview rel">
        <div className="player rel">
          <video poster={course.poster} />
          <div className="ctrls abs aic flex">
            <button className="lnr lnr-camera-video pp s24" />
            <div className="timer cfff rel fontb s15">02:54 / 09:55</div>
            <div className="slider rel">
              <div className="progress rel">
                <div className="bar rel">
                  <div className="knob abs" />
                </div>
              </div>
            </div>
            <button className="lnr lnr-volume-high vol s24" />
            <button className="lnr lnr-screen fs s24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
