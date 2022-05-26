import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BnbInput = styled("input")({
  fontSize: 25,
  fontWeight: 500,
  padding: "8px 30px 8px 20px",
  textAlign: "left",
  color: "purple",
  borderRadius: 5,
  border: "2px solid #f0f0f0",
  background: "#7efadf",
  width: "100%",
  outline: "none",
  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 30,
    MozAppearance: "textfield",
  },
});

export default function PriceInput({ value, max, onChange = () => {} }) {
  return (
    <Box position="relative" style={{marginTop:"20px"}}>
      
      <Typography
        fontSize={20}
        position="absolute"
        top={16}
        right={15}
        fontWeight={400}
        color="black"
        fontFamily={"monospace"}
      >
        <b>⬅️ Enter ECH/BUY amount</b>
      </Typography>

      <BnbInput
        type="number"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
}
