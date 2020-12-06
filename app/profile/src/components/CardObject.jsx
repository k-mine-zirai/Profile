import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const cardlist = [ 
    {
        name: "Python",
        contxt: "★★",
        image: "https://cdn.svgporn.com/logos/python.svg",
    },
    {
        name: "React",
        contxt: "★★",
        image: "https://cdn.svgporn.com/logos/react.svg",
    },
    {
        name: "C",
        contxt: "★★",
        image: "https://cdn.svgporn.com/logos/c.svg",
    },
    {
        name: "HTML",
        contxt: "★★",
        image: "https://cdn.svgporn.com/logos/html-5.svg",
    },
    {
        name: "CSS",
        contxt: "★★",
        image: "https://cdn.svgporn.com/logos/css-3.svg",
    },
    {
        name: "JavaScript",
        contxt: "★★",
        image: "https://cdn.svgporn.com/logos/javascript.svg",
    },
    {
        name: "Docker",
        contxt: "★★",
        image: "https://cdn.svgporn.com/logos/python.svg",
    },
    {
        name: "Git",
        contxt: "★★",
        image: "https://cdn.svgporn.com/logos/git-icon.svg",
    },
    {
        name: "Github",
        contxt: "★★",
        image: "https://cdn.svgporn.com/logos/github-octocat.svg",
    },
];

const CardObject = (classes) => {
    return (
        <React.StrictMode>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cardlist.map((card,index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card style={{
                                    margin: "auto",
                                    minHeight: "500px",
                                    maxHeight: "500px",
                                }}
                                className={classes.card}>
                                <CardMedia
                                style={{
                                    padding: "20px",
                                    margin: "auto",
                                    width: "auto",
                                    height: "30%",
                                    maxHeight: "200px",
                                    Object: "Cover",
                                }}
                                component="img"
                                className={classes.cardMedia}
                                image={card.image}
                                title="Image"
                                />
                                <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.name}
                                </Typography>
                                <Typography>
                                    {card.contxt}
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.StrictMode>
    )
}

export default CardObject;