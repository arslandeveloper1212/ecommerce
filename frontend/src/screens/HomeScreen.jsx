import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Row, Col, Container } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import "./HomeScreen.css"
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Handler for category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Handler for showing all products
  const handleShowAll = () => {
    setSelectedCategory(""); // Reset to show all products
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <Container fluid>
    <div className="d-flex">
    <div className="col-md-3 col-lg-3 col-12">
      <div className="row">
        <div className="col-12 border my-3 py-2">
          Category
          <hr />
          <div className="sub-category d-flex flex-column">
           
            <span onClick={() => handleCategoryClick("AirPods")}>AirPods</span>
            <br />
            <span onClick={() => handleCategoryClick("Mouse")}>Mouse</span>
            <br />
            <span onClick={() => handleCategoryClick("Mobile")}>Mobile</span>
            <br />
            <span onClick={() => handleCategoryClick("Camera")}>Camera</span>
            <br />
            <span onClick={() => handleCategoryClick("PlayStation")}>PlayStation</span>
            <br />
            <span onClick={handleShowAll}>Show All</span> {/* Button to show all */}
           
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-9 col-lg-9 col-12">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  </div>
    </Container>
   
  );
};

export default HomeScreen;
