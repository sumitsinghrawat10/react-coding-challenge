import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import A from './A';
import B from './B';
import C from './C';
import D from './D';
export default function App() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };




  return (
    <div style={{  padding:"5rem 10rem" }} >
      <Typography variant="h5" align="center" >React Coding Interview Challenge</Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"

        >
          <Typography variant="h6" >
          1. Write a functional component that allows a user to enter ratings on the five-star system.The component should initially display five empty stars in a row. When the user hovers over a star, that star as well as all the stars that come before it in the row should become filled 
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
          <A/>
          </Typography>
              </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography  variant="h6"> 2. Write a functional component that allows a user to click button and image will be dispaly </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
         <B/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography  variant="h6">
           3. Add value through input element and after that there will be <strong>delete</strong> option too.
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <C/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h6">4.  Write a functional component that allows a user to blur image with slider</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <D/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
