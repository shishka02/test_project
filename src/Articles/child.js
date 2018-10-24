import React from 'react'
import { Link } from 'react-router-dom'
import Users from '../User/index'
import Coments from '../coments/index'
import RenderingOfText from './rendering_of_text'

const Child = ({ match }) => (
  <div>
    <Link to={'/'}>
      <h3>home</h3>
    </Link>
    <div className='box_for_text'>
      <h3> {match.params.id}</h3>
      <RenderingOfText match={match} />
    </div>
    <Users match={match} />
    <Coments match={match} />
  </div>
)

export default Child
