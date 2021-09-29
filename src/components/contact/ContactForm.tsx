import { Box, TextField, Typography } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { RccFormButton } from "../common/Buttons";

const ContactForm = ({
  formControl,
  errors,
  dealerForm = false
}: {
  formControl: any;
  errors: any;
  dealerForm?: boolean;
}) => {
  return (
    <>
      <Box width={1}>
        <Typography variant="h5" color="secondary">
          {dealerForm ? "Contact Us for Wholesale" : "Contact Us"}
        </Typography>
        <Box
          mb={3}
          mt={4}
          display="flex"
          flexDirection={dealerForm ? "row" : "column"}
          width={1}
        >
          <Box mr={2} width={dealerForm ? 1 / 2 : 1} mb={dealerForm ? 0 : 3}>
            <Controller
              name="firstName"
              control={formControl}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="first-name"
                  label="First Name"
                  variant="outlined"
                  error={errors?.firstName}
                  helperText={errors?.firstName?.message}
                />
              )}
            />
          </Box>
          <Box width={dealerForm ? 1 / 2 : 1}>
            <Controller
              name="lastName"
              control={formControl}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                  error={errors?.lastName}
                  helperText={errors?.lastName?.message}
                />
              )}
            />
          </Box>
        </Box>
        {dealerForm && (
          <>
            <Box mb={3}>
              <Controller
                name="companyName"
                control={formControl}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    id="company-name"
                    label="Company Name"
                    variant="outlined"
                    error={errors?.companyName}
                    helperText={errors?.companyName?.message}
                  />
                )}
              />
            </Box>
            <Box mb={3}>
              <Controller
                name="address"
                control={formControl}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    id="address"
                    label="Address"
                    variant="outlined"
                    error={errors?.address}
                    helperText={errors?.address?.message}
                  />
                )}
              />
            </Box>
            <Box
              //mb={3}
              //mt={4}
              display="flex"
              flexDirection={dealerForm ? "row" : "column"}
              width={1}
            >
              <Box
                mr={2}
                width={dealerForm ? 3 / 5 : 1}
                mb={dealerForm ? 0 : 3}
              >
                <Controller
                  name="city"
                  control={formControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="city"
                      label="City"
                      variant="outlined"
                      error={errors?.city}
                      helperText={errors?.city?.message}
                    />
                  )}
                />
              </Box>
              <Box mb={3} mr={2} width={1 / 5}>
                <Controller
                  name="state"
                  control={formControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="state"
                      label="State"
                      variant="outlined"
                      error={errors?.state}
                      helperText={errors?.state?.message}
                    />
                  )}
                />
              </Box>
              <Box mb={3} width={1 / 5}>
                <Controller
                  name="zipCode"
                  control={formControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="zipCode"
                      label="Zip Code"
                      variant="outlined"
                      error={errors?.zipCode}
                      helperText={errors?.zipCode?.message}
                    />
                  )}
                />
              </Box>
            </Box>
            <Box
              mb={3}
              //mt={4}
              display="flex"
              flexDirection={dealerForm ? "row" : "column"}
              width={1}
            >
              <Box
                mr={2}
                width={dealerForm ? 1 / 2 : 1}
                mb={dealerForm ? 0 : 3}
              >
                <Controller
                  name="phoneNumber"
                  control={formControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="phoneNumber"
                      label="Phone Number"
                      variant="outlined"
                      error={errors?.phoneNumber}
                      helperText={errors?.phoneNumber?.message}
                    />
                  )}
                />
              </Box>

              <Box
                //mr={2}
                width={dealerForm ? 1 / 2 : 1}
                mb={dealerForm ? 0 : 3}
              >
                <Controller
                  name="faxNumber"
                  control={formControl}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      id="faxNumber"
                      label="Fax Number"
                      variant="outlined"
                      error={errors?.faxNumber}
                      helperText={errors?.faxNumber?.message}
                    />
                  )}
                />
              </Box>
            </Box>
            <Box mb={3}>
              <Controller
                name="website"
                control={formControl}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    id="website"
                    label="Website"
                    variant="outlined"
                    error={errors?.website}
                    helperText={errors?.website?.message}
                  />
                )}
              />
            </Box>
          </>
        )}
        <Box mb={3}>
          <Controller
            name="email"
            control={formControl}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                error={errors?.email}
                helperText={errors?.email?.message}
              />
            )}
          />
        </Box>
        <Box mb={3}>
          <Controller
            name="subject"
            control={formControl}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                id="subject"
                label="Subject"
                variant="outlined"
                error={errors?.subject}
                helperText={errors?.subject?.message}
              />
            )}
          />
        </Box>
        <Box mb={3}>
          <Controller
            name="message"
            control={formControl}
            render={({ field }) => (
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
            )}
          />
        </Box>
        <Box display="flex" flexDirection="row" width={1}>
          <Box width={1 / 2} mr={1}>
            {/*<RccCancelButton>
                    Cancel
                    </RccCancelButton>
                    */}
          </Box>
          <Box width={1 / 2} ml={1}>
            <RccFormButton>Submit</RccFormButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
