import React from 'react'
import 'ant-design-pro/dist/ant-design-pro.css';
import { ChartCard, Field, MiniArea, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts';
import Trend from 'ant-design-pro/lib/Trend';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import { Row, Col, Icon, Tooltip } from 'antd';
import numeral from 'numeral';
import moment from 'moment';


const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}

class BarChart extends React.Component {
  render() {
    return (<div>
      <Row>
        <Col span={24}>
          <ChartCard title="Number of search users" total={numeral(8846).format('0,0')} contentHeight={134}>
            <NumberInfo subTitle={<span> Weekly visitor volume</span>} total={numeral(12321).format('0,0')} status="up" subTotal={17.1}/>
            <MiniArea line="line" height={45} data={visitData}/>
          </ChartCard>
        </Col>
        <Col span={24} style={{
            marginTop: 24
          }}>
          <ChartCard title="Visitor volume" action={<Tooltip title = "Indicators show" > <Icon type="info-circle-o"/></Tooltip>} total={numeral(8846).format('0,0')} footer={<Field label = "Daily visitor volume" value = {
              numeral(1234).format('0,0')
            } />} contentHeight={46}>
            <MiniBar height={46} data={visitData}/>
          </ChartCard>
        </Col>
        <Col span={24} style={{
            marginTop: 24
          }}>
          <ChartCard title="Online shopping conversion rate" action={<Tooltip title = "Indicators show" > <Icon type="info-circle-o"/></Tooltip>} total="78%" footer={<div > <span>
              Day-on-day
              <Trend flag="up" style={{
                  marginLeft: 8,
                  color: 'rgba(0,0,0,.85)'
                }}>12%</Trend>
            </span>
            <span style={{
                marginLeft: 16
              }}>
              Week-on-week
              <Trend flag="down" style={{
                  marginLeft: 8,
                  color: 'rgba(0,0,0,.85)'
                }}>11%</Trend>
            </span>
          </div>} contentHeight={46}>
            <MiniProgress percent={78} strokeWidth={8} target={80}/>
          </ChartCard>
        </Col>
      </Row>
    </div>);
  }
}


export default BarChart;
