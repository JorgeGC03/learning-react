/* eslint-disable no-unused-vars */
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName="JorgeGC03" >
                Jorge Gala Caballero
            </TwitterFollowCard>
            
            <TwitterFollowCard userName="CarlosTD20" >
                Carlos Tornero Dauden
            </TwitterFollowCard>
        </section>
    )
}