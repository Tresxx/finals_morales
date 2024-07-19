import React, {useEffect, useState } from 'react';
import axios from 'axios';

const ItemForms = ({item, onSuccess}) => {
    const[first_name, setFName] = useState('');
    const[middle_name, setMName] = useState('');
    const[last_name, setLName] = useState('');
    const[name_extension, setNExtension] = useState('');
    const[contact_num, setCNum] = useState('');
    const[email, setEmail] = useState('');
    const[address, setAddress] = useState('');
    const[zip_code, setZCode] = useState('');
    const[birthday, setBirthdate] = useState('');
    const[birthplace, setBirthplace] = useState('');
    const[gender, setGender] = useState('');
    const[citizenship, setCitizenship] = useState('');
    const[civil_status, setCStatus] = useState('');
    const[height, setHeight] = useState('');
    const[weight, setWeight] = useState('');
    const[gsis_id_no, setGINo] = useState('');
    const[pagibig_id_no, setPINo] = useState('');
    const[philhealth_no, setPHNo] = useState('');
    const[sss_no, setSNo] = useState('');
    const[tin_no, setTNo] = useState('');
    const[elementary, setElementary] = useState('');
    const[year_graduated1, setYGraduated1] = useState('');
    const[high_school, setHSchool] = useState('');
    const[year_graduated2, setYGraduated2] = useState('');
    const[college, setCollege] = useState('');
    const[year_graduated3, setYGraduated3] = useState('');

    useEffect(() => {
        if(item){
            setFName(item.first_name);
            setMName(item.middle_name);
            setLName(item.last_name);
            setNExtension(item.name_extension);
            setCNum(item.contact_num);
            setEmail(item.email);
            setAddress(item.address);
            setZCode(item.zip_code);
            setBirthdate(item.birthday);
            setBirthplace(item.birthplace);
            setGender(item.gender);
            setCitizenship(item.citizenship);
            setCStatus(item.civil_status);
            setHeight(item.height);
            setWeight(item.weight);
            setGINo(item.gsis_id_no);
            setPINo(item.pagibig_id_no);
            setPHNo(item.philhealth_no);
            setSNo(item.sss_no);
            setTNo(item.tin_no);
            setElementary(item.elementary);
            setYGraduated1(item.year_graduated1);
            setHSchool(item.high_school);
            setYGraduated1(item.year_graduated2);
            setCollege(item.college);
            setYGraduated1(item.year_graduated3);
        }
    }, [item]);

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const data = {first_name, middle_name, last_name, name_extension, contact_num, email, address, zip_code, birthday, birthplace, gender,
                        citizenship, civil_status, height, weight, gsis_id_no, pagibig_id_no, philhealth_no, sss_no, tin_no,
                        elementary, year_graduated1, high_school, year_graduated2, college, year_graduated3};
        try{
            if (item){
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else{
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch(error) {
            console.error('There was an error submitting the form!', error);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2>PERSONAL INFORMATION SHEET</h2>
            <h4>Please fill-up the form.</h4>
            <div>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFName(e.target.value)}/>
            </div>
            <div>
                <label>Middle Name:</label>
                <textarea value={middle_name} onChange={(e) => setMName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label>
                <textarea value={last_name} onChange={(e) => setLName(e.target.value)}/>
            </div>
            <div>
                <label>Name Extension:</label>
                <textarea value={name_extension} onChange={(e) => setNExtension(e.target.value)}/>
            </div>
            <div>
                <label>Contact No.:</label>
                <textarea value={contact_num} onChange={(e) => setCNum(e.target.value)}/>
            </div>
            <div>
                <label>E-mail:</label>
                <textarea value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Address:</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div>
                <label>Zip Code:</label>
                <textarea value={zip_code} onChange={(e) => setZCode(e.target.value)}/>
            </div>
            <div>
                <label>Date of Birth:</label>
                <textarea value={birthday} onChange={(e) => setBirthdate(e.target.value)}/>
            </div>
            <div>
                <label>Place of Birth:</label>
                <textarea value={birthplace} onChange={(e) => setBirthplace(e.target.value)}/>
            </div>
            <div>
                <label>Gender:</label>
                <textarea value={gender} onChange={(e) => setGender(e.target.value)}/>
            </div>
            <div>
                <label>Citizenship:</label>
                <textarea value={citizenship} onChange={(e) => setCitizenship(e.target.value)}/>
            </div>
            <div>
                <label>Civil Status:</label>
                <textarea value={civil_status} onChange={(e) => setCStatus(e.target.value)}/>
            </div>
            <div>
                <label>Height:</label>
                <textarea value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
                <label>Weight:</label>
                <textarea value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div>
                <label>GSIS ID No.:</label>
                <textarea value={gsis_id_no} onChange={(e) => setGINo(e.target.value)}/>
            </div>
            <div>
                <label>Pag-Ibig ID No.:</label>
                <textarea value={pagibig_id_no} onChange={(e) => setPINo(e.target.value)}/>
            </div>
            <div>
                <label>Phil-Health No.:</label>
                <textarea value={philhealth_no} onChange={(e) => setPHNo(e.target.value)}/>
            </div>
            <div>
                <label>SSS No.:</label>
                <textarea value={sss_no} onChange={(e) => setSNo(e.target.value)}/>
            </div>
            <div>
                <label>TIN No.:</label>
                <textarea value={tin_no} onChange={(e) => setTNo(e.target.value)}/>
            </div>
            <h2>EDUCATIONAL BACKGROUND SHEET</h2>
            <div>
                <label>Elementary:</label>
                <textarea value={elementary} onChange={(e) => setElementary(e.target.value)}/>
            </div>
            <div>
                <label>Year Graduated:</label>
                <textarea value={year_graduated1} onChange={(e) => setYGraduated1(e.target.value)}/>
            </div>
            <div>
                <label>High School:</label>
                <textarea value={high_school} onChange={(e) => setHSchool(e.target.value)}/>
            </div>
            <div>
                <label>Year Graduated:</label>
                <textarea value={year_graduated2} onChange={(e) => setYGraduated2(e.target.value)}/>
            </div>
            <div>
                <label>College:</label>
                <textarea value={college} onChange={(e) => setCollege(e.target.value)}/>
            </div>
            <div>
                <label>Year Graduated:</label>
                <textarea value={year_graduated3} onChange={(e) => setYGraduated3(e.target.value)}/>
            </div>

            <button type='submit'>Submit</button>
        </form>
    );
};

export default ItemForms