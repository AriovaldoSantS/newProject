import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {

    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [valid, setValid] = useState(true)


    const handONchange = (event) => {
        const { value } = event.target
        setEmail(value)


        const emailEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        setValid(emailEx.test(value))
    }



    const handleClick = () => {

        if (password.length >= 8) {
            navigate('/home')
        }

    }

    return (
        <div>

            <h1 id="logo">Logo</h1>

            <label htmlFor=""><input placeholder='Email' type="email" value={email} onChange={handONchange} />
            </label>
            {!valid && <p style={{ color: 'red' }}>Por favor, insira um e-mail válido.</p>}
            <br />
            <label htmlFor=""><input placeholder="Senha" onChange={({ target: { value } }) => setPassword(value)} type="password" />
            </label>
            <br /> <br />
            <button disabled={!(password.length >= 8) || !(valid)} onClick={handleClick} >Login</button>


        </div>
    )



}

export default Login