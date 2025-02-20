import { useState } from "react"

export function TwitterFollowCard({ userName, children }) {

    const [isFollowing, setIsFollowing] = useState(false)



    const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () =>
        setIsFollowing(!isFollowing)

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    alt="El avatar de Jorge"
                    src={`https://github.com/${userName}.png`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children} </strong>
                    <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}