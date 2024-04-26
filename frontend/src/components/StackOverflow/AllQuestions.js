import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./css/AllQuestions.css";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { stringAvatar } from "../../utils/Avatar";

function AllQuestions({ data }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // let tags = JSON.parse(data?.tags[0]);
  // // console.log();
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>{data?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          {/* <Link to={`/question?q=${data?._id}`}>{data.title}</Link> */}
          <Link to="/question">npm - EPERM: operation not permitted on Windows</Link>
                <div style={{
                    width:"90%"
                }}>
                <div><h3><b>Answer</b></h3>
                  <p>Running this command was my mistake.</p>
                <p><b>npm config set prefix /usr/local</b></p>
                <p>Path /usr/local is not for windows. This command changed the prefix variable at<b>'C:\Program Files (x86)\Git\local'</b></p>
                <p>To access and make a change to this directory I need to run my cmd as administrator.</p>
                <p>1. Run cmd as administrator</p>
                <p>2. Run <b><i>npm config edit</i> </b>(You will get notepad editor)</p>
                <p>3. Change prefix variable to <b>C:\Users\User Name\AppData\Roaming\npm</b></p>
                <p></p>
                <p>Then <b>npm start</b> works in a normal console.</p>
                </div>
                </div>
          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>{ReactHtmlParser(truncate(data.body, 200))}</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {/* {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))} */}
          </div>
          <div className="author">
            <small>{data.create_at}</small>
            <div className="auth-details">
              <Avatar {...stringAvatar(data?.user?.displayName)} />
              <p>
                {data?.user?.displayName
                  ? data?.user?.displayName
                  : "Natalie lee"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
