import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = ` https://my-json-server.typicode.com/ssonggary/react-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="pro-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="pro-tit">{product?.title}</div>
          <div className="pro-pric">₩ {product?.price}</div>
          <div className="md-pic">
            {product?.choice == true ? "Conscious choice" : ""}
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.map((size) => (
                <Dropdown.Item>{size}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div className="d-grid gap-2 add_btn">
            <Button variant="dark" size="lg">
              추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
