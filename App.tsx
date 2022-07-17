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

interface IPerson {
  id: number;
  name: string;
  email: string;
  age: number;
  address: string;
  phone: string;
  password: string;
  image: string;
}
export default function App() {
  const [data, setData] = useState<IPerson[]>(PersonsData);
  const [person, setPerson] = useState<IPerson>(data[0]);
  const [image, setImage] = useState<string>(person.image);
  const [txtTitle, setTxtTitle] = useState<string>('name');
  const [valu, setValu] = useState<string>(person.name);

  const generatePerson = useCallback(() => {
    const tempData = [...data];
    const idx = Math.floor(Math.random() * tempData.length);
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
      <img src={image} className="imageStyles" alt={data[0].image} />
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
