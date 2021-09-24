import React from "react"
import { Link } from "react-router-dom"
import "../../index.css"


export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("https://smb-tab-tracker.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "tt_token", res.token )
                    props.history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 style={{textAlign: "center"}}>Tab Tracker</h1>
                    <h2 style={{textAlign: "center"}}>Please sign in</h2>
                    <fieldset style={{textAlign: "center"}} className="field">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control"  placeholder="Email address" required autoFocus 
                        style={{border: "1px solid", borderRadius: "7px", boxShadow: "0 0 5px ", width: "200px"}}/>
                    </fieldset>
                    <fieldset style={{textAlign: "center"}}>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control"  placeholder="Password" required 
                        style={{border: "1px solid", borderRadius: "7px", boxShadow: "0 0 5px ", width: "200px"}}/>
                    </fieldset>
                    <fieldset style={{
                        textAlign:"center"
                    }}>
                        <button style={{marginTop: "50px"}} className="button" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register" style={{textAlign: "center", marginTop: "100px"}}>
                <Link to="/register">Not a member yet? <br /> Click Here To Sign Up!</Link>
            </section>
        </main>
    )
}