import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function ActivateAccount() {
  const { token } = useParams();
  const history = useHistory();

  useEffect(() => {
    const activate = async () => {
      try {
        await axios.get(`/api/auth/activate/${token}`);
        alert('Account activated successfully');
        history.push('/login');
      } catch (err) {
        alert('Activation failed');
      }
    };
    activate();
  }, [token, history]);

  return <div>Activating your account...</div>;
}

export default ActivateAccount;