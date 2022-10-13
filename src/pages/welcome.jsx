import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { setUserName } from "./../features/user/userSlice";
function Welcome() {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const navigate = useNavigate();
  const onChangeUserName =  (ev) => {
    setName(ev.target.value)
  }
  const onSubmitUserName = (ev) => {
    ev.preventDefault();
    dispatch(setUserName(name));
    navigate("/");
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form onSubmit={onSubmitUserName} style={{ maxWidth: "70%", minWidth: "70%" }}>
        <FormGroup>
          <Label for="name">Please tell us your name</Label>
          <Input id="name" type="text" onChange={onChangeUserName} />
        </FormGroup>
        <Button type="submit" style={{ width: "100%" }}>Enter</Button>
      </Form>
    </Container>
  );
}

export default Welcome;
