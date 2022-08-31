import { useState } from "react";
import Image from "next/image";
import {
  FormHelperText,
  FormControl,
  Typography,
  TextField,
  Box,
  Button,
  InputAdornment,
  Modal,
  Grid,
  Checkbox,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "common.white",
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ open, CloseModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Modal open={open} onClose={CloseModal}>
      <Box sx={style}>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Sign in
        </Typography>
        <Grid sx={{ mb: 2 }}>
          <form>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                id="email"
                name="email"
                label="Email atau nomor telepon"
                variant="filled"
              />
              <FormHelperText>
                Please enter a valid email or phone number.
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ mb: 4 }} fullWidth>
              <TextField
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <Button onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText>
                Your password must contain between 4 and 60 characters.
              </FormHelperText>
            </FormControl>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Sign in
            </Button>
          </form>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 1 }}
        >
          <Box>
            <Checkbox />
            <Typography variant="caption">Remember me</Typography>
          </Box>
          <Typography variant="caption" component="a" href="#">
            Need Help ?
          </Typography>
        </Grid>
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Image
            src="/__images/facebook.png"
            height={20}
            width={20}
            layout="fixed"
            alt="Facebook Login"
          />
          <Typography variant="caption" component="a" href="#" sx={{ ml: 1 }}>
            Login with Facebook
          </Typography>
        </Grid>
        <Grid container>
          <Typography variant="body1" component="span">
            New to Netflix?
          </Typography>
          <Typography variant="body1" color="primary" component="a" href="#">
            &nbsp;Sign up now.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="caption">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Typography>
          <Typography variant="caption" color="primary" component="a" href="#">
            Learn more.
          </Typography>
        </Grid>
      </Box>
    </Modal>
  );
};

export default LoginModal;
