import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Dale J. Russell</h2>
            <h4 style={{ color: 'grey' }}>Educator,Librarian,Programmer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              Prior to attending the University of Arizona Full-Stack Development Boot Camp I taught High School English.
              my decision to attempt the program stemmed from wanting to build on to my experience building digital collections and libraries
              that I undertook during my Master of Library and Information Science Program. I wanted to be able to develop and build the tools
              rather than just use them.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>202 E. 12th St apt 407 Tucson,AZ 84701</p>
            <h5>Phone</h5>
            <p>(407) 756-8823</p>
            <h5>Email</h5>
            <p>jdalerussell@gmail.com</p>
            <h5>Web</h5>
            <p> website goes here</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="University of Arizona Full-Stack Web Development bootcamp"
              schoolDescription=" A bootcamp focusing on the full stack development program focusing on javascript, MongoDB, and React. "
            />
            <Education
              startYear={2011}
              endYear={2013}
              schoolName="Wayne State University"
              schoolDescription="  I attended the College of Library and Information Science with a focus on Reference, Discovery and Digial Libraries."
            />

            <Education
              startYear={2000}
              endYear={2002}
              schoolName="Bowling Green State Univeristy"
              schoolDescription=" I earned my M.ed in Curriculum and Instruction and my initial teaching credential."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2002}
              endYear={2003}
              jobName="First Teaching Position"
              jobDescription="I taught English as a fill in teacher for a small district in Ohio."
            />

            <Experience
              startYear={2004}
              endYear={2010}
              jobName="Teaching In Florida"
              jobDescription="Between 2004 and 2010 I taught at several Central Florida Area High Schools. 
                These Schools that were very different ranging from those under a desegregation order
                 to, Rural and Suburban communities"

            />
            <Experience
              startYear={2015}
              endYear={2020}
              jobName="Teaching In Arizona"
              jobDescription="Between 2015 and 2020 I taught at in two very different communities in Arizona. The first three years in a community that 
                was dying due to the mining operations being closed and the other booming due to mining, the military bases nearby and 
                a stronger economic base."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={80}
            />
            <Skills
              skill="HTML/CSS"
              progress={50}
            />
            <Skills
              skill="NodeJS"
              progress={90}
            />
            <Skills
              skill="React"
              progress={25}
            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
