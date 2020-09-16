import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Dale J. Russell</h2>
            <img
              src="placeholder"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Experienced Teacher with an MLIS focus on Reference and Discovery and 
             Digital Library construction. Soon to be graduate of the University of Arizona Full-Stack development boot camp 2020</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <h3>Leave me a message and I will return it ASAP!</h3>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Mukta'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (407) 756-8823
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Mukta'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    jdalerussell@gmail.com
                  </ListItemContent>
                </ListItem>



              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
