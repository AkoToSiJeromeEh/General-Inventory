import PropTypes from 'prop-types';

export const TableRow = () => {
  return (
    <tr
      className={`flex  flex-col border-2 border-black md:border-0 md:flex-row justify-between text-start w-full text-sm ${
        isDark ? "bg-white text-black" : "bg-[#00000041] text-white "
      }  backdrop-blur-md`}
    >
      <td></td>
    </tr>
  );
};
TableRow.propTypes = {
	index : PropTypes.number , 
	name : PropTypes.string,
	handleTabClick : PropTypes.func,
	activeTab : PropTypes.number,

};