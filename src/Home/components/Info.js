import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import InfoICON from "../../assets/InfoICON.png"

import { styled } from "@mui/system";

const CardWrapper = styled(Card)({
  background: "rgb(251 241 225)",
});

const Input = styled("input")(({ theme }) => ({
  fontSize: 25,
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

export default function Info({ address }) {
  const link = `${window.origin}?ref=${address}`;

  return (
    <div className="info">
        <a href="https://caimancoin.com/wp-content/uploads/2022/05/cai.pdf" target="__blank">
          <img src={InfoICON} alt="" width={48} height={48} />
          <p><h1>CLICK HERE FOR WHITEPAPER</h1></p>
        </a>
      <div class="refWrapper">
    
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
