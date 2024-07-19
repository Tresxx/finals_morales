import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error)
        }
    };

    return(
        <div>
            <h1>DATA INFORMATION</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h3><u>PERSONAL INFORMATION</u></h3>
                        <b>First Name:</b> {item.first_name}<br></br>
                        <b>Middle Name:</b> {item.middle_name}<br></br>
                        <b>Last Name:</b> {item.last_name}<br></br>
                        <b>Name Extension:</b> {item.name_extension}<br></br>
                        <b>Contact No.:</b> {item.contact_num}<br></br>
                        <b>E-mail:</b> {item.email}<br></br>
                        <b>Address:</b> {item.address}<br></br>
                        <b>Zip Code:</b> {item.zip_code}<br></br>
                        <b>Date of Birth:</b> {item.birthday}<br></br>
                        <b>Place of Birth:</b> {item.birthplace}<br></br>
                        <b>Gender:</b> {item.gender}<br></br>
                        <b>Citizenship:</b> {item.citizenship}<br></br>
                        <b>Civil Status:</b> {item.civil_status}<br></br>
                        <b>Height:</b> {item.height} <b>Weight:</b> {item.weight}<br></br>
                        <b>GSIS ID No.:</b> {item.gsis_id_no}<br></br>
                        <b>Pag-Ibig ID No.:</b> {item.pagibig_id_no}<br></br>
                        <b>Phil-Health No.:</b> {item.philhealth_no}<br></br>
                        <b>SSS No.:</b> {item.sss_no}<br></br>
                        <b>TIN No.:</b> {item.tin_no}<br></br>
                        <h3><u>EDUCATIONAL BACKGROUND</u></h3>
                        <b>Elementary:</b> {item.elementary} <b>Year Graduated:</b> {item.year_graduated1}<br></br>
                        <b>High School:</b> {item.high_school} <b>Year Graduated:</b> {item.year_graduated2}<br></br>
                        <b>College:</b> {item.college} <b>Year Graduated:</b> {item.year_graduated3}<br></br>

                        <button onClick={()=> onEdit(item)}>Edit</button>
                        <button onClick={()=>onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ItemList;

