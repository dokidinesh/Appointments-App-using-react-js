// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {date, name, isStarred, id} = appointmentDetails
  const onClickIsStarred = () => {
    toggleIsStarred(id)
  }

  const isStarredImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{name}</p>
        <button onClick={onClickIsStarred} type="button" testid="star">
          <img src={isStarredImage} alt="star" className="star" />
        </button>
      </div>
      <p className="date">{newDate}</p>
    </li>
  )
}

export default AppointmentItem
