import './card.css'
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'

const CardItem = ({ data }) => {

    const { _id, name, videoCover, style, level, intensity } = data


    const getLevel = (number) => {
        const levelOptions = ['Beginner', 'Intermediate', 'Advanced'];
        return levelOptions[number[0] - 1]
    }

    const getIntensity = (letter) => {
        if (letter === 'L') return 'Low'
        if (letter === 'M') return 'Medium'
        if (letter === 'H') return 'High'
    }

    return (
        <Link to={`/${_id}`} className="card-link-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image={videoCover}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {style[0]} | {getLevel(level)} | {getIntensity(intensity[0])} intensity
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default CardItem