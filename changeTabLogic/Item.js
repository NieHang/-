export default class Item extends React.Component {
	render() {
		const { arr, onChange, currentId } = this.props
		return (
			<div>
				{
					arr.map((item, index) => (
						<p key={item.id} 
							className={currentId === item.id ? 'active' : '' }
							onClick={() => onChange(item.id)}
						>{item.value}</p>
					))
				}
			</div>
		)
	}
}