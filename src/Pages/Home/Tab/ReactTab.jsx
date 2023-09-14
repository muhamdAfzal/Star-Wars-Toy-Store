import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// ------ NO PRODUCTS INPUTTED YET!!! ------ //
const ReactTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Category 1</Tab>
        <Tab>Category 2</Tab>
        <Tab>Category 3</Tab>
      </TabList>

      <TabPanel>
        <Tabs>
          <TabList>
            <Tab>Sub-Category 1</Tab>
            <Tab>Sub-Category 2</Tab>
            <Tab>Sub-Category 3</Tab>
          </TabList>
          <TabPanel>
            <h1>Headline of 'Sub-category 1'</h1>
            <p>some info</p>
          </TabPanel>
          <TabPanel>
            <h1>Headline of 'Sub-category 2'</h1>
            <p>some info</p>
          </TabPanel>
          <TabPanel>
            <h1>Headline of 'Sub-category 3'</h1>
            <p>some info</p>
          </TabPanel>
        </Tabs>
      </TabPanel>
      <TabPanel>
        <Tabs>
          <TabList>
            <Tab>Sub-Category 1</Tab>
            <Tab>Sub-Category 2</Tab>
            <Tab>Sub-Category 3</Tab>
          </TabList>
          <TabPanel>
            <h1>Headline of 'Sub-category 1'</h1>
            <p>some info</p>
          </TabPanel>
          <TabPanel>
            <h1>Headline of 'Sub-category 2'</h1>
            <p>some info</p>
          </TabPanel>
          <TabPanel>
            <h1>Headline of 'Sub-category 3'</h1>
            <p>some info</p>
          </TabPanel>
        </Tabs>
      </TabPanel>
      <TabPanel>
        <Tabs>
          <TabList>
            <Tab>Sub-Category 1</Tab>
            <Tab>Sub-Category 2</Tab>
            <Tab>Sub-Category 3</Tab>
          </TabList>
          <TabPanel>
            <h1>Headline of 'Sub-category 1'</h1>
            <p>some info</p>
          </TabPanel>
          <TabPanel>
            <h1>Headline of 'Sub-category 2'</h1>
            <p>some info</p>
          </TabPanel>
          <TabPanel>
            <h1>Headline of 'Sub-category 3'</h1>
            <p>some info</p>
          </TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};

export default ReactTab;
