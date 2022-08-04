"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = require("../components/Button");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Example/Button',
    component: Button_1.Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button_1.Button {...args}/>;
exports.Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary.args = {
    label: 'Button',
    primary: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Button',
};
exports.Large = Template.bind({});
exports.Large.args = {
    label: 'Button',
    size: 'large',
};
exports.Small = Template.bind({});
exports.Small.args = {
    label: 'Button',
    size: 'small',
};
