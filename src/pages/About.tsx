import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Link,
  Typography
} from "@material-ui/core";
import PageContainer from "../components/common/PageContainer";
import { saveAs } from "file-saver";
//import { SaveAltSharp } from "@material-ui/icons";
import pdfFile from "../assets/documents/wildcatorderform.pdf";
import { brand } from "../constants/brand";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import aboutImage from "../assets/images/about.png";
import AboutUs from "./AboutUs";

const About = () => {
  const handleDownloadOrderForm = () => {
    saveAs(pdfFile);
  };

  return (
    <PageContainer title="About">
      <Button onClick={() => handleDownloadOrderForm()}>Download</Button>
      <Box display="flex" flexDirection="row" mb={4}>
        <Box width={1/6} px={3}>
          <img
            style={{
              width: "100%"
            }}
            src={aboutImage}
            alt="About Us"
          />
        </Box>
        <Box width={5/6} mx={5}>
          <Typography variant="h3" gutterBottom>About Us</Typography>

          <Typography>
            The problem a lot of people have is finding quality brass for the
            caliber they shoot. We manufacture high-quality reloading brass
            cartridges for vintage, obsolete, hard to find, and wildcat
            calibers. All cartridges are made to SAAMI, CIP, or tolerances
            provided to us. <Link href="/about-us">Read More...</Link>
          </Typography>
        </Box>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          Services
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The services offered at RCC Brass are: We manufacture to SAAMI, CIP
            or customer specifications; We provide low volume runs of 50 pieces;
            We customize headstamps $50 setup with a 50 piece minimum; We
            manufacture wildcat cartridge. There is a $250 setup fee and a 100
            piece minimum; Wildcat test samples $50 for a 5 piece minimum; We
            provide test samples for SAAMI, CIP, vintage or obsolete pricing
            available upon request;
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          Traditional Brass
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The draw process has been used for cartridge manufacturing since the
            19th century and manufacturers have been able to develop this
            process to produce high volumes of brass cases. Draw cartridge
            manufactures have tested many different types of materials over the
            years and the best material for this process is a brass alloy with a
            mixture of 70% copper and 30% zinc. When brass is annealed at 250° C
            there is no visible change to the bonding of the grain structure,
            tensile strength, and elasticity. At 300° C, there is a microscopic
            change to the grain structure and at 350° the work hardness becomes
            softer and a fine grain structure can be seen. As temperatures
            increase the brass becomes fully annealed at 750° C and large
            crystals can be seen. Temperatures above this point will cause
            damage to the brass and at 800°C, the brass is burned and should be
            scrapped. When brass is cold-worked it hardens and done by bending,
            drawing, compressing, and so forth. This increases the tensile
            strength and decreases its elasticity. To accommodate today’s
            high-pressure cartridges brass must both have a high tensile
            strength to withstand pressure spikes and elasticity to seal the
            chamber from any gas blowback. The draw process begins using a brass
            cup that is annealed and cleaned to remove any scale build-up that
            might have occurred. During the first draw, the cup is pushed
            through a die with a punch and extruded to lengthen the cup. It has
            become work-hardened and has to be annealed and washed for the
            second draw. Typically a cartridge will go through 4 draws before it
            is ready to go to the next stage. The case head will be turned,
            primer pockets, flash holes, headstamps, and necks are done to
            complete the manufacturing process. When the neck is formed the
            cartridge is annealed again and is then polished for shipping.
            During each annealing, the temperature is reduced to work harden the
            case for higher tensile strength and elasticity. The final annealing
            is to the body of the case and is at a lower temperature, so it
            won’t affect the case head hardness. While the draw process is
            capable of mass production, it is not able to easily produce
            consistent case head hardness, case weight, case volume, and case
            concentricity. At RCC Brass™ we have taken those variables out of
            the manufacturing process as we have our C260 cartridge brass
            hammer-forged into a tight molecular grain structure with high
            tensile strength and 15% elasticity. We machine all our cases on CNC
            lathes and mills and our case weight, case volume, and our case
            concentricity are the best available in the industry. We don’t
            anneal the case head as it is hammer forged to a high tensile
            strength which gives us the same hardness for each case. Since we
            use CNC equipment to manufacture our reloading brass, case weight is
            nearly identical, the case volume is too, and our case concentricity
            is held to a 0.001”. Since we are not held back by the limitations
            of a draw system, we are able to use higher strength alloys to
            manufacture cartridges. Our new C272 brass alloy has a much higher
            tensile strength and tighter molecular grain structure than C260
            brass, without losing the needed elasticity. Test results have been
            very positive as we’ve had reports of increased in velocity and
            energy and lower shot deviations versus C260 drawn brass. But the
            test is what you can do with RCC Brass™ reloading brass products. At
            RCC We Make The Old New Again and Inspire Creativity
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          Our Brass
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            While the draw process is capable of mass production, it is not able
            to easily produce consistent case head hardness, case weight, case
            volume, and case concentricity. At RCC Brass® we have taken those
            variables out of the manufacturing process as we have our C272
            cartridge brass hammer-forged into a tight molecular grain structure
            with high tensile strength, high yield strength, and 15%
            malleability. We machine all our cases on CNC lathes and mills and
            our case weight, case volume, and our case concentricity are the
            best available in the industry. We do not anneal the case head as it
            is hammer forged to a high tensile strength which gives us the same
            hardness for each case. Since we use CNC equipment to manufacture
            our, case weight is nearly identical, the case volume is too, and
            our case concentricity is held to a 0.001”. Since we are not held
            back by the limitations of a draw system, we are able to use higher
            strength alloys to manufacture cartridges. Our new C272 brass alloy
            has a much higher tensile strength, a much higher yield strength,
            and a tighter molecular grain structure than C260 brass, without
            losing the needed malleability. Test results have been positive as
            we’ve had reports of increased in velocity and energy and lower shot
            deviations versus C260 drawn brass. But the test is what you can do
            with RCC Brass® reloading brass products. All our brass meets SAAMI
            and CIP pressure standards
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          Our Process
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our Process RCC manufactures all our brass cartridges on CNC lathes
            and mills out of our C272 solid bar stock. Our reloading brass
            cartridges are manufactured to SAAMI, CIP, or customer
            specifications. We have a large library of vintage drawing for
            customers seeking pre-SAAMI or CIP cartridges. Once an order is
            placed it is processed and goes into our production queue. Our
            CAD/CAM engineer will review the order and email a copy of the
            cartridge drawing for conformation. We ask our customers to review
            the drawing and submit any minor changes to the drawing. Once the
            information is confirmed the order will then go to our production
            floor for manufacturing. We Custom Fit brass to the chamber of your
            firearm. Our custom fit program will give you the headspace and
            chamber dimensions best suited for your firearm. Customers can send
            us fire formed brass, a chamber cast, or the firearm for the custom
            cartridge. We do Custom Headstamps too. We use our CNC mills to
            engrave headstamps. We are able to do text and some graphics too. We
            do Wildcats too. Send us a reamer drawing, or a dimensioned drawing
            and we will manufacture your wildcat cartridge. There is a one time
            set-up fee for all wildcats and a 100 piece minimum order.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </PageContainer>
  );
};

export default About;
