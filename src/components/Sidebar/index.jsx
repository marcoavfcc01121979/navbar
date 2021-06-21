import { links, social } from '../../pages/data'

const Sidebar = () => {
    return(
        <>
            <h4>Sidebar</h4>
            <div>
                <div className="links-container show-container">
                    <ul className="links">
                        {links.map((link) => {
                            const { id, url, text } = link
                            return(
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export { Sidebar }