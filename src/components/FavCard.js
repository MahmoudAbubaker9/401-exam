import axios from 'axios'
import React, { Component } from 'react'
import { Card , Button } from 'react-bootstrap'

export class HomeCard extends Component {

    constructor(props){
        super(props)
        this.state = {
          show : false,
          FavCryp:[]
        }
      }

      handleClose = () => {
          this.setState({
              show : false
          })
      }

      handleShow = () => {
        this.setState({
            show : true
        })
    }

      deleteFav = (obj) => {
        const {user} = this.props.auth0
          axios.delete(`${process.env.REACT_APP_URL}/${obj.title}/${user.email}`)
          .then(res => {
              console.log(res.data);
          })
          .catch(error => {
            console.log(error.message);
          })
      }

      updataFav = (e, item) => {
          e.preventDefault()
          const update = {
            title:e.target.title.value,
            description:e.description.title.value,
            image_url:e.target.image_url.value,
            toUSD:e.target.toUSD.value
          }
          axios.put(`${process.env.REACT_APP_URL}/updateFav` , update)
          .then(result=>{
              this.setState({
                FavCryp:result.data
              })
          })
          .catch(error => {
            console.log(error.message);
          })
      }


    
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.obj.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.obj.title}</Card.Title>
                        <Card.Title>{this.props.obj.toUSD}</Card.Title>
                        <Card.Text>
                        {this.props.obj.description}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.deleteFav(this.props.obj)} >Delete</Button>
                        <Button variant="primary" onClick={()=>this.handleShow(this.props.obj)} >Update</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HomeCard
