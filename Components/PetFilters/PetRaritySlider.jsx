import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import Common from "../../public/Pet/Common.gif";
import Uncommon from "../../public/Pet/Uncommon.gif";
import Rare from "../../public/Pet/Rare.gif";
import Legendary from "../../public/Pet/Legendary.gif";
import Mythic from "../../public/Pet/Mythic.gif";
import { Grid } from "@mui/material";

export default function PetRaritySlider({ setQueryRarity, clear }) {
  const [rarity, setRarity] = useState([0, 4]);
  const clearState = () => {
    setRarity([0, 4]);
  };
  clear(clearState);
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <label className="font-weight-bold">Rarity</label>
      <Slider
        getAriaLabel={(val) => {
          switch (val) {
            case 1:
              return "Uncommon";
            case 2:
              return "Rare";
            case 3:
              return "Legendary";
            case 4:
              return "Mythic";
            default:
              return `Common`;
          }
        }}
        valueLabelDisplay="auto"
        value={rarity}
        min={0}
        max={4}
        size="small"
        marks={[
          {
            value: 0,
            label: (
              <Image
                src={Common}
                layout={"fixed"}
                width={20}
                height={20}
                alt="Common"
              />
            ),
          },
          {
            value: 1,
            label: (
              <Image src={Uncommon} alt="Uncommon" width={23} height={23} />
            ),
          },
          {
            value: 2,
            label: <Image src={Rare} alt="Rare" width={23} height={23} />,
          },
          {
            value: 3,
            label: (
              <Image src={Legendary} alt="Legendary" width={24} height={23} />
            ),
          },
          {
            value: 4,
            label: (
              <Image
                src={Mythic}
                layout={"fixed"}
                width={22}
                height={25}
                alt="Mythic"
              />
            ),
          },
        ]}
        onChange={(e, val) => {
          setRarity(val);
        }}
        onChangeCommitted={(e, val) => {
          console.log(val);
          setQueryRarity(val);
        }}
        sx={{ color: "#0074D9" }}
        valueLabelFormat={(val) => {
          switch (val) {
            case 1:
              return "Uncommon";
            case 2:
              return "Rare";
            case 3:
              return "Legendary";
            case 4:
              return "Mythic";
            default:
              return `Common`;
          }
        }}
      />
    </Grid>
  );
}
