<<<<<<< Updated upstream
import React, { useState, setState, useEffect } from 'react';
=======
import React, { useState, setState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryPie } from 'victory';

const stateRaceDemo=[
  {x:"White", y:75},
  {x:"Black",  y:4},
  {x:"American Indian/Alaska Native",  y:1},
  {x:"Asian",  y:9},
  {x:"Native Hawaiian/Pacific Islander",  y:1},
  {x:"Other Race",  y:5},
  {x:"Two+ Races",  y:6},
  {x:"Two races w/ other race",  y:1},
  {x:"Two+ races w/o other race",  y:5}
]

const countyRaceDemo={
  
  "Kitsap":[
    {x:"White",	y:81},
    {x:"Black",	y:2},
    {x:"American Indian/Alaska Native ",	y:1},
    {x:"Asian",	y:5},
    {x:"Native Hawaiian /Pacific Islander ",	y:1},
    {x:"other race",	y:2},
    {x:"Two+ races",	y:8},
    {x:"Two races w/ other race",	y:1},
    {x:"Two+ races w/oome other race",	y:7}
  ],
  "King":[
    {x:"White",		y:65},
    {x:"Black",		y:6},
    {x:"American Indian/Alaska Native ",		y:1},
    {x:"Asian",	y:17},
    {x:"Native Hawaiian /Pacific Islander ",		y:1},
    {x:"other race",		y:4},
    {x:"Two+ races",		y:6},
    {x:"Two races w/ other race",		y:1},
    {x:"Two+ races w/oome other race",	y:6}
  ],
  "San Juan":[
    {x:"White",		y:90},
    {x:"Black",		y:0},
    {x:"American Indian/Alaska Native ",y:4},
    {x:"Asian",	y:1},
    {x:"Native Hawaiian /Pacific Islander ",	y:0},
    {x:"other race",	y:2},
    {x:"Two+ races",	y:3},
    {x:"Two races w/ other race",y:0},
    {x:"Two+ races w/oome other race",		y:2}


],
"Whitman":[
  {x:"White",	y:83},
  {x:"Black",	y:2},
  {x:"American Indian/Alaska Native ",y:0},
  {x:"Asian",	y:8},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race", y:2},
  {x:"Two+ races",y:4},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",y:4}
],
"Yakima":[
  {x:"White",y:78},
  {x:"Black",y:1},
  {x:"American Indian/Alaska Native ",y:4},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",y:0},
  {x:"other race",y:12},
  {x:"Two+ races",y:3},
  {x:"Two races w/ other race",y:1},
  {x:"Two+ races w/oome other race",y:3}
],
"Cowlitz":[
  {x:"White",y:89},
{x:"Black",y:1},
{x:"American Indian/Alaska Native ",y:1},
{x:"Asian",	y:1},
{x:"Native Hawaiian /Pacific Islander ",y:0},
{x:"other race",	y:2},
{x:"Two+ races",	y:5},
{x:"Two races w/ other race",		y:1},
{x:"Two+ races w/oome other race",	y:5}



],
"Ferry":[
  {x:"White",	y:76},
  {x:"Black",	y:0},
  {x:"American Indian/Alaska Native ",	y:13},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:8},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:8}


],
"Lewis":[
  {x:"White",	y:91},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:2},
  {x:"Two+ races",	y:5},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:4}
],
"Grays Harbor":[
  {x:"White",	y:88},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:4},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:4}

],
"Island":[
  {x:"White",	y:85},
  {x:"Black",	y:3},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:5},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:5},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:4}
  
],
"Wahkiakum":[
  {x:"White",	y:92},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:2},
  {x:"Two+ races",	y:2},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:1}
  

],
"Franklin":[
  {x:"White",	y:71},
  {x:"Black",	y:2},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:19},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:3}
  

],
"Grant":[
  {x:"White",	y:70},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:22},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:2},
  {x:"Two+ races w/oome other race",	y:2}
  

],
"Whatcom":[
  {x:"White",	y:84},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:3},
  {x:"Asian",	y:4},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:3},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:4}
  

],

"Okanogan":[
  {x:"White",	y:73},
  {x:"Black",	y:0},
  {x:"American Indian/Alaska Native ",	y:10},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:10},
  {x:"Two+ races",	y:5},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:5}
  
],
"Kittitas":[
  {x:"White",	y:89},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:1},
  {x:"other race",	y:4},
  {x:"Two+ races",	y:3},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:3}
  

],
"Benton":[
  {x:"White",	y:82},
  {x:"Black",	y:2},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:3},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:10},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:3}
  
],
"Columbia":[
  {x:"White",	y:91},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:0},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:1},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:2},
  {x:"Two+ races w/oome other race",	y:2}
  

],

