import { Box, FormControl, TextField, Typography } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { RccCancelButton, RccFormButton } from "../components/common/Buttons";
import { yupResolver } from '@hookform/resolvers/yup';
import PageContainer from "../components/common/PageContainer";
import { brand } from "../constants/brand";
import * as yup from "yup";

const Contact = () => {

  const validationSchema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
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
      <Box flexDirection="row" width={ 1 / 2} alignItems="center" justifyContent="center" 
        style={{
          border: `1px solid #CCC`,
          borderRadius: brand.shape.borderRadius
        }}
      >
        <Box p={10}>
          <form onSubmit={handleSubmit(onSubmit)}> 
            <Typography variant="h5" color="secondary">
              Contact Us
            </Typography>
            <Box mb={3} mt={4}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => 
                  <TextField
                    {...field}
                    fullWidth
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    error={errors?.firstName}
                    helperText={errors?.firstName?.message}
                  />
                }
              />
            </Box>
            <Box mb={3}>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => 
                  <TextField
                    {...field}
                    fullWidth
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    error={errors?.lastName}
                    helperText={errors?.lastName?.message}
                  />
                }
              />
            </Box>
            <Box mb={3}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => 
                  <TextField
                    {...field}
                    fullWidth
                    id="email"
                    label="Email"
                    variant="outlined"
                    error={errors?.email}
                    helperText={errors?.email?.message}
                  />
                }
              />
            </Box>
            <Box mb={3}>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => 
                  <TextField
                    {...field}
                    fullWidth
                    id="subject"
                    label="Subject"
                    variant="outlined"
                    error={errors?.subject}
                    helperText={errors?.subject?.message}
                  />
                }
              />
            </Box>
            <Box mb={3}>
              <Controller
                name="message"
                control={control}
                render={({ field }) => 
                  <TextField
                    {...field}
                    fullWidth
                    id="message"
                    label="Message"
                    variant="outlined"
                    error={errors?.message}
                    helperText={errors?.message?.message}
                    multiline
                    rows={6}
                  />
                }
              />
            </Box>
            <Box display="flex" flexDirection="row" width={1}>
              <Box width={1/2} mr={1}>
                {/*<RccCancelButton>
                  Cancel
                </RccCancelButton>
                */}
              </Box>
              <Box width={1/2} ml={1}>
                <RccFormButton>
                  Submit
                </RccFormButton>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </PageContainer>
  )
}

export default Contact;