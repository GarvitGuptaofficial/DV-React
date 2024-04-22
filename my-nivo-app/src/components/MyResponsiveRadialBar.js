import React from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';
const data=[
    {
      "id": "C#",
      "data": [
        {
            "x": "TLE",
            "y": 223
          },
        
          {
            "x": "Compilation Error",
            "y": 1123
          },
        {
            "x": "Accepted",
            "y": 2123
          },
          {
            "x": "Wrong Answer",
            "y": 2789
          }
        
      ]
    },
    {
      "id": "Java",
      "data": [
          {
            "x": "TLE",
            "y": 765
          },
          {
              "x": "Compilation Error",
              "y": 975
          },
          {
              "x": "Accepted",
              "y": 4271
            },
            {
                "x": "Wrong Answer",
                "y": 5582
              }
      ]
    },
    {
      "id": "Python",
      "data": [
          {
              "x": "TLE",
              "y": 3945
            },
            {
                "x": "Compilation Error",
                "y": 1022
            },
            {
                "x": "Accepted",
                "y": 6012
            },
            {
                "x": "Wrong Answer",
                "y": 7483
              }
      ]
    },
        {
      "id": "C++",
      "data": [
          
          {
              "x": "TLE",
              "y": 567
            },
            {
                "x": "Compilation Error",
                "y": 1222
            },
            {
              "x": "Accepted",
              "y": 12353
            },
            {
            "x": "Wrong Answer",
            "y": 7684
          }
      ]
    }
  ];
const MyResponsiveRadialBar = () => {
  var width_per = window.innerWidth > 500 ? '50%' : '100%';
  var temp_height = window.innerWidth > 500 ? '800px' : '300px';
  if (window.innerWidth>500 && window.innerWidth < 840)
  {
    temp_height = '300px';
    width_per='80%';
  }
  console.log("OOF",temp_height);
  return (
    <div 
    style={{
      width: width_per,
      margin: "0 auto",
      height: temp_height,
      backgroundColor: "transparent",
    }}
    >
  <ResponsiveRadialBar
    data={data}
    valueFormat=">-.2f"
    padding={0.35}
    margin={{ top: 40, right: 240, bottom: 40, left: 40 }}
    colors={{ scheme: 'category10' }}
    borderWidth={2}
    borderColor={{ theme: 'background' }}
    enableTracks={false}
    radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
    motionConfig={{
      mass: 50,
      tension: 170,
      friction: 26,
      clamp: false,
      precision: 0.01,
      velocity: 0,
    }}
    transitionMode="innerRadius"
    legends={[
      {
        anchor: 'right',
        direction: 'column',
        justify: false,
        translateX: +200,
        translateY: 0,
        itemsSpacing: 6,
        itemDirection: 'left-to-right',
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        symbolSize: 18,
        symbolShape: 'square',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
    </div>
);
};
export default MyResponsiveRadialBar;
