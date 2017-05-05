var NewPerson = React.createClass({
	getInitialState() {
		return {
			name: '',
			age: 0
		}
	},
	onChangeName(e) {
		this.setState({
			name: e.target.value
		})
	},
	onChangeAge(e) {
		this.setState({
			age: e.target.value
		})
	},
	handleClick() {
		var self = this
		var person  = {
			name: this.state.name,
			age: this.state.age
		}
		
		$.post('/api/people.json', { person: person }, function(data) {
			self.props.handlePost(data)
		})
	},
	render() {
		return(
			<div>
				<div className="form-group">
					<input type="text" name="name" className="form-control" onChange={ this.onChangeName } />
				</div>
				<div className="form-group">
					<input type="number"  name="age"  className="form-control" onChange= { this.onChangeAge } />
				</div>
				<div className="form-group">
					<button type="button" className="btn btn-primary" onClick={ this.handleClick }>Create</button>
				</div>
			</div>
		)
	}
})