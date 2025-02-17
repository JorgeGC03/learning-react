// eslint-disable-next-line react/prop-types, no-unused-vars
export function TwitterFollowCard ({ userName, name, isFollowing }){
    const addAt = (userName) => `@${userName}`

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                    alt="El avatar de Jorge" 
                    src={`https://github.com/${userName}.png`}
                />
            <div className='tw-followCard-info'>
                <strong>{name} </strong>
                <span className='tw-followCard-infoUserName'>{addAt(userName)}</span>
            </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}