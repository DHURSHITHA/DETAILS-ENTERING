import React from "react";
import { Container, Typography, Card, CardMedia } from "@mui/material";
import image2 from "../assets/rolex-2.jpeg";

const Rolex2 = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 2 }}>
        <br></br><br></br>
        <b>Rolex GMT-Master II</b>
      </Typography>
      <Card sx={{ maxWidth: 350, mx: "auto", boxShadow: 3 }}>
        <CardMedia
          component="img"
          image={image2}
          alt="Rolex GMT-Master II"
          sx={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: 250 }}
        />
      </Card>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
        <b>Rolex GMT-Master II</b><br></br>
        Oyster, 40 mm, Oystersteel and Everose Gold<br></br>
        <b>Reference: </b>126711CHNR<br></br>
        <b>Price:</b> ₹ 1,500,000<br></br>
        <b>Overview:</b><br></br>
        The Rolex GMT-Master II is a legendary watch designed for world travelers. It features a two-tone Cerachrom bezel in black and brown, known as the "Root Beer" edition. Crafted in a combination of Oystersteel and Everose gold, it offers both durability and luxury.<br></br><br></br>

        <b>Key Features:</b><br></br>
        <b>Case:</b> 40 mm Oystersteel and Everose gold with bidirectional rotatable bezel<br></br>
        <b>Dial: </b>Black with luminescent hour markers<br></br>
        <b>Bracelet:</b> Oyster bracelet with an Easylink comfort extension link<br></br>
        <b>Movement:</b> Rolex Calibre 3285 – Automatic, self-winding movement with a 70-hour power reserve<br></br>
        <b>Water Resistance:</b> Up to 100 meters (330 feet)<br></br>
        <b>24-Hour Hand:</b> Allows tracking of multiple time zones<br></br>
        <b>Precision and Performance:</b><br></br>
        The GMT-Master II is powered by the Calibre 3285 movement, featuring a Chronergy escapement for enhanced efficiency and precision. It is a certified Superlative Chronometer (-2/+2 seconds per day).<br></br><br></br>

        <b>Price & Availability:</b><br></br>
        The Rolex GMT-Master II (Reference 126711CHNR) is available at ₹ 1,500,000. Prices may vary based on customization, region, and authorized dealers.
      </Typography>
    </Container>
  );
};

export default Rolex2;