"Asotin":[
  {x:"White",	y:93},
  {x:"Black",	y:0},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:3}
  
],


"Garfield":[
  {x:"White",	y:93},
  {x:"Black",	y:0},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:3}
  
],
"Mason":[
  {x:"White",	y:84},
  {x:"Black",	y:2},
  {x:"American Indian/Alaska Native ",	y:3},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:5},
  {x:"Two+ races",	y:5},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:5}
  
],
"Stevens":[
  {x:"White",	y:89},
  {x:"Black",	y:0},
  {x:"American Indian/Alaska Native ",	y:5},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:4}
  
],

"Spokane":[
  {x:"White",	y:88},
  {x:"Black",	y:2},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:1},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:5},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:4}
  

],
"Chelan":[
  {x:"White",	y:85},
  {x:"Black",	y:0},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:9},
  {x:"Two+ races",	y:3},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:3}
  

],
"Jefferson":[
  {x:"White",	y:91},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:2},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:3},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:3}
  

],
"Pacific":[
  {x:"White",	y:89},
  {x:"Black",	y:0},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:1},
  {x:"other race",	y:3},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:4}
  

],
"Skamania":[
  {x:"White",	y:93},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:2},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:2},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:2}
  

],
"Clallam":[
  {x:"White",	y:88},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:5},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:3}
  

],
"Klickitat":[
  {x:"White",	y:92},
  {x:"Black",	y:0},
  {x:"American Indian/Alaska Native ",	y:3},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:2},
  {x:"Two+ races",	y:2},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:2}
  
],

"Douglas":[
  {x:"White",	y:70},
  {x:"Black",	y:0},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:24},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:3}
  

],
"Pierce":[
  {x:"White",	y:73},
  {x:"Black",	y:7},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:6},
  {x:"Native Hawaiian /Pacific Islander ",	y:1},
  {x:"other race",	y:3},
  {x:"Two+ races",	y:8},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:8}
  

],
"Walla Walla":[
  {x:"White",	y:84},
  {x:"Black",	y:2},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:7},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:4}
  
],
"Snohomish":[
  {x:"White",	y:76},
  {x:"Black",	y:3},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:10},
  {x:"Native Hawaiian /Pacific Islander ",	y:1},
  {x:"other race",	y:3},
  {x:"Two+ races",	y:6},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:6}
  

],
"Thurston":[
  {x:"White",	y:82},
  {x:"Black",	y:3},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:6},
  {x:"Native Hawaiian /Pacific Islander ",	y:1},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:6},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:5}
  

],
"Clark":[
  {x:"White",	y:84},
  {x:"Black",	y:2},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:4},
  {x:"Native Hawaiian /Pacific Islander ",	y:1},
  {x:"other race",	y:3},
  {x:"Two+ races",	y:5},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:5}
  
],
"Adams":[
  {x:"White",	y:69},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:4},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:23},
  {x:"Two+ races",	y:2},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:1}
  

],
"Skagit":[
  {x:"White",	y:82},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:2},
  {x:"Asian",	y:2},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:9},
  {x:"Two+ races",	y:4},
  {x:"Two races w/ other race",	y:1},
  {x:"Two+ races w/oome other race",	y:3}
  

],
"Lincoln":[
  {x:"White",	y:94},
  {x:"Black",	y:1},
  {x:"American Indian/Alaska Native ",	y:1},
  {x:"Asian",	y:1},
  {x:"Native Hawaiian /Pacific Islander ",	y:0},
  {x:"other race",	y:1},
  {x:"Two+ races",	y:2},
  {x:"Two races w/ other race",	y:0},
  {x:"Two+ races w/oome other race",	y:2}
  

]

  }
  

  
  



const StateRace=(category,locationType) =>  {
    
      return (
        <div>
        
        {/* <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={[
            "White",
            "Black",
            "American Indian/Alaska Native",
            "Asian",
            "Native Hawaiian/Pacific Islander",
            "Other Race",
            "Two+ Races",
            "Two races w/ some other race",
            "Two+ races w/o other race"
          ]}
          style={{
            tickLabels:{fontSize:15,padding: 5}
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
        />
        
           
        
          <VictoryBar
            data={stateRaceDemo}
            x="race"
            y="fraction"
          /> */}
          
        
      {/* </VictoryChart> */}
       <VictoryPie
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        data={countyRaceDemo.Kitsap}
      />
      </div>
      );
    }
  
  
 export default StateRace
>>>>>>> Stashed changes
