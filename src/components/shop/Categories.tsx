import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography
} from "@material-ui/core";
import React, { useEffect } from "react";
import { categories } from "../../constants/categories";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CheckBoxCategories {
  name: string;
  value: string;
  checked: boolean;
}

const Categories = ({changeCategories} : {changeCategories: (arg0: string) => void;}) => {
  const [checkedCategories, setCheckedCategories] =
    React.useState<CheckBoxCategories[]>();

  // build up the list of categories upon component load
  useEffect(() => {
    let checkOptions = [];
    for (let i of categories) {
      let tmpCategory = {
        name: i.name,
        value: i.value,
        checked: false
      };
      checkOptions.push(tmpCategory);
      for (let j of i.children) {
        tmpCategory = {
          name: j.name,
          value: j.value,
          checked: false
        };
        checkOptions.push(tmpCategory);
      }
    }
    setCheckedCategories(checkOptions);
  }, []);

  useEffect(() => {
    if (checkedCategories) {
      let selectedCategories = "";
      for(let i of checkedCategories) {
        if (i.checked === true) {
          if (selectedCategories === "") {
            selectedCategories += `${i.value}`;
          } else {
            selectedCategories += ` OR ${i.value} `;
          }
        }
      }
      changeCategories(selectedCategories);
    }
  },[checkedCategories])

  //TODO - extract the checked categories from the checkedCategories array and filter the results in the Graph API call to SHopify

  // update the checked status on the category
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedCategories(
      checkedCategories?.map((item) =>
        item.value === event.target.name
          ? { ...item, checked: event.target.checked }
          : item
      )
    );
    //changeCategories("");
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Filters</FormLabel>
      <Box my={3}>
        <Typography variant="body2">
          Select the list of calibers that you're interested in below, then
          press filter to get a customized list of cartridges based on your
          needs
        </Typography>
      </Box>
      <FormGroup>
        {categories.map((data, index) => {
          return (
            <>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{data.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Children of main category*/}
                  <Box display="flex" flexDirection="column">
                    {data.children.map((child: any, idx: number) => (
                      <Box ml={4}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChange}
                              name={`${child.value}`}
                            />
                          }
                          label={`${child.name}`}
                        />
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </>
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default Categories;
