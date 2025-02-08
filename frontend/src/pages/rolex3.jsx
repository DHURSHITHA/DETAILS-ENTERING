import React from "react";
import { Container, Typography, Card, CardMedia } from "@mui/material";
import image3 from "../assets/rolex-3.jpeg";

const Rolex3 = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 2 }}>
      <br></br><br></br>
      <b>Rolex Day-Date 40</b>
        
      </Typography>
      <Card sx={{ maxWidth: 350, mx: "auto", boxShadow: 3 }}>
        <CardMedia
          component="img"
          image={image3}
          alt="Rolex Day-Date 40"
          sx={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: 250 }}
        />
      </Card>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
        <b>Rolex Day-Date 40</b><br></br>
        Oyster, 40 mm, 18 ct Everose Gold<br></br>
        <b>Reference: </b>228235<br></br>
        <b>Price:</b> ₹ 3,250,000<br></br>
        <b>Overview:</b><br></br>
        The Rolex Day-Date 40, also known as the "President’s Watch," is the pinnacle of luxury timepieces. Made of 18 ct Everose gold, it features a fluted bezel and a sophisticated dial that displays both the day and date in full.<br></br><br></br>

        <b>Key Features:</b><br></br>
        <b>Case:</b> 40 mm 18 ct Everose gold with fluted bezel<br></br>
        <b>Dial: </b>Available in a variety of elegant colors with luminous markers<br></br>
        <b>Bracelet:</b> President bracelet for ultimate comfort and prestige<br></br>
        <b>Movement:</b> Rolex Calibre 3255 – Automatic, self-winding movement with a 70-hour power reserve<br></br>
        <b>Water Resistance:</b> Up to 100 meters (330 feet)<br></br>
        <b>Day & Date Display:</b> Shows the full day of the week and date at 12 o’clock<br></br>
        <b>Precision and Performance:</b><br></br>
        The Day-Date 40 is powered by the advanced Calibre 3255 movement, which offers superior accuracy (-2/+2 seconds per day) and anti-magnetic properties.<br></br><br></br>

        <b>Price & Availability:</b><br></br>
        The Rolex Day-Date 40 (Reference 228235) is available at ₹ 3,250,000. Prices may vary based on customization, region, and authorized dealers.
      </Typography>
    </Container>
  );
};

export default Rolex3;
