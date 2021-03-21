import React from 'react';
import { Card, CardHeader, CardBody, Row, Col, InputGroup, Button, Input } from 'reactstrap';

const Widget = (props) => {
  return (
    <div>
      <Card className="mb-4">
        <CardHeader tag="h5">Search</CardHeader>
        <CardBody>
          <InputGroup>
            <Input placeHolder="Search for..." />
            <Button addonType="prepend">Go!</Button>
          </InputGroup>
        </CardBody>
      </Card>
      <Card className="my-4">
        <CardHeader tag="h5">Categories</CardHeader>
        <CardBody>
          <Row>
            <Col xs="6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/">Web Design</a>
                </li>
                <li>
                  <a href="/">HTML</a>
                </li>
                <li>
                  <a href="/">Freebies</a>
                </li>
              </ul>
            </Col>
            <Col xs="6">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/">JavaScript</a>
                </li>
                <li>
                  <a href="/">CSS</a>
                </li>
                <li>
                  <a href="/">Tutorials</a>
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div class="card my-4">
        <h5 class="card-header">Categories</h5>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/">Web Design</a>
                </li>
                <li>
                  <a href="/">HTML</a>
                </li>
                <li>
                  <a href="/">Freebies</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="/">JavaScript</a>
                </li>
                <li>
                  <a href="/">CSS</a>
                </li>
                <li>
                  <a href="/">Tutorials</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="card my-4">
        <h5 class="card-header">Side Widget</h5>
        <div class="card-body">
          You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
      </div> */}
      <Card className="my-4">
        <CardHeader tag="h5">Side Widget</CardHeader>
        <CardBody>You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!</CardBody>
      </Card>
    </div>
  );
};

export default Widget;