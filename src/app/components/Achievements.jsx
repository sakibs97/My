"use client"
import React from 'react';
import CountUp from 'react-countup';

const achievementsList = [
    {
        metric: "Projects",
        value: 10,
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: 100000,
    },
    {
        metric: "Awards",
        value: 10,
    },
    {
        metric: "Years",
        value: 10,
    },
];

const Achievements = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
                {achievementsList.map((achievement, index) => (
                    <div className="flex flex-col items-center justify-center mx-4" key={index}>
                        <h2 className='text-white text-4xl font-bold flex flex-row'>
                            {achievement.prefix}
                            <CountUp
                                end={achievement.value}
                                duration={5}
                                separator=","
                                className="text-white text-4xl font-bold"
                            />
                            {achievement.postfix}
                        </h2>
                        <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
