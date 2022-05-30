import React from "react";
import Toggle  from "../components/toggle/toggle";


export default {
    title: "ToggleToggle",
    component: Toggle,
}

const ToggleToggle = (args) => <Toggle {...args} />;
export const Toggle_Toggle = ToggleToggle.bind({})
Toggle_Toggle.args={
    bgOn:'#20b7ff',
    bgOff:'#555',
    switchbg: 'linear-gradient(to top,#000, #555)',
    width : 50
}