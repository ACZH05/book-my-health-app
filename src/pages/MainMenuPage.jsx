import { useContext, useEffect } from "react"
import { AuthContext } from "../components/AuthProvider"
import { useNavigate } from "react-router-dom"

export default function MainMenuPage() {
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!currentUser) navigate('/login')
    }, [currentUser, navigate])

    return (
        <div>
            Hello
        </div>
    )
    }
