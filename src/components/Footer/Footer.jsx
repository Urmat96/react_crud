import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRipple
  } from 'mdb-react-ui-kit';

const Footer = () => {
    return(
    <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#1868c9' }}>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          CRUD.com
        </a>
      </div>
    </MDBFooter>
    )
}

export default Footer