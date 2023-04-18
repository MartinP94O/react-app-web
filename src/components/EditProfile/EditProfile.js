import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../contexts/AuthContext";
import {useService} from "../../hooks/useService";
import {authServiceFactory} from "../../services/authService";


export const EditProfile = (onProfileEdit) => {

    const {token} = useContext(AuthContext)
    const userService = useService(authServiceFactory)
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        username: '',
        email: '',
        password: '',
        address: '',
    }, onProfileEdit);

    useEffect(() => {
        userService.edit(token)
            .then(result => {
                changeValues(result);
            });
    }, [token]);

    return (
        <section id="register-page" className="content auth">
            <form id="register" method="post" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Profile edit</h1>

                    <label htmlFor="username">Name</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        placeholder="Name and surname"
                        value={values.username}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="user@email.com"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Address</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter address"
                        id="confirm-password"
                        value={values.address}
                        onChange={changeHandler}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
                    </p>
                </div>
            </form>
        </section>
    )
}