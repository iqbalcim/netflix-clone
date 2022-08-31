import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "common.black", color: "grey.700" }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4}>
          <Typography sx={{ mb: 4 }}>
            Questions? Call 007-803-321-2130
          </Typography>
          <Grid container>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography variant="caption" component="a" href="#">
                  FAQ
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Investor Relations
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Way to Watch
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Corporate Information
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Only on Netflix
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography variant="caption" component="a" href="#">
                  Help Center
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Jobs
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Terms of Use
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Contact US
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography variant="caption" component="a" href="#">
                  Account
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Redeem Gift Cards
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Privacy
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Speed Test
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
              <Stack spacing={2}>
                <Typography variant="caption" component="a" href="#">
                  Media Center
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Buy Gift Cards
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Cookie Preferences
                </Typography>
                <Typography variant="caption" component="a" href="#">
                  Legal Notices
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ mb: 4 }}>
            <Select
              name="lang"
              variant="outlined"
              size="small"
              defaultValue="EN"
              sx={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "common.white",
                color: "common.white",
                "& .MuiSelect-icon": {
                  color: "common.white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="ID">Bahasa Indonesia</MenuItem>
              <MenuItem value="EN">English</MenuItem>
            </Select>
          </Box>

          <Typography variant="caption">Netflix Indonesia</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
