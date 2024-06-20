import React from'react'
import SimpleBarChart from './principalChartsDashboard/simpleBarChart';
import { SimplePieChart } from './principalChartsDashboard/simplePieChart';
export default function PrincipalStatisticInformationComponent(){
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Pre-vista de estadisticas</h2>
            <SimpleBarChart/>
            <SimplePieChart/>
        </div>
    );
}