import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import axios from 'axios'

class Home extends Component {
   
    state = {
        stats: {},
        error: ""
      };

    async componentDidMount() {
        try {
          const res = await axios.get('/stats');
          this.setState({members: res.data, error: ""});
        } catch (e) {
          this.setState({error: e.message});
          console.error(e);
        }
      }

    render()  {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome to the Bury Park Masjid Membership App</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                    <br></br>
                    <p>
                        For information about getting access to this application please contact Mahmudul Hoque - m.hoque@gmail.com
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default Home;