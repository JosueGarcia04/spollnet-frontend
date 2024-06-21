import React from'react'
import { SimplePieChart } from './principalChartsDashboard/simplePieChart';
export default function PrincipalStatisticInformationComponent(){
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Pre-vista de estadistica principal</h2>
            <SimplePieChart/>
        </div>
    );
}