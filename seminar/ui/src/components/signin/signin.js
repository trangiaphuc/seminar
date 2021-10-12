import React, {useState } from "react";
import {useHistory} from "react-router-dom";
// import userService from "../../services/userService";
export default function LogIn() {

        let history = useHistory();
        const [user, setUser] = useState({
            gmail: "",
            password: ""
        });

        // const [gmail, setGmail] = useState('');
        // const [password, setPasssword] = useState('')

        const handleChange = e => {
            const { name, value } = e.target;
            setUser(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

        // const handleChangeGmail = (e) =>{
        //     setGmail(e.target.value);
        // }

        // const handleChangePassword = (e) =>{
        //     setPasssword(e.target.value);
        // }


        // const isValid = ()=>{
        //     if(user.password === '' || user.gmail === '')
        //         return false;
        //     return true;
        // }
    //     TutorialDataService.removeAll()
    //   .then(response => {
    //     console.log(response.data);
    //     refreshList();
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
        const handleSubmit = (e) =>{
            e.preventDefault();
            
            let gmail = user.gmail;
            let password = user.password;

            console.log({gmail: gmail, password: password});
        }

        return (
            <form onSubmit = {handleSubmit}>
                <h3>Sign In</h3>
                <div className="mt-1 form-group">
                    <label>Email address</label>
                    <input 
                        name = "gmail"
                        value = {user.gmail} 
                        onChange={ handleChange } 
                        type="email" 
                        className="mt-1 form-control" 
                        placeholder="Enter email" 
                       />
                </div>

                <div className="mt-1 form-group">
                    <label>Password</label>
                    <input 
                        name = "password"
                        value={user.password} 
                        onChange={handleChange} 
                        type="password" 
                        className="mt-1 form-control" 
                        placeholder="Enter password"
                       />
                </div>
                <br/>
                <div className="d-grid gap-2">
                    <button 
                        type="submit" 
                        className="mt-1 btn btn-primary btn-block"
                        // disabled="true"
                        >
                            Submit
                    </button>
                </div>
                <p className="mt-1 forgot-password text-right">
                    Don't have Account?<a href="#" onClick={()=>{
                        history.push('/sign-up');
                    }}
                    >
                        {" "}
                        Register Now!</a>
                </p>
            </form>
        );
}