import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import { Paper, Box, Stack, Typography } from '@mui/material';

// const data = [
//     {
//       "id": "2020-2024",
//       "data": [
//         {
//           "x": "2020-2021",
//           "y": 2.9
//         },
//         {
//           "x": "2021-2022",
//           "y": 3.3
//         },
//         {
//           "x": "2022-2023",
//           "y": 3.8
//         },
//         {
//           "x": "2023-2024",
//           "y": 3.7
//         }
//       ]
//     }
//   ];


const BarChartCGPA = (props) => {

  const cgpaData = Object.entries(props.studentCGPA).map(([semester, cgpa]) => ({
    x: `Semester-${semester}`,
    y: cgpa !== 0 ? cgpa : null
  }));

  // const data2 = [
  //   {
  //     x: "Semester-1",
  //     y: 2
  //   },
  //   {
  //     x: "Semester-2",
  //     y: 3.5
  //   },
  //   {
  //     x: "Semester-3",
  //     y: 3.66
  //   },
  //   {
  //     x: "Semester-4",
  //     y: 2.8
  //   }
  // ]

  const data = [
    {
      "id": "2020-2024",
      "data": cgpaData,
    }
  ];

  return (
    <Paper sx={{padding: "5px", borderRadius: '10px', height: '350px'}} elevation={8}>
        <Box sx={{
        marginLeft: 2.5,
        marginTop: 1,
      }}>
        <Stack direction="row">
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Semester Wise CGPA</Typography>
        </Stack>
      </Box>

        <ResponsiveLine
            colors={[ '#153E52' ]}
            enableArea={true}
            curve="step"
            data={data}
            margin={{ top: 10, right: 45, bottom: 90, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 0,
                max: 4,
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Semester',
                legendOffset: 36,
                legendPosition: 'middle',
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'CGPA',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={5}
            pointColor="#F39223"
            pointBorderWidth={1}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            // legends={[
            //     {
            //         anchor: 'top-left',
            //         direction: 'column',
            //         justify: false,
            //         translateX: 100,
            //         translateY: 0,
            //         itemsSpacing: 0,
            //         itemDirection: 'left-to-right',
            //         itemWidth: 80,
            //         itemHeight: 20,
            //         itemOpacity: 0.75,
            //         symbolSize: 12,
            //         symbolShape: 'circle',
            //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
            //         effects: [
            //             {
            //                 on: 'hover',
            //                 style: {
            //                     itemBackground: 'rgba(0, 0, 0, .03)',
            //                     itemOpacity: 1
            //                 }
            //             }
            //         ]
            //     }
            // ]}
        />
  </Paper>
  )
}

export default BarChartCGPA