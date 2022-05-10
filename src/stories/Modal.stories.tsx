import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "components";

export default {
    title: "Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const example = Template.bind({});