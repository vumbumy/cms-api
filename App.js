import 'antd/dist/antd.css';

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import {Row, Col, Tabs} from 'antd';

const { TabPane } = Tabs;

import Account from './assets/api/account.yaml'
import Group from './assets/api/group.yaml'
import Content from './assets/api/content.yaml'
import Billing from './assets/api/billing.yaml'
import Category from './assets/api/category.yaml'
import Constant from './assets/api/constant.yaml'
import Log from './assets/api/log.yaml'
import Event from './assets/api/event.yaml'

export default function App() {
  return (
      <Row style={{ padding: '0 1%' }}>
        <Col span={24}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Account" key="1">
              <SwaggerUI url={Account} />
            </TabPane>
            <TabPane tab="Group" key="2">
              <SwaggerUI url={Group} />
            </TabPane>
            <TabPane tab="Category" key="3">
              <SwaggerUI url={Category} />
            </TabPane>
            <TabPane tab="Content" key="4">
              <SwaggerUI url={Content} />
            </TabPane>
            <TabPane tab="Billing" key="5">
              <SwaggerUI url={Billing} />
            </TabPane>
            <TabPane tab="Constant" key="6">
              <SwaggerUI url={Constant} />
            </TabPane>
            <TabPane tab="Log" key="7">
              <SwaggerUI url={Log} />
            </TabPane>
            <TabPane tab="Event" key="8">
              <SwaggerUI url={Event} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
  );
}
