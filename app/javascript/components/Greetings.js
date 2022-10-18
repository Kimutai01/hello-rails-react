import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/greetingSlice";
import axios from "axios";

const Greetings = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);
  async function fetchMessage() {
    await axios.get("api/v1/messages").then((response) => {
      dispatch(getMessage(response.data.greeting));
    });
  }
  useEffect(() => {
    fetchMessage();
  }, []);
  return (
    <>
      <p>{message}</p>
      <button onClick={() => fetchMessage()}>Generate new message</button>
    </>
  );
};

export default Greetings;
