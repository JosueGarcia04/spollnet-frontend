import React from'react'
import { SimplePieChart } from './principalChartsDashboard/simplePieChart';
export default function PrincipalStatisticInformationComponent(){
    return (
        <div>
            <h2 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg">Pre-vista de estadistica principal</h2>
            <SimplePieChart/>
        </div>
    );
}