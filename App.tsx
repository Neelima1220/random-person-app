import React, { useState, useCallback } from 'react';
import {
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaLock,
  FaPhone,
  FaEnvelopeOpen,
} from 'react-icons/fa';
import './style.css';
import { PersonsData } from './data';
export default function App() {
  const [data, setData] = useState(PersonsData);
  const [current, setCurrent] = useState(0);
  const [person, setPerson] = useState(data[current]);
  const [image, setImage] = useState(person.image);
  const [name, setName] = useState(person.name);
  const [email, setEmail] = useState(person.email);
  const [age, setAge] = useState(person.age);
  const [address, setAddress] = useState(person.address);
  const [phone, setPhone] = useState(person.phone);
  const [password, setPassword] = useState(person.password);
  const [txtTitle, setTxtTitle] = useState('name');
  const [valu, setValu] = useState(person.name);

  const generatePerson = useCallback(() => {
    const tempData = [...data];
    const idx = Math.floor(Math.random() * tempData.length);
    console.log(tempData[idx]);
    setPerson(tempData[idx]);
    setImage(tempData[idx].image);
    setValu(tempData[idx].name);
    setTxtTitle('name');
  }, [setPerson, data]);

  const handleValue = (txt) => {
    setTxtTitle(txt);
    setValu(person[txt]);
  };

  return (
    <div className="user-container">
      <img src={image} className="imageStyles" alt={data[current].image} />
      <div className="title-container">
        <p>
          My <span style={{ minWidth: '5rem' }}> {txtTitle}</span> is
        </p>
        <h4 className="title"> {valu}</h4>
      </div>
      <div className="icons">
        <FaUser
          className="icon"
          name="name"
          onMouseEnter={() => handleValue('name')}
        />
        <FaEnvelopeOpen
          className="icon"
          name="email"
          onMouseEnter={() => handleValue('email')}
        />
        <FaCalendarTimes
          className="icon"
          name="age"
          onMouseEnter={() => handleValue('age')}
        />
        <FaMap
          className="icon"
          name="address"
          onMouseEnter={() => handleValue('address')}
        />
        <FaPhone
          className="icon"
          name="phone"
          onMouseEnter={() => handleValue('phone')}
        />
        <FaLock
          className="icon"
          name="password"
          onMouseEnter={() => handleValue('password')}
        />
      </div>
      <button onClick={generatePerson}>Generata Person</button>
    </div>
  );
}
