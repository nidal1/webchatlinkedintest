import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { setMessage, setMessages } from "../features/messages/messagesSlice";
import OtherMessage from "../components/messages/other";
import MeMessage from "../components/messages/me";

function chat() {
  const messages = useSelector((state) => state.messages.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [msgInput, setMsgInput] = useState("");
  const [currentPage, setCurrentPagination] = useState(0);
  const [nextPage, setNextPagination] = useState(24);
  const makeMsgUI = () => {
    return messages.map((el, i) => {
      if (el.userName !== user) {
        return <OtherMessage key={i} userName={el.userName} msg={el.msg} />;
      }
      return <MeMessage key={i} userName={el.userName} msg={el.msg} />;
    });
  };

  const alwaysScrollToBottom = () => {
    document.querySelector("#messagesWrapper").scrollTop =
      document.querySelector("#messagesWrapper").scrollHeight;
  };

  useEffect(() => {
    let prevMsgs = localStorage.getItem("messages");
    if (prevMsgs && prevMsgs.length) {
      prevMsgs = JSON.parse(prevMsgs);
      dispatch(setMessages(prevMsgs));
    }
  }, []);

  useEffect(() => {
    alwaysScrollToBottom();
    return () => {
      alwaysScrollToBottom();
    };
  });


  window.addEventListener("storage", function() {
    let prevMsgs = localStorage.getItem("messages");
    if (prevMsgs && prevMsgs.length) {
      console.log(prevMsgs)
      prevMsgs = JSON.parse(prevMsgs);
      dispatch(setMessages(prevMsgs));
    }
  });

  const onChangeMsg = (ev) => {
    setMsgInput(ev.target.value);
  };

  const onSendMsg = (ev) => {
    ev.preventDefault();

    dispatch(setMessage({
      userName: user,
      msg: msgInput,
    }))
  };

  const onScrollToTheTop = (ev) => {
    if (ev.scrollTop === 0 && messages?.length > nextPage) {
      setNextPagination(nextPage + 25);
      setCurrentPagination(currentPage + 25);
    }
  };

  return (
    <div style={{ display: "flex", maxHeight: "100vh", height: "100vh" }}>
      <aside
        style={{
          flex: 0.45,
          border: "1px solid",
          maxHeight: "100%",
          overflowY: "auto",
        }}
      >
        <h3 style={{ borderBottom: "1px solid" }}>Chat</h3>
      </aside>
      <main
        style={{
          flex: 1,
          maxHeight: "100%",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ flex: 1, overflowY: "auto", scrollBehavior: "smooth" }}
          id="messagesWrapper"
          onScroll={onScrollToTheTop}
        >
          {makeMsgUI()}
        </div>
        <Form onSubmit={onSendMsg}>
          <FormGroup
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              borderTop: "1px solid",
              paddingTop: "10px",
            }}
          >
            <Input
              id="name"
              type="text"
              value={msgInput}
              onChange={onChangeMsg}
            />
            <Button type="submit">Enter</Button>
          </FormGroup>
        </Form>
      </main>
    </div>
  );
}

export default chat;
