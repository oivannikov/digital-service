import { useState, useEffect } from 'react';

import { useDispatch, useSelector} from 'react-redux';
import { setUsers } from './redux/actions';

import { Navbar } from './components/Navbar/Navbar';
import { Modal } from './components/Modal/Modal';
import { SignIn } from './components/Sign-in/Sign-in';
import { SignUp } from './components/Sign-up/Sign-up';
import { PageUser } from './components/PageUser/PageUser';

import './App.scss';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [isRegister, setRegister] = useState(false);

  const users = useSelector(state => state.users);
  console.log(users);
  const authUser = useSelector(state => state.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('users') || []);

    dispatch(setUsers(saved));
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

  function setNewUser(newUser) {
    dispatch(setUsers([...users, newUser]));
    setRegister(false);
  }

  return (
    <div className="app">
      <Navbar setModalActive={setModalActive}  handleModal={handleModal} />

      { !authUser
        ? <Modal active={modalActive} handleModal={handleModal}>
            { !isRegister ? <SignIn setRegister={setRegister} /> : <SignUp setNewUser={setNewUser} /> }
          </Modal>

        : <PageUser />
      }
    </div>
  );
}

export default App;
