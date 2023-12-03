import MapComponent from "../MapComponent/MapComponent";
import styles from "./Contacts.module.css";

export default function Contacts() {
    return (
        <div className={styles.contactsMain}>
            <h1>Contact Us</h1>
            <p>Email: contact@rentacar.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main Street, City, Country</p>
            <div className={styles.mapView}>
                <MapComponent />
            </div>
        </div>

    );
}