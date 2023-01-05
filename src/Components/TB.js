import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import { useChecklist } from 'react-checklist';

const TB = () => {
  const data = [
    { _id: 1, label: '6 Fun size hershey bars or reeses' },
    { _id: 2, label: 'Peanut butter cups' },
    { _id: 3, label: '6 Smores mallows' },
  ]

  const { handleCheck, isCheckedAll, checkedItems } = useChecklist(data, {
    key: '_id',
    keyType: 'number',
  });
  
    return ( 
      <Tabs>
        <TabList className="tab">
          <Tab>Ingredients</Tab>
          <Tab>Instructions</Tab>
        </TabList>
        <TabPanel>
          <ul className='list'>
          {data.map((v, i) => (
            <li key={i}>
              <input
                type="checkbox"
                data-key={v._id}                  // 3
                onChange={handleCheck}            // 4
                checked={checkedItems.has(v._id)} // 5
                style={{marginRight: "0.75%"}}
              />
              <label>{v.label}</label>
            </li>
          ))}
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