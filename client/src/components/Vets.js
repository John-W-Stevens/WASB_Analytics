import React, { useState, setState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryPie, VictoryLegend, VictoryContainer, VictoryLabel } from 'victory';

const countyVetDemo=[
    {x:"Adams", y:0.03},
    {x:"Asotin", y:0.1},
    {x:"Benton", y:0.07},
    {x:"Chelan ", y:0.06},
    {x:"Clallam ", y:0.11},
    {x:"Clark", y:0.07},
    {x:"Columbia", y:0.11},
    {x:"Cowlitz", y:0.09},
    {x:"Douglas ", y:0.07},
    {x:"Ferry", y:0.11},
    {x:"Franklin ", y:0.04},
    {x:"Garfield", y:0.09},
    {x:"Grant", y:0.05},
    {x:"Grays Harbor", y:0.09},
    {x:"Island", y:0.17},
    {x:"Jefferson", y:0.12},
    {x:"King", y:0.05},
    {x:"Kitsap", y:0.14},
    {x:"Kittitas", y:0.06},
    {x:"Klickitat", y:0.09},
    {x:"Lewis", y:0.1},
    {x:"Lincoln", y:0.11},
    {x:"Mason", y:0.12},
    {x:"Okanogan ", y:0.08},
    {x:"Pacific", y:0.12},
    {x:"Pend Oreille", y:0.11},
    {x:"Pierce", y:0.11},
    {x:"San Juan", y:0.09},
    {x:"Skagit", y:0.08},
    {x:"Skamania", y:0.1},
    {x:"Snohomish", y:0.07},
    {x:"Spokane", y:0.09},
    {x:"Stevens", y:0.11},
    {x:"Thurston", y:0.12},
    {x:"Wahkiakum ", y:0.11},
    {x:"Walla Walla", y:0.07},
    {x:"Whatcom ", y:0.06},
    {x:"Whitman", y:0.04},
    {x:"Yakima", y:0.05},
  
  ]

  const stateVets=()=>{

    return(
        <div className="col-6 offset-3" style={{border: "1px solid lightgrey", borderRadius: "5px", marginTop:"10px"}}>
            <div style={{display:"inline-block"}}>           
                <VictoryChart>

                
                    <VictoryBar
                    height={800}
                    barWidth={2}
                    barRatio={0.1}
                                    
                    style={{
                        labels:{
                        fontSize: 15
                        }
                    }}                 
                    data={countyVetDemo}
                    labels={({ datum }) => datum.x}
                    labelComponent={<VictoryLabel angle={90}/>}                                          
                    
                    />
                    </VictoryChart>                                                        
                </div>
        </div>
    )

  }

  export default stateVets