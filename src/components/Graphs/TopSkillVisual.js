import React from 'react';
import { Paper, Box, Stack, Typography } from '@mui/material';
import { ResponsiveRadialBar } from '@nivo/radial-bar'

const TopSkillVisual = (props) => {

  function capatalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

  function convertData(skill) {
    let result = [];
    for (let skillName in skill) {
      let skillData = {
        id: capatalize(skillName),
        data: []
      };
      for (let type in skill[skillName]) {
        skillData.data.push({
          x: capatalize(type),
          y: Math.round((skill[skillName][type] + Number.EPSILON) * 100) / 100
        });
      }
      result.push(skillData);
    }
    return result;
  };

  const item = convertData(props.kpi);
  // const data = [
  //   {
  //     "id": "Frontend",
  //     "data": [
  //       {
  //         "x": "Cognitive",
  //         "y": 25
  //       },
  //       {
  //         "x": "Affective",
  //         "y": 12
  //       },
  //       {
  //         "x": "Psychomotor",
  //         "y": 35
  //       }
  //     ]
  //   },
  //   {
  //     "id": "Backend",
  //     "data": [
  //       {
  //         "x": "Cognitive",
  //         "y": 20
  //       },
  //       {
  //         "x": "Affective",
  //         "y": 20
  //       },
  //       {
  //         "x": "Psychomotor",
  //         "y": 35
  //       }
  //     ]
  //   },
  //   {
  //     "id": "Cyber Security",
  //     "data": [
  //       {
  //         "x": "Cognitive",
  //         "y": 23
  //       },
  //       {
  //         "x": "Affective",
  //         "y": 19
  //       },
  //       {
  //         "x": "Psychomotor",
  //         "y": 40
  //       }
  //     ]
  //   }
  // ];

  return (
    <Paper sx={{padding: "5px", borderRadius: '10px', height: '300px'}} elevation={8}>
        <Box sx={{
        marginLeft: 2.5,
        marginTop: 1,
      }}>
        <Stack direction="row">
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Top Skill</Typography>
        </Stack>
      </Box>

      <ResponsiveRadialBar
        colors={[ 'rgba(21, 62, 82, 0.8)', 'rgba(243, 146, 35, 0.9)', 'rgba(37, 108, 143, 0.8'  ]}
        data={item}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 25, right: 30, bottom: 95, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        legends={[
            {
                anchor: 'right',
                direction: 'row',
                justify: false,
                translateX: -30,
                translateY: 132,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />


        
  </Paper>
  )
}

export default TopSkillVisual