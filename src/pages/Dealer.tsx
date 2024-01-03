import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import PageContainer from "../components/common/PageContainer";
import ContactForm from "../components/contact/ContactForm";
import * as yup from "yup";
import { brand } from "../constants/brand";

const Dealer = () => {
  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().required("Required"),
    subject: yup.string().required("Required"),
    message: yup.string().required("Required")
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <PageContainer>
      <Grid container>
        <Grid xs={12} md={5}>
          <Box mb={6}>
            <Typography variant="h5">
              Interested in Reselling RCC Brass Cartridges?
            </Typography>
            <Typography variant="body1">
              Please complete and send the application form. Upon approval, you
              will be issued a login which will provide you with wholesale
              pricing in our online shop. <br />
              <br /> If you have any questions about becoming a dealer, please
              contact us as follows: <br />
              <br />
              Email: <a href="mailto: test@test.com">test@test.com</a>
              <br />
              Phone: <a href="tel:+19999999999">(806) 111-1111</a>
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} md={7}>
          <Box
            mb={9}
            style={{
              border: `1px solid #CCC`,
              borderRadius: brand.shape.borderRadius
            }}
          >
            <Box p={{ xs: 4, md: 10 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {" "}
                <ContactForm
                  formControl={control}
                  errors={errors}
                  dealerForm={true}
                />
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Dealer;
