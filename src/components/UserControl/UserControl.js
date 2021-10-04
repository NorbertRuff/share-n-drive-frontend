import React, {useState} from 'react';


const UserControl = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    return (
        <UserControl>
            <input type="email"
                   className="form-control"
                   id="email"
                   aria-describedby="emailHelp"
                   placeholder="Enter email"
                   value={state.email}
                   onChange={handleChange}
            />
            <input type="password"
                   className="form-control"
                   id="password"
                   placeholder="Password"
                   value={state.password}
                   onChange={handleChange}
            />
        </UserControl>)
};

export default UserControl;
