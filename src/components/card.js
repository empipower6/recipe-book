import * as React from "react"
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import * as styles from '../styles/card.module.scss';
import { Link } from "gatsby"

const Card = ({category,title,image,slug,size}) => {
    const cardImage = getImage(image)

    return(
        <Link to={`${slug}`} style={{ textDecoration: 'none' }}>
        <div className={size === 'bigCard' ? styles.cardBig: styles.card}>
            <GatsbyImage imgClassName={styles.cardImage} 
                         image={cardImage} 
                         objectFit="cover" 
                         alt={`The image for the recipe ${title}`} />
            <div className={styles.description}>
                <h2 className={styles.cardCategory}>{String(category).toLowerCase()}</h2>
                <h1 className={styles.cardTitle}>{String(title).toLowerCase()}</h1>
            </div>
        </div>
        </Link>
    )
}

export default Card;