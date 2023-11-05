import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <div className='App'>
            <TwitterFollowCard userName="Cavan" name="Miguel Ángel Durán"/>
            <TwitterFollowCard userName="messi" name="Leo Messi"/>
            <TwitterFollowCard userName="Ibai" name="Ibai"/>
            <TwitterFollowCard userName="KeanuReevess_" name="Keanu Reeves"/>
        </div>  
    )
}