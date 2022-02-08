import React from "react";
import { Input } from "../../styledComponents/Input";
import { Card } from "../../styledComponents/Card";
import { Label } from "../../styledComponents/Label";
import { Button } from "../../styledComponents/Button";
import { OptionButton } from "../../styledComponents/OptionButton";
import { ImageContainer } from "../../styledComponents/ImageContainer";
import { SpanError } from "../../styledComponents/SpanError";
import { Table, Th, Td } from "../../styledComponents/Table";
import { Form, FormGroup } from "../../styledComponents/Form";
import { Container, Row, Col } from "../../GlobalStyles";
import firebase from "firebase";
import "firebase/storage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { ContainerButton } from "../../styledComponents/ContainerButton";

function Productos() {
  const [nombre, setNombre] = React.useState(null);
  const [productos, setProductos] = React.useState(null);
  const [tmpUploadedImage, setTmpUploadedImage] = React.useState(null);
  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcion: "",
      precio: "",
      imagen: "",
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required(),
      descripcion: Yup.string().required(),
      precio: Yup.number()
        .required()
        .positive()
        .integer()
        .min(2, "Se necesitan mínimo 2 caracteres"),
      imagen: Yup.string().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      postMethod(values);
    },
  });

  const postMethod = (values) => {
    const db = firebase.firestore();
    try {
      db.collection("productos").add(values);
      getMethod();
      formik.handleReset();
    } catch (error) {
      console.log(error);
    }
  };

  const getMethod = async () => {
    const db = firebase.firestore();

    try {
      const data = await db.collection("productos").get();
      const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(arrayData);
      console.log(arrayData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMethod = async (id) => {
    const db = firebase.firestore();

    try {
      const data = await db.collection("productos").doc(id).delete();
      getMethod();
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeFile = (e) => {
    const file = e.target.files[0];
    uploadImage(file);
  };

  const uploadImage = (imageBlob) => {
    let storage = firebase.storage();
    let timestamp = new Date().getTime();
    setTmpUploadedImage("productos/" + timestamp);
    const imageRef = storage
      .ref()
      .child(`productos/` + timestamp + `/`)
      .put(imageBlob)
      .then((response) => {
        return response.ref.getDownloadURL();
      })
      .then((response) => {
        console.log(response);
        formik.setFieldValue("imagen", response, false);
      });
  };

  const deletedUploadedImage = (imageBlob) => {
    let storage = firebase.storage();
    const imageRef = storage
      .ref()
      .child(tmpUploadedImage)
      .delete()
      .then((response) => {
        formik.setFieldValue("imagen", "", false);
        setTmpUploadedImage(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getMethod();
  }, []);

  return (
    <>
      <Container>
        <Row mt="20px">
          <Col lg="7" md="12" sm="12">
            <Card>
              <Table>
                <thead>
                  <tr>
                    <Th>Foto</Th>
                    <Th>Producto</Th>
                    <Th>Precio</Th>
                    <Th>Opciones</Th>
                  </tr>
                </thead>
                <tbody>
                  {productos &&
                    productos.map((data, index) => {
                      return (
                        <tr key={index}>
                          <Td>
                            <ImageContainer
                              width="80px"
                              margin="left"
                              borderRadius="10px"
                              src={data.imagen}
                            />
                          </Td>
                          <Td>{data.nombre}</Td>
                          <Td>{data.precio}</Td>
                          <Td>
                            <ContainerButton>
                              <OptionButton success>
                                <BsPencilSquare />
                              </OptionButton>
                              <OptionButton
                                danger
                                onClick={() => deleteMethod(data.id)}
                              >
                                <BsFillTrashFill />
                              </OptionButton>
                            </ContainerButton>
                          </Td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col lg="5" md="12" sm="12">
            <Card>
              <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                  <Label>Nombre</Label>
                  <Input
                    type="text"
                    name="nombre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nombre || ""}
                    placeholder="Nombre"
                  />
                  {formik.errors.nombre && formik.touched.nombre && (
                    <SpanError error>{formik.errors.nombre}</SpanError>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>Descripcion</Label>
                  <Input
                    type="text"
                    name="descripcion"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.descripcion || ""}
                    placeholder="Descripcion"
                  />
                  {formik.errors.descripcion && formik.touched.descripcion && (
                    <SpanError error>{formik.errors.descripcion}</SpanError>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>Precio</Label>
                  <Input
                    type="number"
                    name="precio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.precio || ""}
                    placeholder="Precio"
                  />
                  {formik.errors.precio && formik.touched.precio && (
                    <SpanError error>{formik.errors.precio}</SpanError>
                  )}
                </FormGroup>

                <FormGroup>
                  {formik.values.imagen ? (
                    <>
                      <ImageContainer src={formik.values.imagen} />
                      <Button
                        type="button"
                        width="50%"
                        mt="-20px"
                        onClick={() => {
                          deletedUploadedImage();
                        }}
                      >
                        Borrar
                      </Button>
                    </>
                  ) : (
                    <>
                      <Label>Imagen</Label>
                      <Input
                        type="file"
                        onChange={(e) => {
                          onChangeFile(e);
                        }}
                      />
                    </>
                  )}
                  {formik.errors.imagen && formik.touched.imagen && (
                    <SpanError error>{formik.errors.imagen}</SpanError>
                  )}
                </FormGroup>
                <Button type="submit">Agregar</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Productos;
