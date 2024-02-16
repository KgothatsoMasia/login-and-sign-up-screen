import React, {useState} from "react";

function App() {

    const [action, setAction] = useState("Login")

    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
        email: "",
        password: ""
    })


    function updateName(e) {
        const {value, name} = e.target;

        setFullName(prevValue => {
            if (name === "fName") {
                return {
                    fName: value,
                    email: prevValue.email,
                    lName: prevValue.lName,
                    password: prevValue.password
                };
            } else if (name === "lName") {
                return {
                    lName: value,
                    email: prevValue.email,
                    fName: prevValue.fName,
                    password: prevValue.password
                };
            } else if (name === "email") {
                return {
                    email: value,
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    password: prevValue.password
                };
            } else if (name === "password") {
                return {
                    password: value,
                    email: prevValue.email,
                    fName: prevValue.fName,
                    lName: prevValue.lName
            };
        };
    });
    };

    return(
   
        <section className="bigcontainer">
                <div className="container">
                    <header className="header">
                        <h1>{action}</h1>
                        <h3>{fullName.fName} {fullName.lName}</h3>
                        <p>{fullName.email}</p>
                        <p>{fullName.password}</p>
                    </header>
                    <form>
                        <div className="userInputs">
                            {action === "Login"? <div></div>:  
                            <input
                            name="fName" onChange={updateName} className="input"
                            type="text" placeholder="First Name"
                            value={fullName.fName} /> }
                        </div>
                        <div className="userInputs">
                            {action === "Login"? <div></div>:
                            <input
                            name="lName" onChange={updateName} className="input"
                            type="text" placeholder="Last Name"
                            value={fullName.lName}/>}
                        </div>
                        <div className="userInputs">
                            <input
                            name="email" onChange={updateName} className="input"
                            type="text" placeholder="email"
                            value={fullName.email}/>
                        </div>
                        <div className="userInputs">
                            <input
                            name="password" onChange={updateName} className="input"
                            type="password" placeholder="password"
                            value={fullName.password}/>
                        </div>                        
                    </form>
                    <div>

                </div>
                <div className="forgotPass">
                    {action === "Sign Up"? <div></div>:
                    <p>forgot Password? <span>click here!</span></p>}
                    
                </div>

                    <div className="submit-container">
                        <button
                        className={action === "Sign Up"? "submint gray": "submint"}
                        onClick={() => {setAction("Login")}}
                        >Login</button>
                        <button
                        className={action === "Login"? "submint gray": "submint"}
                        onClick={() => {setAction("Sign Up")}}
                        >Sign Up</button>
                    </div>

                </div>
            </section>
        );

}
export default App;