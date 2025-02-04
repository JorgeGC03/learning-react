/* eslint-disable no-unused-vars */
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard 
                isFollowing 
                userName="JorgeGC03" 
                name="Jorge Gala Caballero" />
            
            <TwitterFollowCard 
                isFollowing 
                userName="cesiouvas" 
                name="Sergio Castillo Llorens" />
            
            <TwitterFollowCard 
                isFollowing 
                userName="genius666" 
                name="Adrían Genís Ramos" />
            
            <TwitterFollowCard 
                isFollowing 
                userName="joanaparici" 
                name="Joan Aparici Morant" />
            
            <TwitterFollowCard 
                isFollowing 
                userName="CarloSzMz" 
                name="Carlos Sanz Muñoz" />
            
            <TwitterFollowCard 
                isFollowing 
                userName="CarlosTD20"
                 name="Carlos Tornero Dauden" />
        </section>
    )
}