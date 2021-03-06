import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className='header' >
        <h1>
            {title}
        </h1>
        <Button className = 'btn' color='green' text='Add Task' />
    </header>
  )
}

Header.defaultProps ={
    title : "Task Manager",
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

// const headingStyle = {
//     color : 'beige',
//     backgroundColor: 'purple',
// }

export default Header