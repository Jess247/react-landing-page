import PropTypes from 'prop-types'

function InnerDropdown(props) {
    return(
        <ul className='dropdown-active'>
            {props.listItems.map(item => <a href="#"><li>{item}</li></a>)}
        </ul>
    )
}

InnerDropdown.propTypes = {
    listItems:PropTypes.array.isRequired
}

export default InnerDropdown