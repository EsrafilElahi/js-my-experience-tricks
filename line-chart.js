import moment from 'moment-jalaali';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ report }) => {
  const days = [];
  moment.loadPersian({ dialect: 'persian-modern' });

  for (let day = moment().subtract(1, 'month'); day <= moment(); day.add(1, 'day')) {
    days.push(day.format('YYYY-MM-DD'));
  }

  const [datavalues, setDatavalues] = useState();
  useEffect(() => {
    const repvalues = report?.reduce((ret, val) => ({ ...ret, [val.date]: val.count }), {});
    setDatavalues(days?.map((item) => (repvalues ? repvalues[item] ?? 0 : 0)));
  }, [report]);

  console.log(report, datavalues);

  const data = {
    labels: days.map((day) => moment(day, 'YYYY-MM-DD').format('jDo jMMMM')),
    datasets: [
      {
        label: 'تعداد محصولات',
        data: datavalues,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {

      },
      y: {
        min: 0,
        suggestedMax: Math.max(Math.max(...(datavalues ?? [])), 10),
        step: 1,
      },
    },
  };

  return (
    <div className={`d-flex chart-styles`}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
