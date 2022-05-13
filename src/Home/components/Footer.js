import Grid from "@mui/material/Grid";

import { config } from "../../config";
import esIcon from "../assets/ESIcon.png";
import tgIcon from "../assets/TGIcon.png";
import twIcon from "../assets/TWIcon.png";

export default function Footer() {
  return (
    <Grid container justifyContent="right" spacing={1} marginTop={2}>
            <Grid item>
        <a href={config.scanLink} target="__blank">
          <img src={esIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href={config.scanLink} target="__blank">
          <img src={esIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://t.me/caimancoin" target="__blank">
          <img src={tgIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
      <Grid item>
        <a href="https://twitter.com/caiman_coin" target="__blank">
          <img src={twIcon} alt="" width={48} height={48} />
        </a>
      </Grid>
    </Grid>
  );
}
