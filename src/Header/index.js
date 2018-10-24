import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { text: '' }
	}

	SearchSubmit = event => {
		event.preventDefault()
		this.props.onFindArticle(this.state.text)
		this.setState({ text: '' })
	}

	handleSearchChange = event => {
		this.setState({ text: event.target.value })
	}

	render() {
		return (
			<form className="creatingBoardform" onSubmit={this.SearchSubmit}>
				<input
					type="text"
					placeholder=" search"
					value={this.state.text}
					onChange={this.handleSearchChange}
				/>

				<input className="test" type="submit" value="OK" />
			</form>
		)
	}
}

export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({
		onFindArticle: name => {
			dispatch({ type: 'Find_Article', payload: name })
		}
	})
)(Header)
