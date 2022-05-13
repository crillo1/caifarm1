import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
// import { Button } from "bootstrap";
import logo from "../../assets/FullLogo.png";
import Connect from "./Connect";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 10,
    },
  },
}));

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="" width={"100%"} style={{ marginTop: -30 }} />
      <Connect responsive={false} />
      <Typography variant="h6" marginTop={-3} style={{color: "#febf33"}}>
      </Typography>
      <div>
        <Grid container direction="row" spacing={2} style={{width:"100%", display:"flex", justifyContent:"space-evenly"}}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            {/* <Button /*
              className="stake-button, staking-button"
              variant="contained"
              color="white"
              // onClick={() => {
              //   unStake(1);
              // }}
            > */}
              <span style={{fontWeight:"200", color:"white"}}>WHITEPAPER</span>
            {/* </Button> */}
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            {/* <Button /*
              className="stake-button, staking-button"
              variant="contained"
              color="white"
              // onClick={() => {
              //   unStake(1);
              // }}
            > */}
              <span style={{fontWeight:"200", color:"white"}}>AUDIT REPORT</span>
            {/* </Button> */}
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  );
}
