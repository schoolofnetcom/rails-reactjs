var Main = React.createClass({
	getInitialState() {
		return {
			name: '',
			age: 0,
			people: []
		}
	},
	componentDidMount() {
		this.setState({
			people: this.props.data
		})
		// var self = this
		// $.get('/api/people.json', function(data) {
		// 	self.setState({
		// 		people: data
		// 	})
		// })
	},	
	handlePost(person) {
		var people = this.state.people.concat(person)

		this.setState({
			people: people
		})
	},
	handleDelete(person) {
		var people = this.state.people.filter(function(item) {
			return item.id != person.id
		})

		this.setState({
			people: people
		})
	},
	render() {
		return (
			<div>
				<Header />
				<main>
					<h1>Hello from React Rails</h1>
					<NewPerson handlePost={ this.handlePost } />
					<ListPeople people={ this.state.people } handleDelete={ this.handleDelete}/>
				</main>
				<Footer />
			</div>
		)
	}
})