import React from "react";
import { Card } from "../../styledComponents/Card";
import { Input } from "../../styledComponents/Input";
import { Label } from "../../styledComponents/Label";
import { Section } from "../../styledComponents/Section";
import { H1 } from "../../styledComponents/H1";
import { Button } from "../../styledComponents/Button";
import { SpanError } from "../../styledComponents/SpanError";
import { Col, Container, Row } from "../../GlobalStyles";
import { Form, FormGroup } from "../../styledComponents/Form";
import firebase from "firebase";
import { useRecoilState } from "recoil";
import { isAuthenticated as isAuthenticatedAtom } from "../../recoil/auth/atoms";
function Login() {

  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [error, setError] = React.useState(null);

  const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedAtom);

  const onPressLogin = async () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        setIsAuthenticated(true);
      }).catch(res => {
        setIsAuthenticated(false);
        setError(res.message);
        console.log(res.message);
      })
  }

  return (
    <Section bgGrandient>
      <Container>
      <Section>
        <Row>
          <Col lg="12" md="12" sm="12">
            <Card bg="white" padding="40px">
              <Form>
                <H1 textAlign="center">Iniciar Sesión</H1>
                <FormGroup>
                  <Label>Usuario</Label>
                  <Input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                  <Label>Contraseña</Label>
                  <Input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} />
                </FormGroup>
                {error &&
                <SpanError error>{error}</SpanError>
                }
                
                <Button type="button" onClick={()=>{onPressLogin()}} >Iniciar</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Section>
    </Container>
    </Section>
  );
}
export default Login;
