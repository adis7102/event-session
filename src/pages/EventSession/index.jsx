import React from "react";

import Pencil from "../../assets/icon-images/pencil.png";
import Plus from "../../assets/icon-images/plus.png";
import Union from "../../assets/icon-images/union.png";
import Download from "../../assets/icon-images/Download.png";
import onsite from "../../assets/icon-images/onsite-info-32px.png";
import TimeCircle from "../../assets/icon-images/TimeCircle.png";
import Video from "../../assets/icon-images/video-outline-32px.png";

import Dots from "../../icons/Dots";
import SingleDot from "../../icons/SingleDot";

import Button from "../../components/Button";

import "./styles.scss";

const EventSession = () => {
  const addLesson = () => {};

  return (
    <div className="event-session">
      <div className="event-session-title-wrap">
        <div className="event-session-title-wrap-text">
          <h1>Belajar dan praktek cinematic videography</h1>
          <p>Last edited 18 October 2021 | 13:23</p>
        </div>
        <Button onClick={addLesson} type="secondary" width={130} height={44} position="right">
          <div className="preview-button">
            <img src={Union} alt="Union" />
            Preview
          </div>
        </Button>
      </div>
      <div className="event-session-tab">
        <div className="event-session-tab-header">
          <div className="event-session-tab-header-item">
            <p>Curricullum</p>
            <div className="header-active-line" />
          </div>
        </div>
        <div className="event-session-tab-body">
          <div className="event-schedule-wrap">
            Event Schedule: 24 Oktober 2021, 16:30
          </div>
          <div className="event-session-container">
            <div className="event-session-container-title">
              <div className="left-wrap">
                <Dots type="vertical" />
                <p className="session-title">Session 1</p>
                <img src={Pencil} alt="pencil" />
              </div>
              <div className="event-session-option">
                <Dots type="horizontal" />
              </div>
            </div>
            <div className="event-session-container-content">
              <div className="content-left">
                <Dots type="vertical" />
                <div className="content-video">
                  <img src={Video} alt="video" />
                </div>
                <p className="video-title">Judul Video</p>
                <div className="session-status">
                  <p>Required</p>
                </div>
                <SingleDot />
                <p className="video-previewable">Previewable</p>
              </div>
              <div className="content-right">
                <div className="content-clock">
                  <img src={TimeCircle} alt="clock" />
                </div>
                <p className="content-right-text content-date">
                  24 Oktober 2021, 16:30
                </p>
                <div className="single-dot-wrap">
                  <SingleDot />
                </div>
                <div className="content-clock">
                  <img src={TimeCircle} alt="clock" />
                </div>
                <p className="content-right-text">06:30 Min</p>
                <div className="single-dot-wrap">
                  <SingleDot />
                </div>
                <div className="content-download">
                  <img src={Download} alt="download" />
                </div>
                <p className="content-right-text">Downloadable</p>
                <div className="content-right-option">
                  <Dots type="vertical-one-line" />
                </div>
              </div>
            </div>
            <div className="event-session-container-add-lesson">
              <Button
                onClick={addLesson}
                type="primary"
                width={33}
                height={31.57}
              >
                <div className="plus-icon">
                  <img src={Plus} alt="plus" />
                </div>
              </Button>
              <p>Add Lesson Material</p>
            </div>
          </div>
        </div>
      </div>
      <div className="event-session-add-session">
        <Button onClick={addLesson} type="primary" width={161} height={48} position="right">
          <div className="add-session-button">
            <div className="plus-icon">
              <img src={Plus} alt="plus" />
            </div>
            Add Session
          </div>
        </Button>
      </div>
    </div>
  );
};

export default EventSession;
