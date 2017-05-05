var Header = React.createClass({
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
							<span className="sr-only"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a href="" className="navbar-brand">App</a>
					</div>
					<div className="collapse navbar-collapse" id="navbar">
						<ul className="nav navbar-nav">
							<li>
								<a href="#">Link</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
})