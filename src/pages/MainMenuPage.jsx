import { useContext, useEffect } from "react"
import { AuthContext } from "../components/AuthProvider"
import { useNavigate } from "react-router-dom"
import MainMenuBody from "../components/MainMenuBody"

export default function MainMenuPage() {
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!currentUser) navigate('/login')
    }, [currentUser, navigate])

    return (
        <>
            <MainMenuBody />
        </>
    )
    }
