import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import treasuryImg from "../../assets/treasury.png"
import profitImg from "../../assets/profit.png"
import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "rgb(255 252 248)",
  marginBottom: 10,
});

const nutritionFacts = [
  {
    label: "Daily Return",
    value: 10,
  },
  {
    label: "APR",
    value: "3,650",
  },
  {
    label: "Dev Fee",
    value: 4.5, 
  },
];

export default function ContractInfo() {
  return (
    <div >
      <div style={{display: "flex"}}>
        <img src={treasuryImg}></img>
        <div>
          <h5>Contract balance</h5>
          <h6>2000 AVAX</h6>
        </div>
      </div>
      
    </div>
  );
}
