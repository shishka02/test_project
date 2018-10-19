import React from 'react'
import Users from '../User/index.js'
import Coments from '../coments/index.js'
import RenderingOfText from './rendering_of_text.js'
import { BrowserRouter as Router, Link } from "react-router-dom";


const Child = ({ match }) => (

      <div>
      <Link to={'/'}><h3>home</h3></Link>
      <h3> {match.params.id}</h3>
      <RenderingOfText
        match={match}/>
      <Users
         match={match}   />
         <Coments
          match={match} />
      </div>

 );

 export default Child;
