import axios from 'axios'
import React, { Component } from 'react'
import { Card , Button } from 'react-bootstrap'

export class HomeCard extends Component {

    addFav = (obj) =>{
        const {user} = this.props.auth0
        axios.post(`${process.env.REACT_APP_URL}/addFav/${user.email}` ,obj)
        .then(item=>{
            console.log("added");
        })
        .catch(error=>{
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
                        <Button variant="primary" onClick={()=> this.addFav(this.props.obj)}>Add Favorite</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HomeCard
