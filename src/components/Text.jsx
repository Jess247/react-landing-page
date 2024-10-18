import PropTypes from 'prop-types'

function Text(props) {
    return(
        <>
            <h2 className='heading'>{props.heading}</h2>
            <p className='text'>{props.text}</p>
        </>
    )
}

Text.propTypes = {
    heading:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Text