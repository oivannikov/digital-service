import { useState, useEffect } from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { Modal } from './components/Modal/Modal';
import { SignIn } from './components/Sign-in/Sign-in';
import { SignUp } from './components/Sign-up/Sign-up';

import './App.scss';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('users') || '[]');

    setUsers(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        setModalActive(false);
        setRegister(false);  
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };

  }, []);

  function handleModal(value) {
    setModalActive(value);
    setRegister(value);
  }

  console.log(users);

  function setNewUser(newUser) {
    setUsers(prev => [newUser, ...prev]);
    setRegister(false);
  }

  return (
    <div className="app">
      <Navbar setModalActive={setModalActive}  handleModal={handleModal} />

      <Modal active={modalActive} handleModal={handleModal}>
        { !isRegister ? <SignIn setRegister={setRegister} /> : <SignUp setNewUser={setNewUser} /> }
      </Modal>

    </div>
  );
}

export default App;
