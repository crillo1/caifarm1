import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BnbInput = styled("input")({
  fontSize: 25,
  fontWeight: 500,
  padding: "8px 30px 8px 20px",
  textAlign: "center",
  color: "#be4ce4e",
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
    <Box position="relative" style={{marginTop:"30px"}}>
      
      <Typography
        fontSize={25}
        position="absolute"
        top={9}
        right={18}
        fontWeight={400}
        color="#be4ce4"
        fontFamily={"sans-serif"}
      >
        <b>ECH amount</b>
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
