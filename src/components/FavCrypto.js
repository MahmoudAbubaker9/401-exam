import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import FavCard from './FavCard'

class FavCrypto extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      FavCrypto : []
    }
  }

  componentDidMount = ()=> {
    const {user} = this.props.auth0
    axios.get(`${process.env.REACT_APP_URL}/getFav/${user.email}`)
    .then(result =>{
      this.setState({
        FavCrypto:result.data
      })

    })
    .catch(error => {
      console.log(error.message);
    })
  }
  render() {
    return(
      <>
        <h1>Fav Crypto List</h1>
        {this.state.FavCrypto.map(obj=>{
          return(
            <Container>
              <Row>
                <Col>
                <FavCard
                obj={obj}
                />
                </Col>
              </Row>
            </Container>
          )
        })}
      </>


  )
}
}


export default FavCrypto;
