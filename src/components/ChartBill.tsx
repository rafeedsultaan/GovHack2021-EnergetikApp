import React from 'react';
import { VictoryAxis, VictoryStack, VictoryBar, VictoryChart } from 'victory';
import { BILL_DATA, LINE_TWO_COLOR } from '@govhack/constants';

class ChartBill extends React.Component {
  render() {
    const dataset = BILL_DATA.map(x => [
      {
        x: x.DATE.toLocaleString('default', {
          month: 'short',
          year: '2-digit',
        }),
        y: x.properties.BILL,
      },
    ]);
    return (
      <div>
        <VictoryChart height={300} width={400} domainPadding={{ x: 20, y: 10 }}>
          <VictoryStack colorScale={[LINE_TWO_COLOR]}>
            {dataset.map((data, i) => {
              return <VictoryBar data={data} key={i} />;
            })}
          </VictoryStack>
          <VictoryAxis
            style={{
              axisLabel: { fontSize: 10, padding: 0 },
              tickLabels: { fontSize: 10, padding: 4 },
            }}
            dependentAxis
            tickFormat={tick => `$${tick}`}
          />
          <VictoryAxis
            style={{
              axisLabel: { fontSize: 10, padding: 0 },
              tickLabels: { fontSize: 10, padding: 4 },
            }}
            tickFormat={BILL_DATA.flatMap(x =>
              x.DATE.toLocaleString('default', {
                month: 'short',
                year: '2-digit',
              })
            )}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default ChartBill;
