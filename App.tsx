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
  const [image, setImage] = useState(data[current].image);
  const [name, setName] = useState(data[current].name);
  const [email, setEmail] = useState(data[current].email);
  const [age, setAge] = useState(data[current].age);
  const [address, setAddress] = useState(data[current].address);
  const [phone, setPhone] = useState(data[current].phone);
  const [password, setPassword] = useState(data[current].password);

  console.log(person);

  const generatePerson = useCallback(() => {
    const tempData = [...data];
    const idx = Math.floor(Math.random() * tempData.length);
    setPerson(tempData[idx]);
  }, [setPerson, data]);

  return (
    <div className="user-container">
      <img src={image} className="imageStyles" alt={data[current].image} />
      <div className="title-container">
        <p> my address is </p>
        <h4 className="title"> {address}</h4>
      </div>
      <div className="icons">
        <FaUser className="icon" />
        <FaEnvelopeOpen className="icon" />
        <FaCalendarTimes className="icon" />
        <FaMap className="icon" />
        <FaPhone className="icon" />
        <FaLock className="icon" />
      </div>
      <button onClick={generatePerson}>Generata Person</button>
    </div>
  );
}
