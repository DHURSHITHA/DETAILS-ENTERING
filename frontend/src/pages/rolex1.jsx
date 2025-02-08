import React from "react";
import { Container, Typography, Card, CardMedia } from "@mui/material";
import image1 from "../assets/image1.jpeg";

const Rolex1 = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 2 }}>
      <br></br><br></br>
        <b><i>Rolex Submariner</i></b>
      </Typography>
      <Card sx={{ maxWidth: 350, mx: "auto", boxShadow: 3 }}>
        <CardMedia
          component="img"
          image={image1}
          alt="Rolex Submariner"
          sx={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: 250 }} 
        />
      </Card>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
        <b>Rolex Submariner Date</b><br></br>
        Oyster, 41 mm, Oystersteel and Yellow Gold<br></br>
        <b>Reference: </b>126613LB<br></br>
        <b>Price:</b> ₹ 1,450,000<br></br>
        <b>Overview:</b><br></br>
        The Rolex Submariner is the ultimate diver's watch, known for its durability, water resistance, and iconic design. The blue dial and Cerachrom bezel add a touch of elegance to its robust functionality.<br></br><br></br>

        <b>Key Features:</b><br></br>
        <b>Case:</b> 41 mm Oystersteel and Yellow Gold with unidirectional rotatable bezel<br></br>
        <b>Dial: </b>Blue with Chromalight luminescence<br></br>
        <b>Bracelet:</b> Oyster bracelet with Glidelock extension system<br></br>
        <b>Movement:</b> Rolex Calibre 3235 – Automatic, self-winding movement with a 70-hour power reserve<br></br>
        <b>Water Resistance:</b> Up to 300 meters (1,000 feet)<br></br>
        <b>Cyclops Lens:</b> Over the date window for better readability<br></br>
        <b>Precision and Performance:</b><br></br>
        The Submariner Date is powered by Rolex's in-house Calibre 3235 movement, ensuring outstanding precision (-2/+2 seconds per day) and shock resistance.<br></br><br></br>

        <b>Price & Availability:</b><br></br>
        The Rolex Submariner Date (Reference 126613LB) is available at ₹ 1,450,000. Prices may vary based on customization, region, and authorized dealers.
      </Typography>
    </Container>
  );
};

export default Rolex1;
