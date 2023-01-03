import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TB = () => {
    return ( 
      <Tabs>
        <TabList className="tab">
          <Tab>Ingredients</Tab>
          <Tab>Instructions</Tab>
        </TabList>
        <TabPanel>
          <ul className='list'>
            <li>6 Fun size hershey bars or reese's</li>
            <li>Peanut butter cups</li>
            <li>6 S'mores mallows</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <ol className='list1'>
            <li>Preheat the broiler.</li>
            <li>Assemble the bottom half of the s'mores on a baking sheet by layering half a graham cracker, chocolate, and marshmallow.</li>
            <li>Place the baking sheet under the preheated broiler. Leave the oven door open a crack so you can see the marshmallow. It literally only takes a few seconds to toast the marshmallows, so stay close by and watch until they reach the desired level of toasting.</li>
            <li>Remove and top with remaining graham cracker halves and enjoy!</li>
          </ol>
        </TabPanel>
      </Tabs>
     );
}
 
export default TB;