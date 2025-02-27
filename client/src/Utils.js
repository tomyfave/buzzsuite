import React from "react";
import namor from "namor";
import "./index.css";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    return {
        firstName: namor.generate({ words: 1, numbers: 0 }),
        account: namor.generate({ words: 1, numbers: 0 }),
        channel: namor.generate({ words: 1, numbers: 0 }),
        product: namor.generate({ words: 1, numbers: 0 }),
        username: namor.generate({ words: 1, numbers: 3 }),
        followers: Math.floor(Math.random() * 300000),
        cpm: Math.floor(Math.random() * 30),
        cpc: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? "relationship"
                : statusChance > 0.33 ? "complicated" : "single"
    };
};

export function makeData(len = 200) {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}


