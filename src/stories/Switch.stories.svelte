<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf"
  import Switch from "@/lib/Switch.svelte"
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Components/Switch"
  component={Switch}
  argTypes={{
    active: {
      type: { name: "boolean", required: true },
    },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Switch {...args}>Slot</Switch>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Primary"
  args={{
    active: false,
  }}
/>
