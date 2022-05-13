import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "rgb(251 241 225)",
});

const Input = styled("input")(({ theme }) => ({
  fontSize: 16,
  fontWeight: 300,
  padding: "5px 20px",
  marginRight: "10px",
  borderRadius: "5px",
  border: "2px solid #ffffff",
  backgroundColor: "#7efadf",
  width: "100%",
  outline: "none",
  // color: theme.palette.primary.main,
  color: "black",
  maxWidth:"85%"
}));

const copyfunc = async (text) => {
    try {
      const toCopy = text;
      await navigator.clipboard.writeText(toCopy);
      console.log('Text or Page URL copied');
    }
    catch (err) {
      console.error('Failed to copy: ', err);
    }
}

export default function ReferralLink({ address }) {
  const link = `${window.origin}?ref=${address}`;

  return (
    <div className="referral">
      <h1>Referral Link</h1>
      <p><h5>Earn 11% of the ECH used by your referral to buy and grill fish</h5></p>
      <div class="refWrapper">
        <Input value={address ? link : ""} readOnly />
        <div 
          class="copyButton"
          onClick={e => copyfunc(address ? link : "")}
          >
            <h4>COPY</h4>
        </div>
      </div>

      {/* <Typography
        textAlign="center"
        variant="body2"
        marginTop={2}
        paddingX={3}
        color="#e58f0e"
      >
        Earn 12% of the BNB used to bake beans from anyone who uses your
        referral link
      </Typography> */}
    </div>
  );
}
