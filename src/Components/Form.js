import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQl/Mutation";
import { useMutation } from "@apollo/client";
import "../Styles/App.css";

function Form() {
  
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [applyUrl, setUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [createJob, { error }] = useMutation(CREATE_USER_MUTATION);

  const addJob = () => {
    createJob({ variables: {
        title: title,
        locationNames: location,
        applyUrl: applyUrl,
        userEmail: userEmail,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="locationNames"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="applyUrl"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="userEmail"
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
      />
      <button onClick={addJob}> Create Job</button>
    </div>
  );
}

export default Form;