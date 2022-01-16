import 'antd/dist/antd.css';

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import {Row, Col, Tabs} from 'antd';

const { TabPane } = Tabs;

import Account from './assets/api/account.yaml'
import Category from './assets/api/category.yaml'
import Constant from './assets/api/constant.yaml'
import Event from './assets/api/event.yaml'
import Group from './assets/api/group.yaml'
import Process from './assets/api/process.yaml'

export default function App() {
  return (
      <Row style={{ padding: '0 1%' }}>
        <Col span={24}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Account" key="1">
              <SwaggerUI url={Account} />
            </TabPane>
            <TabPane tab="Category" key="2">
              <SwaggerUI url={Category} />
            </TabPane>
            <TabPane tab="Constant" key="3">
              <SwaggerUI url={Constant} />
            </TabPane>
            <TabPane tab="Event" key="4">
              <SwaggerUI url={Event} />
            </TabPane>
            <TabPane tab="Group" key="5">
              <SwaggerUI url={Group} />
            </TabPane>
            <TabPane tab="Process" key="6">
              <SwaggerUI url={Process} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
  );
}
