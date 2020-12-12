import { useState, useEffect } from 'react';

import { useDispatch, useSelector} from 'react-redux';
import { setUsers } from './redux/actions';

import { Modal } from './components/Modal/Modal';
import { SignIn } from './components/Sign-in/Sign-in';
import { SignUp } from './components/Sign-up/Sign-up';
import { PageUser } from './components/PageUser/PageUser';

import './App.scss';

function App() {
  // const [modalActive, setModalActive] = useState(true);
  const [isRegister, setRegister] = useState(false);

  const users = useSelector(state => state.users);
  const authUser = useSelector(state => state.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('users') || []);

    dispatch(setUsers(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  function setNewUser(newUser) {
    dispatch(setUsers([...users, newUser]));
    setRegister(false);
  }

  return (
    <div className="app">
      { !authUser
        ? <Modal>
            { !isRegister 
                ? <SignIn setRegister={setRegister} />
                : <SignUp setNewUser={setNewUser} setRegister={setRegister} />
            }
          </Modal>

        : <PageUser />
      }
    </div>
  );
}

export default App;
