import PropTypes from 'prop-types';

export const Tab = ({
	index,
	name,
	handleTabClick,
	activeTab
}) => {
  return (
	<div className={`flex flex-row gap-4 items-center justify-center ${activeTab === index ? " border-b-[0.2rem] border-accent  " : ""}`}>
	<button
		onClick={() => handleTabClick(index)}
	>
		{name}
	</button>
	<div className=' px-2 py-[0.1rem] rounded-md bg-gray-whity text-dark-gray text-center text-[0.85rem]' >
		1
	</div>
	</div>
  )
}

Tab.propTypes = {
	index : PropTypes.number , 
	name : PropTypes.string,
	handleTabClick : PropTypes.func,
	activeTab : PropTypes.number,

};