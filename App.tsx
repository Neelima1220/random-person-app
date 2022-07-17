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
import { cloneDeep } from 'lodash';
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

  const handleName = (txt) => {
    setTxtTitle(txt);
    setName(person.name);
    setValu(person.name);
  };
  const handleEmail = (txt) => {
    setTxtTitle(txt);
    setEmail(person.email);
    setValu(person.email);
  };
  const handleAge = (txt) => {
    setTxtTitle(txt);
    setAge(person.age);
    setValu(person.age as any);
  };
  const handleAddress = (txt) => {
    setTxtTitle(txt);
    setAddress(person.address);
    setValu(person.address as any);
  };
  const handlePhone = (txt) => {
    setTxtTitle(txt);
    setPhone(person.phone);
    setValu(person.phone as any);
  };
  const handlePassword = (txt) => {
    setTxtTitle(txt);
    setPassword(person.password);
    setValu(person.password as any);
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
        <FaUser className="icon" onMouseEnter={() => handleName('name')} />
        <FaEnvelopeOpen
          className="icon"
          onMouseEnter={() => handleEmail('Email')}
        />
        <FaCalendarTimes
          className="icon"
          onMouseEnter={() => handleAge('age')}
        />
        <FaMap className="icon" onMouseEnter={() => handleAddress('address')} />
        <FaPhone className="icon" onMouseEnter={() => handlePhone('Phone')} />
        <FaLock
          className="icon"
          onMouseEnter={() => handlePassword('Password')}
        />
      </div>
      <button onClick={generatePerson}>Generata Person</button>
    </div>
  );
}
