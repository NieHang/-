import Item from './Item.js'

class App extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			arr: [
				{
					id: '0',
					value: 0
				},
				{
					id: '1',
					value: 1
				},
				{
					id: '2',
					value: 2
				}
			],
			currentId: null
		}
  }

  render() {
    return (
      <div className="center">
        <Item arr={this.state.arr} currentId={this.state.currentId} onChange={id => this.setState({currentId: id})}/>
    	</div>)
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);