
import locationIcon from '../images/location-icon.svg'

export default function Card(props) {
    return (
        <div className='card--container'>
            <img src={props.imageUrl} alt={props.title} className="card--photo" />
            <div className="card--text">
                <div className="card--location">
                    <img src={locationIcon} alt="" />
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>



        </div>
    )
}