import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@material-ui/core";
import { useForm } from "react-hook-form";
import PageContainer from "../components/common/PageContainer";
import ContactForm from "../components/contact/ContactForm";
import * as yup from "yup";

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
      <Box mb={6}>
        If you are a dealer interested in reselling cartridges from RCC Brass,
        please complete and send the application form below. Upon approval, you
        will be issued a login which will provide you with wholesale pricing in
        our online shop. If you have any questions about becoming a dealer,
        please contact us as follows: Email: jeff@rccbrass.com Phone: 806)
        329-3130
      </Box>
      <Box mb={9}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <ContactForm
            formControl={control}
            errors={errors}
            dealerForm={true}
          />
        </form>
      </Box>
    </PageContainer>
  );
};

export default Dealer;
