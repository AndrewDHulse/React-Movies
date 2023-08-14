import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default function LoginPage({handleSignUp}){
    

    return(
        <div>
            <h1>LoginPage</h1>
            < SignUpForm handleSignUp={handleSignUp}/>
        </div>
    )
}