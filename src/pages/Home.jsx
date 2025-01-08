import React from 'react'
import { Box, Card, CardContent, Typography } from "@mui/material"

const Home = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '100vh'
        }} >
            <Card sx={{ maxWidth: 500, padding: 2, textAlign: 'center' }} >
                <CardContent  >
                    <Typography variant='h4' component="div" gutterBottom>
                        Welcome to the Dashboard
                    </Typography>
                    <Typography variant='body1' color='text.secondary' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, debitis ipsa nesciunt eius, possimus quaerat quisquam fuga temporibus neque illo quas, earum quo facere. Ducimus nam commodi hic est quas.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Home; 