import { Box, FormControl, TextField, Typography } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { RccCancelButton, RccFormButton } from "../components/common/Buttons";
import { yupResolver } from '@hookform/resolvers/yup';
import PageContainer from "../components/common/PageContainer";
import { brand } from "../constants/brand";
import * as yup from "yup";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {

  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    companyName: yup.string().required("Required"),
    email: yup.string().required("Required"),
    subject: yup.string().required("Required"),
    message: yup.string().required("Required"),
  });
  
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data: any) => console.log(data);
  
  return (
    <PageContainer>
      <Box flexDirection="row" width={{ xs: 1, md: 1/2 }} alignItems="center" justifyContent="center" 
        style={{
          border: `1px solid #CCC`,
          borderRadius: brand.shape.borderRadius
        }}
      >
        <Box p={{ xs: 4, md: 10 }}>
          <form onSubmit={handleSubmit(onSubmit)}> 
            <ContactForm formControl={control} errors={errors}/>
          </form>
        </Box>
      </Box>
    </PageContainer>
  )
}

export default Contact;