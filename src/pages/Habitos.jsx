import TopBar from "../components/TopBar/TopBar";
import HabitosContent from "../components/HabitosContent/HabitosContent";
import BottomBar from "../components/BottomBar/BottomBar";
import { useEffect } from "react";

export default function Habitos() {

    return (
        <>
            <TopBar />
            <HabitosContent />
            <BottomBar />
        </>
    )
}