import React from 'react'
import Users from '../User/index.js'
import Coments from '../coments/index.js'
import RenderingOfText from './rendering_of_text.js'



const Child = ({ match }) => (

      <div>
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
