'use client'

import { useState, useEffect } from 'react';
import Head from 'next/head';

interface pokeType {
    name: String,
    attackWords: String,
    defendWords: String,
    color: String,
}

export default function Home() {

    const types: (0 | 1 | 2 | 3)[][] = [
        [2,2,2,2,2,2,2,2,2,2,2,2,1,0,2,2,1,2],
        [2,1,1,2,3,3,2,2,2,2,2,3,1,2,1,2,3,2],
        [2,3,1,2,1,2,2,2,3,2,2,2,3,2,1,2,2,2],
        [2,2,3,1,1,2,2,2,0,3,2,2,2,2,1,2,2,2],
        [2,1,3,2,1,2,2,1,3,1,2,1,3,2,1,2,1,2],
        [2,1,1,2,3,1,2,2,3,3,2,2,2,2,3,2,1,2],
        [3,2,2,2,2,3,2,1,2,1,1,1,3,0,2,3,3,1],
        [2,2,2,2,3,2,2,1,1,2,2,2,1,1,2,2,0,3],
        [2,3,2,3,1,2,2,3,2,0,2,1,3,2,2,2,3,2],
        [2,2,2,1,3,2,3,2,2,2,2,3,1,2,2,2,1,2],
        [2,2,2,2,2,2,3,3,2,2,1,2,2,2,2,0,1,2],
        [2,1,2,2,3,2,1,1,2,1,3,2,2,1,2,3,1,1],
        [2,3,2,2,2,3,1,2,1,3,2,3,2,2,2,2,1,2],
        [0,2,2,2,2,2,2,2,2,2,3,2,2,3,2,1,2,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,1,0],
        [2,2,2,2,2,2,1,2,2,2,3,2,2,3,2,1,2,1],
        [2,1,1,1,2,3,2,2,2,2,2,2,3,2,2,2,1,3],
        [2,1,2,2,2,2,3,1,2,2,2,2,2,2,3,3,1,2],
    ];
    const names: pokeType[] = [
        { name: "normal", attackWords: "your average joe defeat", defendWords: "your average joe", color: "bg-normal" },
        { name: "fire", attackWords: "you burn", defendWords: "a fire", color: "bg-fire" },
        { name: "water", attackWords: "you soak", defendWords: "water", color: "bg-water" },
        { name: "electric", attackWords: "you zap", defendWords: "electricity", color: "bg-electric" },
        { name: "grass", attackWords: "you grass", defendWords: "grass", color: "bg-grass" },
        { name: "ice", attackWords: "you freeze", defendWords: "ice", color: "bg-ice" },
        { name: "fighting", attackWords: "you fight", defendWords: "a fighter", color: "bg-fighting" },
        { name: "poison", attackWords: "you poison", defendWords: "poison", color: "bg-poison" },
        { name: "ground", attackWords: "you ground", defendWords: "the ground", color: "bg-ground" },
        { name: "flying", attackWords: "you fly", defendWords: "a flier", color: "bg-flying" },
        { name: "psychic", attackWords: "you psychic", defendWords: "a psychic", color: "bg-psychic" },
        { name: "bug", attackWords: "you bug", defendWords: "a bug", color: "bg-bug" },
        { name: "rock", attackWords: "you rock", defendWords: "a rock", color: "bg-rock" },
        { name: "ghost", attackWords: "you ghost", defendWords: "a ghost", color: "bg-ghost" },
        { name: "dragon", attackWords: "you drag", defendWords: "a dragon", color: "bg-dragon" },
        { name: "dark", attackWords: "you dark", defendWords: "a shadow", color: "bg-dark" },
        { name: "steel", attackWords: "you steel", defendWords: "steel", color: "bg-steel" },
        { name: "fairy", attackWords: "you fairy", defendWords: "a fairy", color: "bg-fairy" },
    ];
    const prevWordsMap: {[key: number]: String} = {
        0: "no effect",
        1: "weak",
        2: "normal",
        3: "strong",
    };

    const [attacker, setAttacker] = useState(0);
    const [defender, setDefender] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [showPrevious, setShowPrevious] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const lsCorrect = parseInt(localStorage.getItem("correct") || "0");
        const lsTotal = parseInt(localStorage.getItem("total") || "0");
        setCorrect(lsCorrect);
        setTotal(lsTotal);
        switchTypes();
    }, [])

    const switchTypes = () => {
        setAttacker(Math.floor(Math.random() * types.length));
        setDefender(Math.floor(Math.random() * types.length));
    }

    const handleSubmit = (choice: number) => {
        if (choice === types[attacker][defender]) {
            setCorrect(correct + 1);
            setShowPrevious(false);
            localStorage.setItem("correct", "" + (correct + 1));
        } else {
            setShowPrevious(true);
            setTimeout(() => {
                setShowPrevious(false);
            }, 2000);
        };
        setTotal(total + 1);
        setPrevious(types[attacker][defender]);
        localStorage.setItem("total", "" + (total + 1));
        switchTypes();
    }

    const resetScore = () => {
        setCorrect(0);
        setTotal(0);
        localStorage.setItem("correct", "0");
        localStorage.setItem("total", "0")
    }

    return (<>
        <Head>
            <title>Pokemon Type Trainer</title>
        </Head>
        <main className="container h-screen mx-auto pt-12 flex flex-col gap-4 items-center">
            <p className="text-5xl font-bold">
                Funny Pokemon type practice
            </p>
            <div className="h-full flex flex-col gap-4 items-center justify-center pb-48">
                <div className="flex items-center gap-4 text-3xl">
                    <p className={"px-3 py-2 rounded-lg text-white bg-" + names[attacker].name}>
                        {names[attacker].name.toUpperCase()}
                    </p>
                    <p className="font-bold">VS</p>
                    <p className={"px-3 py-2 rounded-lg text-white bg-" + names[defender].name}>
                        {names[defender].name.toUpperCase()}
                    </p>
                </div>
                <p className="text-xl">
                    {"Can " + names[attacker].attackWords + " " + names[defender].defendWords + "?"}
                </p>
                <div className="flex gap-2 mt-8">
                    <button
                        onClick={() => handleSubmit(1)}
                        className="bg-red-300 hover:bg-red-400 rounded-lg duration-200 outline outline-2 outline-gray-500 p-3"
                    >
                        Weak
                    </button>
                    <button
                        onClick={() => handleSubmit(2)}
                        className="bg-gray-200 hover:bg-gray-300 rounded-lg duration-200 outline outline-2 outline-gray-500 p-3"
                    >
                        Normal
                    </button>
                    <button
                        onClick={() => handleSubmit(3)}
                        className="bg-green-300 hover:bg-green-400 rounded-lg duration-200 outline outline-2 outline-gray-500 p-3"
                    >
                        Strong
                    </button>
                    <button
                        onClick={() => handleSubmit(0)}
                        className="bg-gray-700 hover:bg-gray-800 rounded-lg duration-200 text-white outline outline-2 outline-gray-500 p-3"
                    >
                        No effect
                    </button>
                </div>
                <div className="h-8">
                    <p className="text-lg text-red-500" hidden={!showPrevious}>
                        {prevWordsMap[previous]}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-3xl pt-6 font-mono">
                    <p>{correct}</p>
                    <p>/</p>
                    <p>{total}</p>
                    <button
                        onClick={() => resetScore()}
                        className="ml-2 px-2 py-1 rounded-lg bg-gray-300 hover:bg-red-400 hover:text-white duration-200 text-sm font-bold font-sans"
                    >
                        RESET
                    </button>
                </div>
                <p className="text-lg">
                    ({total === 0 ? "0.0" : (100 * correct / total).toFixed(1)}%)
                </p>
            </div>
        </main>
    </>)
}

