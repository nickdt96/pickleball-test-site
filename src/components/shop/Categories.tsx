import {
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

interface CheckBoxCategories {
  name: string,
  value: string,
  checked: boolean,
}

const Categories = () => {

  const [checkedCategories, setCheckedCategories] = React.useState<CheckBoxCategories[]>();

  //TODO - extract the checked categories from the checkedCategories array and filter the results in the Graph API call to SHopify
  
  // update the checked status on the category
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedCategories(
      checkedCategories?.map((item) => 
        item.value === event.target.name 
        ? {...item, checked : event.target.checked} 
        : item
    ))
  }

  // build up the list of categories
  useEffect(() => {
    let checkOptions = []
    for (let i of categories) {
      let tmpCategory = {
        name: i.name,
        value: i.value,
        checked: false,
      }
      checkOptions.push(tmpCategory);
      for (let j of i.children) {
        tmpCategory = {
          name: j.name,
          value: j.value,
          checked: false,
        }
        checkOptions.push(tmpCategory);
      }
    }
    setCheckedCategories(checkOptions);
  },[])
  
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
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    name={`${data.value}`}
                  />
                }
                label={`${data.name}`}
              />
              {/* Children of main category*/}
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
            </>
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default Categories;
