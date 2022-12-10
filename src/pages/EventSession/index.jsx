import React, { Fragment, useEffect, useState } from "react";
import dayjs from "dayjs";

import { useSelector, useDispatch } from "react-redux";

import { getListData, addData, editData, deleteData } from "../../store/actions/index.js";
import {
  URL,
  lessonType,
  booleanRequirement,
  sessionDefault,
  lessonDefault,
} from "../../constants/index.js";
import { ValidateForm } from "../../helpers/index.js";

import Modal from "react-bootstrap/Modal";

import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import DatePicker from "../../components/DatePicker";
import Duration from "../../components/Duration";
import ErrorMessage from "../../components/ErrorMessage/index.jsx";
import DeleteOverlay from "../../components/DeleteOverlay/index.jsx";

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
  const dispatch = useDispatch();

  const { loading, listData } = useSelector((state) => state);

  const [showAddModal, setShowAddModal] = useState(false);
  const [dataForm, setDataForm] = useState({});
  const [sessionId, setSessionId] = useState(null);
  const [error, setError] = useState(null);
  const [optionActive, setOptionActive] = useState({});

  useEffect(() => {
    dispatch(getListData(URL));
  }, []);

  const handleInput = (e) => {
    const { value, name } = e.target;

    const cloneContent = JSON.parse(JSON.stringify(dataForm));

    cloneContent[name] = value;

    setDataForm(cloneContent);
  };

  const handleInputDuration = (e, name) => {
    const { value, name: durationName } = e.target;

    const cloneContent = JSON.parse(JSON.stringify(dataForm));

    cloneContent[name][durationName] = value;

    setDataForm(cloneContent);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(null);
    setDataForm({});
    setError(null);
  };

  const AddAction = () => {
    const validate = ValidateForm(dataForm);

    if (validate) {
      setError(validate);
    } else {
      dispatch(addData(URL, dataForm));

      handleCloseAddModal();
    }
  };

  const EditAction = () => {
    const validate = ValidateForm(dataForm);

    if (validate) {
      setError(validate);
    } else {
      if (showAddModal?.type === "session") {
        dispatch(
          editData(URL, dataForm?.id, dataForm)
        );
      } else {
        const findItem = listData.find((el) => el.id === sessionId);
        const cloneContent = JSON.parse(JSON.stringify(findItem));

        cloneContent.lessonMaterials.push(dataForm);

        dispatch(
          editData(URL, sessionId, cloneContent)
        );
      }

      handleCloseAddModal();
    }
  };

  const handleOpenAddSession = () => {
    setDataForm(sessionDefault);
    setShowAddModal({
      type: "session",
      action: "add",
    });
  };

  const handleOpenAddLesson = (id) => {
    setSessionId(id);
    setDataForm(lessonDefault);
    setShowAddModal({
      type: "lesson",
      action: "add",
    });
  };

  const handleOpenEdit = (id) => {
    const findItem = listData.find((el) => el.id === id);

    setDataForm(findItem);
    setShowAddModal({
      type: "session",
      action: "edit",
    });
  };

  const handleOpenOptionActive = (type, id) => {
    if(type === optionActive.type && id === optionActive.id) {
      setOptionActive({})
      setSessionId(null)
    } else {
      setOptionActive({
        type,
        id
      });
    }
  }

  const handleDelete = (type, id) => {
    if(type === 'session') {
      dispatch(
        deleteData(URL, id)
      )
    } else {
      const findItem = listData.find((el) => el.id === sessionId);
      const cloneContent = JSON.parse(JSON.stringify(findItem));

      cloneContent.lessonMaterials.splice(id, 1);

      dispatch(
        editData(URL, sessionId, cloneContent)
      );
    }
  }

  return (
    <div className="event-session">
      <div className="event-session-title-wrap">
        <div className="event-session-title-wrap-text">
          <h1>Belajar dan praktek cinematic videography</h1>
          <p>Last edited 18 October 2021 | 13:23</p>
        </div>
        <Button variant="secondary" width={130} height={44} position="right">
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
          {!loading ? (
            <>
              {(listData || []).map((item, index) => {
                const { id, title, lessonMaterials } = item || {};

                return (
                  <div key={index} className="event-session-container">
                    {(optionActive.type === "session" && optionActive.id === id) && (<DeleteOverlay onClick={() => handleDelete('session', id)} />)}
                    <div className="event-session-container-title">
                      <div className="left-wrap">
                        <Dots type="vertical" />
                        <p className="session-title">{title}</p>
                        <img
                          onClick={() => handleOpenEdit(id)}
                          src={Pencil}
                          alt="pencil"
                        />
                      </div>
                      <div onClick={() => handleOpenOptionActive('session', id)} className="event-session-option">
                        <Dots type="horizontal" />
                      </div>
                    </div>
                    {(lessonMaterials || []).map((lesson, indexLesson) => {
                      const {
                        title: titleLesson,
                        isRequired,
                        isPreviewable,
                        type,
                        date,
                        duration,
                      } = lesson || {};
                      const { hour, minute, second } = duration || {};

                      return (
                        <Fragment key={indexLesson}>
                          {(optionActive.type === "lesson" && optionActive.id === indexLesson) && <DeleteOverlay onClick={() => handleDelete('lesson', indexLesson)} />}
                          <div className="event-session-container-content">
                            <div className="content-left">
                              <Dots type="vertical" />
                              <div className="content-video">
                                {type === "video" ? (
                                  <img src={Video} alt="video" />
                                ) : (
                                  <img src={onsite} alt="onsite" />
                                )}
                              </div>
                              <p className="video-title">{titleLesson}</p>
                              {isRequired && (
                                <div className="session-status">
                                  <p>Required</p>
                                </div>
                              )}
                              {type === "video" && (
                                <>
                                  <SingleDot />
                                  <p className="video-previewable">
                                    Previewable
                                  </p>
                                </>
                              )}
                            </div>
                            <div className="content-right">
                              <div className="content-clock">
                                <img src={TimeCircle} alt="clock" />
                              </div>
                              <p className="content-right-text content-date">
                                {dayjs(date).format("DD MMMM YYYY, HH:mm")}
                              </p>
                              <div className="single-dot-wrap">
                                <SingleDot />
                              </div>
                              <div className="content-clock">
                                <img src={TimeCircle} alt="clock" />
                              </div>
                              <p className="content-right-text content-date">
                                {hour && `${hour}:`}
                                {minute ? `${minute}:` : "00:"}
                                {second ? `${second}` : "00:"}{" "}
                                {hour ? "Jam" : minute ? "Min" : "Detik"}
                              </p>
                              <div className="single-dot-wrap">
                                <SingleDot />
                              </div>
                              <div className="content-download">
                                <img src={Download} alt="download" />
                              </div>
                              <p className="content-right-text">Downloadable</p>
                              <div onClick={() => {
                                setSessionId(id)
                                handleOpenOptionActive('lesson', indexLesson)
                              }}  className="content-right-option">
                                <Dots type="vertical-one-line" />
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                    <div className="event-session-container-add-lesson">
                      <Button
                        onClick={() => handleOpenAddLesson(id)}
                        variant="primary"
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
                );
              })}
              <div className="event-session-add-session">
                <Button
                  onClick={() => handleOpenAddSession()}
                  variant="primary"
                  width={161}
                  height={48}
                  position="right"
                >
                  <div className="add-session-button">
                    <div className="plus-icon">
                      <img src={Plus} alt="plus" />
                    </div>
                    Add Session
                  </div>
                </Button>
              </div>
            </>
          ) : (
            <h3>Loading the data ...</h3>
          )}
        </div>
      </div>
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {showAddModal?.action === "add" ? "Add " : "Edit "}
            {showAddModal?.type === "session" ? "Session" : "Lesson Material"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <ErrorMessage message={error.errorField} />}
          {showAddModal?.type === "session" && (
            <div className="input-row">
              <div className="input-item single">
                <Input
                  title="Session Title"
                  name="title"
                  value={dataForm?.title || ""}
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
          )}
          {showAddModal?.type === "lesson" && (
            <>
              <div className="input-row">
                <div className="input-item">
                  <Input
                    title="Lesson Title"
                    name="title"
                    value={dataForm?.title || ""}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="input-item">
                  <Dropdown
                    title="Lesson Type"
                    name="type"
                    value={dataForm?.type || ""}
                    onChange={(e) => handleInput(e)}
                    options={lessonType}
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-item">
                  <Dropdown
                    title="Is it Required?"
                    name="isRequired"
                    value={dataForm?.isRequired || ""}
                    onChange={(e) => handleInput(e)}
                    options={booleanRequirement}
                  />
                </div>
                <div className="input-item">
                  <Dropdown
                    title="Is it Downloadable?"
                    name="isDownloadable"
                    value={dataForm?.isDownloadable || ""}
                    onChange={(e) => handleInput(e)}
                    options={booleanRequirement}
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-item">
                  <DatePicker
                    title="Date"
                    name="date"
                    value={dataForm?.date || ""}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="input-item">
                  <Duration
                    title="Duration"
                    name="duration"
                    value={dataForm?.duration || ""}
                    onChange={(e, name) => handleInputDuration(e, name)}
                  />
                </div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            width={100}
            height={40}
            variant="secondary"
            onClick={() => handleCloseAddModal()}
          >
            Close
          </Button>
          <Button
            width={100}
            height={40}
            type="submit"
            variant="primary"
            onClick={() =>
              showAddModal?.action === "add" && showAddModal?.type === "session"
                ? AddAction()
                : EditAction()
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventSession;
