import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// ------ NEED WORK TO DO ------ //
const ReactTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Category 1</Tab>
        <Tab>Category 2</Tab>
        <Tab>Category 3</Tab>
      </TabList>

      <TabPanel>
        <h1>Any Content 1</h1>
      </TabPanel>
      <TabPanel>
        <h1>Any Content 2</h1>
      </TabPanel>
      <TabPanel>
        <h1>Any Content 3</h1>
      </TabPanel>
    </Tabs>
  );
};

export default ReactTab;
