import React, {useState} from 'react';
import {
    AvatarContainer,
    AvatarSingleElementContainer,
    AvatarThumbnail,
    Container,
    FormWrap,
    SocialContainer
} from "./UserControlStyledElements";
import {NavLink} from "react-router-dom";
import {FaFacebook, FaGoogle, FaLinkedin} from "react-icons/fa";
import {dataHandler} from "../../services/Data_handler";
import Swal from "sweetalert2";
import AvatarPic1 from "../../assets/img/avatars/avatar1.png";
import AvatarPic2 from "../../assets/img/avatars/avatar2.png";
import AvatarPic3 from "../../assets/img/avatars/avatar3.png";
import AvatarPic4 from "../../assets/img/avatars/avatar4.png";
import AvatarPic5 from "../../assets/img/avatars/avatar5.png";
import AvatarPic6 from "../../assets/img/avatars/avatar6.png";
import AvatarPic7 from "../../assets/img/avatars/avatar7.png";
import AvatarPic8 from "../../assets/img/avatars/avatar8.png";

const Register = () => {
    const [state, setState] = useState({
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
        avatar: ""
    })

    function validateRegisterForm() {
        return (
            state.userName.length > 0 &&
            state.password.length > 0 &&
            state.password === state.confirmPassword
        );
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (validateRegisterForm()) {
            dataHandler._data = {
                username: state.userName,
                email: state.email,
                password: state.password,
                avatar: parseInt(state.avatar)
            }
            console.log(state)
            dataHandler._api_post("http://localhost:8080/share-n-drive/register",
                dataHandler._data,
                undefined,
                undefined);
            Swal.fire({
                icon: "success",
                title: 'Successfully registered!',
                footer: '<a href="/">Share & Drive!</a>'
            })
        } else {
            Swal.fire({
                icon: "error",
                title: 'Passwords not matched',
                footer: '<a href="/">Share & Drive!</a>'
            })
        }
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }


    return (
        <Container>
            <FormWrap>
                <h1>Create account</h1>
                <SocialContainer>
                    <NavLink to="/user" title="User"><FaFacebook/></NavLink>
                    <NavLink to="/user" title="User"><FaGoogle/></NavLink>
                    <NavLink to="/user" title="User"><FaLinkedin/></NavLink>
                </SocialContainer>
                <span>or use Email</span>
                <input type="text"
                       id="userName"
                       aria-describedby="usernameHelp"
                       placeholder="Username"
                       onChange={handleChange}
                    // onChange={e => setUserName(e.target.value)}

                />
                <input type="email"
                       id="email"
                       aria-describedby="emailHelp"
                       placeholder="example@example.com"
                       value={state.email}
                       onChange={handleChange}

                />
                <input type="password"
                       id="password"
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange}

                />
                <input type="password"
                       id="confirmPassword"
                       placeholder="Confirm Password"
                       value={state.confirmPassword}
                       onChange={handleChange}
                />
                <AvatarContainer>
                    <AvatarSingleElementContainer>
                        <AvatarThumbnail src={AvatarPic1}/>
                        <input type="radio"
                               id="avatar"
                               value="1"
                               name="avatar"
                               onChange={handleChange}/>
                    </AvatarSingleElementContainer>
                    <AvatarSingleElementContainer>
                        <AvatarThumbnail src={AvatarPic2}/>
                        <input type="radio"
                               id="avatar"
                               value="2"
                               name="avatar"
                               onChange={handleChange}/>
                    </AvatarSingleElementContainer>
                    <AvatarSingleElementContainer>
                        <AvatarThumbnail src={AvatarPic3}/>
                        <input type="radio"
                               id="avatar"
                               value="3"
                               name="avatar"
                               onChange={handleChange}/>
                    </AvatarSingleElementContainer>
                    <AvatarSingleElementContainer>
                        <AvatarThumbnail src={AvatarPic4}/>
                        <input type="radio"
                               id="avatar"
                               value="4"
                               name="avatar"
                               onChange={handleChange}/>
                    </AvatarSingleElementContainer>
                    <AvatarSingleElementContainer>
                        <AvatarThumbnail src={AvatarPic5}/>
                        <input type="radio"
                               id="avatar"
                               value="5"
                               name="avatar"
                               onChange={handleChange}/>
                    </AvatarSingleElementContainer>
                    <AvatarSingleElementContainer>
                        <AvatarThumbnail src={AvatarPic6}/>
                        <input type="radio"
                               id="avatar"
                               value="6"
                               name="avatar"
                               onChange={handleChange}/>
                    </AvatarSingleElementContainer>
                    <AvatarSingleElementContainer>
                        <AvatarThumbnail src={AvatarPic7}/>
                        <input type="radio"
                               id="avatar"
                               value="7"
                               name="avatar"
                               onChange={handleChange}/>
                    </AvatarSingleElementContainer>
                    <AvatarSingleElementContainer>
                        <AvatarThumbnail src={AvatarPic8}/>
                        <input type="radio"
                               id="avatar"
                               value="8"
                               name="avatar"
                               onChange={handleChange}/>
                    </AvatarSingleElementContainer>

                </AvatarContainer>

                <button type={"button"} onClick={handleRegisterSubmit}>Sign Up</button>
            </FormWrap>
        </Container>
    )
        ;
};

export default Register;
