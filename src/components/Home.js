import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Row ,Col } from 'react-bootstrap';
import HomeCard from './HomeCard';

class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      allCrypto : []
    }
  }

  componentDidMount = ()=> {
    axios.get(process.env.REACT_APP_URL+'/getall')
    .then(result =>{
      this.setState({
        allCrypto:result.data
      })

    })
    .catch(error => {
      console.log(error.message);
    })
  }

  render() {
    return (
      <>
        <h1>Crypto List</h1>

        {this.state.allCrypto.map(obj=>{
          return(
            <Container>
              <Row>
                <Col>
                <HomeCard
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

export default Home;
