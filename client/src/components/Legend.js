import React, { useState, setState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryPie, VictoryLegend, VictoryContainer } from 'victory';


const Legend=(props)=>{


    return(
        <div className="row">
        
            <div className="col-6 offset-3" style={{border: "1px solid lightgrey", borderRadius: "5px", marginTop:"10px"}}>
                <div  >
                    <VictoryLegend
                        title="Washington State Race Demographics"
                        centerTitle
                        height={50}
                        width={200}
                        itemsPerRow={3}
                        orientation="horizontal"
                        gutter={5}
                        colorScale={["tomato", "orange", "gold", "cyan", "navy", "purple", "green", "salmon", "blue" ]}
                        style={{ border: { stroke: "none" }, title: { fontSize: 8 }, labels: {fontSize:5} }}
                        data={[
                            {name:"White"}, 
                            {name:"Black"}, 
                            {name:"American Indian/Alaska Native"}, 
                            {name:"Asian"}, 
                            {name:"Pacific Islander"}, 
                            {name:"Other Race"}, 
                            {name:"Two+ Races"}, 
                            {name:"Two races w/ other race"}, 
                            {name:"Two+ races w/o other race"} 
                        ]}       
                            
                        />
                </div>
            </div>
        </div>
    )
}

export default Legend