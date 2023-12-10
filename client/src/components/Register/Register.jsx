import { useContext, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import styles from './Register.module.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { registerSubmitHandler } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        registerSubmitHandler({email, password});
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.formC} onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Repeat password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
        
    );
}