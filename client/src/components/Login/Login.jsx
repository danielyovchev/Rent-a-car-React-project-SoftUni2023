import { useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { PATHS } from '../../utils/routeConstants';

export default function Login() {
    const { loginSubmitHandler} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        loginSubmitHandler({email, password})
    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Login to your account or create a new account</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Login</button>
                        <div>
                            New user?
                            <Link to={PATHS.REGISTER}>Register</Link>
                        </div>
                    </form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}