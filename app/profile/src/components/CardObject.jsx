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
        level: "★★",
        image: "https://cdn.svgporn.com/logos/python.svg",
        context: "機械学習の実装, Pandas, Numpy など",
    },
    {
        name: "React",
        level: "★★",
        image: "https://cdn.svgporn.com/logos/react.svg",
        context: "プロフィールページの作成",
    },
    {
        name: "C",
        level: "★★",
        image: "https://cdn.svgporn.com/logos/c.svg",
        context: "車載ECU実務経験（2019/4〜）",
    },
    {
        name: "HTML",
        level: "★★",
        image: "https://cdn.svgporn.com/logos/html-5.svg",
        context: "基本的な文法",
    },
    {
        name: "CSS",
        level: "★★",
        image: "https://cdn.svgporn.com/logos/css-3.svg",
        context: "基本的な文法",
    },
    {
        name: "JavaScript",
        level: "★★",
        image: "https://cdn.svgporn.com/logos/javascript.svg",
        context: "基本的な文法",
    },
    {
        name: "Docker",
        level: "★★",
        image: "https://cdn.svgporn.com/logos/python.svg",
        context: "基本的な使い方、docker-compose",
    },
    {
        name: "Git",
        level: "★★",
        image: "https://cdn.svgporn.com/logos/git-icon.svg",
        context: "基本的な使い方",
    },
    {
        name: "Github",
        level: "★★",
        image: "https://cdn.svgporn.com/logos/github-octocat.svg",
        context: "基本的な使い方, Github Actions, Github Pages",
    },
];

const CardObject = (classes) => {
    return (
        <React.StrictMode>
            <div id="skills-anchor" />
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cardlist.map((card,index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card style={{
                                    margin: "auto",
                                    minHeight: "400px",
                                    maxHeight: "400px",
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
                                <Typography> {card.level} </Typography>
                                <Typography> {card.context} </Typography>
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