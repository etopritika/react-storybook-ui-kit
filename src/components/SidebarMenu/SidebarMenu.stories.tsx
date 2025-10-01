import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SidebarMenu, { type MenuItem } from "./index";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
  parameters: { layout: "fullscreen" },
  argTypes: {
    width: { control: "text" },
    title: { control: "text" },
    closeOnNavigate: { control: "boolean" },
  },
  args: {
    title: "Navigation",
    width: 320,
    closeOnNavigate: true,
  },
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

// Demo data
const oneLevelItems: MenuItem[] = [
  { id: "home", label: "Home", href: "#" },
  { id: "profile", label: "Profile", href: "#" },
  { id: "settings", label: "Settings", href: "#" },
  { id: "logout", label: "Logout", onClick: () => console.log("Logout") },
];

const twoLevelItems: MenuItem[] = [
  { id: "dash", label: "Dashboard", href: "#" },
  {
    id: "projects",
    label: "Projects",
    children: [
      { id: "p-1", label: "Project Alpha", href: "#" },
      { id: "p-2", label: "Project Beta", href: "#" },
      {
        id: "p-arch",
        label: "Archived",
        children: [
          { id: "p-3", label: "2013-2018", href: "#" },
          { id: "p-4", label: "2019-2022", href: "#" },
        ],
      },
    ],
  },
  {
    id: "team",
    label: "Team",
    children: [
      { id: "t-1", label: "Members", href: "#" },
      { id: "t-2", label: "Invitations", href: "#" },
    ],
  },
  { id: "help", label: "Help & Support", href: "#" },
];

// Shared wrapper components (hooks live here, not in story render)
type CoreProps = Pick<
  React.ComponentProps<typeof SidebarMenu>,
  "title" | "width" | "closeOnNavigate"
>;

const SidebarDemo: React.FC<CoreProps & { items: MenuItem[] }> = ({
  items,
  title,
  width,
  closeOnNavigate,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div style={{ padding: 24 }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            cursor: "pointer",
          }}
        >
          Open Sidebar
        </button>
      </div>

      <SidebarMenu
        isOpen={open}
        onClose={() => setOpen(false)}
        items={items}
        title={title}
        width={width}
        closeOnNavigate={closeOnNavigate}
      />
    </>
  );
};

const WithDefaultsExpandedDemo: React.FC<CoreProps> = ({
  title,
  width,
  closeOnNavigate,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div style={{ padding: 24 }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #d1d5db",
            cursor: "pointer",
          }}
        >
          Open Sidebar (expanded)
        </button>
      </div>

      <SidebarMenu
        isOpen={open}
        onClose={() => setOpen(false)}
        items={twoLevelItems}
        title={title}
        width={width}
        closeOnNavigate={closeOnNavigate}
        initialExpandedIds={["projects", "p-arch"]}
      />
    </>
  );
};

// Stories (no hooks in render)
export const OneLevel: Story = {
  render: (args) => (
    <SidebarDemo
      items={oneLevelItems}
      title={args.title}
      width={args.width}
      closeOnNavigate={args.closeOnNavigate}
    />
  ),
};

export const TwoLevels: Story = {
  render: (args) => (
    <SidebarDemo
      items={twoLevelItems}
      title={args.title}
      width={args.width}
      closeOnNavigate={args.closeOnNavigate}
    />
  ),
};

export const WithDefaultsExpanded: Story = {
  render: (args) => (
    <WithDefaultsExpandedDemo
      title={args.title}
      width={args.width}
      closeOnNavigate={args.closeOnNavigate}
    />
  ),
};
