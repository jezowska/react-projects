import globeIcon from '../images/globe-icon.svg'

export default function Navbar() {
    return (
        <nav>
            <img src={globeIcon} alt="Globe Icon" />
            <h3>my travel journal.</h3>
        </nav>
    )
}