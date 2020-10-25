import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">NY DAILY NEWS</h5>
            <p>
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Letraset sheets</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">readable content</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">There are many variations</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">passages of Lorem Ipsum</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.nydaily.com"> nydaily.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;